---
title: "[파이썬 기초] 변수"
description: "파이썬 기초"
date: "2023-09-26"
banner:
  src: "../../../images/articles/python/pythonlogo.png"
  alt: "파이썬 기초"
  caption: 'Photo by <u><a href="https://unsplash.com/photos/Nc5Q_CEcY44">Google</a></u>'
categories:
  - "ALL"
  - "Python"
keywords:
  - "Python"
  - "기초"
  - "변수"
---
```python
a = 1 # 숫자
b = "민철" # 문자
c = [1,2,3] # 리스트
```

## 변수 표기법

### 카멜 표기법
* 낙타의 모양을 연상해서 중간에 툭 튀어나온 단봉 낙타를 생각하면 편하다.

```python
WhatEta = "Feel Good"
WhatEta
```
    'Feel Good'

### 스네이크 표기법
* 뱀처럼 쭉 일정하게 일자로 작성되는 표기법이고 언더바까지 추가가 된다.

```python
what_eta = "feel Good"
what_eta
```
    'feel Good'

## 변수 이름 규칙
- 대소문자를 구분해야한다.(변수이름을 모두 대문자로 할 경우에는 상수가 된다.)
> Happy , HaPPy , HAppy , .... 다 다른 변수로 인식한다.
- 알파벳, 숫자, 언더바(_)

```python
Happy = 1
Happy
```
    1
```python
H___y = "app"
H___y
```
    'app'
```python
four_4 = 4
four_4
```
    4

* 변수명 첫 글자에 숫자는 문법오류
```python
123you = 1
```
      Cell In[7], line 1
        123you = 1
          ^
    SyntaxError: invalid decimal literal

* python 키워드 및 정의된 함수 및 클래스 명으로 사용불가
```python
for = 1
```
      Cell In[9], line 1
        for = 1
            ^
    SyntaxError: invalid syntax

## 변수를 사용하는 이유
코드의 재활용성과 가독성을 높여주고, 중복을 제거하여 유지보수를 용이하게 한다.
> 코드를 깔끔하게 만들어 주어서 가독성을 높여주고, 다른사람이 코드를 보았을 때의 훨씬 나은 이해를 도울 수 있다.
```python
print(9*1)
print(9*2)
print(9*3)
print(9*4)
print(9*5)
print(9*6)
print(9*7)
print(9*8)
print(9*9)
```
    9
    18
    27
    36
    45
    54
    63
    72
    81
```python
n = 3
print(n*1)
print(n*2)
print(n*3)
print(n*4)
print(n*5)
print(n*6)
print(n*7)
print(n*8)
print(n*9)
```
    3
    6
    9
    12
    15
    18
    21
    24
    27

## 메모리 주소
변수의 값에 대한 컴퓨터의 메모리에 저장된 위치 주소이다.
```python
a = 1
id(a)
```
    140721097859880
```python
a = 1
b = a
id(b)
```
    140721097859880
* a와 b가 같다고 하여서 같은 아이디 주소가 나왔지만 만약 b = 1이라고 하고 같은 값을 주고 메모리 주소를 비교한다면 다른 주소가 나온다.

```python
a = 1102
c = 1102
(id(a) ,id(c))
```
    (1634286995664, 1634286995888)
## 상수
- 변하지 않은 수
```python
# 변수명을 대문자로 표현 (하지만 변수와 기능적으로 차이는 없음)
HAPPY = 1
HAPPY
```
    1