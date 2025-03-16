// 객체타입(Object Type)
// Object: key-value를 쌍으로 갖는 데이터 타입
let apple = {
  name: 'apple',
  color: 'red',
  taste: 'sweet',
};

console.log(apple); // { name: 'apple', color: 'red', taste: 'sweet' }
console.log(apple.name); // apple
console.log(apple.color); // red
console.log(apple.taste); // sweet

// 함수, 배열 등도 객체타입(다음 챕터때 배울 예정)

// 객체타입은 copy by reference, 객체의 이름은 함수가 담겨진 메모리의 시작셀 주소를 갖는다
