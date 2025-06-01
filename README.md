# 🌟 MinChur Gatsby Blog

TypeScript와 Contentful을 활용한 현대적인 개인 블로그입니다. Gatsby 기반으로 제작되었으며, 보안과 성능, 접근성을 중시한 블로그 플랫폼입니다.

## 🚀 주요 기능

- ⚡ **빠른 성능**: Gatsby의 정적 사이트 생성과 이미지 최적화
- 🔒 **보안 강화**: CSP, XSS 방지, 입력 검증 등 다층 보안
- 📱 **반응형 디자인**: 모든 디바이스에서 최적화된 경험
- ♿ **접근성**: WCAG 가이드라인 준수, 스크린 리더 지원
- 📝 **Contentful CMS**: 헤드리스 CMS로 콘텐츠 관리
- 💬 **댓글 시스템**: Utterances 기반 GitHub 댓글
- 🎨 **Styled Components**: CSS-in-JS로 컴포넌트 스타일링
- 📊 **SEO 최적화**: 메타태그, 구조화 데이터, 사이트맵

## 🛠️ 기술 스택

- **프레임워크**: Gatsby 5.x
- **언어**: TypeScript
- **스타일링**: Styled Components
- **CMS**: Contentful
- **댓글**: Utterances
- **배포**: GitHub Pages
- **분석**: Google Analytics

## 📁 프로젝트 구조

```
minchur-gatsby-blog/
├── 📄 gatsby-config.ts          # Gatsby 설정 파일
├── 📄 gatsby-ssr.tsx           # 서버사이드 렌더링 설정
├── 📄 gatsby-browser.tsx       # 브라우저 설정
├── 📄 tsconfig.json            # TypeScript 설정
├── 📄 package.json             # 프로젝트 의존성
├── 📄 .eslintrc.json           # ESLint 설정 (보안 규칙 포함)
├── 📄 .eslintignore            # ESLint 제외 파일
├── 📄 .gitignore               # Git 제외 파일 (보안 강화)
├── 📄 .prettierrc              # Prettier 설정
├── 📄 .env.example             # 환경변수 예시
└── 📁 src/
    ├── 📁 components/          # React 컴포넌트들
    │   ├── 📁 common/          # 공통 컴포넌트
    │   ├── 📁 main/            # 메인 페이지 컴포넌트
    │   └── 📁 post/            # 포스트 관련 컴포넌트
    ├── 📁 hooks/               # 커스텀 React Hooks
    ├── 📁 pages/               # Gatsby 페이지들
    ├── 📁 utils/               # 유틸리티 함수들
    ├── 📁 images/              # 이미지 리소스
    └── 📄 gatsby-types.d.ts    # Gatsby GraphQL 타입 정의
```

### 📂 상세 파일 설명

#### 🔧 설정 파일들
- `gatsby-config.ts` - Gatsby 플러그인, 사이트 메타데이터, Contentful 설정
- `gatsby-ssr.tsx` - 보안 헤더(CSP, XSS 방지), 폰트 로딩, 페이지 래핑
- `gatsby-browser.tsx` - 브라우저 측 설정
- `tsconfig.json` - TypeScript 컴파일러 옵션 및 경로 설정
- `.eslintrc.json` - 코드 품질, 보안, 접근성 검사 규칙

#### 📄 페이지 컴포넌트 (`src/pages/`)
- `index.tsx` - 메인 홈페이지 (블로그 목록)
- `404.tsx` - 404 에러 페이지
- `{contentfulPost.slug}.tsx` - 동적 블로그 포스트 페이지

#### 🧩 공통 컴포넌트 (`src/components/common/`)
- `Layout.tsx` - 전체 페이지 레이아웃, ErrorBoundary, 접근성 개선
- `Header.tsx` - 네비게이션 헤더
- `Footer.tsx` - 페이지 푸터
- `Seo.tsx` - SEO 메타태그, 보안 강화, 입력 검증
- `ErrorBoundary.tsx` - React 에러 처리, 사용자 친화적 오류 메시지

#### 🏠 메인 페이지 컴포넌트 (`src/components/main/`)
- `Introduction.tsx` - 블로그 소개 섹션
- `Category.tsx` - 카테고리 필터링
- `PostList.tsx` - 무한 스크롤 포스트 목록
- `PostItem.tsx` - 개별 포스트 카드 (이미지 최적화, 접근성)

