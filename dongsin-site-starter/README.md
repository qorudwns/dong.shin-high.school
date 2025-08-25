# Gwangju Dongsin High — Deploy-ready Site (v2)

- 정적 사이트 (GitHub Pages/Netlify/Vercel 호환)
- 라이트/다크 모드, 접근성(스킵 링크/ARIA), 반응형 레이아웃
- 공지(news.json) 로드 데모 포함

## 파일 구성
- `index.html` — 메인 페이지
- `styles.css` — 스타일(테마·레이아웃)
- `script.js` — 상호작용(메뉴, 다크모드, 폼 검증, 공지 로드)
- `news.json` — 공지 데모 데이터
- `assets/favicon.svg` — 파비콘
- `manifest.webmanifest`, `robots.txt`, `sitemap.xml`, `404.html`

## 배포 요약
1. 저장소 생성 후 모든 파일 업로드
2. **GitHub → Settings → Pages**: Branch `main` / **root** 선택
3. 발급 URL 접속 (`https://USERNAME.github.io/REPO/`)
