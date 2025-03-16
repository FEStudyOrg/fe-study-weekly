// 문제1: typeof 연산자
console.log(typeof 42);       // ❓ 결과는?
console.log(typeof "hello");  // ❓ 결과는?
console.log(typeof true);     // ❓ 결과는?
console.log(typeof undefined); // ❓ 결과는?
console.log(typeof null);     // ❓ 결과는? (주의!)
console.log(typeof {});       // ❓ 결과는?
console.log(typeof []);       // ❓ 결과는?
console.log(typeof function(){}); // ❓ 결과는?

// 문제2: null과 undefined 이해
let x;
console.log(x); // ❓ 무엇이 출력될까?
console.log(typeof x); // ❓ typeof 결과는?

let y = null;
console.log(y); // ❓ 무엇이 출력될까?
console.log(typeof y); // ❓ typeof 결과는?

// 문제3: NaN 체크
console.log(Number("Hello"));  // ❓ 결과는?
console.log(NaN == NaN); // ❓ 결과는?
console.log(isNaN(NaN)); // ❓ 결과는?
console.log(isNaN("Hello")); // ❓ 결과는?
console.log(Number.isNaN("Hello")); // ❓ 결과는?

// 문제4: 형변환 결과 예측
console.log(Boolean(1));  // ❓ 결과는?
console.log(Boolean("")); // ❓ 결과는?
console.log(Boolean(" ")); // ❓ 결과는?
console.log(Boolean([])); // ❓ 결과는?
console.log(String(true)); // ❓ 결과는?
console.log(String(null)); // ❓ 결과는?
console.log(String(undefined)); // ❓ 결과는?
console.log(Number("42abc"));  // ❓ 결과는?
console.log(Number(true));  // ❓ 결과는?
console.log(Number(false)); // ❓ 결과는?
console.log(Number(null));  // ❓ 결과는?