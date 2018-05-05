let temp = 55

if(temp >=60 && temp <=90){
    console.log('Pretty nice out there');
}else if(temp <=0 || temp >=120){
    console.log('Do not go out...You will either freeze or will be burned alive');
}else{
    console.log('Do what you want....Why stuck in this loop');
}

let isGuestOneVegan = true;
let isGuestTwoVegan = false;

if(isGuestOneVegan && isGuestTwoVegan){
    console.log('Serving only vegan options');
}else if (isGuestOneVegan || isGuestTwoVegan){
    console.log('serving atlease some vegan options');
}else {
    console.log('serve whatever you want');
}