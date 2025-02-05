---
title: "[파이썬 기초] 함수"
description: "파이썬 기초"
date: "2023-10-15"
banner:
  src: "../../../images/articles/python/pythonlogo.png"
  alt: "파이썬 기초"
  caption: 'Photo by <u><a href="https://unsplash.com/photos/Nc5Q_CEcY44">Google</a></u>'
categories:
  - "Python"
  - "기초"
keywords:
  - "Python"
  - "기초"
  - "함수"
---
## 함수

### 함수(Function) 정의
- 함수는 입력값에 따라 출력값을 만들어 내는 '블랙박스'와 같다.
- 함수란 하나의 특별한 목적의 작업을 수행하기 위해 독립적으로 설계된 코드의 집합으로 정의할 수 있다.
- 입력 변수(함수에 입력하는 변수) :
    > 다른 이름으로 파라미터라고도 함
- 출력 변수(함수 결과):
    > 다른 이름으로 리턴 값이라고도 함

### 함수를 사용하는 이유
* 함수를 사용하는 가장 큰이유는 반복적인 프로그래밍을 피할 수 있기 때문이다.

### 함수 구조
def 함수명(입력변수) :

수행할 프로그램1

수행할 프로그램2

return 출력변수
```python
# 함수 기본 모습
def a_def(input_data):
    out_data = input_data * 4
    return out_data
```
### 변수의 사용범위(Scope)
- 전역변수(global) : 함수  밖에서 만들어진 변수(어디서든 사용 가능)
- 지역변수(local) : 함수 내부에서 만들어진 지역변수는 함수 내에서만 사용가능
#### 전역변수에 대한 설명 
```python
a_int = 20
def a_def() :
    print(f"{a_int}는 전역변수이다.")
a_def()
```
    20는 전역변수이다.
## 함수 입력 변수
### 디폴트 파라미터
- 입력변수값이 없는 경우에 기본값(디폴트)을 사용한다.
```python
def a_ex(a,b) :
    return a+b
a_ex()
```
    ---------------------------------------------------------------------------

    TypeError                                 Traceback (most recent call last)

    c:\Python study\day4\day4.ipynb Cell 14 line 5
          <a href='vscode-notebook-cell:/c%3A/Python%20study/day4/day4.ipynb#X36sZmlsZQ%3D%3D?line=2'>3</a>     return a+b
          <a href='vscode-notebook-cell:/c%3A/Python%20study/day4/day4.ipynb#X36sZmlsZQ%3D%3D?line=3'>4</a> # 입력변수를 넣지 않아서 오류가 발생함
    ----> <a href='vscode-notebook-cell:/c%3A/Python%20study/day4/day4.ipynb#X36sZmlsZQ%3D%3D?line=4'>5</a> a_ex()


    TypeError: a_ex() missing 2 required positional arguments: 'a' and 'b'
- 디폴트 파라미터를 적용하여 입력변수를 넣지 않았지만, 함수가 정상적으로 실행되었다.
```python
def a_ex(a = 3,b = 3) :
    return a+b
a_ex()
```
    6
- 디폴트 파라미터에 None을 사용할 수 있다.
- 디폴트 파라미터는 다른 파라미터보다 나중에 넣어줘야 한다.

### 가변 파라미터
- 함수를 정의하면서 아규먼트가 n개 이상이 들어 올수 있다면 가변파라미터를 정의해주면 된다.(0개 포함)
- `*` 를 이용해서 파라미터명을 정의해주면 된다.
- 일반적으로 `*args` 표현
- 함수내부에서는 튜플 묶인다.
- 튜플, 리스트, 불 자료형 다 적용이 된다.

### 키워드 가변 파라미터
## 람다 함수(lamda)
- 한줄짜리 간단한 함수를 만들때사용
- 1회용 함수를 만들때 많이 사용
- 람다 함수는 아주 간단한 파라미터가 정의되거나 반환하는 함수일 경우 사용
```python
# square_lambda = lambda x:x**2  
# square_lambda(3)

def square_lambda(X):
    return X**2
square_lambda(3)
```
    9

```python
# make_even = lambda x: [i for i in x if i%2 == 0]
# make_even([1, 2, 3, 4, 5, 6, 7, 8])

amd = []
def make_even(x) : 
    for i in x :
        if i % 2 == 0 :
            amd.append(i)
    return amd
make_even([1, 2, 3, 4, 5, 6, 7, 8])
```
    [2, 4, 6, 8]
## 클로져(Closure)
- 함수안에 함수를 넣는것이다.
- 함수안에 함수도 지역함수라고 생각해 주면 된다.
```python
def func_out(out_param):
    a = 10
    def func_in():
      return a + out_param 
    return func_in()
```
* 내부함수를 함수내에서 실행한다.라는 뜻
* 일반적인 함수안에 함수이다.

