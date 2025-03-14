---
title: "[SpartaCodingClub] API 명세서 설계 (15)"
description: "JAVA 단기 심화 부트캠프"
date: "2024-08-20"
banner:
  src: "../../../images/articles/sparta/sparta_img.png"
  alt: "JAVA 단기 심화 부트캠프"
  caption: 'Photo by <u><a href="https://unsplash.com/photos/Nc5Q_CEcY44">Sparta</a></u>'
categories:
  - "ALL"
  - "Sparta"
keywords:
  - "JAVA" 
  - "단기 심화 부트캠프"
  - "Sparta"
  - "회고"
---
## ✍🏻 본격적인 프로젝트에 앞서 API 명세서 설계하기
이번주 목요일부터 본격적인 프로젝트에 시작이다. 본격적으로 시작에 앞서 오늘은 API 명세서를 설계하는 시간을 가졌다. 우리가 프로젝트로 진행하게될 서비스는 배달의 민족과 같은 배달주문 및 음식점 내 주문이다. 우리는 우선 필요한 어플리케이션을 분리를 해보았고 우선적으로 `사용자`,`가게`,`상품`,`주문`,`결제`가 나왔다.나는 그 중에서 `상품`에 대한 부분을 맡기로 하였다.

## 👊🏻 상품 API 명세서 설계하기
나는 우선적으로 CRUD로 구성을 하였고 조회 부분에만 접근권한을 ALL로 주었다.
|기능|Method|URL|접근권한|
|---------|---------|---------|---------|
|상품 등록 (특정 가게)|POST|/products/stores/{storeId}|Store,Admin|
|상품 정보 조회|GET|/products/{productId}|PermitAll|
|상품 정보 수정|PATCH|/products/{productId}|Store,Admin|
|상품 삭제|DELETE|/products/{productId}|Store,Admin|
|상품 정보 조회 (특정 가게)|GET|/products/stores/{storeId}|PermitAll|

우선 이정도만 설계를 하였는데 팀원들이 얘기가 나왔던 부분은 가게로 들어가서 상품들을 볼때 음료, 파스타, 국물, 등등 카테고리로 나눠져 있다고 하였다. 이부분을 수용하여 상품 카테고리의 CRUD와 그 카테고리안에 상품을 CRUD하는 API까지 추가로 작성하였다.

|기능|Method|URL|접근권한|
|---------|---------|---------|---------|
|상품 카테고리 등록|POST|/products/stores/{storeId}/categories|Store,Admin|
|상품 카테고리 조회|GET|/products/stores/{storeId}/categories|PermitAll|
|상품 카테고리 수정|PATCH|/products/stores/categories/{categoryId}|Store,Admin|
|상품 카테고리 삭제|DELETE|/products/stores/categories/{categoryId}|Store,Admin|
|카테코리 속 상품 등록|POST|/products/{productId}/categories/{categoryId}|Store,Admin|
|카테코리 별 조회|GET|/products/categories/{categoryId}|Store,Admin|
|카테고리 속 상품 수정|PATCH|/products/{productId}/categories/{categoryId}|Store,Admin|
|카테고리 속 상품 삭제|DELETE|/products/{productId}/categories/{categoryId}|Store,Admin|

상품 카테고리 CRUD는 가게마다 단순히 음료, 파스타, 국물, 등등의 카테고리를 적용하는 API이고,

카테고리 속,별 CRUD는 그 음료, 파스타, 국물, 등등 안에 상품을 적용하는 API이다

## 🤓 전반적인 피드벡 내용
1. url이 단건/복수건을 통일 시켜야 한다.
> 우선 우리가 설계를 할때 각자 다른 부분을 해서 통일성의 문제가 생겼던것같다 누구는 /order라고 하고 누구는 /products라고 해서 이부분을 통일 시켜야 한다고 피드벡을 받았다.

2. 다른 유저 정보도 조회하는 API
> 한 사용자가 다른 유저의 정보도 확인 할 수있는 부분도 추가 됬으면 좋겠다고 하셨다.

3. Admin이 회원 정보(회원 이름)을 수정하는 API 
> 만약 회원의 이름이 부적절하다면 관리자가 수정을 할 수 있게끔 변경하시라고 하셨다.

4. 회원 내 배송지 등록이라면 /address가 아닌 /users/address 로!!

5. 상품 카테고리 등록과 조회할때는 특정 가게의 상품 카테고리이니 {storeId} 추가!!
> 특정 가게를 진입하고 거기에 대한 상품 카테고리를 조회할려면 그 가게에 storeId가 존재해야 한다고 하셨다.

6. 결제는 PG사에서 처리한다.
> 카카오페이나, Payco 등등 결제방식을 보면 다른 사이트로 넘어가는걸 확인 할 수가 있다. 이건 PG사에서 제공해 주는 부분이므로 우리는 결제를 진행하고 결제가 완료되었는지 취소되었는지 확인하는 로직만 구현하면 된다고 하셨다.

7. PATCH와 PUT의 차이점
> PATCH는 null이 아니여야 할때 쓰인다고 한다. 예를 들어서 가게 설명란은 Null이여도 상관이 없다. 그러면 PUT으로 사용하고 만약 결제할때 꼭 필요한 카드번호라면?? PATCH를 이용해 수정을 한다고 한다.

## 🤟🏻 오늘을 마무리하며..
오늘은 강의보단 API설계서에 대해 팀원들과 의논을 하고 생각하는 시간을 가졌던것 같다. 다름 조의 API설계서를 보면 같은 프로젝트 주제인데 여러가지 내용들이 있었던거 같다. 우리팀도 많은 의논으로 작성한거지만 새로운 게 많이 있었던거 같았다. 이래서 다른 사람들과 공유를 하며 생각을 하게되면 어마어마하게 많은 아이디어가 나오는거 같다.