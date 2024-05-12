---
title: "[내일은 코딩테스트 with 파이썬] 문자열 다루기 - 인덱스 바꾸기"
description: 인덱스 바꾸기
post-image: /assets/images/tomorrow-test.png
categories:
    - 문자열 다루기
    - 코딩테스트
    - 내일은 코딩테스트 with 파이썬
    - 프로그래머스
tag:
    - 문자열 다루기
    - 코딩테스트
    - 프로그래머스
---
#### 문제링크는 아래에 남겨 두었다. 문제 설명은 아래에 들어가서 봐주시길..
[문자열 다루기 - 인덱스 바꾸기](https://school.programmers.co.kr/tryouts/85893/challenges?language=python3)

#### 우선 문제 설명을 보고, 일단 내 생각을 먼저 적어 보자면
* my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return

#### 코딩 설계하기
* my_string을 리스트로 바꾼다.
* int()를 씌였을때 true / false로 출력되는걸 이용한다.


#### <문제풀이>
```
def solution(my_string):
    my_string_lst = list(my_string)
    answer = 0
    check = ''
    check_lst = []
    for string in my_string_lst:
        try :
            int(string)
            check += string
        except:
            if len(check) > 0 :
                check_lst.append(check)
                check = ''
    for i in check_lst:
        answer += int(i)
    return answer
```
#### 1/3정도 맞췄다...
#### 재설계를 해보자면 정규표현식을 이용해서 풀어 봐야할거 같다.
* '/d+' : \d는 숫자를 의미하고, +는 하나 이상의 연속된 문자를 의미한다.

#### <2차 문제풀이>
```
import re

def solution(my_string):
    numbers = re.findall(r'\d+', my_string)
    
    total = sum(map(int, numbers))
    
    return total
```

#### 정답!! 정규표현식으로 푸는게 훨씬 깔끔하고 간단한 풀이 인것 같다.