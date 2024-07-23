---
title: "[파이썬 기초] 클래스"
description: "파이썬 기초"
date: "2023-10-16"
banner:
  src: "../../images/articles/python/pythonlogo.png"
  alt: "파이썬 기초"
  caption: 'Photo by <u><a href="https://unsplash.com/photos/Nc5Q_CEcY44">Google</a></u>'
categories:
  - "Python"
  - "기초"
keywords:
  - "Python"
  - "기초"
  - "클래스"
---
## 클래스 생성
* 클래스 : 설계도
* 속성: 클래스 내부 변수 = 클래스 내부 변수의 값
* 메소드 : 클래스 내부 함수 / self가 의미하는 바 grandmother 첫번째인자값에 self를 반드시 
```python
class GrandMother: # 클래스 : 설계도
  family = "grandparents" # 속성: 클래스 내부 변수 = 클래스 내부 변수의 값

  def print_self(self): # 메소드 : 클래스 내부 함수 / self가 의미하는 바 grandmother 첫번째 인자값에 self를 반드시 넣어줘야한다.
    print(self) # 거의 공식이다.

LEE = GrandMother() # 인스턴스화(객체 생성)
    
GrandMother.family # 속성 호출
```
    'grandparents'
```python
# 나의 예제 #
class football :
    def __init__(self,spurs = "win") :
        self.spurs = spurs
    def vsLiv(self) :
        print("이겼습니다.")

king = football()
king.vsLiv()
```
    이겼습니다.
* 타입 확인하기
```python
type(LEE)
```
    __main__.GrandMother
```python
type(GrandMother)
```
    type
## 클래스 사용
```python
LEE = GrandMother()

print(GrandMother.family)
# grandparents
GrandMother.print_self()
# 에러 발생
```
* self 는 인스턴스를 얘기한다. LEE 라는 변수에서는 접근 가능 하지만 클래스 에서는 접근이 안된다.
* 클래스는 하나의 설계도이다.

```python
LEE.print_self() # 실행 가능
```
    <__main__.GrandMother object at 0x000001B803A744D0>
```python
LEE = GrandMother() 
```
* GrandMother의 함수 실행 한 이유
    * 파이썬에서 자동적으로 내부적으로 생성함수를 만들어서 위에서 함수를 실행할 수있었다.
```python
class father (GrandMother) :
    FAMILY = "parents"              # 클래스 내에 저장된 값
    def __init__(self,name,age) :   # name, age 는 인스턴스 선언시 꼭 입력해야 하는 속성 다른 곳에서는 다르게 써도 무방하다.
        self.name = name            # def __init__ 함수는 -> 생성자이다.
        self.age = age              
        self.home = "seoul"         # self.home은 인스턴스 선언 시 자동으로 생기는 속성이다.(클래스에는 없다.)
# self 함수는 return를 절대 하면 안된다. 자동으로 된다.
KIM = father()
# 에러 발생 (선언 시 name,age를 입력해야함.)
KIM = father("JI",25)
```
```python
class Person :
    name    = "person name"
    age     = 18

    def __init__(self,name) :
        self.name = name
KI = Person()
```
```python
# 클래스의 속성값
print(f'Person.name: {Person.name} / Person.age: {Person.age}')
```
    Person.name: person name / Person.age: 18
```python
# 인스턴스에서 값 변경
p_instant1 = Person("인스턴트11")

p_instant1.age = 25
```
```python
# 인스턴스의 속성값
print(f'p_instant1.name: {p_instant1.name} / p_instant1.age: {p_instant1.age}')
```

    p_instant1.name: 인스턴트11 / p_instant1.age: 25



```python
# 인스턴스에서 값 변경
p_instant2 = Person("인스턴트22")

# 인스턴스의 속성값
print(f'p_instant2.name: {p_instant2.name} / p_instant2.age: {p_instant2.age}')
```

    p_instant2.name: 인스턴트22 / p_instant2.age: 18



```python
# 클래스의 속성값
print(f'Person.name: {Person.name} / Person.age: {Person.age}')

# 인스턴스 생성을 통해 속성값을 여러번 변경하였지만, 클래스의 속성값은 변화가 없다.
```

    Person.name: person name / Person.age: 18


## 상속(inheritance)


```python
# 부모 클래스
class GrandMother :

    family = "Hello world"
    name = "GrandMother"

    def print_self(self) :
        print(self)
    
    def print_HI():
        print("HI!")
```


