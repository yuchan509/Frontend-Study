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
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']
console.log(numbers[1])
console.log(fruits[2])