app.factory('myFactory',function(){
    const user = {
        name : 'Prateek Madaan',
        gender : 'Male',
        age : 21
    };
    
    var factoryObject = {
        initCap(name) {
            return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
        },
        returnHello(){
            return `Hello ${user.name}`;
        }
    };
    return factoryObject;


})