```python
# 자식 클래스
class father(GrandMother) :
    name = "father"

    def __init__(self,name,age) :
        self.name = name
        self.age  = age
        self.home = "seoul"
# 아빠의 함수는 3개
```


```python
# 자식의 자식 클래스
class child(father) :
	name = "child"
# 자식의 함수도 3개
```

## Override
부모로부터 받은 메소드 또는 속성을 수정하고 싶을 때 자식 클래스에서 재정의 한다.


```python
class PlayerCharacter:
    def __init__(self,hp=100,exp=0):
        self.hp = hp
        self.exp = exp

    def attack(self):
        print("공격하기")
        self.exp = self.exp + 2

    def defend(self):
        print("방어하기")
        self.exp = self.exp + 1
```


```python
class Wizard(PlayerCharacter): # 상속 받기
    def __init__(self,mp):
        super().__init__() # 부모클래스의 생성자를 실행하겠다.
        self.mp = mp

    def magic_skill(self):
        print("마법 공격하기")
        self.mp = self.mp - 2

    # 메소드 오버라이딩
    def defend(self):
        print("마법사가 방어하기")
        self.exp = self.exp + 3
```


```python
player = Wizard(20)
player.hp , player.mp , player.exp
```




    (100, 20, 0)



## 접근 지정자(Access Specifiers)

### Public 
- 공공화장실이라고 생각하면 된다.  (누구나 이용가능)
- 모든 멤버(속성, 메소드)는 기본적으로 공용입니다. 모든 멤버는 객체 외부에서도 엑세스를 할수있다.

### Private
- 개인화장실이라고 생각하자(나만 이용가능)
- 모든 프라이빗 멤버(속성, 메소드)는 객체 외부에서 엑세스가 불가능합니다.    
- 프라이빗 멤버들은 객체 내부에서만 호출이 가능합니다.


```python
class Student:
    __schoolName = 'XYZ School' # private class attribute

    def __init__(self, name, age):
        self.name=name  # public instance attribute
        self.__age=age # private instance attribute
    def __display(self):  # private method
	    print('This is private method.')
```


```python
# 쪽지문제
# 포유류 (성별/나이/다리)(아기를 낳는다./밥을 먹는다.)
# 개     (성별/나이/다리)(아기를 낳는다./밥을 먹는다.) + (짓는다.,꼬리 흔든다.) > 마르티스 진돗개
# 고양이 (성별/나이/다리)(아기를 낳는다./밥을 먹는다.) + (구르밍, 할퀸다.) 페르시안 먼치킨
class mammal :
    def __init__(self,gender,age,legs) :
        self.gender = gender
        self.age = age
        self.legs = legs
    def action_1(self) :
        print("아기를 낳는다.")
    def action_2(self) :
        print("밥을 먹는다.")

class dog(mammal):
    dog_action_1 = "짓는다."
    dog_action_2 = "꼬리를 흔든다."

class cat(mammal) :
    cat_action_1 = "구르밍한다."
    cat_action_2 = "할퀸다."

class Martis(dog) : 
    name = "Martis"

class Koreandog(dog) :
    name = "Koreandog"

class persian(cat) :
    name = "persian"

class munchkin(cat) :
    name = "munchkin"

```


```python
animal = cat("남자",6,4)
animal.action_1()
```

    아기를 낳는다.



```python
ani = persian("여자",3,4)
ani.name
```




    'persian'



### 쪽지 문제

#### 이동수단 문제


```python
# <이동수단>
# 바퀴수 = 0    # 후진 -> "뒤로 이동"
# 탑승인원 = 0  # 전진 -> "앞으로 이동"

# (오토바이)
# 바퀴수 = 2    # 점프 -> "점프한다."
# 탑승인원 = 1  # 후진 -> 앞바퀴를 들고 후진

# (배)
# 탑승인원 = 4  # 전진 -> "항해 한다."
# 잠수유무      # 잠수 -> 잠수유무 변수가 True면 "잠수한다.", else "잠수 불가"

class transport :
    def __init__(self,wheel=0, passenger=0 ) :
        self.wheel = wheel
        self.passenger = passenger
    
    def back(self) :
        print("뒤로이동")
    def go_front(self) :
        print("앞으로 이동")

class bicycle(transport) :
    def jump(self) :
        print("점프한다.")
    def back(self):
        print("앞바퀴를 들고 후진")

class ship(transport) :
    def __init__(self,submarine=None) :
        self.submarine = submarine
    def go_front(self) :
        print("항해 한다.")
    def diving(self) :
        if self.submarine :     # 아까 여기다가 self.submarine == True 라고 했었는데 이러면 "잠수한다" 만 출력된다.
            print("잠수한다.")
        else :
            print("잠수 불가")

ride_bicycle = bicycle(2,1)
ride_bicycle.wheel , ride_bicycle.passenger



```




    (2, 1)




