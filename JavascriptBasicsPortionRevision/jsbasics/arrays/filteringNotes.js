const notes = [
    {
        title : 'This is note 1',
        body: "This is note 1"
    },
    {
        title : 'This is note 2',
        body: 'This is note 2'
    },
    {
        title : 'This is note 3',
        body : 'This is note 3'
    },
    {
        title : 'This is note 4',
        body : 'This is note 4'
    }
];

///////Finding the note
const findNote = function(notes,noteTitle){

    const note = notes.find(function(note){
        return note.title.toLowerCase() === noteTitle.toLowerCase();
    });
    return note;
};

const note = findNote(notes,'This is note 1');
console.log(note);

//// findNotes method
const findNotes = function(notes,query){

    return notes.filter(function(note,index){
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
        return isTitleMatch || isBodyMatch;

    });
    console.log(note);
    console.log(findNotes(notes,'work'));
}

const sortNotes = function(notes){
    notes.sort(function(a,b){
        if(a.title.toLowerCase() < b.title.toLowerCase()){
            return -1;
        }
        else if(a.title.toLowerCase() > b.title.toLowerCase()){
            return 1;
        }else {
            return 0;
        }
        
    });
}

sortNotes(notes);
console.log(notes);