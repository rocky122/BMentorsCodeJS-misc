const itemOperations = {

    itemList : [],
    prepareItems(items){
        for(let item of items){
            var obj = new Item(item.id,item.name,item.price,item.like);
            this.itemList.push(obj);
        }


    },
    search(id) {
       return this.itemList.filter(item => item.id == id)[0];
    },
    update(object){
        object.incrementLike();
    },
    getItems(){
        return this.itemList;
    }


}