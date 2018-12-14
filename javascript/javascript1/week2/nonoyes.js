
let notes = [];
//1. Save a note
function addNote(note, noteId){
    notes.push({note: note, noteId: noteId}); //The addNote function pushes an object to the notes array. The value of the keys is the value of the corresponding parameters.
    return notes;
}
let noteOne = addNote("hello world", 1);
let noteTwo = addNote("second note", 2);

console.log(noteTwo);

//2. Get note from id
function getNoteFromId(id){ //Function with one parameter (id)
    for(let i=0; i <= notes.length; i++){
        if(id === notes[i].noteId){
            return notes[i];
        }
        else{
            return "Error"; 
        }
    }
}

let getNote = getNoteFromId(1);
console.log(getNote);


//3. Read all notes
function showAllNotes(){
    for(let i=0; i < notes.length; i++){
        console.log("The note with id: " + notes[i].noteId + " has the following note text: " + notes[i].note);
    }
}

let show = showAllNotes();
console.log(show);