```python
ride_bicycle.jump()
```

    점프한다.



```python
ride_bicycle.back()
```

    앞바퀴를 들고 후진



```python
ride_ship = ship(False)
ride_ship.passenger = 4
ride_ship.passenger
```




    4




```python
ride_ship.diving()
```

    잠수 불가



```python
ride_ship.go_front()
```

    항해 한다.


#### 직업 문제


```python
# <사람>
# 나이          # 일한다.
# 이름

# (요리사)
# 경력          # 일한다. [경력 > 10 -> 코스요리를 만든다. | else 디저트를 만들다.]
#               # 주문을 받는다. ["{이름}요리사입니다."]

# (경찰)
# Power         # 일한다. [power > 10 -> 깡패를 잡는다. | else 순찰한다.]
#               # 접수 받는다. "무엇을 도와드릴까요??"

class people :
    def __init__(self,age:int,name:str) :
        self.age = age
        self.name = name
    def work(self) :
        print("일한다.")

class chef(people) :
    def __init__(self,age,name,career) :
        super().__init__(age,name)
        self.career = career
    def work(self) :
        if int(self.career) > 10 :
            print("코스요리를 잘 만든다.")
        else :
            print("디저트를 만든다.")
    def order(self) :
        print(f"{self.name} 요리사 입니다.")

class police(people) :
    def __init__(self,age,name,power) :
        super().__init__(age,name)
        self.power = power
    def work(self) :
        if int(self.power) > 10 :
            print("깡패를 잡는다.")
        else :
            print("순찰한다.")
    def recive(self) :
        print("무엇을 도와드릴까요?")

```


```python
best_chef = chef(47,"김최고",11)
best_chef.age , best_chef.name , best_chef.career
```




    (47, '김최고', 11)




```python
best_chef.work()
best_chef.order()
```

    코스요리를 잘 만든다.
    김최고 요리사 입니다.



```python
good_police = police(30,"김순찰",5)
good_police.age , good_police.name , good_police.power
```




    (30, '김순찰', 5)




```python
good_police.work()
good_police.recive()
```

    순찰한다.
    무엇을 도와드릴까요?


#### 포유류 문제


```python
# 포유류 (성별/나이/다리)(아기를 낳는다./밥을 먹는다.)
# 개     (성별/나이/다리)(아기를 낳는다./밥을 먹는다.) + (짓는다.,꼬리 흔든다.) > 마르티스 진돗개
# 고양이 (성별/나이/다리)(아기를 낳는다./밥을 먹는다.) + (구르밍, 할퀸다.) 페르시안 먼치킨
class mammal :
    def __init__(self,gender,age,legs) :
        self.gender = gender
        self.age = age
        self.legs = legs
    def action_1(self) :
        print("아기를 낳는다.")
    def action_2(self) :
        print("밥을 먹는다.")

class dog(mammal):
    dog_action_1 = "짓는다."
    dog_action_2 = "꼬리를 흔든다."

class cat(mammal) :
    cat_action_1 = "구르밍한다."
    cat_action_2 = "할퀸다."

class Martis(dog) : 
    name = "Martis"

class Koreandog(dog) :
    name = "Koreandog"

class persian(cat) :
    name = "persian"

class munchkin(cat) :
    name = "munchkin"

```


```python
animal = cat("남자",6,4)
animal.action_1()
```

    아기를 낳는다.



```python
ani = persian("여자",3,4)
ani.name
```


    'persian'


#### 소수구별 (class 버전)


