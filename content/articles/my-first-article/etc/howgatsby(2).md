---
title: "[Gatsby / Github Blog] gatsby-theme-portfolio-minimal 폴더 상세 정리해보기 (2)"
description: "[Gatsby / Github Blog] gatsby-theme-portfolio-minimal 폴더 상세 정리해보기 (2)"
date: "2024-07-07"
banner:
  src: "../../images/articles/howgatsby(1)/Gatsby.png"
  alt: "[Gatsby / Github Blog] gatsby-theme-portfolio-minimal 폴더 상세 정리해보기 (2)"
  caption: 'Photo by <u><a href="https://unsplash.com/photos/Nc5Q_CEcY44">Gatsby</a></u>'
categories:
  - "ALL"
  - "Blog"
keywords:
  - "Gitub Blog"
  - "Gatsby"
  - "jekyll"
  - "상세 내용"
  - "gatsby-theme-portfolio-minimal"
---

## 🥳 Gatsby로 Github Blog 개시 완료하다!!
![This is the alt tag.](../../images/articles/howgatsby(1)/nowblog_img.png "Now My Github Blog that use Gatsby")
완전히 이전을 완료하였고, 현재 바뀐 내 블로그 모습이다. 이제는 내껄로 모든걸 수정을 해야한다. 기존에 위치에서 내가 쓸 것들만 남기고, 필요한건 추가 해야한다. ***gatsby-theme-portfolio-minimal*** 이 테마 자체가 아직 많이 사용하는 것 같지가 않다. 그래서 혹시라도 사용하실 분이 있다는 가정하에 그리고 내가 기록을 남기기 위해 블로그 글로 작성하기로 했다.

## 🤔 우리가 집중해서 봐야하는 폴더, 파일들
우리가 주요하게 사용하게될 폴더는 content폴더이다. 그중에서 우선 sections 폴더를 먼저 보겠다.
```
content
    └── sections
    │ └── about
    │     └── about.md # has to be Markdown
    │ └── contact
    │     └── contact.json # has to be JSON
    │ └── hero
    │     └── hero.json # has to be JSON
    │ └── interests
    │     └── interests.json # has to be JSON
    │ └── legal
    │     └── imprint.md # has to be Markdown
    │ └── projects
    │     └── projects.json # has to be JSON
```
여기서 거의 메인 홈페이지의 글들을 처리한다고 봐도 무방하다. about폴더부터 어디를 다루는지 살펴보겠다.

### about/about.md
about 폴더 안에는 about.md로 마크다운 파일이 들어있다. 코드를 보게되면 다음과 같다. 
```
---
imageSrc: "../../images/charles-deluvio-DgoyKNgPiFQ-unsplash.jpg"
imageAlt: "About Gatsby Theme Portfolio Minimal"
---

Portfolio Minimal is a Gatsby Theme that creates outstanding one-pages portfolio within minutes!

It has predefined sections for your bio, skills, projects, and contact details. If you are a writer on Medium, you can integrate your latest articles in a distinct section as well. While building the theme, I tried to keep the setup as simple as possible while keeping everything configurable if you like to.

Using theme composition, you can easily customize the CSS theme to your own preferences - e.g. change colors, fonts, etc.

Last but not least, it has some cool features you can opt-in to: Dark Mode, Splash Screen, Cookie Banner, and more to find out :)

Photo by <a href="https://unsplash.com/@charlesdeluvio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="nofollow noopener noreferrer" aria-label="External Link"><u>Charles Deluvio</u></a> on Unsplash
```
그리고 다음 사진은 이 md파일이 적용되는 위치이다.
![스크린샷](../../images/articles/howgatsby(1)/about_md.png)
***imageAlt*** 부분이 글의 최상단 제목같은 부분이 되는거 같고 ***imageSrc*** 이부분이 이미지가 적용되는 부분인거 같다.

### contact/contact.json
다음 살펴볼 파일은 contact폴더 안에 contact.json 폴더 이다. 적용되는 위치랑 코드를 살펴보며서 설명하겠다.
```
{
  "name": "DataEngineer Ji Min Chur",
  "email": "ttlcc1364@gmail.com",
  "description": "If you have any problems with this Blog, create an issue in the GitHub repository.",
  "image": {
    "src": "../../images/main_img2.jpeg",
    "alt": "Minchur's Logo"
  },
  "socialProfiles": {
    "from": ["LinkedIn", "Github", "Mail"],
    "showIcons": true
  }
}
```
![스크린샷](../../images/articles/howgatsby(1)/contact_json.png)
눈으로 만 봐도 어디에 어떤부분이 적용되는 지 바로 알수가 있다! 밑에 socialProfiles부분의 링크는 다른 파일에서 설정을 할 수가 있으니 우선 여기서는 필요한 것들만 남기고 넘어 가도록 하겠다.

### hero/hero.json
이제 Github Blog의 얼굴이 될수 있는 제일 먼저 보이는 부분이다. 우선 코드랑 사진부터 살펴 보겠다.
```
{
  "intro": "Hej",
  "heroPhoto": {
    "src": "../../images/lego-dummy.png",
    "alt": "My Photo"
  },
  "image": {
    "src": "../../images/waving-hand.png",
    "alt": "Waving Hand Emoji"
  },
  "title": "I'm a Gatsby Starter",
  "subtitle": {
    "prefix": "I do all the setup ",
    "highlight": "for you",
    "suffix": "."
  },
  "description": "A Gatsby Starter Project to easily get started with Portfolio Minimal theme.",
  "socialProfiles": {
    "from": ["LinkedIn", "Medium", "Github", "Mail"],
    "showIcons": false
  }
}
```
![스크린샷](../../images/articles/howgatsby(1)/hero_json.png)
***intro***부분은 제일 크게 쓰여지는 글이라고 보여진다. 기본테마를 가져와서 보면 메인 페이지 부분에는 이미지가 따로 존재하지 않는다. 그래서 ***heroPhoto***부분이 설정이 되어 있어도 보이지가 않는 이유가 이것이다. 원하는 이미지로 설정하고 넣으면 오른쪽부분에 뜰 것이다.

