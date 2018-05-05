let isAccountLocked = false;
let userRole = 'admin';

if(isAccountLocked){
    console.log('account is locked');
}
else if(userRole === 'admin'){
    console.log('Welcome Admin');
}else{
    console.log('Welcome Anonymous!');
}

let temp = 111;

if(temp <= 32){
    console.log('Too cold!');
}else if(temp >= 110) {
    console.log('Too hot!');
}else{
    console.log('you can go out!');
}