const todoText = document.getElementById('todo-text');
const todoul = document.getElementById('todo-ul');

function addTask() {
if (todoText.value.trim() === ''){
    alert('Enter some text');
} else {
    console.log(todoText.value.trim());
    const liTag = document.createElement('li');
    const spanText = document.createElement('span');
    const textNode = document.createTextNode(todoText.value.trim());
    spanText.appendChild(textNode);
    const spanClose = document.createElement('span');
    spanClose.classList.add('Close');
    spanClose.innerHTML = '&times;';
    spanClose.addEventListener('click', (e) => {
        console.log(e.target.parentElement);
        const li = e.target.parentElement;
        li.parentElement.removeChild(li);
    });
    liTag.appendChild(spanText);
    liTag.appendChild(spanClose);
    todoul.appendChild(liTag);
    todoText.value='';
}
}