```python
# 외부에서 내부함수를 실행할 수 있다.
# 이게 클로져이다.
def func_out(out_param):
    a = 10
    def func_in():
      return a + out_param 
    return func_in
```
* 외부에서 내부함수를 실행할 수 있다.
* 이게 클로져이다.
## 콜백함수
- 함수의 인자로 사용되는 함수를 말한다.
- 함수도 변수가 될수 있다.


```python
def call_func(a, func): 
  return func(a) 

def add_one(num):
  return num + 1

def add_three(num):
  return num + 3
```
```python
# func 자리에 무엇이 오느냐에 따라 값이 달라질수 있다.
call_func(3, add_one) 
```
    4
* func 자리에 무엇이 오느냐에 따라 값이 달라질수 있다.
```python
call_func(3, add_three)
```
    6
## Decorate
- 코드를 변경하지 않고 기능을 추가하거나 수
- 함수를 input으로 받지않고 @로 받아버리는게 Decorate 이다.
```python
def decorator_func(org_func): # 함수를 인자로 받는다.
    def wrapper_func(): # 내부함수를 구현한다.
        print("org_func 가 실행 되기전 입니다.")
        org_func() # org_func 함수를 실행
    return wrapper_func # 내부함수의 주소를 반환
```
```python
@decorator_func # 이게 Decorate 이다. 밑에 함수가 실행되기 전에 실행되는 함수이다.
def do_func():
    print("original 함수가 실행 되었습니다.")
```
```python
do_func()
```
    org_func 가 실행 되기전 입니다.
    original 함수가 실행 되었습니다.
```python
# 함수가 실행된 시간
import time

def elapsed(original_func):   # 기존 함수를 인수로 받는다.
    def wrapper():
        start = time.time() # 시작 시간
        result = original_func()    # 기존 함수를 수행한다.
        end = time.time() # 끝나는 시간.
        print("함수 수행시간: %f 초" % (end - start))  # 기존 함수의 수행시간을 출력한다.
        return result  # 기존 함수의 수행 결과를 리턴한다.
    return wrapper
```
```python
@elapsed
def myfunc():
    print("함수가 실행됩니다.")
```
```python
myfunc()
```
    함수가 실행됩니다.
    함수 수행시간: 0.000063 초
```python
@decorator_func
@elapsed
def myfunc():
    print("함수가 실행됩니다.")
```
```python
myfunc()
```
    org_func 가 실행 되기전 입니다.
    함수가 실행됩니다.
    함수 수행시간: 0.000019 초

## 이터레이터(lterator)
- 1돌리고 확인하고 2돌리고 확인하고, ... 를 하고싶을때 사용하는게 이터레이터 이다.
- 나중에 딥러닝할때 사용
## 제너레이터(generator)
## 내장 함수
* 아래는 파이썬에서 제공하는 주요 내장 함수들이다.
### abs()
* 절대값을 리턴하는 함수
### sorted()
* 문자는 알파벳순서대로 숫자는 낮은 순서대로 정렬해주는 함수 
### range()
- range([start],[stop],[step])는 for문과 함께 자주 사용하는 함수이다.
- stop만 필수이고, start,step은 옵션이다.
### zip()
* 동일한 개수로 이루어진 데이터들을 묶어서 리턴하는 함수
```python
# 틀린 사용법
lst1 = [1,2,3]
lst2 = ['a', 'b', 'c']

zip(lst1,lst2)
```
    <zip object at 0x0000018B1C53B1C0>
```python
# 옳은 사용법
lst1 = [1,2,3]
lst2 = ['a', 'b', 'c']

for item in zip(lst1, lst2):
  print(item[0], item[1])
```
    1 a
    2 b
    3 c
### enumerate()
- 위치정보(인덱스값)까지 사용하고 싶다. 할때 사용
```python
for index, name in enumerate(['body', 'foo', 'bar']):
  print(f'{index+1}번째, 이름: {name}')
```

    1번째, 이름: body
    2번째, 이름: foo
    3번째, 이름: bar
### isinstance()
> is -> 이다/아니다 [true/false] / instance -> class , 객체의 친구정도라고 생각하자
- isinstance(object,class)는 첫번째 인수로 객체, 두번째 인수로 클래스를 받는다.
```python
# 이전까지 배원던걸로 표현하는 법
a = 3
str(type(a)) == "<class 'int'>"
```
    True
### min,max
```python
min(3,10) # 작은 수를 리턴함
max(3,7) # 큰 수를 리턴함
```



