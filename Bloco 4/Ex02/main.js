var inputElement = document.querySelector('#app input[name=user]');
var buttonElement = document.querySelector('#app button');
var listElements = document.querySelector('#repos');


buttonElement.onclick = searchRepos;

function searchRepos() {
    renderLoading();

    axios.get(`https://api.github.com/users/${inputElement.value}/repos`)
        .then((response) => {
            renderRepos(response.data);
        })
        .catch((reject) => {
            renderErro();
        })
}

function renderRepos(repos) {
    listElements.innerHTML = '';

    var repositories = repos;

    repositories.forEach(repositorie => {
        var repoName = repositorie.name;
        var listItem = document.createElement('li');
        var textItem = document.createTextNode(`${repoName}`);

        listItem.appendChild(textItem);
        listElements.appendChild(listItem);
    })
}

function renderLoading() {
    listElements.innerHTML = '';

    var listItem = document.createElement('li');
    var textItem = document.createTextNode('Carregando...')

    listItem.appendChild(textItem);
    listElements.appendChild(listItem);
}

function renderErro() {
    listElements.innerHTML = '';

    var listItem = document.createElement('li');
    var textItem = document.createTextNode('Usuário não encontrado')

    listItem.appendChild(textItem);
    listElements.appendChild(listItem);
}