const todoTextarea=document.getElementById('todo-textarea');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoContainer = document.getElementById('todo-container');


const state = {
    todoItems: []
};


const setTodoItems = items => {
    state.todoItems = items;
};

const addTodoItem = item => {
    const todoItemsCopy = state.todoItems.slice();
    todoItemsCopy.push(item);
    setTodoItems(todoItemsCopy);
}

const removeTodoItem = index => {
    const todoItemsCopy = state.todoItems.slice();
    todoItemsCopy.splice(index,1);
    setTodoItems(todoItemsCopy);
}

const buildTodoItem = (item, index) => {
    const todoEl = document.createElement('article');
    const textEl = document.createElement('p');
    const deleteBtn = document.createElement('button');


    deleteBtn.innerHTML = 'Delete';

    deleteBtn.addEventListener('click', evt => {
        removeTodoItem(index);
        buildTodoItems(state.todoItems);
    });
    textEl.innerHTML = item;

    todoEl.append(textEl, deleteBtn);
    return todoEl;
};

const buildTodoItems = items => {
    todoContainer.innerHTML = '';
    const todoItemEls = items.map(buildTodoItem);
    todoContainer.append(...todoItemEls);
}

const main = () => {
    addTodoBtn.addEventListener('click', evt => {
        const todoValue= todoTextarea.value;
    if (todoValue.length > 0){
        addTodoItem(todoValue);
        buildTodoItems(state.todoItems);
    }
    });
};
main();