```python
# 클래스 이용
# 첫번째로 숫자인지 문자인지 구별
# 두번째로 숫자이면 소수 구별하는 함수 만들기
# 마지막으로 소수이면 소수 정수면 정수로 출력하게 한다.
# 0번째로 숫자 입력하는 함수 만들기
# 첫번째 클래스에다가는 숫자인지 문자인지 구별
# 상속 클래스에다가는 정수 소수 판별
    
```


      Cell In[47], line 13


        ex = only_num()


                       ^


    IndentationError: expected an indented block after function definition on line 10




```python
class only_number :
    def __init__(self, answer = input("숫자를 입력하시오")) :
        self.answer = answer

first = only_number()
first.answer
```


    '31'



```python
# class only_number :
#     answer = input("숫자를 입력하시오")

# first = only_number()
# first.answer/
```


    'sd'



```python
class next_number(only_number) :
    def calcul(self):
        if self.answer.isdigit() :
            answer_use = int(self.answer)
            for i in range(2,answer_use) :
                if answer_use % i == 0 :
                    print("정수입니다.")
                    break
            else :
                print("소수입니다.")
        else :
            print("math error")

last_ans = next_number()
last_ans.calcul()



```

    math error



```python
class only_number :
    def __init__(self, answer = input("숫자를 입력하시오")) :
        self.answer = answer

class next_number(only_number) :
    def calcul(self):
        if self.answer.isdigit() :
            answer_use = int(self.answer)
            for i in range(2,answer_use) :
                if answer_use % i == 0 :
                    print("정수입니다.")
                    break
            else :
                print("소수입니다.")
        else :
            print("math error")

last_ans = next_number()

last_ans.answer
last_ans.calcul()



```

    소수입니다.



```python
class only_number :
    answer = input("숫자를 입력하시오")

class next_number(only_number) :
    def calcul(self):
        if self.answer.isdigit() :
            answer_use = int(self.answer)
            for i in range(2,answer_use) :
                if answer_use % i == 0 :
                    print("정수입니다.")
                    break
            else :
                print("소수입니다.")
        else :
            print("math error")

last_ans = next_number()

last_ans.answer
last_ans.calcul()



```

    소수입니다.


## 복습


```python
# 나의 예제 #
class football :
    def __init__(self,spurs = "win") :
        self.spurs = spurs
    def vsLiv(self) :
        print("이겼습니다.")

king = football()
king.vsLiv()
```

    이겼습니다.



```python
# 상속 예제를 만들어보자 + super()를 포함해서 #
# <기본정보>
# 이름          # 키
# 나이          # 몸무게
# (학생정보)
# 학번      # 학점     # 학년
# (교사정보)
# 교직원번호 # 월급     # 년차
class basic_information :
    def __init__(self , name:str , height:float , age:int , weight:float) :
        self.name = name
        self.height = height
        self.age = age
        self.weight = weight
    def basic(self) :
        print(f"{self.name}의 기본정보 입니다.\n키 : {self.height}cm 나이 : {self.age}살 몸무게 : {self.weight}kg")

class student(basic_information) :
    def __init__(self , name:str , height:float , age:int , weight:float , st_id = '00-0000' , m_point = 50 , grade = 3) :
        super().__init__(name,height,age,weight)                                               # st_id만 정의 해주면 뒤에서 오류가 난다 그래서 
        self.st_id = st_id                                                                      # 뒤에 오는 것도 해줘야 한다.
        self.m_point = m_point
        self.grade = grade
# 학번을 잘못 입력시 오류메세지가 나오도록 해보자
    def st_error(self) :
        if self.st_id[2] != "-" :
            print("학번의 3번째 자리에는 '-'가 와야합니다.")
        elif len(self.st_id) != 7 :
            print("학번의 자리수가 맞는지 확인해보세요")
        elif int(self.st_id[:2]) != self.grade :
            print("학번의 학년자리가 맞는지 확인해보세요")
        else :
            print("옳바른 학번입니다! ^^")

class teacher(basic_information) :
    def __init__(self , name:str , height:float , age:int , weight:float , te_id = '00-0000' , salary = 50 , long = 3) :
        super().__intit__(name,height,age,weight)                                               # st_id만 정의 해주면 뒤에서 오류가 난다 그래서 
        self.te_id = te_id                                                                      # 뒤에 오는 것도 해줘야 한다.
        self.salary = salary
        self.long = long
```


```python
Kim_student = student("김학생",170.0,18,67.7,"02-1234",15,11)
Kim_student.name , Kim_student.height , Kim_student.age , Kim_student.weight , Kim_student.st_id , Kim_student.m_point , Kim_student.grade
```




    ('김학생', 170.0, 18, 67.7, '02-1234', 15, 11)




