---
title: "[SpartaCodingClub] JAVA 단기 심화 부트캠프 TIL (9)"
description: "JAVA 단기 심화 부트캠프"
date: "2024-08-07"
banner:
  src: "../../images/articles/sparta/sparta_img.png"
  alt: "JAVA 단기 심화 부트캠프"
  caption: 'Photo by <u><a href="https://unsplash.com/photos/Nc5Q_CEcY44">Sparta</a></u>'
categories:
  - "스파르타코딩클럽"
  - "TIL"
keywords:
  - "JAVA" 
  - "단기 심화 부트캠프"
  - "Sparta"
  - "회고"
  - "Redis"
---
## 👊🏻 천천히 갔다!!
오늘은 그전까지 밀려서 자세하게 블로그를 쓰지 못했던 Redis강의의 블로그들을 다 작성해 보는 시간을 가졌었다. 이 부분을 해야하는 데 하지 못하고 있어서 심적으로 급한감이 있었는데 오늘 해결하므로써 많이 편안해진거 같다. 그 이후에 Docker강의를 들었다. 다 많이 알고 있는 내용들 이여서 그다지 어렵진 않았다. 강의를 듣고 Chapter1 과제에 대해서 설계 및 요청사항을 분석하고 프로젝트 파일들을 만들며 간단한 작업들만 하는 시간을 가졌다.


## ✍🏻 오늘의 코드카타
오늘의 코드카타 문제로 [프로그래머스 - Level0 - 최댓값과 최솟값](https://school.programmers.co.kr/learn/courses/30/lessons/12939?language=java) 문제를 풀었다.

```
class Solution {
    public String solution(String s) {
        String[] lst = s.split(" ");  // 문자열을 공백으로 분리
        int[] lst2 = new int[lst.length];
        
        // 문자열을 정수로 변환하여 배열에 저장
        for (int i = 0; i < lst.length; i++) {
            lst2[i] = Integer.parseInt(lst[i]);
        }
        
        // 최대값과 최소값 찾기
        int max = lst2[0];
        int min = lst2[0];
        for (int num : lst2) {
            if (num > max) {
                max = num;
            }
            if (num < min) {
                min = num;
            }
        }
        
        // 결과 문자열 생성
        return min + " " + max;
    }
}
```
