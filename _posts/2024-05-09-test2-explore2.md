---
title: "[완전탐색] 모의고사"
description: 모의고사
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
[완전탐색 - 모의고사](https://school.programmers.co.kr/learn/courses/30/lessons/42840?language=python3)

#### 우선 문제 설명을 보고, 일단 내 생각을 먼저 적어 보자면

* 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
* 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
* 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
* 정답이 주어질때 가장 많이 맞춘사람 return



#### 코딩 설계하기
1. 1,2,3번 학생들의 찍기 패턴 파악하기 
2. 그걸로 정답하고 비교해서 가장 많이 맞춘사람 찾기
* 1번 학생 패턴
    * 1,2,3,4,5
* 2번 학생 패턴
    * 2,1,2,3,2,4,2,5
* 3번 학생 패턴
    * 3,3,1,1,2,2,4,4,5,5
#### <문제풀이>
```
def solution(answers):
    answer_ = []
    student_1 = [1,2,3,4,5]*2000
    student_1_correct = 0
    student_2 = [2,1,2,3,2,4,2,5]*1250
    student_2_correct = 0
    student_3 = [3,3,1,1,2,2,4,4,5,5]*1000
    student_3_correct = 0
    for answer in range(len(answers)):
        if answers[answer] == student_1[answer]:
            student_1_correct += 1
        if answers[answer] == student_2[answer]:
            student_2_correct += 1
        if answers[answer] == student_3[answer]:
            student_3_correct += 1            
    best_correct = max(student_1_correct,student_2_correct,student_3_correct)
    if best_correct == student_1_correct:
        answer_.append(1)
    if best_correct == student_2_correct:
        answer_.append(2)
    if best_correct == student_3_correct:
        answer_.append(3)
    return answer_
```
#### 성공!!

#### 훨씬 깔끔한 정답 코드 
```
def solution(answers):
    patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ]
    scores = [0, 0, 0]
    
    for idx, answer in enumerate(answers):
        for student, pattern in enumerate(patterns):
            if answer == pattern[idx % len(pattern)]:
                scores[student] += 1
    
    max_score = max(scores)
    return [i + 1 for i, score in enumerate(scores) if score == max_score]
```
* patterns 리스트에 각 학생의 반복되는 답안 패턴을 저장합니다.
* scores 리스트를 사용하여 각 학생의 점수를 추적합니다.
* answers 리스트를 순회하면서 각 학생의 답안 패턴과 비교합니다. 이때, idx % len(pattern)을 사용하여 학생의 답안 패턴이 반복되도록 합니다.
* 각 학생의 점수(scores) 중 최댓값을 찾고, 최고 점수와 같은 점수를 가진 학생의 번호를 결과 리스트에 추가합니다.
