// ## 기본 과제 ##

// 1. 변수 선언
const maxStars = 10;
let userInput;
var stars = "";

// 2. 별 출력 함수 (함수 선언문)
function printStars(count = 1) {
  stars = ""; // Reset stars string
  for (let i = 0; i < count; i++) {
    stars += "*";
  }
  console.log(stars);
}

// 3. 유효한 입력 받을 때까지 반복 (while, break, continue)
while (true) {
  userInput = prompt(`Enter the number of stars (1-${maxStars}):`);
  const userNum = Number(userInput);

  if (!isNaN(userNum) && userNum > 0 && userNum <= maxStars) {
    printStars(userNum);
    break; // 유효한 입력 후 루프 종료
  } else {
    console.log(`Invalid input! Enter a number between 1 and ${maxStars}.`);
    continue; // 유효하지 않은 입력 건너뛰기
  }
}


// ## 도전 과제 ##

// 1. 역순 별 출력 (함수 표현식)
const printReverseStars = function(count) {
  for (let i = count; i > 0; i--) {
    let line = "";
    for (let j = 0; j < i; j++) {
      line += "*";
    }
    console.log(line);
  }
};

console.log("\n--- Challenge: Reverse Stars ---");
printReverseStars(userNum);


// 2. 사각형 패턴 출력 (화살표 함수)
const printSquare = (count) => {
  for (let i = 0; i < count; i++) {
    let line = "";
    for (let j = 0; j < count; j++) {
      line += "*";
    }
    console.log(line);
  }
};

console.log("\n--- Challenge: Square Pattern ---");
printSquare(userNum);


// 3. for...in을 사용한 패턴 출력
const starPatterns = {
  pattern1: "***",
  pattern2: "*****",
  pattern3: "*"
};

console.log("\n--- Challenge: Patterns with for...in ---");
for (const key in starPatterns) {
  console.log(`${key}: ${starPatterns[key]}`);
}


// 4. ...rest를 사용한 여러 숫자 별 출력
function printMultipleStars(...counts) {
  console.log("\n--- Challenge: Multiple Counts with ...rest ---");
  for (const count of counts) {
    let line = "";
    for (let i = 0; i < count; i++) {
      line += "*";
    }
    console.log(`Stars for count ${count}: ${line}`);
  }
}

printMultipleStars(2, 5, 1);
