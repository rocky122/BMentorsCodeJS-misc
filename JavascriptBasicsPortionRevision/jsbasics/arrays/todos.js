const todos = ['order cat food','clean kitchen','buy food','code','develop applications','sleep'];
const notes = ['Note1','Note2','Note3'];
const todo = 'buy food';
todos.splice(todos.indexOf(todo),1);
todos.push('buy coffee');
todos.shift();

console.log(`You have ${todos.length} todos pending`);
console.log(todos);


todos.forEach(function(todo,index){
    console.log(`${index+1}.${todo}`);
});

for(let count=0;count<=2;count++){
    console.log(count);
}
for(let count=0;count<=todos.length;count++){
    console.log(`${count+1}.${todos[count]}`);
}

//Find a note by the index
const index = notes.findIndex(function(note,index){
    return note.title === 'Note1';
});
console.log(index);