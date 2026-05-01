---
title: "백엔드 아키텍처: Spring Boot, Kafka, 그리고 데이터 품질 관리"
date: "2024-11-01"
category: Tech
description: "Spring Boot의 핵심인 DispatcherServlet의 역할부터 Kafka의 순서 보장 전략, 그리고 금융권 데이터 레이크의 품질 관리까지 백엔드의 다양한 레이어를 살펴봅니다."
---


Spring Boot의 핵심인 DispatcherServlet의 역할부터 Kafka의 순서 보장 전략, 그리고 금융권 데이터 레이크의 품질 관리까지 백엔드의 다양한 레이어를 살펴봅니다.


### 1. Spring MVC의 입구: DispatcherServlet
Spring Boot 애플리케이션에서 모든 HTTP 요청의 관문 역할을 하는 것이 바로 **DispatcherServlet**입니다.
*   **역할:** Front Controller로서 모든 요청을 중앙에서 받아 적절한 핸들러(Controller)로 매핑하고, 결과를 뷰로 렌더링하거나 JSON으로 응답하는 전 과정을 제어합니다.

### 2. 실시간 데이터 파이프라인: Kafka 토픽 순서 보장
대규모 시스템에서 메시지 큐인 Kafka를 쓸 때 가장 고민되는 부분 중 하나가 '메시지 순서'입니다.
*   **해결 전략:** Kafka는 토픽 내의 **파티션(Partition)** 단위로만 순서를 보장합니다. 따라서 특정 데이터(예: 주문 ID별)의 순서가 중요하다면, 해당 데이터를 동일한 키(Key)로 설정하여 항상 같은 파티션으로 전송되도록 설계해야 합니다.

### 3. 데이터의 신뢰성: 금융 부문 데이터 레이크 품질 관리
방대한 데이터를 모아두는 데이터 레이크(Data Lake)는 자칫 '데이터 늪'이 되기 쉽습니다. 특히 금융권처럼 정확도가 생명인 곳에서는 다음과 같은 품질 관리가 필수적입니다.
*   **핵심 지표:** 완결성(Completeness), 정확성(Accuracy), 일관성(Consistency), 유효성(Validity). 
*   **품질 체크:** 데이터를 수집하는 단계부터 비즈니스 룰에 맞는지 검증하고, 메타데이터를 철저히 관리하여 데이터의 출처와 흐름을 추적할 수 있어야 합니다.
