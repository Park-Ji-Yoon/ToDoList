loadEvents();
var row = 0;

function loadEvents(){
  document.querySelector('form').addEventListener('submit', submit);
  document.querySelector('button').addEventListener('del', removeTask);
}

function submit(e){
  e.preventDefault();
  let input = document.querySelector('input');
  if(input.value != '')
    addTask(input.value);
  input.value = '';
}

// function addTask(task){
//   let ul = document.querySelector('ul');
//   let li = document.createElement('li');
//   li.innerHTML = `<span class="delete">×</span><input type="checkbox"><label>${task}</label>`;
//   ul.appendChild(li);
//   document.querySelector('.board').style.display = 'block';
// }
function addTask(task){
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.style = "list-style:none;";
  li.innerHTML = `<button type="del"; onclick="removeTask(" + row + ")">×</button><label>${task}</label>`;
  li.setAttribute("id", "Remove");
  ul.appendChild(li);
  document.querySelector('.board').style.display = 'block';
  row += 1
}

function removeTask(row){
  console.log(row)
}
