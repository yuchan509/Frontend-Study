// 함수 복습

// 익명 함수 : 이름이 존재하지 않는 함수로 대개 함수를 재사용하지 않을 경우 사용.
const sum1 = function (x, y) {
    return x + y
}
console.log(sum1(1, 2))

// 기명 함수
function sum2(x,  y) {
    // console.log(x + y)
    if (x < 2) {
        return 
    }
    return x + y
}
const a = sum2(1, 3)
console.log(a)

function sum3() {
    console.log(arguments)
    return arguments[0] + arguments[1]
}
console.log(sum3(7, 2))


// 화살표 함수
// () => {} vs function () {}

const double = function (x) {
    return x * 2
}
console.log('double :', double(7))

const doubleArrow = (x) => {
    return x * 2
}

// 매개변수가 1개일 경우 () 생략이 가능.
const doubleArrow2 = x => {
    return x * 2
}

// return, {} 없이도 사용 가능. : str, int 출력 가능.
const doubleArrow3 = x => x * 2

// 객체 데이터 만들 경우 -> {} 사용 -> {}가 중복이 되므로 ()로 감싸 사용.
const doubleArrow4 = x => ({ name : 'Heropy'})

console.log('doubleArrow :', doubleArrow(7))
console.log('doubleArrow2 :', doubleArrow2(7))
console.log('doubleArrow3 :', doubleArrow3(7))
console.log('doubleArrow4 :', doubleArrow4(7))


// 즉시 실행 함수
// IIFE, Immediately-Invoked Function Expression

const k = 7
function double2 () {
    console.log(k * 2)
}
double2();

// 즉시 실행 되는 부분.
// 위에 Code 실행 부분과 아래 명시된 Code를 명확히 구분하지 못하여서 ; 사용.
(function double2 () {
    console.log(k * 2)
})();
(function double2 () {
    console.log(k * 2)
}())


// 호이스팅(Hoisting) : 함수 선언부가 유효 범위 최상단으로 끌어 올려지는 현상.
const z = 7

double3()

// 익명 함수 방식(함수 표현식)은 사용불가. - ERROR!!
// const double3 = function () {
//     console.log(z * 2)
// }

// 함수 선어문
function double3 () {
    console.log(z * 2)
}


// 타이머 함수
// setTimeout(함수, 시간)  : 일정 시간 후 함수 실행.
// setInterval(함수, 시간) : 시간 간격마다 함수 실행.
// clearTimeout()  : 설정된 Timeout 함수를 종료
// clearInterval() : 설정된 Interval 함수를  종료

const timer = setTimeout(() => {
    console.log('Heropy!')
},  10000)

const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
    clearTimeout(timer)
})

const timer2 = setInterval(() => {
    console.log('Heropy!')
},  3000)

const h1E2 = document.querySelector('h1')
h1E2.addEventListener('click', () => {
    clearInterval(timer2)
})


// 콜백(Callback) : 함수의 인수로 사용되는 함수. 실행 위치를 보장하는 용도로 많이 활용됨.
function timeout(callback) {
    setTimeout(() => {
        console.log('Heropy!')
        callback()
    }, 3000)
}
timeout(() => {
    console.log('Done!')
})
