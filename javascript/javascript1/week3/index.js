//1. declare an array of 10 strings
let books = ["doctor_faustus", "homo_deus_brief_history", "code_the_hidden_language", "inmates_running_asylum", "buddenbrooks", "master_and_margarita", "12million_stuffed_shark", "steppenwolf", "open_veins_lat_am", "brief_answers_big_questions"];
console.log(books);

//2. make a function(s) that generate a ul with li elements for each book ID in the array using the for loop
/*
function bookList() {
    let x = document.createElement("ul");
    document.body.appendChild(x);
for(let i = 0; i < books.length; i++) {
    let a = document.createElement("li");
    a.innerHTML = books[i];
    x.appendChild(a);
}
}
bookList();
*/
//3. make an object with info for each book
let infoBooks = [{
        id: "doctor_faustus",
        title: "Doctor Faustus",
        author: "Thomas Mann",
        language: "german"
    },
    {
        id: "homo_deus__history_tmr",
        title: "Homo Deus: a History of Tomorrow",
        author: "Yuval Noah Harari",
        language: "english"
    },
    {
        id: "code_the_hidden_language",
        title: "Code: The Hidden Language of Computer Hardware and Software",
        author: "Charles Petzold",
        language: "english"
    },
    {
        id: "inmates_running_asylum",
        title: "The Inmates Are Running the Asylum",
        author: "Alan Cooper",
        language: "english"
    },
    {
        id: "buddenbrooks",
        title: "Buddenbrooks: The Decline of a Family",
        author: "Thomas Mann",
        language: "german"
    },
    {
        id: "master_and_margarita",
        title: "The Master and Margarita",
        author: "Mikhail Bulgakov",
        language: "russian"
    },
    {
        id: "12million_stuffed_shark",
        title: "The 12 $ Million Stuffed Shark: The Curious Economics of Contemporary Art and Auction Houses",
        author: "Don Thompson",
        language: "english"
    },
    {
        id: "steppenwolf",
        title: "Steppenwolf",
        author: "Hermann Hesse",
        language: "german"
    },
    {
        id: "open_veins_lat_am",
        title: "Open Veins of Latin America: Five Centuries of the Pillage of a Continent",
        author: "Eduardo Galeano",
        language: "spanish",
    },
    {
        id: "brief_answers_big_questions",
        title: "Brief Answers to the Big Questions",
        author: "Stephen Hawking",
        language: "english"
    }
]

////4. change the function to take actual info from the object and display it
function bookList() {
    let x = document.createElement("ul");
    document.body.appendChild(x);
    for (let i = 0; i < books.length; i++) {
        let lis = document.createElement("li");
        x.appendChild(lis);
        lis.setAttribute("id", books[i]); // give an id to each li
        let title = document.createElement("h1");
        title.innerHTML = infoBooks[i].title;
        lis.appendChild(title);
        let author = document.createElement("h2");
        author.innerHTML = infoBooks[i].author;
        lis.appendChild(author);
        let language = document.createElement("p");
        language.innerHTML = infoBooks[i].language;
        lis.appendChild(language);
    }
}
bookList();
/*
function setId(){
for (let i = 0; i < books.length; i++){
    let lis = document.querySelectorAll("li");
    lis.setAttribute("id", "infoBooks[i].id");
}
}
setId();
*/
//5.1 construct a new object with book covers: book id as a key, path to img source as value 
let bookCovers = {
    "doctor_faustus": "./covers/doctor_faustus.jpg",
    "homo_deus_brief_history": "./covers/homodeus.jpg",
    "master_and_margarita": "./covers/master.jpg",
    "12million_stuffed_shark": "./covers/shark.jpg",
    "steppenwolf": "./covers/steppenwolf.jpg",
    "brief_answers_big_questions": "./covers/brief_answers.jpg",
    "open_veins_lat_am": "./covers/OpenVeinCover.jpg",
    "inmates_running_asylum": "./covers/inmates.jpg",
    "code_the_hidden_language": "./covers/code.jpg",
    "buddenbrooks": "./covers/buddenbrooks.jpg"
}

//5.2 loop over the entries of the object bookCovers
let foo = Object.values(bookCovers);
console.log(foo);

let loo = Object.keys(bookCovers);
console.log(loo);

//5.3 write a function which places an image at the corresponding li element
//5.4 remember that Objects are not ordered, so you cannot guarantee that the first key is the first li element. (Hint: you could give each li item an id tag by modifying the function you made before)
function addImg() {
    for (let i = 0; i < infoBooks.length; i++) {
        for (let j = 0; j < foo.length; j++) {
            let img = document.createElement("img");
            img.src = foo[j];
            let lis = document.querySelectorAll("li");
            if (lis[i].id === loo[j]) {
                lis[i].appendChild(img);
            }
        }
    }
}

addImg();