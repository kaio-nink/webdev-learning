// Estudo de funções

/*Declaração e execução básica 
function createPhrases() {
    console.log(('Frase 1'))
    console.log(('Frase 2'))
    console.log(('Frase 3'))
}

createPhrases()


//function expression ou anonymous
const sum = function(number1, number2) {
    const result = number1 + number2
    return result
}

console.log(`A soma é ${sum(312, 2)}`); 
// Caso a variável não for definida no escopo local como let ou const, ela retornará, porém não é uma prática recomendada

//É possível realizar function hoisting a menos que não seja atribuída a uma variável
*/

/*Arrow Function

const sayname = () => {
    console.log("Kaio (Arrow Function)")
}

sayname()
*/

/* Callback function

function sayMyName(Name) {
    Name()    
}

sayMyName(
    () =>{
        console.log("Teste callback")
    }
)
*/ 

/*Function Constructor

function Person(Name) {
    this.Name = Name
    this.walk = function() {
        return this.Name + " is walking"
    }
}

const kaio = new Person("Kaio");
console.log(kaio)
console.log(kaio.walk())
*/ 


