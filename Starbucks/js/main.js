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
    }
    }, 300))
