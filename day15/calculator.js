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
    if (!/^[0-9]$/.test(number)) {
        showError("유효한 숫자를 입력하세요.");
        return;
    }
    
    if (currentInput === "0") {
        currentInput = number;
    } else {
        currentInput += number;
    }
    
    updateDisplay();
}

// 연산자 설정 함수
function setOperator(op) {
    if (!["+", "-", "*", "/"].includes(op)) {
        showError("유효한 연산자를 입력하세요.");
        return;
    }
    
    if (currentInput === "") {
        showError("숫자를 먼저 입력하세요.");
        return;
    }
    
    firstNumber = Number(currentInput);
    
    if (isNaN(firstNumber)) {
        showError("유효한 숫자가 아닙니다.");
        return;
    }
    
    operator = op;
    currentInput = "0";
    updateDisplay();
}

// 계산 수행 함수
function calculate() {
    if (firstNumber === null || operator === null || currentInput === "") {
        showError("계산할 값이 없습니다.");
        return;
    }
    
    const secondNumber = Number(currentInput);
    
    if (isNaN(secondNumber)) {
        showError("유효한 숫자가 아닙니다.");
        return;
    }
    
    if (operator === "/" && secondNumber === 0) {
        showError("0으로 나눌 수 없습니다.");
        return;
    }
    
    let result;
    switch (operator) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "*":
            result = firstNumber * secondNumber;
            break;
        case "/":
            result = firstNumber / secondNumber;
            break;
    }
    
    showResult(result);
    currentInput = result.toString();
    updateDisplay();
    
    history.push({ firstNumber, operator, secondNumber, result });
    console.log(history);
    
    firstNumber = null;
    operator = null;
}

// 초기 디스플레이 업데이트
updateDisplay();