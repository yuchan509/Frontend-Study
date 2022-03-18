// default export : 기본 통로로 데이터를 내보내기.
// --> 함수명이 없어도 작동.
export default function (data) {
    return Object.prototype.toString.call(data).slice(8, -1)
}

// export default function getType(data) {
//     return Object.prototype.toString.call(data).slice(8, -1)
// }

// export default 123 --> ERROR!