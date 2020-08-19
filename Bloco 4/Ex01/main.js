var inputElement = document.querySelector('#app input[name=age]');
var buttonElement = document.querySelector('#app button');

buttonElement.onclick = getAge;

function getAge(){
    var age = inputElement.value;

    checkAge(age)
        .then(() => {
            console.log("Maior de Idade");
        })
        .catch(() => {
            console.log("Menor de Idade");
        })
    inputElement.value = '';
}


// setTimeOut() utilizada para aguardar os 2 segundos
function checkAge(age){
    return new Promise((resolve, reject) => {   
        setTimeout(() => {
            if(age>=18)
                resolve(true);
            else
                reject(false);
        }, 2000)        
    })
}

