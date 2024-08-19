---
title: "[Secure Coding] SQL Injection란 무엇일까??"
description: "JAVA 단기 심화 부트캠프"
date: "2024-08-19"
banner:
  src: "../../images/articles/secure/secure-coding-img.jpeg"
  alt: "JAVA 단기 심화 부트캠프"
  caption: 'Photo by <u><a href="https://unsplash.com/photos/Nc5Q_CEcY44">Google</a></u>'
categories:
  - "Secure Coding"
  - "SQL Injection"
keywords:
  - "JAVA" 
  - "단기 심화 부트캠프"
  - "Secure Coding"
  - "SQL Injection"
---
## SQL 인젝션이란?
SQL 인젝션은 사용자 입력을 제대로 검증하지 않은 웹 애플리케이션의 취약점을 악용하는 공격 기법이다. 공격자는 악의적인 SQL 코드를 삽입하여 데이터베이스를 조작하거나 민감한 정보를 탈취할 수 있다.

## SQL 인젝션의 위험성
* 데이터 탈취: 공격자가 데이터베이스에서 중요한 정보를 빼낸다.
* 데이터 변조: 데이터베이스의 데이터를 변경하거나 삭제할 수 있다.
* 권한 상승: 공격자가 데이터베이스 관리자 권한을 획득할 수 있다.
* 전체 시스템 장악: 심각한 경우 서버 전체를 제어할 수 있다.
## SQL 인젝션 공격 예시
```
String username = "admin'; --";
String password = "password";
String query = "SELECT * FROM users WHERE username = '" + username + "' AND password = '" + password + "'";
```
> 위 코드에서 사용자가 입력한 username에 "admin'; --"을 입력하면, SQL 쿼리가 SELECT * FROM users WHERE username = 'admin'; --' AND password = 'password'로 변경된다. --는 SQL 주석 처리 기호이므로, 뒤의 AND password = 'password'는 무시된다. 결과적으로 비밀번호를 입력하지 않아도 인증이 가능해진다.

## SQL 인젝션 방어 기법
* Prepared Statements (준비된 문)
  * SQL 쿼리를 미리 컴파일하여 파라미터화된 쿼리를 사용한다. 이를 통해 사용자 입력이 SQL 구문의 일부로 해석되지 않도록 할 수 있다.

* Stored Procedures (저장 프로시저)
  * 데이터베이스에 미리 정의된 저장 프로시저를 호출하여 실행한다. 저장 프로시저는 일반적으로 SQL 인젝션에 안전하다.

* ORM (객체 관계 매핑)
  * Hibernate와 같은 ORM 프레임워크를 사용하면, 내부적으로 Prepared Statement를 사용하여 SQL 인젝션 공격을 방지할 수 있다.

* 입력 검증 및 인코딩
  * 사용자 입력을 철저히 검증하고 인코딩하여 SQL 쿼리에 직접 포함시키지 않는다.

* 최소 권한 원칙
  * 데이터베이스 사용자에게 최소한의 권한만 부여한다.

이와 같은 방법들을 적절히 조합하면 SQL 인젝션 공격으로부터 웹 애플리케이션을 효과적으로 보호할 수 있다.