const itemOperations = {

    itemList: [],
    add() {

    },
    delete(){

    },
    search(itemId){
        var subArray = this.itemList.filter(item => item.id == itemId);
        return subArray;
    },
    searchByPrice(price){
        this.itemList.filter(item => item.price == price);
    },
    sort(sortBy){
        return this.itemList.sort((a,b) => b.sortBy - a.sortBy);
    }
};