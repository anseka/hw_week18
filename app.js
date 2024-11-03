console.log('hello');
let taskNew = document.querySelector('#tasknew');
let addTaskButton = document.querySelector('#addtask');
let deleteListButton = document.querySelector('#deletelist');
let taskList = document.querySelector('#tasklist');
let errorTask = document.querySelector('#errortask');
let textMessage = document.querySelector('#textmessage');
let arrayList = [];
let form = document.forms[0];

checkLocalStorage();

function addNewTask(event) {
	event.preventDefault();
	errorTask.innerHTML = '';
	if (taskNew.value === '') {
		errorTask.innerHTML = 'Вы не ввели название задачи!';
	} else {
		arrayList.push(taskNew.value);
		localStorage.setItem('task', JSON.stringify(arrayList));
		checkLocalStorage();
		deleteListButton.disabled = false;
	}
}

addTaskButton.addEventListener('click', addNewTask);

deleteListButton.addEventListener('click', function () {
	localStorage.removeItem('task');
	taskList.innerHTML = '';
	textMessage.style.display = 'block';
	deleteListButton.disabled = true;
});

function checkLocalStorage() {
	if (localStorage.getItem('task')) {
		taskList.innerHTML = '';
		textMessage.style.display = 'none';
		arrayList = JSON.parse(localStorage.getItem('task'));
		for (let task of arrayList) {
			taskList.innerHTML += `<div class="content"><li>${task}</li><input class="custom-checkbox" type="checkbox" name="" id=""></div>`;
		}
	} else {
		deleteListButton.disabled = true;
	}
}
