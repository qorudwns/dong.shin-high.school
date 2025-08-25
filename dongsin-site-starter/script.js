const $ = (q, el=document) => el.querySelector(q);

// Year
$('#year').textContent = new Date().getFullYear();

// Mobile menu
const menuBtn = $('#menuBtn');
const menu = $('#menu');
menuBtn?.addEventListener('click', () => {
  const open = menuBtn.getAttribute('aria-expanded') === 'true';
  menuBtn.setAttribute('aria-expanded', String(!open));
  menu.style.display = open ? 'none' : 'block';
});

// Dark mode
const modeBtn = $('#modeBtn');
const STORAGE_KEY = 'dongsin-mode';
const applyMode = (mode) => {
  document.documentElement.style.colorScheme = mode;
  document.body.dataset.theme = mode;
  modeBtn?.setAttribute('aria-pressed', String(mode === 'dark'));
};
const saved = localStorage.getItem(STORAGE_KEY);
if(saved){ applyMode(saved); }
modeBtn?.addEventListener('click', () => {
  const next = (document.body.dataset.theme === 'dark') ? 'light' : 'dark';
  applyMode(next);
  localStorage.setItem(STORAGE_KEY, next);
});

// News feed (static JSON demo)
fetch('news.json?d=2025-08-25')
  .then(r => r.ok ? r.json() : [])
  .then(list => {
    const wrap = $('#newsList');
    if(!wrap) return;
    if(!list.length) {
      wrap.innerHTML = '<div class="news-item"><div>공지 준비중입니다.</div><time>2025-08-25</time></div>';
      return;
    }
    wrap.innerHTML = list.map(n => `
      <div class="news-item">
        <div><a href="${n.url || '#'}">${n.title}</a></div>
        <time datetime="${n.date}">${n.date}</time>
      </div>`).join('');
  })
  .catch(() => {});

// Form validation + shortcut
const form = $('#contactForm');
form?.addEventListener('submit', (e)=>{
  e.preventDefault();
  const fd = new FormData(form);
  const data = Object.fromEntries(fd.entries());
  const ok = data.name && data.email && data.message && /.+@.+\..+/.test(data.email);
  if(!ok){ alert('필수 항목을 올바르게 입력해주세요.'); return; }
  alert('문의가 임시로 저장되었습니다. (실제 전송은 서버 연동 필요)');
  form.reset();
});
document.addEventListener('keydown', (e)=>{
  if((e.ctrlKey||e.metaKey) && e.key.toLowerCase()==='enter'){
    form?.dispatchEvent(new Event('submit', {cancelable:true,bubbles:true}));
  }
});
