// DOM 요소 선택
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const clearButton = document.getElementById('clearButton');

// 할 일 추가 함수
function addTask() {
    // 입력값 가져오기 및 공백 제거
    const taskText = taskInput.value.trim();
    
    // 입력 검증
    if (taskText === '') {
        alert('할 일을 입력해주세요!');
        return;
    }
    
    // 새로운 리스트 아이템 생성
    const li = document.createElement('li');
    
    // 할 일 텍스트를 위한 span 생성
    const span = document.createElement('span');
    span.textContent = taskText;
    
    // 삭제 버튼 생성
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '삭제';
    deleteButton.className = 'delete-button';
    
    // span 클릭 시 완료 상태 토글
    span.addEventListener('click', function() {
        span.classList.toggle('completed');
    });
    
    // 삭제 버튼 클릭 시 항목 제거
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(li);
    });
    
    // li에 span과 버튼 추가
    li.appendChild(span);
    li.appendChild(deleteButton);
    
    // 리스트에 li 추가
    taskList.appendChild(li);
    
    // 입력창 비우기
    taskInput.value = '';
    
    // 입력창에 포커스
    taskInput.focus();
}

// 전체 삭제 함수
function clearAllTasks() {
    // 모든 자식 요소 제거
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

// 이벤트 리스너 추가
// 추가 버튼 클릭
addButton.addEventListener('click', addTask);

// Enter 키 입력
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

// 전체 삭제 버튼 클릭
clearButton.addEventListener('click', clearAllTasks);