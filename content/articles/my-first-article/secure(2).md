---
title: "[Secure Coding] CSRF (Cross-Site Request Forgery)란 무엇일까??"
description: "JAVA 단기 심화 부트캠프"
date: "2024-08-19"
banner:
  src: "../../images/articles/secure/secure-coding-img.jpeg"
  alt: "JAVA 단기 심화 부트캠프"
  caption: 'Photo by <u><a href="https://unsplash.com/photos/Nc5Q_CEcY44">Google</a></u>'
categories:
  - "Secure Coding"
  - "CSRF"
keywords:
  - "JAVA" 
  - "단기 심화 부트캠프"
  - "Secure Coding"
  - "CSRF"
---
## CSRF란??
`CSRF(Cross-Site Request Forgery)`란 웹 애플리케이션의 취약점을 이용해 사용자가 의도하지 않은 요청을 보내도록 하는 공격 기법이다. 공격자는 사용자가 인증된 상태를 악용하여 사용자가 원하지 않는 행동을 수행하게 만든다. 예를 들어, 사용자가 로그인된 상태에서 악의적인 웹사이트를 방문하면, 그 웹사이트가 사용자의 권한을 이용해 은행 계좌에서 돈을 송금하도록 할 수 있다.

## CSRF 공격 시나리오
* 사용자가 로그인: 사용자가 웹 애플리케이션에 로그인한다.
* 세션 유지: 로그인 후 세션 쿠키가 브라우저에 저장된다.
* 악성 웹사이트 방문: 사용자가 다른 웹사이트를 방문한다. 이 웹사이트는 CSRF 공격 코드를 포함하고 있다.
* 악의적인 요청 전송: 악성 웹사이트는 사용자의 세션 쿠키를 이용해 원본 웹 애플리케이션으로 요청을 보낸다.
* 서버 처리: 서버는 요청을 정상적인 사용자의 요청으로 인식하고 처리한다.

### CSRF 공격 예시
* html
```
<!DOCTYPE html>
<html>
<body>
  <h1>Free Gift</h1>
  <img src="http://bank.com/transfer?amount=1000&to=attacker" style="display:none;" />
</body>
</html>
```
> 이 예시에서 사용자가 이 페이지를 방문하면, 이미지 태그를 통해 http://bank.com/transfer?amount=1000&to=attacker 요청이 자동으로 실행된다. 사용자가 이미 bank.com에 로그인되어 있다면, 이 요청은 인증된 상태로 처리된다.

## CSRF 방지 방법
* Referer 헤더 검증:
  * 서버는 요청의 Referer 헤더를 확인하여 요청이 신뢰할 수 있는 출처에서 온 것인지 확인할 수 있다.
  * 그러나 Referer 헤더는 사용자가 조작할 수 있고, 일부 브라우저에서는 이 헤더를 포함하지 않을 수 있다.
* CSRF 토큰 사용:
  * 가장 일반적인 방지 방법은 CSRF 토큰을 사용하는 것이다.
  * 서버는 각 요청에 대해 고유한 토큰을 생성하고, 이를 폼에 포함시킨다.
  * 서버는 요청이 들어올 때 이 토큰을 검증한다.
* form 대신 API 사용:
  * API를 통해 JSON 데이터로 통신한다면 CSRF 이슈를 피할 수 있다.

다음 포스팅때 실제로 CSRF를 적용하는 실습을 해보자