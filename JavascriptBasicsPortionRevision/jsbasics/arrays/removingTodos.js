const todos = [
    {
        text: 'order cat food',
        completed: false
    },
    {
        text : 'clean kitchen',
        completed: true
    },
    {
        text: 'buy food',
        completed: true
    },
    {
        text: 'do work',
        completed: false
    },
    {
        text: 'exercise',
        completed: true
    }
];


const removeTodo = function(todoList,todoToRemove){

    const todo = todoList.findIndex(function(todo){
        return todo.text.toLowerCase() === todoToRemove.toLowerCase();
    });

    return todoList.splice(todo,1);
}
removeTodo(todos,'exercise');
console.log(todos);