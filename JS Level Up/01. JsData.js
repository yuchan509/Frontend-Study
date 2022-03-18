// 문자(String)
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String

// String.prototype.indexOf() : 찾으려고 하는 문자(searchValue)가 등장하는 첫번째 인덱스를 찾아주면, 해당 값을 찾을 수 없다면 -1 반환.
// 대소문자 구분. 
const result = 'Hello World!'.indexOf('!')
console.log(result)

const str = 'hello world'
const str2 = 'uchan@kt.com'
const str3 = '     uchan@kt.com    '

console.log(str.indexOf('uchan') !== -1)

// String.prototype.length : 띄어쓰기(공백) 길이 Count함.
console.log(str.length)

// String.prototype.slice(beginIndex, endIndex) : endIndex의 직전까지만 추출.
console.log(str.slice(6, 11))

// String.prototype.replace
console.log(str.replace('world', 'uchan'))
console.log(str.replace(' world', ''))

// String.prototype.match
console.log(str2.match(/.+(?=@)/)[0])

// String.prototype.trim : 앞뒤 모든 공백 제거.
console.log(str3.trim())


// 숫자(Number)
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
const pi = 3.14159265358979
console.log(pi)

// Number.prototype.toFixed() : 고정 소수점 표기법을 사용하여 나타낸 수를 문자열로 바꾼 값.
const str4 = pi.toFixed(2)
console.log(str4, ':', typeof str4)

const integer = parseInt(str4)
console.log(integer)

const float = parseFloat(str4)
console.log(float)
console.log(typeof integer, typeof float)


// 수학(Math)
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math
console.log('abs: ', Math.abs(-10))
console.log('min: ', Math.min(20, 10))
console.log('max: ', Math.max(20, 10))
console.log('ceil: ', Math.ceil(3.14))
console.log('floor: ', Math.floor(3.14))
console.log('round: ', Math.round(3.49))
console.log('random: ', Math.random())


// 배열(Array)
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']
console.log(numbers[1])
console.log(fruits[2])

// Array.prototype.length() : 배열의 길이.
console.log(numbers.length)
console.log([].length)


// Array.prototype.concat() : 원본의 배열 데이터에 영향을 끼치지 않고, 합쳐진 새로운 배열 데이터를 생성.
console.log(numbers.concat(fruits))


// Array.prototype.forEach(callback function) : Array의 길이만큼 반복적으로 실행. (.map() 비교했을 때 반환을 가지지 않음.)
// Option : index, array
fruits.forEach(function (element, index, array) {
    console.log(element, index, array)
})

const a = fruits.forEach((element, index) => {
    console.log(`${element}-${index}`)
})
console.log(a)

// Array.prototype.map() : 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환.
const b = fruits.map((element, index) => ({
                                            id: index,
                                            name: element
                                          })
    // return `${element}-${index}`
    // 객체 데이터 형태로 변경.
    /*  
        0: {id: 0, name: 'Apple'}
        1: {id: 1, name: 'Banana'}
        2: {id: 2, name: 'Cherry'}
        length: 3 
    */ 
    /* 
    {
    return {
        id: index,
        name: element
    }}
    */
)
console.log(b)

const c = numbers.map(n => {
    return n < 3
})
console.log(c)

// Array.prototype.filter() : 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환.
const d = numbers.filter(n => {
    return n < 3
})
console.log(d)

const e = numbers.filter(n => n < 3)
console.log(e)

// Array.prototype.find() : 주어진 판별 함수를 만족하는 첫 번째 요소의 값만을 반환. (중간에 값이 반환되면 반복 STOP!)그런 요소가 없다면 undefined를 반환.
// Array.prototype.findIndex() : 주어진 판별 함수를 만족하는 첫 번째 요소의 인덱스 값만을 반환.
const f = fruits.find(fruits => /^B/.test(fruits))
console.log(f)

const g = fruits.findIndex(fruits => /^C/.test(fruits))
console.log(g)

// Array.prototype.includes() : 배열이 특정 요소를 포함하고 있는지 판별. 있으면 true, 없으면 false 반환.
const h = numbers.includes(3)
console.log(h)

// Array.prototype.push() : 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환.
// Array.prototype.unshift() : 로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환.
numbers.push(5)
numbers.unshift(0)
console.log(numbers)

// Array.prototype.reverse() : 배열의 순서를 반전. 원본 수정됨 주의!
numbers.reverse()
console.log(numbers)

// Array.prototype.splice() : 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경. 원본 수정됨 주의!
// splice(index, 제거할 수, 추가할 요소)
numbers.splice(2, 0, 999)
console.log(numbers)

numbers.splice(2, 1, 99)
console.log(numbers)

numbers.splice(2, 1)
console.log(numbers)

// 1번 인덱스를 포함해서 이후의 모든 요소 제거.
numbers.splice(1)
console.log(numbers)


// 객체(Object)
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object



// Object.assign(대상 객체, 출처 객체) : 객체들의 모든 열거 가능한 자체 속성을 복사해 대상 객체에 붙인 후 대상 객체를 반환.
const userAge = {
    // key : value
    name : 'uchan',
    age : 28
}
const userEmail = {
    name : 'uchan',
    email : 'uchan@kt.com'
}

const target = Object.assign(userAge, userEmail)
console.log(target)
console.log(userAge)

// 같은 형태를 가져서 true 값을 반환한 것이 아님. - 주의!
console.log(target === userAge)

const x = { k : 123}
const y = { k : 123}

// 같은 형태를 가졌으나, 서로 다른 메모리 주소를 바라보고 있으므로 false를 반환.(js의 참조형 데이터의 특징)
console.log(x === y)


