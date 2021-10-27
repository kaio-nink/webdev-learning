/*DOM Manipulation*/

/* Selecting Elements

// getElementById()
// getElementByClassName() returns HTML Collection
// getElementByTagName()

// querySelector()
// querySelectorAll() returns NodeList


console.log(document.getElementById('blog-title')) 

console.log(document.getElementsByTagName('h1')) 

console.log(document.querySelector('meta')) 
*/

/* Manipulating elements, styles and classes

// textContent
// innerText
// innerHTML
// value
setAttribute()
style.(...) for styles manipulation in JS
classList.(...) for css classes maipulation

const element = document.querySelector('h1')


element.innerHTML = "Hello World <small>!!!</small>"

const element2 = document.querySelector('input')

element2.value = "Set a value here"

const colorbg = document.querySelector('body')

colorbg.classList.toggle('bg')
*/ 

/* Events
There are events like onclick, onmouseover, ondrag...
There are keyboard events like onkeyup, onkeydown...
Can be set by HTML or JS: addEventListener or 

*/ 

function print() {
    console.log(`print`)
}

const input = document.querySelector('input')

input.onkeydown = function() {
    console.log(`rodei`)
}

const h1 = document.querySelector('h1')

h1.addEventListener('mouseover',print)

function print() {
    console.log(`passei o mouse`)
}