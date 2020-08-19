// O axios faz todo o trabalho do XMLHttpRequest
// Basta importar o axios e utiliza-lo como axios.metodo,
// passando como parametro o endereço da api. O valor ja volta 
// como JSON, nao precisa mais do .parse.

//Outros parametros podem ser passados...
//  .post('url', json)

axios.get('https://api.github.com/users/kaliloteixeira')
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.warn(error)
    });