---
title: "[Database] 관계형 데이터베이스의 함수적 종속성, 정규화"
description: "학점은행제"
date: "2025-01-30"
banner:
  src: "../../../../images/articles/cs/database_img.png"
  alt: "학점은행제"
  caption: 'Photo by <u><a href="https://unsplash.com/photos/Nc5Q_CEcY44">Google</a></u>'
categories:
  - "ALL"
  - "CS"
keywords:
  - "Database" 
  - "학점은행제"
---
### 1. 관계 스키마 설계 지침

- **좋은 스키마의 조건**
    - **주제 일관성:** 한 릴레이션은 한 가지 주제(엔티티 또는 관계 타입)만 다뤄야 함
    - **명확한 속성 의미:** 각 속성의 의미가 분명하고, 불필요한 중복이나 널값 사용을 최소화
    - **정상적 데이터 관리:** 삽입, 삭제, 수정 시 발생할 수 있는 이상(업데이트, 삽입, 삭제 이상)을 예방
- **나쁜 스키마의 문제점**
    - 여러 엔티티의 속성이 혼합될 경우, 데이터 중복과 갱신 이상이 발생하여 유지·관리 비용이 증가함
    - 스푸리어스 튜플(spurious tuple)과 같이 잘못된 결과가 생성될 위험이 있음


### 2. 함수 종속성 (Functional Dependency, FD)

- **기본 개념**
    - **정의:** X → Y는 “두 튜플에서 X의 값이 동일하면, 반드시 Y의 값도 동일하다”는 제약조건
    - **실세계 반영:** 실제 세계에서의 제약을 데이터베이스 스키마에 반영
- **검증 방법**
    - 임의의 두 튜플에서 X의 값이 같다면 Y도 동일해야 FD가 성립
- **Armstrong의 추론 규칙**
    - **재귀성 (Reflexivity):** 만약 Y ⊆ X이면, X → Y
    - **부가성 (Augmentation):** X → Y이면, XZ → YZ
    - **이행성 (Transitivity):** X → Y와 Y → Z이면, X → Z
    - 이 규칙들을 통해 추가적인 함수 종속성을 유도할 수 있음
- **속성 폐포 (Closure)**
    - 주어진 FD 집합 하에서 X가 결정할 수 있는 모든 속성들의 집합(X⁺)
    - 키 결정 및 정규화 과정에 필수적으로 사용됨


### 3. 정규화 (Normalization) 과정

- **목적**
    - 데이터 중복을 줄이고, 삽입·삭제·수정 시 발생하는 이상(update anomaly)을 예방하여 데이터 무결성을 보장
- **제1 정규형 (1NF)**
    - 모든 속성이 원자적(atomic)이어야 하며, 각 튜플의 각 속성은 단일 값을 가져야 함
- **제2 정규형 (2NF)**
    - 1NF를 만족하면서, **비주요 속성이 기본키에 대해 완전 함수적 종속**이어야 함
    - 기본키의 일부에만 종속되는 부분 함수 종속을 제거
- **제3 정규형 (3NF)**
    - 2NF를 만족하면서, 비주요 속성이 기본키에 대해 **이행적 함수 종속**을 가지지 않아야 함
    - 즉, 기본키를 통해 직접 결정되지 않고 다른 속성을 통해 결정되는 경우가 없어야 함
- **보이스-코드 정규형 (BCNF)**
    - 모든 함수 종속성 X → Y에서, X가 반드시 수퍼키(Superkey)여야 함
    - 3NF보다 엄격한 조건으로 일부 3NF 릴레이션은 BCNF를 만족하지 않을 수 있음