```python
# 단순한 호기심 #
# str으로 설정한 값을 int로 타입변경이 가능할까?
int(Kim_student.st_id)
```


    ---------------------------------------------------------------------------

    ValueError                                Traceback (most recent call last)

    c:\Python study\day5\day5.ipynb Cell 62 line 1
    ----> <a href='vscode-notebook-cell:/c%3A/Python%20study/day5/day5.ipynb#Y134sZmlsZQ%3D%3D?line=0'>1</a> int(Kim_student.st_id)


    ValueError: invalid literal for int() with base 10: '02-1234'



```python
abc = Kim_student.st_id
type(abc)
```




    str




```python
int(abc)
```


    ---------------------------------------------------------------------------

    ValueError                                Traceback (most recent call last)

    c:\Python study\day5\day5.ipynb Cell 64 line 1
    ----> <a href='vscode-notebook-cell:/c%3A/Python%20study/day5/day5.ipynb#Y136sZmlsZQ%3D%3D?line=0'>1</a> int(abc)


    ValueError: invalid literal for int() with base 10: '02-1234'



```python
Kim_student.st_error()
```

    학번의 학년자리가 맞는지 확인해보세요


### Private
모든 프라이빗 멤버(속성, 메소드)는 객체 외부에서 엑세스가 불가능합니다.    
프라이빗 멤버들은 객체 내부에서만 호출이 가능합니다.


```python
class Student:
    __schoolName = 'XYZ School' # private class attribute

    def __init__(self, name, age):
        self.name=name  # public instance attribute
        self.__age=age # private instance attribute
    
    def __display(self):  # private method
        print(f'This is private method. of {self.__schoolName}')
    
    def get_display(self):
        self.__display()
```


```python
# 일단 기본적인 private를 사용할때는 '__'를 붙여서 사용한다.
# 프라이빗 함수는 바로 외부로 빼는 건 불가능하다.
stu = Student("김홍",20)
stu.name
```




    '김홍'




```python
stu.age
```


    ---------------------------------------------------------------------------

    AttributeError                            Traceback (most recent call last)

    c:\Python study\day5\day5.ipynb Cell 69 line 1
    ----> <a href='vscode-notebook-cell:/c%3A/Python%20study/day5/day5.ipynb#Y145sZmlsZQ%3D%3D?line=0'>1</a> stu.age


    AttributeError: 'Student' object has no attribute 'age'



```python
# 프라이빗 함수 외부로 도출 할려면 퍼블릭 함수를 만들고 그 안에 실행하고 싶은 프라이빗 함수를 만들면 된다.
stu.get_display()
```

    This is private method. of XYZ School


## [Magic Methods](https://www.tutorialsteacher.com/python/magic-methods-in-python)
- 메소드 명이 두개의 언더바로 감싸져 있다.
- 파이썬의 다양한 내장함수들이 클래스의 매직 메소드들을 호출하여 결과를 만들어 낸다.


```python
class example :
    def a_first(self) :
        print("첫번쨰입니다.")
    def a_second(self) :
        print("두번째입니다.")
    def a_third(self) :
        print("세번째입니다.")
    def __call__(self) :
        self.a_first()
        self.a_second()
        self.a_third()



```


```python
start = example()
start()
```

    첫번쨰입니다.
    두번째입니다.
    세번째입니다.


### counter


```python
# 2에서10 사이에서 한 숫자가 랜덤으로 나와서 1~1000 사이에 배수의 갯수를 찾아라 (클래스 함수를 이용해서)
import random
from collections import Counter 
# class problem :
#     def __init__(self,random_num = random.randint(2,10)) :
#         self.random_num = random_num

class sec_problem :
    def __init__(self,random_num = random.randint(2,10),condition = range(1,1001),help = 0,help_2 = []) :
        self.random_num = random_num
        self.condition = condition
        self.help = help
        self.help_2 = help_2
    
    def result(self) :
        for i in self.condition :
            if i % self.random_num == 0 :
                self.help += 1
            else :
                continue
        print(f"컴퓨터의 숫자 픽 : {self.random_num}\n1~1000 사이의 배수의 갯수 : {self.help}")
    def hard_result(self) :
        for i in self.condition :
            if i % self.random_num == 0 :
                self.help_2.append(i)
            else :
                continue
        print(f"컴퓨터의 숫자 픽 : {self.random_num}\n1~1000 사이의 배수의 갯수 : {Counter(self.help_2)}")
```


