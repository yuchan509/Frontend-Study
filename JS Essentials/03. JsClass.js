const heropy = {
    // 멤버(Menber) =  속성 + 메서드
    // 속성(Property) : 순서는 중요치 않음.
    firstName : 'Heropy',
    lastName : 'Park',

    // 메서드(Method)
    getFullName : function () {
        // this : heropy 를 의미.
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(heropy.getFullName())

const amy = {
    firstName : 'Amy',
    lastName : 'Clarke',
    getFullName : function () {
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(amy.getFullName())

const neo = {
    firstName : 'Neo',
    lastName : 'Smtih',
    getFullName : function () {
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(neo.getFullName())

// 반복되는 로직을 가지는 객체 데이터는 메모리 부하 문제를 일으킬 수 있음.
// function user(first, last) {
//     this.firstName = first
//     this.lastName = last
    // this.getFullName = function() {
    //     return `${this.firstName} ${this.lastName}`
    // }
// }

// ES6 Classes.
/* 생성자(constructor) :
 정해진 키밸류 값을 가진 객체를 편리하게 생성할 수 있게 도와주는 기계같은 역할을 수행.
 비슷한 객체들을 여러 개 생성하기 위해서 생성할 때마다 키밸류 값을 일일이 입력해서 만드는 것이아니라 
 하나의 생성자를 만들어놓으면 그 생성자를 이용하여 간편하게 해당 객체(인스턴스)를 생성할 수 있음. 
*/

class user {
    constructor(first, last) {
        this.firstName = first
        this.lastName = last
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}


// prototype에 동일한 로직을 가진 getFullName을 만들어줌.
user.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
}

// user() : 생성자 함수 
const uchan = new user('Uchan', 'Kim')
const amy1 = new user('Amy', 'Clarke')
const neo1 = new user('Neo', 'Smith')

// prototype을 참조. 
console.log(uchan.getFullName())


// this : 일반(normal) 함수는 호출 위치에 따라 this 정의.
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의.

const heropy1 = {
    name : 'Heropy1',
    normal : function () {
        console.log(this.name)
    },
    arrow : () => {
        console.log(this.name)
    }
}
heropy1.normal()
heropy1.arrow()


const amy2 = {
    name : 'Amy2',
    normal : heropy1.normal,
    arrow : heropy1.arrow
}
amy2.normal()
amy2.arrow()


function User(name) {
    this.name = name
}
User.prototype.normal = function () {
    console.log(this.name)
}
User.prototype.arrow = () => {
    console.log(this.name)
}

const heropy3 = new User('Heropy')
heropy3.normal()
heropy3.arrow()

const timer = {
    name : 'Heropy',
    timeout : function () {
        setTimeout(() => {
            // this = > timer
            console.log(this.name)
        }, 2000)
    }
}
timer.timeout()


// ES6 Classes

const heropy2 = {
    name : 'Heropy2',
    normal() {
        console.log(this.name)
    },
    arrow : () => {
        console.log(this.name)
    }
}
heropy2.normal()
heropy2.arrow()

// 운송 수단이라는 기본적인 로직 생성. 
class Vehicle {
    // 매개변수 : name, wheel
    constructor(name, wheel) {
        this.name = name
        this.wheel = wheel
    }
}
const myVehicle = new Vehicle('운송수단', 2)
console.log(myVehicle)

// extends : 확장(상속)
class Bicycle extends Vehicle {
    constructor(name, wheel) {
        // super -> Vehicle 의미.
        /* super의 두 가지 용법.
            1. super() : 부모-class의 생성자(constructor)를 참조.
            2. super.method() : 부모-class의 prototype-method를 참조.

            super의 기술적 의미.
            -> 상속된(자식) class에 요소 추가 시 새로 추가되는 parameter를 정의하려면, 기존(부모)-class constructor를 다시 정의해야함.
            이 과정에서 생기는 중복되는 코드가 발생해, error발생 확률 증가, 메모리 낭비 등 매우 비효율적인 낭비가 발생.
            이러한 부분을 super로 해결가능함 
        */

        super(name, wheel)
    }
}
const myBicycle = new Bicycle('삼천리', 2)
const daughterBycycle = new Bicycle('세발', 3)
console.log(myBicycle)
console.log(daughterBycycle)

// Vehicle(운송 수단) 로직을 가져와(상속하여) 이용.
class Car extends Vehicle {
    constructor(name, wheel, license) {
        // super -> Vehicle 의미. 상속(확장)을 이용.
        super(name, wheel)
        this.license = license
    }
}
const myCar = new Car('BMW', 4, true)
console.log(myCar)