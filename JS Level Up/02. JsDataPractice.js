// default export : default로 선언된 모듈은 하나의 파일에서 단 하나의 변수 또는 클래스 등만 export 할 수 있음.
// named export : 한 파일 내에서 여러 변수/클래스 등을 export 하는 것이 가능함.
import _ from 'lodash' // from `node_modules`
import checkType from './getType' // <-- default export
// import { random, user as uchan } from './getRandom'  // <-- named export
// * : 와일드 카드.
import * as R from './getRandom'

console.log(_.camelCase('the hello world'))
console.log(checkType([1, 2, 3]))
// console.log(random(), random())
// console.log(user)
// console.log(uchan)
console.log(R)
console.log(R.random())
console.log(R.user)


// lodash
// https://lodash.com/docs/4.17.15

// uniq : 중복 데이터 제거.(고유한 값만 남김.)

const usersA = [
    { userId : '1', name : 'uchan'},
    { userId : '2', name : 'jina'}
] 

const usersB = [
    { userId : '1', name : 'uchan'},
    { userId : '3', name : 'anna'}
] 

// 중복 데이터 발생.
const usersC = usersA.concat(usersB)
console.log('concat', usersC)
// uniqBy : 배열 데이터가 하나인 경우를 고유화 시킬 때.
console.log('uniqBy', _.uniqBy(usersC, 'userId'))
// unionBy : 배열 데이터가 두 개 이상인 경우를 고유화 시킬 때.
const usersD = _.unionBy(usersA, usersB, 'userId')
console.log('unionBy', usersD)

const users2 = [
    { userId : '1', name : 'uchan'},
    { userId : '2', name : 'jina'},
    { userId : '3', name : 'anna'},
    { userId : '4', name : 'jiyoon'},
    { userId : '5', name : 'kakao'}
]
const foundUser = _.find(users2, { name : 'anna' })
const foundUserIndex = _.findIndex(users2, { name : 'anna' })
console.log(foundUser)
console.log(foundUserIndex)

// 제거.
_.remove(users2, { name : 'jina' })
console.log(users2)


// JSON (JavaScript Object Notation)
// 자바스크립트의 객체 표기법
import data from './data.json'
console.log(data)

const user3 = {
    name : 'uchan',
    age : 28,
    emails : [
        'uchan@kt.com',
        'kim@kt.com'
    ]
}
console.log('user3', user3)

// JSON화. : 자바스티립트 데이터를 문자화.
const str = JSON.stringify(user3)
console.log('str:', str)
console.log(typeof str)

const obj = JSON.parse(str)
console.log('obj:', obj)


// Storage
// https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage
// lowdb : https://github.com/typicode/lowdb 참고.
localStorage.setItem('user3', JSON.stringify(user3))
console.log(JSON.parse(localStorage.getItem('user3')))

// localStorage 데이터 수정.
const str2 = localStorage.getItem('user3')
const obj2 = JSON.parse(str2)
obj2.age = 22
console.log(obj2)
localStorage.setItem('user3', JSON.stringify(obj2))

// localStorage 데이터 제거.
// localStorage.removeItem('user3')


// OMDb API 
// http://www.omdbapi.com/
// Query String : 주소?속성=값&속성=값&속성=값
// https://www.omdbapi.com/?apikey=7035c60c&s=frozen

// Axios
// https://github.com/axios/axios

import axios from 'axios'

function fetchMovies() {
    axios
    .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
    // then() 메서드는 Promise를 리턴하고 두 개의 콜백 함수를 인수로 받음
    // 하나는 Promise가 이행했을 때, 다른 하나는 거부했을 때를 위한 콜백 함수.
    .then(response => { 
        console.log(response) 
        const h1El = document.querySelector('h1')
        const imgEl = document.querySelector('img')
        h1El.textContent = response.data.Search[0].Title
        imgEl.src = response.data.Search[0].Poster

    })
}
fetchMovies()
