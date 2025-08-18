# ✅ To-Do List (Vanilla JS)

Um projeto de **lista de tarefas** desenvolvido durante meus estudos em **Análise e Desenvolvimento de Sistemas**.  
O objetivo foi aplicar conceitos de **desenvolvimento web** utilizando **HTML, CSS e JavaScript puro (Vanilla JS)**, consolidando aprendizados e criando algo útil para portfólio.

---

## 🎯 Motivações

Escolhi desenvolver esta **To-Do List** porque é uma aplicação simples, mas que exige conhecimento prático de HTML, CSS e JS, além de lógica de programação e persistência de dados.  
O projeto serve para:

- Aprender manipulando o **DOM e eventos em JavaScript**  
- Criar um **CRUD completo** (adicionar, editar, concluir e remover tarefas)  
- Pensar em **UX/UI** e usabilidade  
- Produzir algo que **pode ser usado por outras pessoas** no dia a dia

---

## 📌 Funcionalidades

- ➕ Adicionar novas tarefas  
- ✏️ Editar tarefas existentes  
- ✅ Marcar tarefas como concluídas  
- ❌ Excluir tarefas individualmente  
- 🧹 Limpar todas as tarefas concluídas  
- 🔍 Filtrar tarefas: todas | pendentes | concluídas  
- 📊 Contador dinâmico (total, pendentes e concluídas)  
- 💾 Persistência com **LocalStorage**

---

## 🛠️ Tecnologias utilizadas

- **HTML5** → estrutura semântica e acessível  
- **CSS3** → tema escuro, variáveis CSS e layout responsivo  
- **JavaScript (Vanilla)** → manipulação de DOM, eventos e lógica de aplicação  

---

## 📘 Aprendizados

- Criar uma aplicação web do zero  
- Manipulação de DOM e eventos em JavaScript  
- Implementar um **CRUD completo**  
- Persistência de dados com LocalStorage  
- Organização do código em funções reutilizáveis  
- Criar interface clara e intuitiva (UX/UI)

---

## 👥 Beneficiários

- Estudantes de programação  
- Iniciantes em JavaScript  
- Usuários que querem organizar tarefas do dia a dia  

---

## 📂 Como executar o projeto (tudo em um script)

Você pode copiar e colar este bloco diretamente no terminal (Linux/macOS/Windows PowerShell) para **clonar, entrar na pasta e abrir no navegador**:

```bash
# Clonar repositório
git clone https://github.com/leandro-amaro/to-do-list.git

# Entrar na pasta do projeto
cd to-do-list

# Abrir no navegador (Linux/macOS)
if command -v xdg-open >/dev/null 2>&1; then
    xdg-open index.html
elif command -v open >/dev/null 2>&1; then
    open index.html
# Abrir no Windows (PowerShell)
elif command -v start >/dev/null 2>&1; then
    start index.html
else
    echo "Abra manualmente o arquivo index.html no navegador"
fi