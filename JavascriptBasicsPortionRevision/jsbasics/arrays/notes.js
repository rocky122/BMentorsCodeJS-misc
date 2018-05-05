const notesApp = {

    notes: ["NOTE 1","NOTE 2","NOTE 3","NOTE4"],
    printSummary: function(){
        console.log(`You have ${this.notes.length} notes in your collection`);
    },

    printTodo: function(index){
        console.log(`Todo: ${this.notes[index]}`);
    }

};
const notes = ["Note1","Note2","Note3","Note4","Note5"];

const note = "Note1";

//Remove Note1

notes.splice(notes.indexOf(note),1);
console.log(notes); //works well

//Append a new node at the end of the notes array
notes.push("Note6 I guess");
console.log(notes);

//Remove the first node from the notes
notes.shift();
console.log(notes);

console.log(notes.length);

notesApp.printSummary();
notesApp.printTodo(2);


//Loop over all the notes
notes.forEach(note => console.log(note));

notes.forEach(function(item,index){
    console.log(item);
    console.log(index);
});

const notess = [
    {
        title : 'My next trip',
        body: 'I would love to go to Spain'
    },
    {
        title : 'Fantastic Five',
        body: 'That was an awesome series'
    },
    {
        title : 'GOT',
        body: 'Its show time!!'
    }
];

///Find a notes and return it

const findNote = function(notes,noteTitle){

     const note= notess.find(function(note){
        return note.title.toLowerCase() === noteTitle.toLowerCase();
    });

    return note;

}

const note = findNote(notes,"office mods");

const index = notes.findIndex(function(note,index){
    return note.title === 'Habits to work on';
});

console.log(index);


