# STARBUCKS

## 스타벅스 예제를 만들기 위한 데이터 수집.

## 오픈 그래프(The Open Graph protocol)
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


트위터 미리보기 설정

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

