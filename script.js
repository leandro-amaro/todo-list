// ===== Configuração =====
const STORAGE_KEY = 'todo.tasks.v1';

// ===== Estado =====
let tasks = [];
let currentFilter = 'all'; // all | active | done

// ===== Elementos =====
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const filterSelect = document.getElementById('filter');
const clearDoneBtn = document.getElementById('clearDoneBtn');
const counterEl = document.getElementById('counter');

// ===== Utilitários =====
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
const save = () => localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
const load = () => {
  try { tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
  catch { tasks = []; }
};

function counts() {
  const total = tasks.length;
  const done = tasks.filter(t => t.done).length;
  const active = total - done;
  return { total, done, active };
}

function updateCounter() {
  const { total, done, active } = counts();
  counterEl.textContent = `Total: ${total} • Pendentes: ${active} • Concluídas: ${done}`;
}

// ===== Renderização =====
function render() {
  taskList.innerHTML = '';
  const filtered = tasks.filter(t =>
    currentFilter === 'all' ? true : currentFilter === 'active' ? !t.done : t.done
  );
  for (const task of filtered) {
    const li = document.createElement('li');
    li.className = 'task-item' + (task.done ? ' done' : '');
    li.dataset.id = task.id;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.checked = task.done;
    checkbox.addEventListener('change', () => toggleTask(task.id));

    const span = document.createElement('span');
    span.className = 'text';
    span.textContent = task.text;
    span.title = 'Clique para editar';
    span.addEventListener('click', () => editTask(task.id));

    const actions = document.createElement('div');
    actions.className = 'actions';

    const delBtn = document.createElement('button');
    delBtn.className = 'btn danger';
    delBtn.textContent = 'Excluir';
    delBtn.addEventListener('click', () => deleteTask(task.id));

    actions.appendChild(delBtn);

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(actions);

    taskList.appendChild(li);
  }
  updateCounter();
}

// ===== Ações =====
function addTask(text) {
  const trimmed = (text || '').trim();
  if (!trimmed) return;
  tasks.push({ id: uid(), text: trimmed, done: false, createdAt: Date.now() });
  save();
  render();
}

function toggleTask(id) {
  const t = tasks.find(t => t.id === id);
  if (!t) return;
  t.done = !t.done;
  save();
  render();
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  save();
  render();
}

function editTask(id) {
  const t = tasks.find(t => t.id === id);
  if (!t) return;
  const novoTexto = prompt('Editar tarefa:', t.text);
  if (novoTexto === null) return; // cancelou
  const trimmed = novoTexto.trim();
  if (!trimmed) return;
  t.text = trimmed;
  save();
  render();
}

function clearDone() {
  tasks = tasks.filter(t => !t.done);
  save();
  render();
}

// ===== Eventos =====
window.addEventListener('DOMContentLoaded', () => {
  load();
  render();
});

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addTask(taskInput.value);
  taskInput.value = '';
  taskInput.focus();
});

filterSelect.addEventListener('change', (e) => {
  currentFilter = e.target.value;
  render();
});

clearDoneBtn.addEventListener('click', clearDone);

// (Opcional) Atualize o link do repositório no rodapé quando publicar no GitHub
const repoLink = document.getElementById('repoLink');
repoLink.addEventListener('click', (e) => {
  if (repoLink.getAttribute('href') === '#') {
    e.preventDefault();
    alert('Depois de publicar no GitHub, atualize o link no script.js (repoLink.href = "URL do repositório");');
  }
});