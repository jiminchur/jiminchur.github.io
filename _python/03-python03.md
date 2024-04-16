---
title:  "함수"
permalink: /python/python03/
excerpt: ""
toc: true
---
# 수업전 전날 복습

```python
# 가위 바위 보 문제 #
# 나의 풀이 #
import random
com = ["가위","바위","보"]
cho = random.randint(0,2) 
a_com = com[cho]
me = input("가위바위보!! : ")
if me not in com :
    print("오류 가위바위보중에 하나만 입력하시오")
else :
    if me == a_com : 
        print(f"컴퓨터는 {a_com}\n비겼습니다.")
    elif (me == "가위", a_com == "보")  or (me == "바위", a_com == "가위") :
        print(f"컴퓨터는 {a_com}\n사용자의 승리 입니다.")
    elif (me == "가위", a_com == "바위") or (me == "바위",a_com == "보") :
        print(f"컴퓨터는 {a_com}\n컴퓨터가 이겼습니다.")
```

    컴퓨터는 바위
    사용자의 승리 입니다.


# 함수

## 함수(Function) 정의
- 함수는 입력값에 따라 출력값을 만들어 내는 '블랙박스'와 같다.
- 함수란 하나의 특별한 목적의 작업을 수행하기 위해 독립적으로 설계된 코드의 집합으로 정의할 수 있다.
<용어>
- 입력 변수(함수에 입력하는 변수) :
    > 다른 이름으로 파라미터라고도 함
- 출력 변수(함수 결과):
    > 다른 이름으로 리턴 값이라고도 함

## 함수를 사용하는 이유
- 함수를 사용하는 가장 큰이유는 반복적인 프로그래밍을 피할 수 있기 때문이다.
-

## 함수 구조
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

## 함수 생성

### 입력 변수 X , 출력 변수 X

### 입력 변수 O , 출력 변수 X

### 입력 변수 X , 출력 변수 O

### 입력 변수 O , 출력 변수 O

## 변수의 사용범위(Scope)
- 전역변수(global) : 함수  밖에서 만들어진 변수(어디서든 사용 가능)
- 지역변수(local) : 함수 내부에서 만들어진 지역변수는 함수 내에서만 사용가능


```python
# 전역변수에 대한 설명 #
a_int = 20
def a_def() :
    print(f"{a_int}는 전역변수이다.")
a_def()
```

    20는 전역변수이다.


## 함수 입력 변수

### 디폴트 파라미터
- 입력변수값이 없는 경우에 기본값(디폴트)을 사용한다.
- 디폴트 파라미터를 적용하여 입력변수를 넣지 않았지만, 함수가 정상적으로 실행되었다.
- 디폴트 파라미터에 None을 사용할 수 있다.
- 디폴트 파라미터는 다른 파라미터보다 나중에 넣어줘야 한다.


```python
# 입력변수값이 없는 경우에 기본값(디폴트)을 사용한다.
def a_ex(a,b) :
    return a+b
# 입력변수를 넣지 않아서 오류가 발생함
a_ex()
```


    ---------------------------------------------------------------------------

    TypeError                                 Traceback (most recent call last)

    c:\Python study\day4\day4.ipynb Cell 14 line 5
          <a href='vscode-notebook-cell:/c%3A/Python%20study/day4/day4.ipynb#X36sZmlsZQ%3D%3D?line=2'>3</a>     return a+b
          <a href='vscode-notebook-cell:/c%3A/Python%20study/day4/day4.ipynb#X36sZmlsZQ%3D%3D?line=3'>4</a> # 입력변수를 넣지 않아서 오류가 발생함
    ----> <a href='vscode-notebook-cell:/c%3A/Python%20study/day4/day4.ipynb#X36sZmlsZQ%3D%3D?line=4'>5</a> a_ex()


    TypeError: a_ex() missing 2 required positional arguments: 'a' and 'b'



```python
# 디폴트 파라미터르 적용하여 입력변수를 넣지 않았지만, 함수가 정상적으로 출력됨
def a_ex(a = 3,b = 3) :
    return a+b
a_ex()
```




    6



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
# 람다함수를 다시 풀어서 써 보기 #

# square_lambda = lambda x:x**2  
# square_lambda(3)

def square_lambda(X):
    return X**2
square_lambda(3)
```




    9




```python

```


```python
# 람다함수를 다시 풀어서 써 보기 #

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
# 내부함수를 함수내에서 실행한다.라는 뜻
# 일반적인 함수안에 함수이다.
def func_out(out_param):
    a = 10
    def func_in():
      return a + out_param 
    return func_in()
```


```python
# 외부에서 내부함수를 실행할 수 있다.
# 이게 클로져이다.
def func_out(out_param):
    a = 10
    def func_in():
      return a + out_param 
    return func_in
