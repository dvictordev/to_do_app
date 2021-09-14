function todo(){
    const todo = document.querySelector('.todo')
    const button = document.querySelector('.add-tarefa')
    const list = document.querySelector('.list')
    
    function createLi() {
        const li = document.createElement('li')
        return li;
    }
    
    function createDelete(li){{
        li.innerText += ' '
        const del = document.createElement('button')
        del.innerText = 'apagar'
        li.appendChild(del)
        del.setAttribute('class', 'apagar')
        del.setAttribute('title', 'apagar esta tarefa')
    }}
    
    function del(li){
    
    }
    function clearInput() {
        todo.value = ''
        todo.focus()
    }
    
    function createTodo(inputText) {
        const li = createLi()
        li.innerText = inputText;
        list.appendChild(li)
        clearInput()
        createDelete(li)
        saveTodo();
    }
    
    todo.addEventListener('keypress', function (e) {
        if (e.keyCode !== 13) return;
        createTodo(todo.value)
    
    })
    
    
    button.addEventListener('click', function (e) {
        if (!todo.value) return;
        createTodo(todo.value)
    })
    
    document.addEventListener('click', function(e){
        const el = e.target
        if(el.classList.contains('apagar')){
           el.parentElement.remove();
           saveTodo()
        }
    })
    
    function saveTodo(){
        const listTodo = list.querySelectorAll('li')
        const allTodo = [];
    
        for(let tarefa of listTodo){
            let todoText = tarefa.innerText;
            todoText = todoText.replace ('apagar', '')
            allTodo.push(todoText)
        }
        const todosJson = JSON.stringify(allTodo)
        localStorage.setItem('tarefas', todosJson)
    }
    
    function addCreatedTodos(){
        const todos = localStorage.getItem('tarefas');
        const todoList = JSON.parse(todos)
    
        for(let todo of todoList){
            createTodo(todo);
        }
    
    }
    addCreatedTodos()
}

todo();
