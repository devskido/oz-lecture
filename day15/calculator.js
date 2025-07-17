// 계산기 상태 변수들
let currentInput = "0";
let firstNumber = null;
let operator = null;
const history = [];

// DOM 요소들
const display = document.getElementById("display");
const result = document.getElementById("result");

// 디스플레이 업데이트 함수
function updateDisplay() {
    display.value = currentInput;
}

// 에러 메시지 표시 함수
function showError(message) {
    result.textContent = `에러: ${message}`;
    result.classList.add("error");
}

// 결과 표시 함수
function showResult(value) {
    result.textContent = `결과: ${value}`;
    result.classList.remove("error");
}

// 계산기 초기화 함수
function clearCalculator() {
    currentInput = "0";
    firstNumber = null;
    operator = null;
    result.textContent = "";
    result.classList.remove("error");
    updateDisplay();
}

// 숫자 추가 함수
function appendNumber(number) {
    // TODO: 아래 로직을 구현하세요
    // 1. 입력된 number가 유효한 숫자("0"~"9")인지 확인 (힌트: /^[0-9]$/.test(number) 사용)
    // 2. 유효하지 않으면 showError("유효한 숫자를 입력하세요.") 호출 후 return
    // 3. currentInput이 "0"이면 number로 교체, 아니면 currentInput에 number 추가
    // 4. updateDisplay() 호출
    
    // 학생들이 작성할 부분
}

// 연산자 설정 함수
function setOperator(op) {
    // TODO: 아래 로직을 구현하세요
    // 1. op가 유효한 연산자("+", "-", "*", "/")인지 확인 (힌트: ["+", "-", "*", "/"].includes(op) 사용)
    // 2. 유효하지 않으면 showError("유효한 연산자를 입력하세요.") 호출 후 return
    // 3. currentInput이 비어있거나 "0"이면 showError("숫자를 먼저 입력하세요.") 호출 후 return
    // 4. firstNumber를 Number(currentInput)로 저장
    // 5. firstNumber가 유효한 숫자인지 확인 (힌트: isNaN(firstNumber) 사용)
    // 6. operator를 op로 저장
    // 7. currentInput을 "0"으로 초기화
    // 8. updateDisplay() 호출
    
    // 학생들이 작성할 부분
}

// 계산 수행 함수
function calculate() {
    // TODO: 아래 로직을 구현하세요
    // 1. firstNumber, operator, currentInput이 모두 존재하는지 확인
    // 2. 없으면 showError("계산할 값이 없습니다.") 호출 후 return
    // 3. secondNumber를 Number(currentInput)로 변환
    // 4. secondNumber가 유효한 숫자인지 확인
    // 5. 나눗셈인 경우 secondNumber가 0인지 확인, 0이면 showError("0으로 나눌 수 없습니다.") 호출 후 return
    // 6. switch문으로 operator에 따라 계산 수행
    // 7. 계산 결과를 result 변수에 저장
    // 8. showResult(result) 호출
    // 9. currentInput을 result로 설정
    // 10. updateDisplay() 호출
    // 11. 계산 기록을 history 배열에 추가 (객체 형태: { firstNumber, operator, secondNumber, result })
    // 12. console.log로 history 배열 출력
    // 13. 계산 후 firstNumber와 operator를 초기화
    
    // 학생들이 작성할 부분
}

// 초기 디스플레이 업데이트
updateDisplay();