/* Flow control

//Estrutura if...else permanece igual
let temperature = 36.9
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if (highTemperature) {
    console.log("Febre alta")
} else if(mediumTemperature){
    console.log("Febre moderada")
} else{
    console.log("Saudável")
}

//Switch permanece similar

//Throw and try...catch
//Sem o trycatch, o fluxo será finalizado após a execução do throw, sendo assim recomendado utilizar as estruturas em conjunto

function sayMyName(Name = '') {
    if (Name === ''){
        throw 'Nome é obrigatório'
    }
    console.log("depois do erro")

}

try {
    sayMyName()
} catch (error) {
    console.log(error)
}

console.log("Após o trycatch");
*/

// Loop

//Laço for e while permanecem iguais
// break e continue para terminar e continuar a execução do laço

/*for..in
let person = {
    Name: 'Steve',
    age: 32,
    weight: 76.23
}

for(let property in person)
{
    console.log(property)
    console.log(person[property])
}
*/