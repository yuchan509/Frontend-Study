# STARBUCKS

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
[Material-icons](https://fonts.google.com/icons?selected=Material+Icons) : `Material icons는 구글이 제공하는 아이콘 디자인 모음으로 800개가 넘는 아이콘이 존재하며 무료로 이용이 가능.`

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
[Swiper](https://swiperjs.com/) : `Swiper는 다양한 사용자 옵션을 제공하고 있기에 사용하기 편리한 무료 슬라이드 라이브러리(플러그인).`

- 참고 : 해당 프로젝트에서는 Swiper7 이상을 적용시 문제가 발생할 수 있음.

```html
<link rel="stylesheet" href="https://unpkg.com/swiper@6.8.4/swiper-bundle.min.css" />
<script src="https://unpkg.com/swiper@6.8.4/swiper-bundle.min.js"></script>
```


## Gsap & ScrollToPlugin 
[Gsap](https://cdnjs.com/li[braries/gsap) : `프론트엔드 개발자와 디자이너들이 쉽게 사용할 수 있는 타임라인 기반의 GrennSock에서 만든 자바스크립트 애니메이션 라이브러리.`

[ScrollToPlugin](https://greensock.com/ScrollToPlugin) : ``

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js" integrity="sha512-1dalHDkG9EtcOmCnoCjiwQ/HEB5SDNqw8d4G2MKoNwjiwMNeBAkudsBCmSlMnXdsH8Bm0mOd3tl/6nL5y0bMaQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/ScrollToPlugin.min.js" integrity="sha512-9DDJWj17gkdeGHU0Zr76wc9jY2g0IwE7ZCIxakVYKyzlTiOWZDZJOTaVgAzNo+LB7+EbGXxwCXkOP+a5rgkuqQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

[gsap.to()](https://greensock.com/docs/v3/GSAP/gsap.to()) 

- sap.to(요소, 지속시간, 옵션)

  ```js
  const toTopEl = document.querySelector('#to-top')

  window.addEventListener('scroll', _.throttle(function () {
      console.log('scroll')
      console.log(window.scrollY)
      if (window.scrollY > 500) {
          gsap.to(badgeEl, .6, {
              opacity: 0,
              display: 'none'
          })
          gsap.to(toTopEl, .2, {
              x: 0
          })
      }
      else
      {
          gsap.to(badgeEl, .6, {
              opacity: 1,
              display: 'block'
          })
          gsap.to(toTopEl, .2, {
              x: 100
          })
      }
      }, 300))

      toTopEl.addEventListener('click', function () {
          gsap.to(window, 0.7, {
              scrollTo: 0
          })
      })
  ```

## ScrollMagic
[ScrollMagic](https://github.com/janpaepke/ScrollMagic) : `스크롤과 요소의 상호 작용을 위한 자바스크립트 라이브러리.`

  ```js
  const spyEls = document.querySelectorAll('section.scroll-spy')
  spyEls.forEach(function (spyEl) {
      new ScrollMagic
          .Scene({
              // 보여짐 여부를 감시할 요소를 지정.
              triggerElement: spyEl,
              // 화면의 80% 지점에서 보여짐 여부 감시.
              triggerHook: .8

          })
          // 요소가 화면에 보이면 show 클래스 추가
          .setClassToggle(spyEl, 'show')
          // 컨트롤러에 장면을 할당.
          .addTo(new ScrollMagic.Controller())
  }) 
  ```


## Youtube Iframe Api
[Youtube Iframe Api](https://developers.google.com/youtube/iframe_api_reference?hl=ko) :  `웹사이트에 YouTube 동영상 플레이어를 퍼가고 JavaScript를 사용하여 플레이어를 제어`

```html
<!-- in HEAD -->
<script defer src="./js/youtube.js"></script>

<!-- in BODY -->
<div id="player"></div>
```

```js
// Youtube Iframe Api 추가한다는 의미.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
    new YT.Player('player', {
    videoId: 'An6LvWQuj_8',
    playerVars: {
        // 자동재생.
        autoplay: true,
        // 컨트롤러의 유무.
        controls:2,
        // 반복 재생의 여부.
        loop: true,
        // playlist : 반복 재생할 유튜브 영상 ID 목록.
        playlist: 'An6LvWQuj_8',
    },
    events: {
        // 동영상이 준되면 발생하는 이벤트 함수.
        onReady: function (event) {
          // 음소거
            event.target.mute()
        },
        // 상태가 변함에 따라 해당 함수가 발생하는 이벤트 함수.
        'onStateChange' : onPlayerStateChange

    }
  });
}

```