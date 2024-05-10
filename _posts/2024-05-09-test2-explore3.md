---
title: "[완전탐색] 소수 찾기"
description: 소수 찾기
post-image: /assets/images/programmers.png
categories:
    - 완전탐색
    - 코딩테스트
tag:
    - 완전탐색
    - 코딩테스트
    - 프로그래머스
---
#### 문제링크는 아래에 남겨 두었다. 문제 설명은 아래에 들어가서 봐주시길..
[완전탐색 - 소수 찾기](https://school.programmers.co.kr/learn/courses/30/lessons/42839?language=python3)

#### 우선 문제 설명을 보고, 일단 내 생각을 먼저 적어 보자면
* 각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.
    * numbers는 길이 1 이상 7 이하인 문자열입니다.
    * numbers는 0~9까지 숫자만으로 이루어져 있습니다.
    * "013"은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.



#### 코딩 설계하기
1. 소수인지 판단하는 함수코드 작성
2. 모든 조합의 수 찾기
3. 소수판별함수에 넣어서 확인하기

#### <문제풀이>
```
from itertools import combinations

# 소수 구하는 함수
def find_decimal(lst):
    decimal_lst = []
    for i in lst:
        count = 0
        if int(i) != 0 and int(i) != 1 and int(i) != 2:
            for k in range(2,int(i)):
                if int(i) % int(k) == 0:
                    count += 1
            if count == 0:
                decimal_lst.append(i)
    return decimal_lst

from itertools import permutations

# 모든 숫자 조합 구하는 함수
def all_possible_numbers(nums):
    # 가능한 모든 조합을 저장할 집합
    all_combinations = set()

    # 모든 가능한 길이에 대해 순열을 생성
    for r in range(1, len(nums) + 1):
        for combo in permutations(nums, r):
            # 각 순열로부터 숫자를 생성
            number = int("".join(map(str, combo)))
            # 생성된 숫자를 집합에 추가
            all_combinations.add(number)
    
    # 정렬된 리스트로 반환
    return sorted(list(all_combinations))


def solution(numbers):
    answer = 0
    str_nums = list(numbers)
    
    all_comb_lst = all_possible_numbers(str_nums)
    print(all_comb_lst)
    answer_ = find_decimal(all_comb_lst)
    print(answer_)
    answer = len(answer_)

    return answer
```
#### 절반만 맞췄다..
![스크린샷](/assets/images/codingtest4.png)
#### 모든 조합을 구하는 함수쪽에는 문제가 없고 소수인지 판단하는 쪽에서 문제가 생긴거 같다..

#### 다시한번 생각해 보면
1. 소수는 1과 자기자신만 약수를 가지는 수
2. 그래서 숫자 n이 2~n-1까지 n으로 나눴을때 나머지들이 0이였던게 하나도 없어야함
#### 아.. 2도 소수 였다는걸 잊고 있었다..
#### <2차 문제 풀이>
* 소수 구하는 함수 쪽만 수정
```
from itertools import combinations

# 소수 구하는 함수
def find_decimal(lst):
    decimal_lst = []
    for i in lst:
        count = 0
        if int(i) != 0 and int(i) != 1:
            for k in range(2,int(i)):
                if int(i) % int(k) == 0:
                    count += 1
            if count == 0:
                decimal_lst.append(i)
    return decimal_lst
```
#### 정답률은 올랐지만 시간초과로 실패..
![스크린샷](/assets/images/codingtest5.png)
#### 소수구하는 함수 쪽에서 나머지가 0인값을 찾았을 경우 바로 끊어 버리게 수정을 해야지 시간초과 문제가 해결될거 같다.
#### <3차 문제풀이>
* 소수 구하는 함수 쪽만 수정
```
def find_decimal(lst):
    decimal_lst = []
    for i in lst:
        count = 0
        if int(i) != 0 and int(i) != 1:
            for k in range(2,int(i)):
                if int(i) % int(k) == 0:
                    count += 1
                    break
            if count == 0:
                decimal_lst.append(i)
    return 
```
#### 정답!!!