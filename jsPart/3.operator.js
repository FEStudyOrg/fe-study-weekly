// 산술연산자
console.log(5 + 2); //7
console.log(5 - 2); //3
console.log(5 * 2); //10
console.log(5 / 2); //2
console.log(5 % 2); //1
console.log(5 ** 2); //25
console.log(Math.pow(5, 2)); //25, 거듭제곱 계산시 사용할 수 있는 함수

// 단항연산자
let a = 5;
a = -5; //단항연산자 '-'사용
a = +5; //단항연산자 '+'사용

let boolean = true;
console.log(boolean); // true
console.lopg(!boolean); // false

//만약 숫자가 아닌 타입에 +를 붙이면 해당타입들의 true와 false를 각각 1과 0으로 나타낸다
console.log(+false); // 0
console.log(+null); // 0
console.log(+''); // 0
console.log(+undefined); //NaN: 숫자로 변환될 수 없는 값이므로 NaN
console.log(+true); // 1

// 할당연산자
let b = 1;
console.log(b); // 1

b += 2;
console.log(b); // 3

b -= 2;
console.log(b); // 1

b *= 2;
console.log(b); // 2

b /= 2;
console.log(b); // 1

b %= 2;
console.log(b); // 0

b ** 2;
console.log(b); // 0

// 증감연산자
let c = 0;
console.log(c); // 0
c++;
console.log(c); // 1
console.log(++c); // 2
console.log(--c); // 1

// 비교 연산자: 결과값 === boolean
console.log(3 > 2); // true
console.log(3 < 2); // false
console.log(3 >= 3); // true
console.log(3 <= 2); // false

// 동등 비교 관계 연산자
// == 같다
// != 다르다
// === 타입과 값 모두 같다
// !== 타입과 값 모두 다르다
console.log(2 == 2); // true
console.log(2 != 2); // false
console.log(2 != 3); // true
console.log(2 == '2'); // true, type은 다르지만 값은 같으므로 주의하자
console.log(2 === '2'); // false
console.log(true == 1); // true, true는 1로도 나타낼 수 있다
console.log(true === 1); // false

// 논리연산자
// &&: and, 하나만 false 여도 false
// ||: or, 하나만 true여도 true
console.log('' && 3); // false
console.log(null || 'string'); // true

// 삼항연산자:
// expression ? true일때 실행할 코드 : false일때 실행할 코드
let age = 20;
let canDrink = age >= 18 ? 'Yes' : 'No';
console.log(canDrink); // Yes

// 연산자 우선순위: 할당 < 논리 < 사칙연산 < 거듭제곱 < 증감
// 꿀팁: 외우기 힘들면 그냥 ()을 써서 우선순위를 정해주자!
