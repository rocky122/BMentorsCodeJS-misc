// operation

window.addEventListener('load',() => {

    var buttons = document.querySelectorAll('button');
    /*buttons is an array of buttons*/
    for(let i=0;i<buttons.length;i++){
        buttons[i].addEventListener('click',doOperation);
    } 
});
function doOperation() {

    console.log('Button clicked',this.innerHTML);V
    var operator = this.innerHTML;
    var calcObject = new Calculator();
    var firstnumber = document.querySelector('#firstnumber').value;
    var secondnumber = document.querySelector('#secondnumber').value;
    var result = 0;
    result = calcObject.operation(firstnumber,secondnumber,operator);
    document.querySelector('#result').innerHTML = result;
}