나머지 부분들은 보면 알 수 있었지만 내가 보았을때 잠깐 헷갈렸던 부분은 ***subtitle***부분이다. 나는 prefix에 글을 쓰고 highligt을 주고 또 글을 쓰고 싶었었다.. 그래서 자세히 살펴보니깐 suffix에 .으로 되어있었다 그렇다.. prefix,suffix에는 그냥글을 쓰면 되고 중간에 하이라이트를 주고 싶으면 highlight부분에다가 쓰면 된다.

### interests/interests.json
다음으로 살펴볼 파일은 interests.json파일이다. 우선 코드랑 사진을 살펴보자
```
{
  "interests": [
    {
      "label": "Quick and Easy Setup",
      "image": {
        "src": "../../images/joystick.png",
        "alt": ""
      }
    },
    {
      "label": "Content via Markdown",
      "image": {
        "src": "../../images/notebook.png",
        "alt": ""
      }
    },
    {
      "label": "Responsive Design",
      "image": {
        "src": "../../images/nail-polish.png",
        "alt": ""
      }
    },
    {
      "label": "Medium Integration",
      "image": {
        "src": "../../images/medium.png",
        "alt": ""
      }
    },
    ...
     ],
  "button": {
    "visible": true,
    "label": "+ Load More",
    "initiallyShownInterests": 5
  }
}
```
![스크린샷](../../images/articles/howgatsby(1)/interests_json.png)
이것도 읽어보면서 사진을 보면 대충 감이 온다. 원래 테마는 자신의 취미/흥미를 적어 놨지만 나는 여기를 사용할수있는 기술스택들로 바꿔놓을 생각이다.

### legal/*.md
legal폴더 안에는 2개의 markdown폴더가 존재 한다. 처음에는 어디에 적용이 되는 건지 한참 찾아봤었다 포스팅 글도 아니고 그렇다고 메인페이지에 적용이 되어있는거 같진 않았었다. 그러다가 우연히 footer쪽을 보게 되었는데 오른쪽에 떡하니 있었다...
![스크린샷](../../images/articles/howgatsby(1)/leagl(1).png)

누르면 밑에 사진들처럼 이동을 하게 된다.
![스크린샷](../../images/articles/howgatsby(1)/leagl(2).png "Imprint page")
![스크린샷](../../images/articles/howgatsby(1)/leagl(3).png "Imprint page")

내가 사용할때 어떤부분을 여기다 넣어야 할지는 아직 생각이 나질않아 우선 그대로 놓은채로 진행중이다.

### projects/projects.json
이 부분은 내가 이 blog중에서 제일 좋아하는 부분이다. 제일 깔끔하고 이쁘게 정리할 수 있게 있는거 같다.
```
{
  "projects": [
    {
      "visible": true,
      "category": "🕹️ EASY AND QUICK SETUP",
      "title": "Add content and deploy!",
      "description": "Get up and running within minutes. Just install the starter, add your content, deploy it, and there you go! This starter works seamlessly with hosts like Netlify. Photo by Clément H on Unsplash.",
      "tags": ["Content Integration", "Ready-2-Deploy"],
      "image": {
        "src": "../../images/clement-h-95YRwf6CNw8-unsplash.jpg",
        "alt": "Quick Setup",
        "linkTo": "https://github.com/konstantinmuenster/gatsby-starter-portfolio-minimal-theme"
      },
      "links": [
        {
          "type": "github",
          "url": "https://github.com/konstantinmuenster/gatsby-starter-portfolio-minimal-theme"
        },
        {
          "type": "external",
          "url": "https://www.gatsbyjs.org/docs/mdx/writing-pages/"
        }
      ]
    },
    {
      "visible": true,
      "category": "🧰 EXTENDABLE LAYOUT",
      "title": "Add more sections!",
      "description": "The starter includes predefined sections as well as a template for new, custom sections. Moreover, you can add new projects to this section without additional coding. Photo by Kelly Sikkema on Unsplash.",
      "tags": ["Custom Sections", "Easy-2-Use"],
      "image": {
        "src": "../../images/kelly-sikkema-Hl3LUdyKRic-unsplash.jpg",
        "alt": "Extendable Layout"
      },
      "links": [
        {
          "type": "github",
          "url": "https://github.com/konstantinmuenster/gatsby-starter-portfolio-minimal-theme"
        }
      ]
    }
  ],
  "button": {
    "visible": true,
    "label": "Visit on Github",
    "url": "https://github.com/konstantinmuenster/gatsby-theme-portfolio-minimal"
  }
}
```
![스크린샷](../../images/articles/howgatsby(1)/projects_json.png)
밑에 사진과 코드들을 번갈아 가면서 보게 되면 어디에 어떤게 적용되는지 알 수 있다.

## 😗 우선 Section 폴더만!!
section폴더만 어느정도 파악하면 메인페이지는 어느정도 꾸밀수가 있을것이다. 꾸미고 나니깐 뿌듯하면서 원하던 테마로 blog을 적용시켜 나가니까 jekyll때보다 애정이 2배 더 상승한거 같다.

다음 [Github Blog] 포스팅때는 Content폴더안에 나머지 파일들에 대해서 글을 써보도록 하겠다.