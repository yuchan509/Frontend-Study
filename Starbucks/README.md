# STARBUCKS

## The Open Graph protocol(OG)
: �������� ��� ������ SNS�� �ԽõǴµ� ����ȭ�� �����͸� ������ �� �� �ֵ��� �����ϴ� ��.

`�̹����� ��� �ּ��� 600 x 315 �ȼ��� �Ǿ�� �ϸ�, 1200 x 630 �ȼ� ũ�⸦ ����`

Naver ��α�, īī���� �̸����� ����

```html
<meta property="og:title" content="������ ����" /> 
<meta property="og:url" content="�������� URL" />
<meta property="og:type" content="�������� Ÿ��(blog, website ��)" />
<meta property="og:image" content="ǥ�õǴ� �̹���" /> 
<meta property="og:title" content="������Ʈ �̸�" /> 
<meta property="og:description" content="�������� ����" /> 

<!-- ������ �±״� �ʼ��� �ƴϳ�, �����ϴ� ���� ��õ�� -->
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
```
- `og:title`: ���������� �̸�(����)
- `og:url`: �������� �ּ�(URL)
- `og:image`: ���������� ��ǥ �̹��� �ּ�(URL)
- `og:type`: ���������� Ÿ��(E.g, `website`, `video.movie`)
- `og:site_name`: ������Ʈ�� �̸�
- `og:description`: �������� ������ ����


Twitter �̸����� ����

```html
<meta name="twitter:title" content="������ ����" /> 
<meta property="twitter:url" content="�������� URL" />
<meta name="twitter:card" content="Ʈ���� ī�� Ÿ��(�������, ����, ����)" /> 
<meta name="twitter:image" content="ǥ�õǴ� �̹��� " /> 
<meta property="twitter:site" content="������Ʈ �̸�" />
<meta name="twitter:description" content="�������� ����" /> 
```

- `twitter:title`: �������� �̸�(����)
- `twitter:url`: �������� �ּ�(URL)
- `twitter:card`: ������(ī��)�� ����(E.g. `summary`, `player`)
- `twitter:image`: �������� ��ǥ �̹��� �ּ�(URL)
- `twitter:site`: ���� ����Ʈ�� �̸�
- `twitter:description`: �������� ������ ����

## CDN(Content Delivery Network & Content Distribution Network)
: �����ڰ� ���ͳݻ󿡼� ���� ����� ���� ������ �������� ���۹޾� Ʈ������ Ư�� ������ ���ߵ��� �ʰ� �� ������ �л�ǵ��� �ϴ� ���.

- ������Ʈ �ε� �ӵ� ����.
- ���ͳ� ȸ�� ��� ����.
- ������ ������ ������.
- ������Ʈ ���� ����.

