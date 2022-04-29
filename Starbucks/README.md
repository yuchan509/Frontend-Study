# STARBUCKS

## 스타벅스 예제를 만들기 위한 데이터 수집.

## The Open Graph protocol(OG)
: 콘텐츠의 요약 내용이 SNS에 게시되는데 최적화된 데이터를 가지고 갈 수 있도록 설정하는 것.

`이미지의 경우 최소한 600 x 315 픽셀은 되어야 하며, 1200 x 630 픽셀 크기를 권장`

Naver 블로그, 카카오톡 미리보기 설정

```html
<meta property="og:title" content="콘텐츠 제목" /> 
<meta property="og:url" content="웹페이지 URL" />
<meta property="og:type" content="웹페이지 타입(blog, website 등)" />
<meta property="og:image" content="표시되는 이미지" /> 
<meta property="og:title" content="웹사이트 이름" /> 
<meta property="og:description" content="웹페이지 설명" /> 

<!-- 다음의 태그는 필수는 아니나, 포함하는 것을 추천함 -->
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
```
- `og:title`: 웹페이지의 이름(제목)
- `og:url`: 웹페이지 주소(URL)
- `og:image`: 웹페이지의 대표 이미지 주소(URL)
- `og:type`: 웹페이지의 타입(E.g, `website`, `video.movie`)
- `og:site_name`: 웹사이트의 이름
- `og:description`: 페이지의 간단한 설명


Twitter 미리보기 설정

```html
<meta name="twitter:title" content="콘텐츠 제목" /> 
<meta property="twitter:url" content="웹페이지 URL" />
<meta name="twitter:card" content="트위터 카드 타입(요약정보, 사진, 비디오)" /> 
<meta name="twitter:image" content="표시되는 이미지 " /> 
<meta property="twitter:site" content="웹사이트 이름" />
<meta name="twitter:description" content="웹페이지 설명" /> 
```

- `twitter:title`: 페이지의 이름(제목)
- `twitter:url`: 웹페이지 주소(URL)
- `twitter:card`: 페이지(카드)의 유형(E.g. `summary`, `player`)
- `twitter:image`: 페이지의 대표 이미지 주소(URL)
- `twitter:site`: 속한 사이트의 이름
- `twitter:description`: 페이지의 간단한 설명

## CDN(Content Delivery Network & Content Distribution Network)
: 접속자가 인터넷상에서 가장 가까운 곳의 서버로 컨텐츠를 전송받아 트래픽이 특정 서버에 집중되지 않고 각 서버로 분산되도록 하는 기술.

- 웹사이트 로딩 속도 개선.
- 인터넷 회선 비용 절감.
- 컨텐츠 제공의 안정성.
- 웹사이트 보안 개선.

## Material-icons
[Material-icons](https://fonts.google.com/icons?selected=Material+Icons) : Material icons는 구글이 제공하는 아이콘 디자인 모음으로 800개가 넘는 아이콘이 존재하며 무료로 이용이 가능.

Material-icons CDN 설치

```html
<!-- We also recommend using Material Icons from Google Fonts.  -->
<head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
</head>
```

```html
<div class="material-icons">upload</div>
```


## Lodash _.throttle()

[Lodash](https://lodash.com/) : `다양한 유틸리티 기능을 제공하는 js 라이브러리.`


[Lodash _.throttle](https://cdnjs.com/libraries/lodash.js) : 
`매 ms마다 최대 한 번만 호출될 수 있도록 Throttle된 함수를 생성.`

Lodash _.throttle을 사용할 만한 실제 사례는 Infinite scroll 구현이 존재. Infinite scroll에서는 대개 AJAX 요청을 보내나, onscroll에 AJAX 요청을 바인딩해놓으면 스크롤 이벤트가 많이 발생하므로 과다한 요청을 보내게 됨. 따라서 클라이언트와 서버의 부담을 줄이기 위해 적당한 양의 요청을 보내도록 조절할 필요가 있음. _.throttle은 이러한 문제를 해결하기에 좋은 수단이다.


## Swiper
[Swiper](https://swiperjs.com/)



## Gsap
[Gsap](https://cdnjs.com/libraries/gsap)