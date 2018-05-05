const getDataCallback = cb => {

    setTimeout(() => {
        cb('This is the error',undefined);
        cb('This is the error',undefined);
    },2000);

}

getDataCallback((err,data) => {
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});

//Promises (same are used in angularjs)

const myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject('This is my promise error');
        reject('This is my promise error');
    },2000);
});

myPromise.then(data => console.log(data),err => console.log(err));