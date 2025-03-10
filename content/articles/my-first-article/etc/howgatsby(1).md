---
title: "Github Blog jekyll에서 Gatsby이전하기(1)"
description: "Github Blog jekyll에서 Gatsby이전하기(1)"
date: "2024-07-05"
banner:
  src: "../../images/articles/howgatsby(1)/Gatsby.png"
  alt: "Github Blog jekyll에서 Gatsby이전하기(1)"
  caption: 'Photo by <u><a href="https://unsplash.com/photos/Nc5Q_CEcY44">Gatsby</a></u>'
categories:
  - "ALL"
  - "Blog"
keywords:
  - "Gitub Blog"
  - "Gatsby"
  - "jekyll"
  - "설치하는 방법"
---

## 😆 Gatsby로 Gitub Blog 이전하기!!
![This is the alt tag.](../../images/articles/howgatsby(1)/beforeblog_img.png "Before My Github Blog that use jekyll")
이전 Jekyll로 Github Blog을 만들었을때 메인 홈 이미지이다. 처음엔 무작정으로 Github Blog로 글을 포스팅하고 싶은 마음에 제일 기본적인테마로 시작을 했었고, 차츰 다른 테마와 내가 수정을 해가면서 블로그를 운영중이였다.

### 🥳 Gatsby에서 내가 원하던 테마를!!
내가 수정하면서 운영하였던 주된 이유는 내가 생각하는 블로그와 jekyll에 있는 테마들에서 맞는다는걸 찾기란 너무나도 힘들었다. 그래서 시간날때마다 틈틈히 원하는 모양으로 수정을 할때쯤 내가 원하는 테마를 드디어 찾았다!! 그런데 찾았던 테마는 Gatsby라는 ***정적 사이트 생성기(Static Site Generator,SSG)*** 였다. Jekyll와 같지만 사용하는 과정이나 기술스택에서 많은 차이가 있었다...둘의 차이는 추후 포스팅때 다뤄보겠다.

### 😱 그러면 이전에 만들었던걸 다 엎어야해?!?!
열심히 구글링을 통해 찾아본 결과 새롭게 다시 Gatsby로 시작을 해야한다는 것이었다... 나는 다시 많은 시간을 투자해서 Gatsby로 변경하기엔 너무 아깝다라는 생각과 그래도 드디어 찾은 내가 원했던 테마인데 조금씩 시간을 투자해서 해보자라는 생각들에서 그래도 내가 시작했던건 꼭 해봐야되는 성격으로 후자의 생각이 더 앞서나가게 되어 이전하게 되었다!!

### 🫵 Gatsby로 이전 지금 시작합니다!!

#### 1. Gatsby 설치하기
* 터미널에서 다음 명령어를 실행하여 Gatsby GLI를 설치하기
```
npm install -g gatsby-cli
```

#### 2. 새 Gatsby 프로젝트 생성하기
* 터미널에서 다음 명령어를 실행하여 새 Gatsby 프로젝트를 생성하기 
* 여기서 보통 원하는 테마를 적용
```
gatsby new portfolio-minimal https://github.com/konstantinmuenster/gatsby-starter-portfolio-minimal-theme
```
* 나는 [👉🏻이 테마👈🏻](https://github.com/konstantinmuenster/gatsby-theme-portfolio-minimal/tree/main/gatsby-theme-portfolio-minimal#readme)을 적용함.

#### 3. GitHub Repository 생성하기
* 중요한건! ***username.github.io***으로 Repository를 생성해야 한다는거다
* 다른 블로그나 사이트에서 3번에대한 내용이 많으므로 모르면 구글링 해보기

#### 4. 생성한 폴더랑 Github Repository와 연결하기
* 생성한 폴더로 이동
```
cd portfolio-minimal
```
* Git Repository 초기화 하기
```
git init
```
* Github Repository를 원격 Repository로 추가하기
```
git remote add origin https://github.com/<username>/<username>.github.io.git
```

#### 5. Gatsby 개발 서버 실행해보기
```
gatsby develop
```
* http://localhost:8000에서 테마가 적용 되었는지 확인해보기

#### 6. Gatsby 프로젝트 빌드하기
* 터미널에서 다음 명령어를 실행하여 Gatsby 프로젝트를 빌드하기
```
gatsby build
```

#### 7. Github에 배포하기
```
git add .
git commit -m "커밋내용 적기"
git push -u origin main
```

#### 8. gh-page 만들 준비하기
* 여기까지 잘 따라 왔다면 https://username.github.io/까지는 잘 접속 될것이다.
* 그렇지만 readme파일만 뜨는걸 확인 할수있다.

#### 9. Blog 배포 준비하기
* gh-pages라는 패키지 설치하기
```
npm install gh-pages --save-dev
```
* package.json에 다음을 추가하기
```
{
  "scripts": {
    "deploy": "gatsby build && gh-pages -d public" // 추가
  }
}
```

#### 10. Blog 배포하기
```
npm run deploy
```
* 마지막 메세지로 ***Published*** 메세지를 바드명 배포는 끝

#### 11. Repository Scouce Branch 변경하기
1. Github Repository에 Setting으로 들어가기
2. 좌측 메뉴바에 Pages > Github Pages 설정페이지로 이동
3. Source에 있는 Branch를 Master/Main에서 gh-pages로 변경한 후에 저장

#### 12. 추후에 수정하고 배포할때
* 변동사항 commit
* 아래 명령어 commit
```
npm run deploy
```
### 🫡 드디어 이전완료!! 쉽지만은 않았다....
크게 고난이 3번 찾아왔었다..모든 고난들은 나의 Github Blog Repository Issue에 남겨 놨으니 참고해주길 바란다. 여러개의 Gatsby로 Github Blog만들기 블로그 글들을 읽었던것같다. 언제 구글링을 해보면 항상 내가 원하는 부분이 딱하고 나오진 않는다.. 이번에도 그랬고 여러 글들을 읽어가면서 진행했던것같다.. 중간중간 시간날때마다 틈틈히 작업을 해왔었다.. 1주일 동안 1시간씩 투자했던것같다. 그래도 전에 Github Blog을 운영했었다고 조금은 눈에 익었던 부분들이 많아 전에 Jekyll로 Github Blog만들때 보단 수훨했던것 같다 ^^

오늘도 읽어주셔서 감사합니다~ 