// 문제1: var, let, const 차이점
console.log(a); // ❓ 여기에 출력될 값은?
var a = 5;
console.log(a); // ❓ 이 값은?

console.log(b); // ❓ 오류 발생 여부?
let b = 10;
console.log(b); // ❓ 이 값은?

const c;
c = 20; // ❓ 이 코드가 실행될까?
console.log(c);

// 문제2: var의 함수 스코프
function testVar() {
    if (true) {
        var x = 100;
    }
    console.log(x); // ❓ 출력될 값은?
}
testVar();
console.log(x); // ❓ 오류 발생 여부?

// 문제3: let, const 블록스코프
{
    let y = 50;
    const z = 70;
}
console.log(y); // ❓ 오류 발생 여부?
console.log(z); // ❓ 오류 발생 여부?

// 문제4: console.log(myVar); // ❓ 오류 발생 여부?
let myVar = 30;
console.log(myVar); // ❓ 출력될 값은?