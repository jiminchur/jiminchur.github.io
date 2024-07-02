# Github Blog Gatsby로 쉽게 만들기
> 이전에 나는 jekyll로 Github Blog을 운영 중이였다. 테마들이 맘에 들지 않아서 기본 테마에서 여러가지 수정을 했지만 그래도 맘에 들지 않아서 구글링 하던중 Gatsby를 이용하기로 했다.

### 1. Gatsby 설치하기
* 터미널에서 다음 명령어를 실행하여 Gatsby GLI를 설치하기
```
npm install -g gatsby-cli
```

### 2. 새 Gatsby 프로젝트 생성하기
* 터미널에서 다음 명령어를 실행하여 새 Gatsby 프로젝트를 생성하기 
* 여기서 보통 원하는 테마를 적용
```
gatsby new portfolio-minimal https://github.com/konstantinmuenster/gatsby-starter-portfolio-minimal-theme
```
* 나는 [이 테마](https://github.com/konstantinmuenster/gatsby-theme-portfolio-minimal/tree/main/gatsby-theme-portfolio-minimal#readme)을 적용함.

### 3. GitHub Repository 생성하기
* 중요한건! ***<username>.github.io***으로 Repository를 생성해야 한다는거다
* 다른 블로그나 사이트에서 3번에대한 내용이 많으므로 모르면 구글링 해보기

### 4. 생성한 폴더랑 Github Repository와 연결하기
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

### 5. Gatsby 개발 서버 실행해보기
```
gatsby develop
```
* http://localhost:8000에서 테마가 적용 되었는지 확인해보기
* 여기서 오류가 생겼다면 [issue 링크](https://github.com/jiminchur/jiminchur.github.io/issues/5)

### 6. Gatsby 프로젝트 빌드하기
* 터미널에서 다음 명령어를 실행하여 Gatsby 프로젝트를 빌드하기
```
gatsby build
```

### 7. Github에 배포하기
```
git add .
git commit -m "커밋내용 적기"
git push -u origin main
```

### 8. gh-page 만들 준비하기
* 여기까지 잘 따라 왔다면 https://<username>.github.io/까지는 잘 접속 될것이다.
* 그렇지만 readme파일만 뜨는걸 확인 할수있다.

### 9. Blog 배포 준비하기
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

### 10. Blog 배포하기
```
npm run deploy
```
* 마지막 메세지로 ***Published*** 메세지를 바드명 배포는 끝

### 11. Repository Scouce Branch 변경하기
1. Github Repository에 Setting으로 들어가기
2. 좌측 메뉴바에 Pages > Github Pages 설정페이지로 이동
3. Source에 있는 Branch를 Master/Main에서 gh-pages로 변경한 후에 저장

### 12. 추후에 수정하고 배포할때
* 변동사항 commit
* 아래 명령어 commit
```
npm run deploy
```