## Material-icons
[Material-icons](https://fonts.google.com/icons?selected=Material+Icons) : `Material icons�� ������ �����ϴ� ������ ������ �������� 800���� �Ѵ� �������� �����ϸ� ����� �̿��� ����.`

Material-icons CDN ��ġ

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

[Lodash](https://lodash.com/) : `�پ��� ��ƿ��Ƽ ����� �����ϴ� js ���̺귯��.`


[Lodash _.throttle](https://cdnjs.com/libraries/lodash.js) : 
`�� ms���� �ִ� �� ���� ȣ��� �� �ֵ��� Throttle�� �Լ��� ����.`

Lodash _.throttle�� ����� ���� ���� ��ʴ� Infinite scroll ������ ����. Infinite scroll������ �밳 AJAX ��û�� ������, onscroll�� AJAX ��û�� ���ε��س����� ��ũ�� �̺�Ʈ�� ���� �߻��ϹǷ� ������ ��û�� ������ ��. ���� Ŭ���̾�Ʈ�� ������ �δ��� ���̱� ���� ������ ���� ��û�� �������� ������ �ʿ䰡 ����. _.throttle�� �̷��� ������ �ذ��ϱ⿡ ���� �����̴�.


## Swiper
[Swiper](https://swiperjs.com/) : `Swiper�� �پ��� ����� �ɼ��� �����ϰ� �ֱ⿡ ����ϱ� ���� ���� �����̵� ���̺귯��(�÷�����).`

- ���� : �ش� ������Ʈ������ Swiper7 �̻��� ����� ������ �߻��� �� ����.

```html
<link rel="stylesheet" href="https://unpkg.com/swiper@6.8.4/swiper-bundle.min.css" />
<script src="https://unpkg.com/swiper@6.8.4/swiper-bundle.min.js"></script>
```


## Gsap & ScrollToPlugin 
[Gsap](https://cdnjs.com/li[braries/gsap) : `����Ʈ���� �����ڿ� �����̳ʵ��� ���� ����� �� �ִ� Ÿ�Ӷ��� ����� GrennSock���� ���� �ڹٽ�ũ��Ʈ �ִϸ��̼� ���̺귯��.`

[ScrollToPlugin](https://greensock.com/ScrollToPlugin) : ``

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js" integrity="sha512-1dalHDkG9EtcOmCnoCjiwQ/HEB5SDNqw8d4G2MKoNwjiwMNeBAkudsBCmSlMnXdsH8Bm0mOd3tl/6nL5y0bMaQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/ScrollToPlugin.min.js" integrity="sha512-9DDJWj17gkdeGHU0Zr76wc9jY2g0IwE7ZCIxakVYKyzlTiOWZDZJOTaVgAzNo+LB7+EbGXxwCXkOP+a5rgkuqQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

[gsap.to()](https://greensock.com/docs/v3/GSAP/gsap.to()) 

- sap.to(���, ���ӽð�, �ɼ�)

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
[ScrollMagic](https://github.com/janpaepke/ScrollMagic) : `��ũ�Ѱ� ����� ��ȣ �ۿ��� ���� �ڹٽ�ũ��Ʈ ���̺귯��.`

  ```js
  const spyEls = document.querySelectorAll('section.scroll-spy')
  spyEls.forEach(function (spyEl) {
      new ScrollMagic
          .Scene({
              // ������ ���θ� ������ ��Ҹ� ����.
              triggerElement: spyEl,
              // ȭ���� 80% �������� ������ ���� ����.
              triggerHook: .8

          })
          // ��Ұ� ȭ�鿡 ���̸� show Ŭ���� �߰�
          .setClassToggle(spyEl, 'show')
          // ��Ʈ�ѷ��� ����� �Ҵ�.
          .addTo(new ScrollMagic.Controller())
  }) 
  ```


## Youtube Iframe Api
[Youtube Iframe Api](https://developers.google.com/youtube/iframe_api_reference?hl=ko) :  `������Ʈ�� YouTube ������ �÷��̾ �۰��� JavaScript�� ����Ͽ� �÷��̾ ����`

```html
<!-- in HEAD -->
<script defer src="./js/youtube.js"></script>

<!-- in BODY -->
<div id="player"></div>
```

```js
// Youtube Iframe Api �߰��Ѵٴ� �ǹ�.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
    new YT.Player('player', {
    videoId: 'An6LvWQuj_8',
    playerVars: {
        // �ڵ����.
        autoplay: true,
        // ��Ʈ�ѷ��� ����.
        controls:2,
        // �ݺ� ����� ����.
        loop: true,
        // playlist : �ݺ� ����� ��Ʃ�� ���� ID ���.
        playlist: 'An6LvWQuj_8',
    },
    events: {
        // �������� �صǸ� �߻��ϴ� �̺�Ʈ �Լ�.
        onReady: function (event) {
          // ���Ұ�
            event.target.mute()
        },
        // ���°� ���Կ� ���� �ش� �Լ��� �߻��ϴ� �̺�Ʈ �Լ�.
        'onStateChange' : onPlayerStateChange

    }
  });
}

```