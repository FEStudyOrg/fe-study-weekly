// 자료형: 데이터 타입

// 원시타입(Primitive type):
// number
let integer = 123; // 10진수 양수
let negative = -123; // 10진수 음수
let double = 1.23; // 10진수 실수
console.log(integer); // 123
console.log(negative); // -123
console.log(double); // 1.23

let binary = 0b1111011; // 2진수, 0b~
let octal = 0o173; // 8진수, 0o~
let hex = 0x7b; // 16진수, 0x~
console.log(binary);
console.log(octal);
console.log(hex); // 전부동일하게 123

let bigInt = 12341234123412341234123412341241234n; // bigint 타입: 2의 53승 -1 보다 큰 수를 저장할경우 사용, 숫자옆 n 작성

// string
let string = '안녕하세요'; // ''혹은 ""로 씌워준다
console.log(string); // 안녕하세요

//특수문자 출력방법
string = "'안녕'"; // ''는 ""로 덮어준다
console.log(string); // '안녕'
string = '"안녕"'; // ""는 ''로 덮어준다
console.log(string); // "안녕"

string = '이름//나이//사는곳';
console.log(string); // 이름/나이/사는곳

// 템플릿 리터럴: 보다 더 쉽게 문자열의 배치와 문자열간의 합을 도와주는 템플릿, ` `로 작성
let id = '철수';
let greetings = '안녕!,' + id + '\n반갑습니다.';
console.log(greetings); //안녕!, 철수
//반갑습니다.

greetings = `'안녕!, ${id}
반갑습니다.`; // ${문자열변수}로 다른 문자열을 불러올 수 있음
// 단순히 엔터키도 \n의 역할을 함 ->직관적인 타입
console.log(greetings); //안녕!, 철수
//반갑습니다.

// boolean
let a = true;
let b = false;
console.log(a); // true
console.log(b); // false

// Falshy: 거짓인 값
// !!연산자: 값이 참인지 거짓인지 판단해주는 연산자
console.log(!!0);
console.log(!!-0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);

// Truthy: 참인 값
console.log(!!1);
console.log(!!-1);
console.log(!!'Text');
console.log(!!{});
console.log(!!Infinity);

// null & undfined & NaN
let c; // 선언은 했지만 값을 할당하지 않음
console.log(c); // undefined
c = null; // 명시적으로 비어있다는 값을 할당
console.log(c); // null
console.log(10 + NaN); // NaN: number타입의 특별한 값

// 원시타입은 copy by value, 원사타입변수 이름은 그냥 그 자체로 값을 담고 있음
