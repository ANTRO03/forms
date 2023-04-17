let todo = "";

const body = document.querySelector('body');
const todoField = document.querySelector("#TodoList")

const main = document.querySelector('main');


document.querySelector('#whatever').addEventListener("submit", function(event) {
    event.preventDefault();
    todo = todoField.value;
   let template =
   `
   <h2> ${todo} </h2>
   
   `
   main.innerHTML = template;
})

body.appendChild();