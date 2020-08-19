// AJAX = Requisição Assincrona com o backend
// o AJAX serve para acessar a API - utilizaremos a API do Github
// essa variavel sera responsavel por nos dar acesso ao AJAX
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/KaliloTeixeira') //.open abre a requisição, o primeiro parametro é o metodo e o segundo o endereço da api
xhr.send(null);

xhr.onreadystatechange = () =>{
    if(xhr.readyState === 4){ //o 4 é o valor que indica que a resposta voltou correta
        console.log(JSON.parse(xhr.responseText)); // o valor que retorna é uma string, e deve ser convertida em objeto/array utilizando o parse
    }
}