```python
answer = sec_problem()
answer.hard_result()

```

    컴퓨터의 숫자 픽 : 2
    1~1000 사이의 배수의 갯수 : Counter({2: 2, 4: 2, 6: 2, 8: 2, 10: 2, 12: 2, 14: 2, 16: 2, 18: 2, 20: 2, 22: 2, 24: 2, 26: 2, 28: 2, 30: 2, 32: 2, 34: 2, 36: 2, 38: 2, 40: 2, 42: 2, 44: 2, 46: 2, 48: 2, 50: 2, 52: 2, 54: 2, 56: 2, 58: 2, 60: 2, 62: 2, 64: 2, 66: 2, 68: 2, 70: 2, 72: 2, 74: 2, 76: 2, 78: 2, 80: 2, 82: 2, 84: 2, 86: 2, 88: 2, 90: 2, 92: 2, 94: 2, 96: 2, 98: 2, 100: 2, 102: 2, 104: 2, 106: 2, 108: 2, 110: 2, 112: 2, 114: 2, 116: 2, 118: 2, 120: 2, 122: 2, 124: 2, 126: 2, 128: 2, 130: 2, 132: 2, 134: 2, 136: 2, 138: 2, 140: 2, 142: 2, 144: 2, 146: 2, 148: 2, 150: 2, 152: 2, 154: 2, 156: 2, 158: 2, 160: 2, 162: 2, 164: 2, 166: 2, 168: 2, 170: 2, 172: 2, 174: 2, 176: 2, 178: 2, 180: 2, 182: 2, 184: 2, 186: 2, 188: 2, 190: 2, 192: 2, 194: 2, 196: 2, 198: 2, 200: 2, 202: 2, 204: 2, 206: 2, 208: 2, 210: 2, 212: 2, 214: 2, 216: 2, 218: 2, 220: 2, 222: 2, 224: 2, 226: 2, 228: 2, 230: 2, 232: 2, 234: 2, 236: 2, 238: 2, 240: 2, 242: 2, 244: 2, 246: 2, 248: 2, 250: 2, 252: 2, 254: 2, 256: 2, 258: 2, 260: 2, 262: 2, 264: 2, 266: 2, 268: 2, 270: 2, 272: 2, 274: 2, 276: 2, 278: 2, 280: 2, 282: 2, 284: 2, 286: 2, 288: 2, 290: 2, 292: 2, 294: 2, 296: 2, 298: 2, 300: 2, 302: 2, 304: 2, 306: 2, 308: 2, 310: 2, 312: 2, 314: 2, 316: 2, 318: 2, 320: 2, 322: 2, 324: 2, 326: 2, 328: 2, 330: 2, 332: 2, 334: 2, 336: 2, 338: 2, 340: 2, 342: 2, 344: 2, 346: 2, 348: 2, 350: 2, 352: 2, 354: 2, 356: 2, 358: 2, 360: 2, 362: 2, 364: 2, 366: 2, 368: 2, 370: 2, 372: 2, 374: 2, 376: 2, 378: 2, 380: 2, 382: 2, 384: 2, 386: 2, 388: 2, 390: 2, 392: 2, 394: 2, 396: 2, 398: 2, 400: 2, 402: 2, 404: 2, 406: 2, 408: 2, 410: 2, 412: 2, 414: 2, 416: 2, 418: 2, 420: 2, 422: 2, 424: 2, 426: 2, 428: 2, 430: 2, 432: 2, 434: 2, 436: 2, 438: 2, 440: 2, 442: 2, 444: 2, 446: 2, 448: 2, 450: 2, 452: 2, 454: 2, 456: 2, 458: 2, 460: 2, 462: 2, 464: 2, 466: 2, 468: 2, 470: 2, 472: 2, 474: 2, 476: 2, 478: 2, 480: 2, 482: 2, 484: 2, 486: 2, 488: 2, 490: 2, 492: 2, 494: 2, 496: 2, 498: 2, 500: 2, 502: 2, 504: 2, 506: 2, 508: 2, 510: 2, 512: 2, 514: 2, 516: 2, 518: 2, 520: 2, 522: 2, 524: 2, 526: 2, 528: 2, 530: 2, 532: 2, 534: 2, 536: 2, 538: 2, 540: 2, 542: 2, 544: 2, 546: 2, 548: 2, 550: 2, 552: 2, 554: 2, 556: 2, 558: 2, 560: 2, 562: 2, 564: 2, 566: 2, 568: 2, 570: 2, 572: 2, 574: 2, 576: 2, 578: 2, 580: 2, 582: 2, 584: 2, 586: 2, 588: 2, 590: 2, 592: 2, 594: 2, 596: 2, 598: 2, 600: 2, 602: 2, 604: 2, 606: 2, 608: 2, 610: 2, 612: 2, 614: 2, 616: 2, 618: 2, 620: 2, 622: 2, 624: 2, 626: 2, 628: 2, 630: 2, 632: 2, 634: 2, 636: 2, 638: 2, 640: 2, 642: 2, 644: 2, 646: 2, 648: 2, 650: 2, 652: 2, 654: 2, 656: 2, 658: 2, 660: 2, 662: 2, 664: 2, 666: 2, 668: 2, 670: 2, 672: 2, 674: 2, 676: 2, 678: 2, 680: 2, 682: 2, 684: 2, 686: 2, 688: 2, 690: 2, 692: 2, 694: 2, 696: 2, 698: 2, 700: 2, 702: 2, 704: 2, 706: 2, 708: 2, 710: 2, 712: 2, 714: 2, 716: 2, 718: 2, 720: 2, 722: 2, 724: 2, 726: 2, 728: 2, 730: 2, 732: 2, 734: 2, 736: 2, 738: 2, 740: 2, 742: 2, 744: 2, 746: 2, 748: 2, 750: 2, 752: 2, 754: 2, 756: 2, 758: 2, 760: 2, 762: 2, 764: 2, 766: 2, 768: 2, 770: 2, 772: 2, 774: 2, 776: 2, 778: 2, 780: 2, 782: 2, 784: 2, 786: 2, 788: 2, 790: 2, 792: 2, 794: 2, 796: 2, 798: 2, 800: 2, 802: 2, 804: 2, 806: 2, 808: 2, 810: 2, 812: 2, 814: 2, 816: 2, 818: 2, 820: 2, 822: 2, 824: 2, 826: 2, 828: 2, 830: 2, 832: 2, 834: 2, 836: 2, 838: 2, 840: 2, 842: 2, 844: 2, 846: 2, 848: 2, 850: 2, 852: 2, 854: 2, 856: 2, 858: 2, 860: 2, 862: 2, 864: 2, 866: 2, 868: 2, 870: 2, 872: 2, 874: 2, 876: 2, 878: 2, 880: 2, 882: 2, 884: 2, 886: 2, 888: 2, 890: 2, 892: 2, 894: 2, 896: 2, 898: 2, 900: 2, 902: 2, 904: 2, 906: 2, 908: 2, 910: 2, 912: 2, 914: 2, 916: 2, 918: 2, 920: 2, 922: 2, 924: 2, 926: 2, 928: 2, 930: 2, 932: 2, 934: 2, 936: 2, 938: 2, 940: 2, 942: 2, 944: 2, 946: 2, 948: 2, 950: 2, 952: 2, 954: 2, 956: 2, 958: 2, 960: 2, 962: 2, 964: 2, 966: 2, 968: 2, 970: 2, 972: 2, 974: 2, 976: 2, 978: 2, 980: 2, 982: 2, 984: 2, 986: 2, 988: 2, 990: 2, 992: 2, 994: 2, 996: 2, 998: 2, 1000: 2})



