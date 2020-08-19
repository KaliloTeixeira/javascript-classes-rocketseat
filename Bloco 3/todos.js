var todos = JSON.parse(localStorage.getItem('list_todos')) || [];
//se ele não conseguir retornar o valor do localStorage a variavel será iniciada como array vazio
//Vai procurar no localStorage a variavel 'list_todos'
//o JSON.parse retransforma o array que virou string, em array novamente.


var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

buttonElement.onclick = addTodo;
renderTodos();

function renderTodos(){
    listElement.innerHTML = ''; //innerHTML substitui todo o conteudo do elemento selecionado, pelo que for passado

    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        
        var position = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'removeTodo(' + position + ')')

        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement)

        listElement.appendChild(todoElement);
    }
}

function addTodo(){
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

function removeTodo(position){
    todos.splice(position, 1); 
    // Função splice remove a partir da posição passada, o numero passado de itens do array
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    // localStorage = variavel global do JS, para armazenar no storage do navegador
    // .setItem('nome_da_variavel', valor) => nome da variavel que sera criada no storage
    // o localStorage não armazena Array, deve-se armazenar o JSON

    // a função JSON.stringify(valor) transforma o valor passado em uma string


    localStorage.setItem('list_todos', JSON.stringify(todos));
}