const account = {
    name : 'Andrew Mead',
    expenses: [],
    addExpense: function(description,amount){
        this.expenses.push({description,amount});
    },
    getAccountSummary: function(){
        let totalExpenses = 0;
        this.expenses.forEach(function(expense){
            totalExpenses += expense.amount;
        });
        return `${this.name} has $${totalExpenses}`;
    }
};

account.addExpense('Coffee',2.3);
account.addExpense('Chocolate',2.5);
account.addExpense('Steak',11.99);

console.log(account.getAccountSummary());