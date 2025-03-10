---
title: "[파이썬 기초] 자료형"
description: "파이썬 기초"
date: "2023-09-27"
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
  - "자료형"
---
## 자료형
자료형이란 프로그래밍 할 때 쓰는 숫자, 문자열 등 자료 형태로 사용하는 모든 것을 뜻한다. 프로그램의 기본이자 핵심 단위사 바로 자료형이다.

### 숫자형
#### 정수형
* 정수형(lnteger)이란 말 그대로 정수를 뜻하는 자료형을 말한다.
```python
a_int = 100
b_int = -100
c_int = 0
```
* type()은 파이썬 변수의 타입을 확인해주는 함수이다.
```python
type(a_int)
```
    int
#### 실수형
* 파이썬에서 실수형(Floating-point)은 소수점이 포함된 숫자를 말한다.
```python
t_flo = 5.12
Y_flo = 12.0
```
```python
type(t_flo)
```
    float
##### 컴퓨터식 지수 표현방식
```python
a_flo = 12.789e10
a_flo
```
    127890000000.0
```python
b_flo = 78.456e-4
b_flo
```
    0.0078456
```python
(type(a_flo), type(b_flo))
```
    (float, float)
### 숫자형 연산
#### 사칙연산
- "+" : 더하기
- "-" : 빼기
- "*" : 곱하기
- "/" : 나누기
- "**" : 제곱
- "%" : 나머지만 
- "//" : 몫만
##### "+" : 더하기
```python
# "+" : 더하기
a_int = 4
b_int = 5
a_int + b_int 
```
    9
##### "-" : 빼기
```python
a_int - b_int
```
    -1
##### "*" : 곱하기
```python
a_int * b_int
```
    20
##### "/" : 나누기
```python
a_int / b_int
```
    0.8
##### "**" : 제곱
```python
a_int ** b_int
```
    1024
##### "%" : 나머지만
```python
a_int % b_int
```
    4
##### "//" : 몫만
```python
a_int // b_int
```
    0


