//shift alt x
alert('hello');
alert;

b = 10;
var b;

console.log(b);

// 1단계: 사용자에게 "Who's there?"를 묻는 메시지
let user = prompt("Who's there?");

if (user === 'Admin') {
  // Admin이 입력된 경우
  let password = prompt('Password?');

  if (password === 'TheMaster') {
    // 비밀번호가 올바른 경우
    alert('Welcome!');
  } else if (password === null || password === '') {
    // 취소 또는 아무 입력이 없는 경우
    alert('Canceled');
  } else {
    // 잘못된 비밀번호인 경우
    alert('Wrong password');
  }
} else if (user === null || user === '') {
  // 아무 입력도 없거나 취소한 경우
  alert('Canceled');
} else {
  // Admin이 아닌 다른 이름을 입력한 경우
  alert("I don't know you");
}

class User {
  #pw; // 프라이빗 필드 선언

  constructor(userId, userPw) {
    this.id = userId; // 인스턴스의 id 속성
    this.#pw = this.hashPassword(userPw); // 프라이빗 필드 #pw에 해시된 비밀번호 저장
  }

  hashPassword(pw) {
    return 'hashCODE' + pw + 'saltttt';
  }
}

const user = new User('tiger', 'hello123');
console.log(user.id); // "tiger" 출력
console.log(user.getPassword()); // "hashCODEhello123saltttt" 출력
