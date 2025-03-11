---
title: "[SpartaCodingClub] JAVA 단기 심화 부트캠프 TIL (10)"
description: "JAVA 단기 심화 부트캠프"
date: "2024-08-08"
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
  - "Redis"
---
## 🤓 나 백엔드 잘 어울릴지도..??
과제 제출은 다음주 월요일 오전9시까지 제출을 해야한다. 어제까지는 최대한 강의와 블로그 정리 위주로 진행을 했다면 오늘부터는 강의보다는 과제 위주로 진행을 하였다. 과제를 보니 지금까지 학습했던 내용들을 복합적으로 잘 융화해서 제출하는거 같았다. 지금까지는 별 무리 없이 잘 구현 하고 있지만 앞으로 해야하는 것들이 머리속으론 상상이 가나 직접해야한다는 것에 조금 두려움 반 설렘 반이 있는거 같다.


## ✍🏻 오늘의 코드카타
오늘의 코드카타 문제로 [프로그래머스 - Level0 - 내림차순으로 정렬하기](https://school.programmers.co.kr/learn/courses/30/lessons/12933) 문제를 풀었다.

```
import java.util.Arrays;

class Solution {
    public long solution(long n) {
        String numStr = Long.toString(n);
        char[] chars = numStr.toCharArray();
        Arrays.sort(chars);
        String sortedNumStr = new StringBuilder(new String(chars)).reverse().toString();
        
        return Long.parseLong(sortedNumStr);
    }
}
```
