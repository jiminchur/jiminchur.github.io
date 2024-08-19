---
title: "[Secure Coding] CORS (Cross-Origin Resource Sharing)란 무엇일까??"
description: "JAVA 단기 심화 부트캠프"
date: "2024-08-19"
banner:
  src: "../../images/articles/secure/secure-coding-img.jpeg"
  alt: "JAVA 단기 심화 부트캠프"
  caption: 'Photo by <u><a href="https://unsplash.com/photos/Nc5Q_CEcY44">Google</a></u>'
categories:
  - "Secure Coding"
  - "CORS"
keywords:
  - "JAVA" 
  - "단기 심화 부트캠프"
  - "Secure Coding"
  - "CORS"
---
## 🤷🏻‍♂️ 하.. 왜 이러지..???
애플리케이션을 개발한 분들이라면 한번쯤 경험이 있을것 같다. 애플리케이션을 개발한 후 방화벽에서 GET,POST,PATCH,PUT,DELETE 메서드를 허용했고, SPA로 개발된 프론트페이지에 접속하여 요청을 했는데 403,405에러가 났다. 이유가 무엇일까?? CORS때문에 에러가 났을것이다..그럼 CORS가 뭐길래 이런 에러를 발생시킬까?? 한번 알아보자

## CORS란?
`CORS(Cross-Origin Resource Sharing)`는 한 출처(도메인, 프로토콜, 포트)에서 실행 중인 웹 애플리케이션이 다른 출처의 리소스에 접근할 수 있도록 브라우저에서 제공하는 보안 기능이다. 웹 애플리케이션은 기본적으로 동일 출처 정책(Same-Origin Policy)에 따라 동작하며, 이는 보안상의 이유로 다른 출처의 리소스 접근을 제한한다. CORS는 이러한 제한을 완화하여 특정 조건 하에 다른 출처의 리소스 접근을 허용한다.

## 동일 출처 정책(Same-Origin Policy)
동일 출처 정책은 보안 메커니즘으로, 웹 브라우저가 스크립트가 로드된 출처(origin)와 동일한 출처의 리소스만 접근할 수 있도록 제한한다. 출처는 스키마(프로토콜), 호스트(도메인), 포트의 조합으로 정의된다. 예를 들어, http://example.com:80와 http://example.com:8080은 포트가 다르므로 동일 출처가 아니다.

## CORS의 필요성
`API 호출`: SPA와 같이 클라이언트 중심의 웹 애플리케이션은 종종 다른 도메인에서 호스팅되는 API를 호출해야 한다.
`리소스 공유`: 여러 도메인 간의 이미지, 스타일시트, 스크립트, 폰트 등의 리소스를 공유할 필요가 있다.

## CORS의 동작 원리
* CORS의 동작 원리는 다음과 같다:
  * Preflight 요청: 브라우저가 실제 요청을 보내기 전에 서버에 요청할 권한이 있는지 확인하는 과정이다. Preflight 요청은 HTTP 메서드가 단순 요청이 아니거나, 특정 헤더 또는 Content-Type을 사용할 때 발생한다.
  * 서버의 응답: 서버는 Preflight 요청에 대해 요청된 메서드와 헤더를 허용할지 여부를 결정하여 응답한다. 응답 헤더에는 Access-Control-Allow-Origin, Access-Control-Allow-Methods, Access-Control-Allow-Headers 등이 포함된다.
  * 브라우저의 확인: 브라우저는 서버의 응답을 확인하고, 요청이 허용되면 실제 요청을 보낸다. 요청이 허용되지 않으면, 브라우저는 실제 요청을 차단한다.

## CORS 설정 시 주의사항
* 보안 고려사항:
  * 신뢰할 수 없는 출처를 허용하지 않도록 주의해야 한다.
  * allowedOrigins에 와일드카드(*)를 사용하면 모든 출처에서의 요청을 허용하므로 주의가 필요하다.
  * 민감한 정보를 보호하기 위해 Access-Control-Allow-Credentials를 신중하게 설정해야 한다.
* 성능 고려사항:
  * Preflight 요청이 빈번하면 성능 저하가 발생할 수 있으므로, Access-Control-Max-Age를 설정하여 Preflight 요청을 캐싱해야 한다.
  * 불필요한 Preflight 요청을 최소화하기 위해 단순 요청 조건을 충족하도록 API 설계를 검토해야 한다.

## CORS 해결하기
* 백엔드 애플리케이션에서 CORS 설정을 해준다.
  * 전역설정
  ```
  import org.springframework.context.annotation.Bean;
  import org.springframework.context.annotation.Configuration;
  import org.springframework.web.servlet.config.annotation.CorsRegistry;
  import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

  @Configuration
  public class WebConfig {

      @Bean
      public WebMvcConfigurer corsConfigurer() {
          return new WebMvcConfigurer() {
              @Override
              public void addCorsMappings(CorsRegistry registry) {
                  registry.addMapping("/**")
                          .allowedOrigins("http://localhost:3000")  // 허용할 출처
                          .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                          .allowedHeaders("*")
                          .allowCredentials(true)
                          .maxAge(3600);  // Preflight 요청 캐시 시간
              }
          };
      }
  }
  ```
  * 컨트롤러 레벨 설정
  ```
  import org.springframework.web.bind.annotation.CrossOrigin;
  import org.springframework.web.bind.annotation.GetMapping;
  import org.springframework.web.bind.annotation.RestController;

  @RestController
  public class MyController {

      @CrossOrigin(origins = "http://localhost:3000")
      @GetMapping("/api/data")
      public String getData() {
          return "Data from server";
      }
  }
  ```