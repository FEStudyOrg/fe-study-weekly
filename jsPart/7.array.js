// 배열: 여러 데이터를 나란한 순서로 보관할수 있는 자료구조
// 각 요소들의 메모리 주소는 이어져있는게 가장 큰 특징 -> 바로바로 접근가능
// 인덱스: 각 요소의 순서를 나타냄
// 인덱스: 인덱스는 0부터 시작
// 다양한 자료형을 저장할 수 있음

let array = new Array(2); // 사이즈 지정
console.log(array); // [ <2 empty items> ]

array = new Array(1, 2, 3); // 아이템 지정
console.log(array); // [ 1, 2, 3 ]

array = Array.of(1, 2); //static 함수를 활용한 배열 생성
console.log(array); // [1, 2]

const anotherArray = [1, 2, 3, 4]; //배열 literal :  [ ]
console.log(anotherArray); // [1, 2, 3, 4]
