---
title: "웹 보안: 데이터 보호와 공격 방어의 기초"
date: "2024-08-19"
category: Tech
description: "개발자를 괴롭히는 CORS 에러의 원인부터 XSS, SQL Injection 등 웹 애플리케이션을 위협하는 보안 취약점과 방어 기법을 정리합니다."
---


개발자를 괴롭히는 CORS 에러의 원인부터 XSS, SQL Injection 등 웹 애플리케이션을 위협하는 보안 취약점과 방어 기법을 정리합니다.


### 1. CORS (Cross-Origin Resource Sharing)
프론트엔드와 백엔드를 연동할 때 가장 먼저 마주치는 복병입니다. 브라우저는 보안상의 이유로 내가 접속한 도메인과 다른 도메인의 리소스에 접근하는 것을 기본적으로 차단하는데, 이를 **동일 출처 정책(SOP)**이라고 합니다.
*   **해결 방법:** 서버 측 응답 헤더에 `Access-Control-Allow-Origin`을 설정하여 특정 도메인의 접근을 명시적으로 허용해야 합니다.

### 2. 주요 웹 공격과 방어 (OWASP Top 10)
*   **SQL Injection:** 입력값에 SQL 구문을 주입하여 DB를 탈취하는 공격입니다. **PreparedStatement**를 사용하거나 입력값을 철저히 검증하여 방어합니다.
*   **XSS (Cross-Site Scripting):** 게시판 등에 악성 스크립트를 삽입하여 다른 사용자의 정보를 훔치는 공격입니다. HTML 태그를 치환(Escaping)하여 실행되지 않도록 막아야 합니다.
*   **CSRF (Cross-Site Request Forgery):** 사용자가 의도하지 않은 요청을 강제로 보내게 만드는 공격입니다. **CSRF 토큰**을 사용하여 정당한 요청인지 검증합니다.

### 3. 인증과 인가 (Auth)
*   **인증(Authentication):** "누구인가?" (로그인)
*   **인가(Authorization):** "무엇을 할 수 있는가?" (권한 관리)
*   JWT, OAuth 2.0 등의 표준 프로토콜을 사용하여 안전하게 사용자 세션을 관리하는 것이 중요합니다.
