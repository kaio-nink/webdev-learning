/* Aulas 1 a 4

console.log("Hello World")
//This is a comment inline


// ##Tipos de dados##

// String - usar aspas simples para demarcar string com mais aspas dentro
console.log('teste "aspas "simples ')
console.log(`Expressão com crase ${1+1} (Interpolação)`)

//Number - integer, float, NaN, infinity
console.log(1+1.34)
console.log(1 -"teste")
console.log(Infinity)

//Booleans
console.log(true)
console.log(false)

//Undefined vs null (objeto sem valor)
console.log(undefined)
console.log(null)
console.log(null === undefined)

//Objetct - Atributos e Métodos
console.log(
    {
      name: "Kaio",
      age: 21,
      andar: function()
      {
          console.log('walk')
      }  
    }
)

//Array
console.log(["Kaio",21,"andar"])


// ##Variáveis##

// var - global e local
var clima = "Inferno"
console.log(clima)

// let - local
let temperatura = 32.1
console.log(temperatura)

// const - local
const local = "Barreiras"
console.log(local)

// JS tem tipagem fraca, por isso é uma linguagem dinâmica
// Usa-se let e const na maioria dos casos

//Scope - determinado por { }

console.log("valor de x: ", x);
{
    var x = 0
}
//hoisting - a var é elevada no escopo global

//let e const só funcionam em escopo local
{
    const y = 10
    console.log("valor de y const: ", y);
}

let z = 0;
{
    z = 12
    console.log("valor de z Local: ", z);
}
console.log("valor de z Global: ", z);

// JS é case sensitive
// Não é possível iniciar com num e colocar espaços vazios na variável

let checkZ = z === 12
console.log("Z existe? ",checkZ)

*/

// ##Praticando Aula 5##
/*
// Typeof - Tipo de dado
var nome = "Kaio"
console.log(typeof nome)

// Agrupando declarações
let age, isHuman
age = 21
isHuman = true

console.log(nome, age, isHuman)

//Concatenação 
console.log('O ' + nome + ' tem ' + age + ' anos. (Concatenado)');

//Interpolação de valores com template literal or template strings
console.log(`O ${nome} tem ${age} anos. (Interpolado)`)
*/
/*Manipulando Objects

const person = {
    Name: 'Steve',
    age: 28,
    weight: 70.4,
    isAdmin: true
}
console.log(person);

console.log(` ${person.Name} tem ${person.age} anos.`);
*/

/* Manipulando Arrays


// É possível definir um objeto dentro de um array como elemento
const animals = [
    'Lion',
    'Cat',
    'Tiger',
    {
        type: 'Monkey',
        age: 4
    }
]

console.log(animals[1])
console.log(animals.length)
console.log(animals[3].age)
*/
