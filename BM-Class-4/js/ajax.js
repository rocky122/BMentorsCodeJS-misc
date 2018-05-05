window.addEventListener('load',doAjax);

function doAjax(){
    fetch("http://localhost:4444/itemdetails")
    .then(done).catch(fail);
}

function done(){
    response.json().then(printData);
}
function addToCart(){
    console.log('Add to the cart call');
}
function fail(error){
    console.log('Error is' ,error);
}