#### 📝 포스트 컴포넌트 (`src/components/post/`)
- `PostHead.tsx` - 포스트 헤더 (제목, 카테고리, 날짜, 썸네일)
- `PostBody.tsx` - 포스트 본문 렌더링
- `TableOfContents.tsx` - 목차 네비게이션
- `Comment.tsx` - Utterances 댓글 시스템 (보안 강화)

#### 🎣 커스텀 Hooks (`src/hooks/`)
- `useRenderRichText.tsx` - Contentful Rich Text 렌더링
- `useTableOfContents.tsx` - 목차 자동 생성

#### 🔗 Rich Text 노드 컴포넌트 (`src/hooks/node/`)
- `Heading.tsx` - 제목 태그 (h1-h3)
- `Code.tsx` - 코드 블록 및 인라인 코드
- `Link.tsx` - 외부 링크 (보안 속성 포함)
- `Image.tsx` - 이미지 컴포넌트
- `Blockquote.tsx` - 인용구
- `OrderedList.tsx` / `UnorderedList.tsx` - 순서/비순서 목록
- `HorizontalRule.tsx` - 수평선

#### 🛠️ 유틸리티 (`src/utils/`)
- `env.ts` - 환경변수 검증 및 관리

## 🔧 설치 및 실행

### 필수 요구사항
- Node.js 18+
- npm 또는 yarn
- Contentful 계정
- GitHub 저장소 (댓글용)

### 1. 저장소 클론
```bash
git clone https://github.com/jiminchur/minchur-gatsby-blog.git
cd minchur-gatsby-blog
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 환경변수 설정
```bash
cp .env.example .env
```

`.env` 파일에 다음 내용을 설정하세요:
```env
CONTENTFUL_SPACE_ID=your_contentful_space_id
CONTENTFUL_ACCESS_TOKEN=your_contentful_access_token
GOOGLE_ANALYTICS_ID=your_google_analytics_id
```

### 4. 개발 서버 실행
```bash
npm run develop
```

브라우저에서 `http://localhost:8000`으로 접속하세요.

## 📋 사용 가능한 스크립트

```bash
npm run develop     # 개발 서버 실행
npm run build       # 프로덕션 빌드
npm run serve       # 빌드된 사이트 로컬 서빙
npm run clean       # Gatsby 캐시 정리
npm run typecheck   # TypeScript 타입 검사
npm run lint        # ESLint 코드 품질 검사
npm run lint:fix    # ESLint 자동 수정
npm run format      # Prettier 코드 포맷팅
npm run format:check # 코드 포맷 검사
npm run audit       # 보안 취약점 검사
```

## 🔐 보안 기능

### 구현된 보안 조치
- **Content Security Policy (CSP)**: XSS 공격 방지
- **입력 검증**: 사용자 입력 sanitization
- **보안 헤더**: X-Frame-Options, X-Content-Type-Options 등
- **환경변수 보호**: 민감한 정보 안전 관리
- **의존성 검사**: 정기적인 보안 취약점 스캔

### 보안 점검 명령어
```bash
npm run audit       # 의존성 보안 검사
npm run lint        # 보안 규칙 포함 코드 검사
```

## ♿ 접근성 기능

- **키보드 네비게이션**: 모든 기능을 키보드로 접근 가능
- **스크린 리더 지원**: ARIA 속성 및 시맨틱 HTML 사용
- **스킵 링크**: 메인 콘텐츠로 바로 이동
- **포커스 관리**: 명확한 포커스 표시
- **색상 대비**: WCAG AA 기준 준수

## 📊 SEO 최적화

- **구조화 데이터**: JSON-LD 스키마
- **메타태그**: Open Graph, Twitter Card
- **사이트맵**: 자동 생성
- **로봇 텍스트**: 검색 엔진 가이드
- **정규 URL**: 중복 콘텐츠 방지

## 🚀 배포

GitHub Pages에 자동 배포됩니다:

1. `main` 브랜치에 푸시
2. GitHub Actions가 자동으로 빌드
3. `gh-pages` 브랜치에 배포

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 👨‍💻 개발자

**MinChur**
- GitHub: [@jiminchur](https://github.com/jiminchur)
- Blog: [https://jiminchur.github.io/](https://jiminchur.github.io/)

---

💡 **이 블로그는 보안과 성능, 접근성을 중시하여 개발되었습니다.**
