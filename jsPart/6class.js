// class: 객체를 뽑아내기 위한 청사진, 틀
// 인스턴스: class로 만들어진 객체
// 비유: 붕어빵 기계 == class, 만들어진 붕어빵 == 인스턴스
// 비유2: ppt 템플릿 == class, 템플릿으로 생성한 ppt == 인스턴스

/*
class 클래스명{
   constructor(){
      this.key1 = value1;
      this.key2 = value2;
      ...
   }
  함수명1 = () => {
   실행할 내용1;
  }
  함수명2 = () => {
   실행할 내용2;
  }
 ...
}

const/let/var 식별자 = new 클래스명();
*/
class Student {
  constructor(num, name, branch) {
    this.num = num;
    this.name = name;
    this.branch = branch;
  }
}

const studentId13 = new Student(13, '김철수', '이과');
console.log(studentId13); // {num : 13, name : 김철수, branch : 이과}
console.log('이름: ', studentId13.name);
console.log('학번: ', studentId13.num);
console.log('학과: ', studentId13.branch);
