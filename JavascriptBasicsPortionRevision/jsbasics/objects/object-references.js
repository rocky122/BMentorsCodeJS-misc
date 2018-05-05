let myAccount = {
    name : 'Andrew Mead',
    expenses : 0,
    income : 0
}

let addExpense = function(account,amount){

    account = {};
    account.expenses = account.expenses + amount;
    console.log(account.expenses);
}

addExpense(myAccount,50);       //Nan because Objects are passed by references