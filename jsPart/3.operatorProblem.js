// 문제1: 산술연산자
console.log(10 + '5'); // ❓
console.log(10 - '5'); // ❓
console.log(10 * '5'); // ❓
console.log(10 / '5'); // ❓
console.log(10 % 3); // ❓
console.log(2 ** 3); // ❓
console.log('5' + 5 - 2); // ❓
console.log(+'100'); // ❓
console.log(+true); // ❓
console.log(+false); // ❓

// 문제2: 할당연산자 문제
let x = 5;
x += 2;
console.log(x); // ❓

x -= 3;
console.log(x); // ❓

x *= 2;
console.log(x); // ❓

x /= 2;
console.log(x); // ❓

x %= 3;
console.log(x); // ❓

x **= 2;
console.log(x); // ❓

// 문제3: 비교연산자 문제
console.log(10 == '10'); // ❓
console.log(10 === '10'); // ❓
console.log(0 == false); // ❓
console.log(0 === false); // ❓
console.log(null == undefined); // ❓
console.log(null === undefined); // ❓
console.log(NaN == NaN); // ❓
console.log(10 != '10'); // ❓
console.log(10 !== '10'); // ❓

// 문제4: 비교연산자 문제
console.log(true && false); // ❓
console.log(true || false); // ❓
console.log(!true); // ❓
console.log(!false); // ❓
console.log(5 > 3 && 10 < 20); // ❓
console.log(5 > 3 || 10 > 20); // ❓
console.log(0 && 'hello'); // ❓
console.log(1 && 'hello'); // ❓
console.log(null || 'world'); // ❓
console.log(undefined || 'fallback'); // ❓
console.log('' ?? 'default'); // ❓
console.log(null ?? 'fallback'); // ❓

// 문제5: 삼항연산자 문제
let score = 85;
let grade = score >= 90 ? 'A' : score >= 80 ? 'B' : 'C';
console.log(grade); // ❓