```python
answer.result()
```

    컴퓨터의 숫자 픽 : 2
    1~1000 사이의 배수의 갯수 : 500



```python
# counter를 써볼려면 단어갯수 세는 문제로 풀어봐야지 위에 문제가 아니라
```


```python
from collections import Counter
```


```python
lst = ['aa', 'aa', 'bb', 'aa', 'bb', 'ee', 'tt']
```


```python
counter = Counter(lst)
counter
```




    Counter({'aa': 3, 'bb': 2, 'ee': 1, 'tt': 1})




```python
dict(counter)
```




    {'aa': 3, 'bb': 2, 'ee': 1, 'tt': 1}




```python
list(counter.elements())
# element 는 조건에 일치하는 가장 첫번째 요소를 반환
# elements는 조건에 일치하는 모든 요소를 list 형태로 반환
```




    ['aa', 'aa', 'aa', 'bb', 'bb', 'ee', 'tt']




```python
list(counter)
```




    ['aa', 'bb', 'ee', 'tt']




```python
counter.elements()
```




    <itertools.chain at 0x1a96ef92ec0>



숫자가 가장 큰 인자를 찾는 메서드  
`most_common(k)`: k번째까지 큰 인자를 리턴해준다.


```python
counter.most_common(1)
```




    [('aa', 3)]




