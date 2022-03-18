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