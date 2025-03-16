// 함수: 특정 작업을 수행하는 코드의 집합
// 함수 장점: 코드의 가독성과 유지보수성, 재사용성을 높임

/* 
function 식별자(parameters){
  실행할 문장
  return 식/변수/값
}
  */

// 선언과 호출
function add(num1, num2) {
  return num1 + num2;
}
const result = add(1, 2);
console.log(result); // 3

// return의 쓰임: 값반환, 함수 종료
function print(num) {
  if (num < 0) {
    return;
  }
  console.log(num);
}

print(-10);

// 무명함수
/*
let 식별자 = function(parameters){
   실행할 문장
}
   */
let minus = function (a, b) {
  //add: 이 함수의 주소를 저장
  return a - b;
};
console.log(add(1, 2)); // -1

// 화살표함수
/* 
let 식별자 = (parameters) => { 실행할 문장 }
*/

let mul = (a, b) => {
  return a * b;
};
console.log(add(1, 2)); // 2
