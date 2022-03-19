// https://heropy.blog/2018/10/28/regexp/
// https://regexr.com/
// 정규표현식
//  - 문자 검색(search), 문자 대체(replace), 문자 추출(extract)
// regexp -> 생성자 함수 방식, 리터럴 방식

const str = ` 
            hello 
            010-1234-5678
            uchan@kt.com
            https://www.omdbapi.com/?apikey=7035c60c&s=frozen
            You didn't love when you had me
            But now, you need me so badly
            You can't be serious (Ha-ha-ha)
            That's hilarious (Ha-ha-ha-ha-ha)
            `
// const regexp = new RegExp('you', 'gi')
const regexp = /you/gi
console.log(str.match(regexp))