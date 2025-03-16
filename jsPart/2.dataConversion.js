// 타입확인 함수
// typeof(value)
let variable;
console.log(typeof variable); // undefined

variable = '';
console.log(typeof variable); // string

variable = 123;
console.log(typeof variable); // number

variable = true;
console.log(typeof variable); // boolean

variable = function () {};
console.log(typeof variable); // function

variable = Symbol();
console.log(typeof variable); // symbol

// 형변환
// String(value): string type으로 변환
console.log('String(100): ', String(100)); // '100'

// Number(value): number type으로 변환
console.log('Number("200"): ', Number('200')); // 200

// Boolean(value): boolean type으로 변환
console.log('Boolean(0): ', Boolean(0)); // false
