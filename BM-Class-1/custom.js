window.addEventListener('load',() => {

    document.querySelector('#greetButton')
    .addEventListener('click',sayHello);
    document.querySelector('#clearButton')
    .addEventListener('click',clearInputFields);
});

function sayHello(){
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    document.querySelector('p')
    .innerHTML = `<h2>${initCap(firstname) + initCap(lastname)}</h2>`;
}

const initCap = str => str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();


function clearInputFields(){
    document.getElementById('firstname').value = '';
    document.getElementById('lastname').value = '';
    document.querySelector('p').innerHTML = '';
}

