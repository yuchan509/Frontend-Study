import getType from './getType'
import random from './getRandom'

// 데이터 타입(data type)
console.log(typeof 'hello world')
console.log(typeof 123)
console.log(typeof true)
console.log(typeof undefined)

console.log(typeof null)
console.log(typeof [])
console.log(typeof {})

console.log(getType(123))
console.log(getType(false))
console.log(getType(null))
console.log(getType([]))
console.log(getType({}))


// 산술 연산자(arithmetic operator)
console.log(1 + 2)  // 더하기
console.log(5 - 7)  // 빼기
console.log(3 * 4)  // 곱하기
console.log(12 / 4) // 나누기
console.log(7 % 5)  // 나머지


// 할당 연산자(assignment operator)
let a = 2
a += 1 // a = a + 1 : 재할당
console.log(a)


// 비교 연산자(comparison operator)
const b = 1
const c = 1
console.log( b === c)

function isEqual(x, y){
    return x === y
}
console.log(isEqual(1, 1))
console.log(isEqual(1, "1"))

const d = 1
const e = 3
console.log(d !== e)
console.log(d < e)
console.log(d > e)
console.log(d <= e)
console.log(d >= e)


// 논리 연산자(logical operator)
const x = 1 === 2
const y = "AB" === "AB"
const z = true

console.log(x)
console.log(y)
console.log(z)

console.log('&&: ', x && y && z) // And
console.log('||: ', x || y || z) // Or
console.log('!:', !x)            // Not


// 삼항 연산자(ternary operator)
const s = 1 < 2
if (s){
    console.log('참')
} else {
    console.log('거짓')
}

console.log(s ? '참' : '거짓')

// 조건문(If statement)
const w = random()

switch (w) {
    case 0: 
        console.log('w is 0')
        break
    case 1: 
        console.log('w is 1')
        break
    case 2: 
        console.log('w is 2')
        break
    // else의 개념.
    default:
        console.log('rest...')
}

if (w === 0){
    console.log('w is 0')
} else if (w === 2) {
    console.log('w is 2')
} else {
    console.log('rest...')
}


// 반복문 (For statement)
// for (시작 조건; 종료 조건; 변화 조건) {}
const ulEl = document.querySelector('ul')
// console.log(ulEl)

for (let i = 0; i < 10; i += 1) {
    // console.log(i)
    const li = document.createElement('li')
    li.textContent = `list-${i + 1}`
    if ((i+ 1) % 2 === 0) {
        li.addEventListener('click', function () {
            console.log(li.textContent)
        })
    }
    ulEl.appendChild(li)
}


// 변수 유효범위(Variable Scope)
// var(권장되지 않음) : 함수 레벨의 유효한 범위를 가짐.
// let, const : block 레벨의 유효한 범위를 가질 수 있음.

function scope() {
    if (true) {
        // var aa = 123
        const aa = 123
        console.log(aa)
    }
}
scope()


// 형 변환(Type conversion)
// truthy (참 같은 값) : true, {}, [], 1, 2, 'false', -12, '3.14'...
// falsy (거짓 같은 값) : false, '', null, undefined, 0, -0, NaN...

const aa = 1
const bb = '1'

console.log(aa === bb) // 일치 연산자 선호.(js의 특징)
console.log(aa == bb) // 동등 연산자 사용의 경우 type을 무시할 수 있음(형 변환 발생). 따라서 권장 안함.

if (false) {
    console.log(1234)
}