```

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



```python
call_func(3, add_three)
```


    6


## Decorate
- 코들르 변경하지 않고 기능을 추가하거나 수
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
아래는 파이썬에서 제공하는 주요 내장 함수들이다.

### abs()
절대값을 리턴하는 함수

### sorted()

### range()
- range([start],[stop],[step])는 for문과 함께 자주 사용하는 함수이다.
- stop만 필수이고, start,step은 옵션이다.

### zip()
동일한 개수로 이루어진 데이터들을 묶어서 리턴하는 함수


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
    is -> 이다/아니다 [true/false] / instance -> class , 객체의 친구정도라고 생각하자
- isinstance(object,class)는 첫번째 인수로 객체, 두번째 인수로 클래스를 받는다.


```python
# 이전까지 배원던걸로 표현하는 법
a = 3
str(type(a)) == "<class 'int'>"
```




    True




```python
min(3,10) # 작은 수를 리턴함
max(3,7) # 큰 수를 리턴함
```

## 문제

```
리스트를 인자로 받아 Min-Max Scaling 적용하여 리스트로 반환하는 함수를 만드시오.
```
$$
\frac{x-Min(X)}{Max(X)-Min(X)}
$$ 


```python
answer = []
def scal(lst) :
    for i in lst :
        sub = (i - min(lst))/(max(lst)-min(lst))
        answer.append(sub)
    return answer
scal([1,2,3,4,5])
```




    [0.0, 0.25, 0.5, 0.75, 1.0]



```
리스트를 인자로 받아 평균을 구하는 함수와 표준편차를 구하는 함수를 각각 구현하세요.
```

$$
\mu = \frac{1}{N}\sum_{i=1}^{N}x_i
$$

$$
\sigma^{2} = \frac{1}{N}\sum_{i=1}^{N}(x_i - \mu)^{2}
$$


```python
# 평균
# def a_first(lst) :
#    return sum(lst)/len(lst)

# 표준편차
sub = 0
def a_second(lst2) :
    for i in lst2 :
        sub += (i - sum(lst2)/len(lst2))**2
    return sub/len(lst2)
a_second([1,2,3,4,5,6])
```


    ---------------------------------------------------------------------------

    UnboundLocalError                         Traceback (most recent call last)

    c:\Python study\day4\day4.ipynb Cell 57 line 1
         <a href='vscode-notebook-cell:/c%3A/Python%20study/day4/day4.ipynb#Y154sZmlsZQ%3D%3D?line=9'>10</a>     return sub/len(lst2)
         <a href='vscode-notebook-cell:/c%3A/Python%20study/day4/day4.ipynb#Y154sZmlsZQ%3D%3D?line=10'>11</a> # a_first([1,2,3,4,5,6])  , 
    ---> <a href='vscode-notebook-cell:/c%3A/Python%20study/day4/day4.ipynb#Y154sZmlsZQ%3D%3D?line=11'>12</a> a_second([1,2,3,4,5,6])


    c:\Python study\day4\day4.ipynb Cell 57 line 9
          <a href='vscode-notebook-cell:/c%3A/Python%20study/day4/day4.ipynb#Y154sZmlsZQ%3D%3D?line=6'>7</a> def a_second(lst2) :
          <a href='vscode-notebook-cell:/c%3A/Python%20study/day4/day4.ipynb#Y154sZmlsZQ%3D%3D?line=7'>8</a>     for i in lst2 :
    ----> <a href='vscode-notebook-cell:/c%3A/Python%20study/day4/day4.ipynb#Y154sZmlsZQ%3D%3D?line=8'>9</a>         sub += (i - sum(lst2)/len(lst2))**2
         <a href='vscode-notebook-cell:/c%3A/Python%20study/day4/day4.ipynb#Y154sZmlsZQ%3D%3D?line=9'>10</a>     return sub/len(lst2)


    UnboundLocalError: cannot access local variable 'sub' where it is not associated with a value


```
다음의 리스트에서 최대값이 위치한 인덱스를 반환하는 함수와
최소값이 위치한 인덱스를 반환하는 함수를 작성하세요.
data = [80,70,60,99,87,86]

def argmax(lst):
    code context

def argmin(lst):
    code context
```


```python

```

```
start , end 값을 입력 받아 리스트를 반환하는 함수를 생성하시오.

ex)
arange(1,5) -> [1,2,3,4]
arange(5) -> [0,1,2,3,4]  # end값 생략된경우
```


```python

```

### 소수구별


```python
try:
    answer = input("숫자를 입력해주세요: ")
    answer = int(answer)
    assert answer >=2 # 입력값이 2보다 작으면 오류 발생 

    for i in range(2, answer):
        # x가 해당 수로 나누어떨어진다면
        if answer % i == 0:
            print("소수가 아닙니다.")
            break
    else:
        print("소수입니다.")

