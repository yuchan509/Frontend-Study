const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function () {
    searchInputEl.focus()
})

searchInputEl.addEventListener('focus', function() {
    searchEl.classList.add('focused')
    searchInputEl.setAttribute('placeholder', '통합 검색')
})

searchInputEl.addEventListener('blur', function() {
    searchEl.classList.remove('focused')
    searchInputEl.setAttribute('placeholder', '')
})

// scroll 발생할 때마다 함수 실행 --> 사이트가 버벅이는 현상이 발생될 수 있음.
const badgeEl = document.querySelector('header .badges')
// window.addEventListener('scroll', function () {
//     console.log('scroll')
// })

// https://cdnjs.com/libraries/lodash.js
// 일정 시간에 한 번씩만 기능하도록 제한을 걸음.
// .throttle(함수, 시간(ms))

// https://cdnjs.com/libraries/gsap
// gsap.to(요소, 지속시간, 옵션) : js 애니메이션 라이브러리.
const toTopEl = document.querySelector('#to-top')

window.addEventListener('scroll', _.throttle(function () {
    console.log('scroll')
    console.log(window.scrollY)
    if (window.scrollY > 500) {
        // 배지 숨김 처리.
        // badgeEl.style.display = 'none'
        // 시각적으로만 사라지는 방식 -> 따라서 보이지 않아도 실제로 그 요소가 그 자리에
        // 있으므로 문제를 클릭되는 문제가 발생.
        gsap.to(badgeEl, .6, {
            // 투명도가 0으로 수렴.
            opacity: 0,
            display: 'none'
        })
        // 버튼 보이기
        gsap.to(toTopEl, .2, {
            x: 0
        })
    }
    else
    {
        // 배지 보이기.
        // badgeEl.style.display = 'block'
        gsap.to(badgeEl, .6, {
            // 투명도가 1로 수렴.
            opacity: 1,
            display: 'block'
        })
        // 버튼 숨기기
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

// FAID IN
const fadeEls = document.querySelectorAll('.visual .fade-in')
fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        // 0.7 -> 1.4 -> 2.1 -> ...
        delay: (index + 1) * .7,
        opacity: 1
    })
})

// SWIPER
// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
})

new Swiper('.promotion .swiper-container', {
    // direction: 'horizontal' : defalut 값.
    // 한 번에 보여줄 슬라이드 개수
    slidesPerView : 3, 
    // 슬라이드 사이 여백
    spaceBetween: 10, 
    // 1번 슬라이드가 가운데 보이기
    centeredSlides: true,
    // 반복 재생 여부
    loop: true,
    autoplay: { delay: 5000 },
    // 페이지 번호 사용 여부
    pagination: { 
        // 페이지 번호 요소 선택자
        el: '.promotion .swiper-pagination',
        clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
    },
    // 슬라이드 이전/다음 버튼 사용 여부.
    navigation: { 
        // 이전 버튼 선택자.
        prevEl: '.promotion .swiper-prev',
        // 다음 버튼 선택자 .
        nextEl: '.promotion .swiper-next' 
      }
})


new Swiper('.awards .swiper-container', {
    autoplay: true, 
    loop: true, 
    spaceBetween: 30, 
    slidesPerView: 5, 
    navigation: { 
      prevEl: '.awards .swiper-prev', 
      nextEl: '.awards .swiper-next' 
    }
  })

const promotionEl = document.querySelector('.promotion')
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromtion = false
promotionToggleBtn.addEventListener('click', function () {
    // !: 반대 값이 되도록
    isHidePromtion = !isHidePromtion
    if (isHidePromtion) {
        // 숨김 처리.
        promotionEl.classList.add('hide')

    } else {
        // 보임 처리.
        promotionEl.classList.remove('hide')
    }
})

function random(min, max) {
    // `.toFixed()`를 통해 반환된 '문자 데이터'를,
    // `parseFloat()`을 통해 소수점을 가지는 '숫자 데이터'로 변환.
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

function floatingObject(selector, delay, size) {
gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    {
    delay: random(0, delay), // 얼마나 늦게 애니메이션을 시작할 것인지 지연 시간을 설정.
    y: size, // `transform: translateY(수치);`와 같음. 수직으로 얼마나 움직일지 설정.
    repeat: -1, // 몇 번 반복하는지를 설정, `-1`은 무한 반복.
    yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생.
    ease: Power1.easeInOut // Easing 함수 적용.
    }
)
}
floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 20)


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

const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()