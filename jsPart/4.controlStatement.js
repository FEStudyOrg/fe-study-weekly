// 조건문

// 1. if~else문
/* 
if(조건식){
    조건이 참일때 실행하는 내용;
}
else if(조건식){
   위 조건에 맞지 않았을 때 다음 조건에 부합한다면 실행하는 내용;
}
else{
   모든 조건에 충족하지 않는다면 실행하는 내용;
}
   */

const age = 30;
if (age > 30) {
  console.log('늙은이!');
} else if (age >= 20 && age <= 30) {
  console.log('젊은이!');
} else console.log('기타'); // 젊은이!

// 2. switch문
/*
switch(변수){
 case 값1:
 변수값과 case값이 동일할 때 실행할 문장
 break;
 case 값2:
 변수값과 case값이 동일할 때 실행할 문장
 break;
 case 값3:
 변수값과 case값이 동일할 때 실행할 문장
 break;
 default:
 기본적으로 실행할 문장 //if문의 else와 같은 역할
}
 */

let dayName;
let day = 3;
switch (day) {
  case 0:
    dayName = '월요일';
    break;
  case 1:
    dayName = '화요일';
    break;
  case 2:
    dayName = '수요일';
    break;
  case 3:
    dayName = '목요일';
    break;
  case 4:
    dayName = '금요일';
    break;
  case 5:
    dayName = '토요일';
    break;
  case 6:
    dayName = '일요일';
    break;
  default:
    console.log('해당사항없음');
}
console.log(dayName); // 목요일

// 반복문

// 1. for문
/*
 for(초기값; 조건식; 증감식){
  반복할 문장
} 
  */

// 매커니즘
// 1. 초기값 설정

// 2. 초기값이 조건식에 참이라면 {}실행

// 3. 증감식 실행

// 4. 증감된 값이 조건식에 부합하면 다시 또 {}실행

// 5. 증감식 실행

// 6. 증감된 값이 조건식에 거짓이라면 반복문 탈출

for (let i = 0; i < 5; i++) {
  console.log(i);
}
// 0, 1, 2, 3, 4

// 이중 for문
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    //안쪽 for문이 끝나야 바깥 for문의 증감식 실행
    console.log(i, j);
  }
}
// 0 0, 0 1, 0 2, 0 3, 0 4, 1 0, 1 1~, 4 3, 4 4

// 2. while 문
/*
while(조건식){
   반복할 문장
}
   */

let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}
// 5, 4, 3, 2, 1, 0
