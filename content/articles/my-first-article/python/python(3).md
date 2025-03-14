---
title: "[파이썬 기초] 문자열"
description: "파이썬 기초"
date: "2023-10-04"
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
  - "문자열"
---
## 문자열 생성
### 작은따옴표 ''
```python
a_str = 'happy balloon'
a_str
```
    'happy balloon'
* 만약 글 안에 작은따옴표를 쓰고 싶으면 전체를 큰따옴표로 묶어주거나 백슬래시를 옆에 같이 써주면 된다.
```python
ar_str = "i'm big"
ae_str = 'i\'m strong'
(ar_str, ae_str)
```
    ("i'm big", "i'm strong")
### 큰따옴표 ""
```python
a_str = "big balloon"
a_str
```
    'big balloon'
```python
br_str = 'you say "shoot!"'
be_str = "we learn about\""
(br_str, be_str)
```
    ('you say "shoot!"', 'we learn about"')
### 이스케이프 코드
> 이스케이프 코드란 프로그래밍할 때 사용할 수 있도록 미리 정의해 둔 "문자조합"이다. 주로 출력물을 보기 좋게 정렬 하는 용도로 사용한다.
* 아래는 주로 많이 사용하는 이스케이프 코드들이다.
    * \n : 문자열 안에서 줄을 바꿀때 사용 
    * \t : 문자열 사이에 탭 간경을 줄 때 사용
    * \\\ : 문자 \\를 그대로 표현할 때 사용
    * \\' : 작은따옴표를 그대로 표현할 때 사용
    * \\" : 큰따옴표를 그대로 표현할 때 사용

#### \n : 문자열 안에서 줄을 바꿀때 사용 
```python
a_str = "i'm big \n you are short"
print(a_str)
```
    i'm big 
     you are short
#### \t : 문자열 사이에 탭 간경을 줄 때 사용
```python
a_str = "i'm big \t you are short"
print(a_str)
```
    i'm big 	 you are short

## 문자열 연산
### 문자열 더하기
```python
a_str = "try some"
b_str = " food"
a_str + b_str
```
    'try some food'
### 문자열 곱하기
```python
c_str = "oh"
c_str * 10
```
    'ohohohohohohohohohoh'
## 인덱싱
> 인덱싱(indexing)이란 무엇인가를 가리킨다는 의미이다. 파이썬은 숫자를 셀 때 0부터시작한다.
* 사용방법은 "변수명[인덱스]"이다
```python
a = "balloon"
a[0]
```
    'b'
* a[6] = a[-1] 같다 뒤에서부터는 음수로 -1부터 세어주면 된다.
```python
a[-1]
```
    'n'
## 슬라이싱
> 슬라이싱은 무엇인가를 잘라낸다는 의미이다.
* 사용방법은 "변수명[시작 인덱싱 번호:끝 인덱싱 번호:간격]"이다.
* 간격은 생략이 가능하다.
```python
a_str = "smlie"
a_str[1:2]
```
    'm'
* 처음부터 시작하고 싶으면 빈칸으로 해도 괜찮다
```python
a_str[:4]
```
    'smli'
* 끝까지 하고 싶어도 빈칸으로 해도 괜찮다
```python
a_str[1:]
```
    'mlie'
```python
a_str[::2]
```
    'sle'
## 문자열 포메팅
* 문자열 포메팅에는 3가지 방법이있다.
* 사용하는 이유는 한문장안에 여러가지 문자를 집어넣기 위함이다.
#### 문자열 안에서 숫자를 넣고 싶은 자리에 %d를 사용한다.
```python
print("i want to take %d models" % 3)
```
    i want to take 3 models
#### 문자를 넣고 싶으면 %s를 사용한다.
```python
print("i want to take 12 %s" % "pieces")
```
    i want to take 12 pieces
```python
how_many = 12
what = "eggs"

print("i want to take %d %s" % (how_many, what))
```
    i want to take 12 eggs
#### 소수점 표현도 가능하다 '%0.숫자f'로 쓰고 '숫자'째자리까지 표현이 된다.
```python
print("record : %0.5f seconds" % 5.421812165)
```
    record : 5.42181 seconds
### format
```python
print("what time when you leave\ni must go {} o'clock".format(7))
```
    what time when you leave
    i must go 7 o'clock
```python
eat = "banana"
many = 12
print("How many eat {0}?\n i ate {0} maybe {1}".format(eat,many))
```
    How many eat banana?
     i ate banana maybe 12
### f 문자열 포메팅
```python
print(f"it's time {many}am, let's eat {eat}")
```
    it's time 12am, let's eat banana
## 문자열 관련 함수들
### count()
* 괄호안에 문자의 갯수를 세어준다.
```python
a_str = "Happysomi"
a_str.count("p")
```
    2
### len()
* 문자열의 길이를 구해준다.
```python
len(a_str)
```
    9
### find()
* 찾고 싶은 문자의 인덱스 번호로 알려준다. 만약 없다면 '-1'로 반환한다.
```python
a_str.find("i")
```
    8
### join()
* 괄호안에있는 문자를 기준으로 인덱스 사이마다 삽입해준다.
```python
"@".join(a_str)
```
    'H@a@p@p@y@s@o@m@i'
### split()
* 괄호 안에 있는 문자를 기준으로 나눠준다.
```python
a_str.split("p")
```
    ['Ha', '', 'ysomi']
### upper
* 모든문자를 대문자로 바꿔준다.
```python
a_str.upper()
```
    'HAPPYSOMI'
### lower()
* 모든문자를 소문자로 바꿔준다.
```python
a_str.lower()
```
    'happysomi'
### strip()
- strip() : 양쪽 공백을 지워준다.
- lstrip() : 왼쪽 공백을 지워준다.
- rstrip() : 오른쪽 공백을 지워준다.
```python
b_str = "  poo "
(b_str.strip(), b_str.lstrip(), b_str.rstrip())
```
    ('poo', 'poo ', '  poo')
### replace()
* 문자안에 문자를 원하는 문자로 변경해준다.
```python
a_str.replace("Happy","pretty")
```
    'prettysomi'