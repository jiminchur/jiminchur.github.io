---
title: "[Database] 데이터베이스 언어(SQL)"
description: "학점은행제"
date: "2025-01-16"
banner:
  src: "../../../images/articles/cs/database_img.png"
  alt: "학점은행제"
  caption: 'Photo by <u><a href="https://unsplash.com/photos/Nc5Q_CEcY44">Google</a></u>'
categories:
  - "ALL"
  - "CS"
keywords:
  - "Database" 
  - "학점은행제"
---
### 1. SQL의 개요와 구성

- **SQL의 역할**
    
    SQL(Structured Query Language)은 관계형 데이터베이스에서 데이터를 정의(DDL), 조작(DML), 제어(DCL)하기 위한 표준 언어입니다.
    
- **주요 SQL 명령어 종류**
    - **데이터 정의 언어(DDL):**
        - **CREATE TABLE, ALTER TABLE, DROP TABLE, TRUNCATE TABLE**
        - 테이블과 기타 스키마 객체를 생성, 수정, 삭제합니다.
    - **데이터 조작 언어(DML):**
        - **SELECT, INSERT, UPDATE, DELETE**
        - 테이블 내 데이터를 검색, 추가, 수정, 삭제합니다.
    - **데이터 제어 언어(DCL):**
        - **GRANT, REVOKE, BEGIN, COMMIT, ROLLBACK**
        - 사용자 권한 관리와 트랜잭션 제어를 담당합니다.

---

### 2. SQL 질의문의 기본 구조

- **기본 절(Clause) 구성:**
    1. **SELECT:** 조회할 속성(열)들을 지정합니다.
        - 예: `SELECT sname, age`
    2. **FROM:** 데이터를 가져올 테이블(들)을 명시합니다.
        - 예: `FROM Sailor`
    3. **WHERE:** 행(투플)을 선택하는 조건을 기술합니다.
        - 예: `WHERE rating > 5`
    4. **GROUP BY:** 같은 값을 가진 행들을 그룹화하여 집계할 때 사용합니다.
    5. **HAVING:** 그룹에 대한 조건(집계 결과 필터링)을 지정합니다.
    6. **ORDER BY:** 결과를 정렬(오름/내림차순)합니다.
- **집합 연산과 중첩 질의**
    - **UNION, INTERSECT, EXCEPT:** 집합 연산으로 두 질의의 결과를 합치거나, 교집합 또는 차집합을 구합니다.
    - **서브쿼리:** WHERE, FROM, 또는 SELECT 절 내에 다른 SELECT 문을 중첩시켜 사용합니다.
    - **DISTINCT:** 중복된 행을 제거하여 결과를 출력할 수 있습니다.

---

### 3. SQL 데이터 조작 (DML)

- **INSERT:**
    - 새로운 데이터를 테이블에 추가합니다.
    - 예:
        
        ```sql
        INSERT INTO Sailor (sid, sname, rating, age)
        VALUES (1, '홍길동', 5, 25);
        
        ```
        
- **DELETE:**
    - 조건에 맞는 데이터를 테이블에서 삭제합니다.
    - 예:
        
        ```sql
        DELETE FROM Sailor
        WHERE sid = 1;
        
        ```
        
- **UPDATE:**
    - 기존 데이터의 값을 변경합니다.
    - 예:
        
        ```sql
        UPDATE Sailor
        SET rating = rating + 1
        WHERE sname = '홍길동';
        
        ```
        

---

### 4. 스키마 생성, 소멸, 변경

- **CREATE TABLE:**
    - 테이블을 생성하며, 각 속성의 데이터 타입과 제약조건(NOT NULL, PRIMARY KEY 등)을 지정합니다.
- **ALTER TABLE:**
    - 테이블의 구조를 변경합니다. (속성 추가, 삭제, 수정, 이름 변경 등)
- **DROP TABLE, TRUNCATE TABLE:**예시
    - 테이블 또는 테이블의 모든 데이터를 삭제합니다.
    
    ```sql
    sql
    복사
    ALTER TABLE Sailor ADD COLUMN job VARCHAR(20);
    ALTER TABLE Sailor DROP COLUMN job;
    
    ```
    

---

### 5. 뷰(View)의 개념 및 활용

- **뷰의 개념**
    - 뷰는 기본 테이블의 결과를 기반으로 생성되는 **가상 테이블**입니다.
    - 복잡한 조인이나 서브쿼리를 단순화하고, 보안 및 재사용성을 높이는 역할을 합니다.
- **뷰 정의 및 사용**
    - **CREATE VIEW** 명령을 사용해 뷰를 생성합니다.
        
        ```sql
        sql
        복사
        CREATE VIEW SailorView AS
        SELECT sname, rating, age
        FROM Sailor;
        
        ```
        
    - 뷰는 기본 테이블이 변경되면 그 최신 데이터를 반영합니다.
    - 필요 없는 뷰는 **DROP VIEW** 명령으로 제거합니다.
- **뷰 갱신 제약**
    - 뷰에 따라서는 직접 갱신이 불가능할 수 있으며(예: 집계 함수가 포함된 뷰),
    갱신 가능 뷰의 경우 **WITH CHECK OPTION** 등을 사용해 제약을 둘 수 있습니다.

---

### 6. 추가 학습 포인트

- **조인 및 집계 함수 활용:**
    - 여러 테이블 간의 조인(내부 조인, 외부 조인)을 통해 데이터를 결합하는 방법과집계 함수(SUM, COUNT, AVG 등)로 그룹별 결과를 산출하는 방법을 숙지합니다.
- **NULL 처리와 조건식 사용:**
    - NULL 값에 대한 처리 방법 (IS NULL, IS NOT NULL)과 문자열 패턴 검색(LIKE, BETWEEN 등)을 이해합니다.
- **실습을 통한 이해:**
    - 각 SQL 명령어를 직접 작성하고 실행해보며, 결과와 무결성 제약조건 위반 사례 등을 체험해보는 것이 중요합니다.