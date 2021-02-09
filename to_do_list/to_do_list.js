loadToDoList(); // 메인 함수 로딩
var item = 0; // to do list의 개수를 0으로 둠

// 메인 함수
function loadToDoList() {
    document.querySelector('form').addEventListener('submit', submitToDoList); // form 태그 내에서 submit 발생 시 submitToDoList 함수 실행
    document.querySelector('ul').addEventListener('click', removeToDoList); // ul 태그 내에서 click 발생 시 removeToDoList 함수 실행
}

// to do list 추가 가능한지 확인하는 함수
function submitToDoList(event) {
    event.preventDefault(); // 새로고침 방지 (submit 누르면 보통 새로고침 되는데 그것을 막아줌)
    let task = document.querySelector('input'); // input 태그에서 입력된 갑을 받아 task 변수에 초기화
    if (task.value != '') {
        addToDoList(task.value);
    }
    task.value = ''; // task 변수를 비워줌
}

// to do list 추가하는 함수
function addToDoList(task) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `
    	&nbsp&nbsp&nbsp<input type="checkbox">&nbsp&nbsp&nbsp
    	<label>
    		${task}
    	</label>
    	<span class="delete"; style="float: right; margin-right: 30px; font-family: 'Raleway', sans-serif; font-weight: 700; font-size: 22px; color: #007b91;">
    		X
    	</span>`;
    ul.appendChild(li);
    document.querySelector('.to_do_lists').style.display = 'block';
    item += 1
}

// to do list 삭제하는 함수
function removeToDoList(event) {
    if (event.target.className == 'delete') {
        let remove = event.target.parentNode;
        let parentNode = remove.parentNode;
        parentNode.removeChild(remove);
    } else {
        // tickTask(event);
        console.log("dfd");
    }
}