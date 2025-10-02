// Seletores do DOM
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Função que cria um <li> com texto e o botão "Remover"
function createTaskItem(text) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = text;
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Remover';
  deleteBtn.className = 'delete-btn';
  deleteBtn.type = 'button';
  li.appendChild(span);
  li.appendChild(deleteBtn);
  return li;
}

// Captura do submit
taskForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const text = taskInput.value.trim();
  if (!text) return;
  const li = createTaskItem(text);
  taskList.appendChild(li);
  taskInput.value = '';
  taskInput.focus();
});