const userAge1 = {
    // key : value
    name : 'uchan',
    age : 28
}
const userEmail1 = {
    name : 'uchan',
    email : 'uchan@kt.com'
}

const target1 = Object.assign({}, userAge1, userEmail1)
console.log(target1)
console.log(userAge1)

// Object.keys() 
const user= {
    name : 'uchan',
    age : 28,
    email : 'uchan@kt.com'
}
const keys = Object.keys(user)
// ['name', 'age', 'email']
console.log(keys)

// indexing.
console.log(user['email'])

// keys : Array -> Array.map() : 배열 데이터의 요소를 이용하여 Callback 함수를 Array의 길이만큼 수행.
const values = keys.map(key => user[key])
console.log(values)


// 구조 분해 할당(Destructuring assignment)
// : 구조 분해 할당 구문은 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식.
// 비구조화 할당

const user1 = {
    name : 'uchan',
    age : 28,
    email : 'uchan@kt.com',
    // address 설정될 경우 기본값은 무시됨.
    address : 'Busan'
}

// address : 기본값 설정.
const { name, age, email, address = 'Seoul' } = user1
// E.g, user.adress

console.log(`사용자 이름은 ${name}입니다.`)
console.log(`${name}의 나이는 ${age}입니다.`)
console.log(`${name}의 이메일 주소는 ${email}입니다.`)
console.log(address)

// 배열에서의 구조 분해 할당
// type에 맞게 구성.
const [n, m, l, s] = fruits
console.log(n, m, l, s)

const [, , t] = fruits
console.log(t)

// 전개 연산자(Spread Operator)
console.log(fruits)

// Apple Banana Cherry 문자열 형태로 출력.
console.log(...fruits)

const fruits1 = ['Apple', 'Banana', 'Cherry', 'Orange']

// ...c : rest Paremeter
// function toObject(a, b, ...c) {
//     return {
//         // a : a,
//         // b : b,
//         // c : c

//         // 변수(데이터)의 이름 = 속성의 이름 -> 축약형 표현식 가능.
//         a,
//         b,
//         c
//     }
// }

// 화살표 함수로 표현.
const toObject = (a, b, ...c) => ({a, b, c})

// console.log(toObject(fruits1[0], fruits1[1], fruits1[2]))
console.log(toObject(...fruits1))


// 데이터 불변성(Immutability)
// 원시 데이터 : String, Number, Boolean, undefined, null --> 데이터의 불변성으로 형태가 같으면 같다고 생각함.
// ---------------------------------------------------------------
// |1:   r : 1 -> i : 1 |2:   u : 4    |3:   r : 7   |4: i : 1 (x)
// ---------------------------------------------------------------

let r = 1;
let u = 4
console.log(r, u, r === u)

// r이 바라보는 메모리 주소를 u에 할당하여 true 반환.
u = r
console.log(r, u, r === u)

r = 7
console.log(r, u, r === u)

/* 새로원 원시 데이터 사용했을 때, 기존에 존재하는 메모리 주소에 있다면 새로운 메모리 주소가
발생하는 것이 아니라, 기존의 메모리 주소로 바라보고 함. --> 이를 데이터의 불변성. */
let i = 1
console.log(u, i, u === i)


// 참조형 데이터 : Object, Array, Function --> 주의 불변성 없음.(가변성을 가짐.) --> 같은 형태를 가져도 다르다고 판별될 수 있음.
// ------------------------------------------
// |1:  {        } |2:  {         }  |3:   
// ------------------------------------------
let aa = { k : 1 } // 1번 할당.
let bb = { k : 1 } // 2번 할당.
console.log(aa, bb, aa === bb)

// aa의 k값 수정. 
aa.k = 7

// bb를 aa와 같은 메모리 주소로 할당.
bb = aa
console.log(aa, bb, aa === bb)

// aa의 k값 수정.
aa.k = 2
// aa와 bb가 바라보는 메모리 주소가 같으므로, bb의 k값도 2로 수정되면서 true 반환.
console.log(aa, bb, aa === bb)

// cc도 bb와 aa와 같은 메모리 주소로 할당.
let cc = bb
console.log(aa, bb, cc, aa === cc)

aa.k = 10
console.log(aa, bb, cc, aa === cc)


// 얕은 복사(Shallow copy)
const user2 = {
    name : 'uchan',
    age : 28,
    email : ['uchan@kt.com']
}
// const copyUser = user2

// 문제 해결을 위해 위를 다음과 같이 변경. --> copyUser와 user2와 다른 메모리 주소를 가지게 됨.
// 참조형 데이터 --> 데이터 가변성 문제를 해결하기 위해 복사 개념을 사용.
// const copyUser = Object.assign({}, user2)
// const copyUser = {...user2}

// 깊은 복사(Deep copy)
const copyUser = _.cloneDeep(user2)

console.log('user2', user2)
console.log(copyUser === user2)

// user2의 age를 변경했는데, copyUser도 같이 변경되는 문제가 발생.(같은 메모리 주소로 바라보고 있음.)
user2.age = 29
console.log('user2', user2)
console.log('copyUser', copyUser)

console.log('------------------------------------')

// 깊은 복사(Deep copy)
// https://lodash.com/
import _ from 'lodash'

// 이와 같은 문제를 해결하기 위해 깊은 복사 이용.
// const copyUser = _.cloneDeep(user2)
// https://lodash.com/docs/4.17.15#cloneDeep
// cloneDeep : This method is like _.cloneWith except that it recursively clones value.
user2.email.push('jy@kt.com')
console.log(user2.email === copyUser.email)
console.log('user2', user2)
console.log('copyUser', copyUser)