except:
    print("math error")
```


```python
# 위에 있는걸 함수로 표현하기
def a_def(answer) :
    try:
        answer = int(answer)
        assert answer >=2 

        for i in range(2, answer):
            if answer % i == 0:
                print("소수가 아닙니다.")
                break
        else:
            print("소수입니다.")

    except:
        print("math error")
a_answer = input("숫자를 입력해주세요: ")
a_def(a_answer)
```

    소수가 아닙니다.


### UP&Down 숫자 맞추기


```python
# 1~100까지 랜덤한 숫자 가져오기
import random
com_int = random.randint(1,100)
com_int
```




    59




```python
def aa_swer() :
    try_ti = 1
    # 반복문을 사용해서 틀려도 계속 시도할수 있도록 함
    while True :
        try :
            # com_int와의 숫자비교를 위해 int로 감싸줌
            my_answer = int(input("1~100까지의 숫자중 하나를 입력하시오. :"))
            # if문을 이용한 정답비교
            if my_answer == com_int :
                print(f"정답입니다.\n정답:{com_int}\n시도횟수:{try_ti}")
                # 정답이므로 멈춰준다.
                break
            elif my_answer < com_int :
                print("UP")
                try_ti += 1
                # 틀렸으므로 계속해준다.
                continue
            elif my_answer > com_int :
                print("Down")
                try_ti += 1
                # 틀렸으므로 계속해준다.
                continue
        # 위에서 my_answer를 int로 감싸줬기 때문에 str를 입력하면 오류가난다. 그래서 예외처리로 하나 만들어 줬다.
        except :
            print("1~100 사이 숫자만 입력해주세요")
aa_swer()


```

    UP
    UP
    Down
    Down
    1~100 사이 숫자만 입력해주세요
    정답입니다.
    정답:59
    시도횟수:5


### 방탈출 게임



```python
# 비밀번호는 3자리이다.
# 자동 비밀번호 생성하기
# 우선 비밀번호는 첫자리부터 0이 나올수 있으므로 str감싸준다.
import random
com = str(random.randint(0,9)) + str(random.randint(0,9)) + str(random.randint(0,9))
com

```




    '755'




```python
# 비밀번호 입력값만들기
# while문으로 틀리면 다시 시도하게하기
# if 문으로 정답비교하기
# 숫자가 아닌 문자로 입력하면 숫자로 입력하라고 하기
def sol() :
    try_ti = 1
    while True :
        my_answer = input("비밀번호를 입력하시오 : ")
        if com ==  my_answer :
            print(f"정답입니다.\n비밀번호는{com}\n총시도횟수는{try_ti}")
            break
        elif len(my_answer) != 3 :
            print("정답은 세자리입니다.")
        elif not answer.isdigit() :
            print("입력오류 숫자만 입력하세요!")
        else :
            print(f"{my_answer} : 틀렸습니다.\n시도횟수는{try_ti}")
            try_ti += 1
sol()
# 이풀이는 오류값에대한 해결책이 필요하다.
# 잘못된 풀이
```

    ㅁㄴㅇ : 틀렸습니다.
    시도횟수는1
    정답은 세자리입니다.
    댜러ㅑ : 틀렸습니다.
    시도횟수는2
    정답입니다.
    비밀번호는755
    총시도횟수는3



```python
# 남의 풀이 응용 #
t_true = True
result = ""

def sool(answer) :
    if answer == com :
        return("정답",False)
    elif not answer.isdigit() :
        return("입력값오류! 다시시도하세요.",True)
    elif len(answer) != 3 :
        return("3자리 입니다.다시시도하세요.",True)
    else :
        return("틀렸습니다.다시시도하세요.",True)

while t_true :
    answer = input("정답을 입력하시오. : ")
    result , t_true = sool(answer)
    print(f"{answer} : {result}")

```

    755 : 정답


### 숫자세기 알고리즘


```python
# 나의 풀이 #
def a_def(ran) :
    a_count = 0
    for i in ran :
        if "8" not in str(i) :
            a_count += 1
    return a_count


a_def(range(10000))
```




    6561




```python
# 다른 문제 내가 새로 각색한 # 
# 0~9999 까지 랜덤한 숫자가 나오는데 사용자가 입력한 한자리 숫자가 0~9999 범위내에서 포함되지 않는 수
import random
com_int = random.randint(0,9999)

def you(answer) :
    a_count = 0
    for i in range(10000) :
        if str(answer) not in str(i) :
            a_count += 1
    return a_count

answer_1 = input("한자리 숫자만 입력하시오. : ")
you(answer_1)

```




    6561


