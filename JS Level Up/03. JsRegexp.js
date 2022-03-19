// https://heropy.blog/2018/10/28/regexp/
// https://regexr.com/
// 정규표현식
//  - 문자 검색(search), 문자 대체(replace), 문자 추출(extract)
// regexp -> 생성자 함수 방식, 리터럴 방식


// let : 변수의 재할당이 가능. <-> const : 재할당이 불가능.
let str = 
` 
Hello 
010-1234-5678
uchan@kt.com
http
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
You didn't love when you had me.
But now, you need me so badly.
You can't be serious. (Ha-ha-ha)
That's hilarious. (Ha-ha-ha-ha-ha)
abbcccdddd
`
// const regexp = new RegExp('you', 'gi')
const regexp = /you/gi
console.log(str.match(regexp))

// regexp.test()
console.log(regexp.test(str))

// regecp.replace()
console.log(str.replace(regexp, 'charlie'))
str = str.replace(regexp, 'charlie')
console.log(str)

// 이스케이프 문자(Escape Character) : \ 기호를 통해 본래의 기능에서 벗어나 상태가 바뀌는 문자.
console.log(str.match(/\.$/gim))

// ^
console.log(str.match(/^h/gim))

// $
console.log(str.match(/m$/gm))

//.
console.log(str.match(/h..p/gm))

// | : 먼저 나타는 것을 반환.
console.log(str.match(/the|uchan/gim))

// ? : ? 앞 문자가 있거나 일치하면 반환.
console.log(str.match(/https?/gim))

// {n} : 문자가 n번 일치하는 것을 반환 
console.log(str.match(/d{2}/gim))

// {n,} : 문자가 n번 이상 일치하는 것을 반환 
console.log(str.match(/d{2,}/gim))

// {n, e} : 문자가 n번 이상 e번 이하 일치하는 것을 반환
// 2 
console.log(str.match(/d{2,3}/gim))

// \w : 영어 알파벳, 숫자, 언더스코어(_) <-> \W
// \d : 숫자 <-> \D
console.log(str.match(/\b\w{2,3}\b/gim))