```python
counter.most_common(2)
```




    [('aa', 3), ('bb', 2)]




```python
example = [234,543,634,654,76,345,1325,457]
example.most_common(3)
```


    ---------------------------------------------------------------------------

    AttributeError                            Traceback (most recent call last)

    c:\Python study\day5\day5.ipynb Cell 89 line 2
          <a href='vscode-notebook-cell:/c%3A/Python%20study/day5/day5.ipynb#Y222sZmlsZQ%3D%3D?line=0'>1</a> example = [234,543,634,654,76,345,1325,457]
    ----> <a href='vscode-notebook-cell:/c%3A/Python%20study/day5/day5.ipynb#Y222sZmlsZQ%3D%3D?line=1'>2</a> example.most_common(3)


    AttributeError: 'list' object has no attribute 'most_common'



```python
a_a = {'a' : 1 , "b" : 2 , "c" : 3}
a_a.most_common(2)
```


    ---------------------------------------------------------------------------

    AttributeError                            Traceback (most recent call last)

    c:\Python study\day5\day5.ipynb Cell 90 line 2
          <a href='vscode-notebook-cell:/c%3A/Python%20study/day5/day5.ipynb#Y223sZmlsZQ%3D%3D?line=0'>1</a> a_a = {'a' : 1 , "b" : 2 , "c" : 3}
    ----> <a href='vscode-notebook-cell:/c%3A/Python%20study/day5/day5.ipynb#Y223sZmlsZQ%3D%3D?line=1'>2</a> a_a.most_common(2)


    AttributeError: 'dict' object has no attribute 'most_common'



```python
# 그럼 most_common(k)는 counter 하고 만 쓸수 있는거야?
```

### 수업 전 복습문제


```python
# 최대값 , 최솟값, 중간값, 출력
# 리스트 길이가 7~10 이고 안에 숫자가 range(1,10)에서 랜덤 값으로 가져오는
# 리스트 길이가 홀수인지 짝수 인지 구별
# 최소값 구하는 함수
# 최대값 구하는 함수
# 중간값 구하는 함수
class a_solve :
    def __init__(self,a_lst=[]):
        self.a_lst = a_lst
    def a_first(self) :
        if len(self.a_lst) % 2 == 0 :
            print("리스트의 길이는 짝수입니다.")
        else :
            print("리스트의 길이는 홀수입니다.")
    def a_min(self) :
        self.a_lst.sort()
        print(f"최소값 : {self.a_lst[0]}")
    def a_max(self) : 
        self.a_lst.sort()
        print(f"최대값 : {self.a_lst[-1]}")
    def a_mid(self) :
        self.a_lst.sort()
        a_int = len(self.a_lst)
        
        # 인덱스값안에서 나누기를 하면 float 값으로 나오기 때문에 인덱스를 실행하기전에 int()묶어주거나 // 몫만 나오게 한다.
        if len(self.a_lst) % 2 == 0 :
            print(f"중간값 : {(self.a_lst[int(a_int/2)] + self.a_lst[int(a_int/2-1)])/2}")
        else :
            print(f"중간값 : {(self.a_lst[int((a_int-1)/2)]/2)}")
    def __call__(self) :
        self.a_first()
        self.a_min()
        self.a_max()
        self.a_mid()
```


```python
# 리스트의 길이가 짝수일때
result = a_solve([1,2,3,4,5,3,4,2,5,1])
result()
```

    리스트의 길이는 짝수입니다.
    최소값 : 1
    최대값 : 5
    중간값 : 3.0



```python
# 리스트의 길이가 홀수일때
result = a_solve([1,2,4,8,9,7,5,3,1])
result()
```

    리스트의 길이는 홀수입니다.
    최소값 : 1
    최대값 : 9
    중간값 : 2.0



```python

```
