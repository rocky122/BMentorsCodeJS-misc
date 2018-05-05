window.addEventListener('load',bindEvents);

function bindEvents(){

    document.querySelector('#searchByPrice').addEventListener('change',doSearch);
    document.querySelector('#sort').addEventListener('change',doSort);
}

function doSort(){
    var sortBy = document.querySelector('#sort').value;
    var items = itemOperations.sort(sortBy);
    printData(items);
}
function doSearch(){
    if(this.value.trim().length > 0){
        var price = this.price;
        var filterItems = itemOperations.searchByPrice(price);
        printData(filterItems);
    }
    else{
        printData(itemOperations.itemList);
    }



}

function addToCart(){

    /*Refer the item model*/
    console.log('Add to cart call',this.getAttribute('itemid'));
    var itemId = parseInt(this.getAttribute('itemid'));
    var subArray = itemOperations.search(itemId);
    if(!subArray.length == 0){
        subArray[0].addToCart = true;
    }
    var span = document.createElement('span');
    span.innerHTML = "(Item added to the cart)";
    this.appendChild(span);
    // Disable the button since the item has now been added to the cart
    this.setAttribute("disabled",true);
}

function printData(){
    console.log('Data is',data);
    itemOperations.itemList = data;
    var div = document.querySelector('#result');
    itemOperations.itemList.forEach(item => {

        var para = document.createElement('p');
        para.innerHTML = `<img class='size' src='${itemObject.url}'> ${itemObject.id} ${itemObject.name} ${itemObject.price}`;
        var button = document.createElement('button');
        button.innerHTML = 'Add to Cart';
        button.setAttribute('itemid',item.id);
        button.addEventListener('click',addToCart);
        div.appendChild(para);
        div.appendChild(button);
    });
}