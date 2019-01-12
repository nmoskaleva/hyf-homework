const books = ["doctor_faustus", "homo_deus__history_tmr", "code_the_hidden_language", "inmates_running_asylum", "buddenbrooks", "master_and_margarita", "12million_stuffed_shark", "steppenwolf", "open_veins_lat_am", "brief_answers_big_questions"];
console.log(books);

//3. make an object with info for each book, book id's are keys
let infoBooks = {
    "doctor_faustus": {
        title: "Doctor Faustus",
        author: "Thomas Mann",
        language: "german"
    },
    "homo_deus__history_tmr": {
        title: "Homo Deus: a History of Tomorrow",
        author: "Yuval Noah Harari",
        language: "english"
    },
    "code_the_hidden_language": {
        title: "Code: The Hidden Language of Computer Hardware and Software",
        author: "Charles Petzold",
        language: "english"
    },
    "inmates_running_asylum": {
        title: "The Inmates Are Running the Asylum",
        author: "Alan Cooper",
        language: "english"
    },
    "buddenbrooks": {
        title: "Buddenbrooks: The Decline of a Family",
        author: "Thomas Mann",
        language: "german"
    },
    "master_and_margarita": {
        title: "The Master and Margarita",
        author: "Mikhail Bulgakov",
        language: "russian"
    },
    "12million_stuffed_shark": {
        title: "The 12 $ Million Stuffed Shark: The Curious Economics of Contemporary Art and Auction Houses",
        author: "Don Thompson",
        language: "english"
    },
    "steppenwolf": {
        title: "Steppenwolf",
        author: "Hermann Hesse",
        language: "german"
    },
    "open_veins_lat_am": {
        title: "Open Veins of Latin America: Five Centuries of the Pillage of a Continent",
        author: "Eduardo Galeano",
        language: "spanish"
    },
    "brief_answers_big_questions": {
        title: "Brief Answers to the Big Questions",
        author: "Stephen Hawking",
        language: "english"
    }
}

//2. make a function that generates id's; 4.change it to take info from the object infoBooks
let createBookList = function() {
    let x = document.createElement("ul"); //creating a list
    document.body.appendChild(x);
    for (let i = 0; i < books.length; i++){
        let lis = document.createElement("li"); //creating list elements
        lis.id = books[i]; //giving ID's to list elements
        x.appendChild(lis);

        let booktitle = document.createElement("h2"); //add title
        booktitle.innerHTML = infoBooks[books[i]].title;
        lis.appendChild(booktitle);

        let bookauthor = document.createElement("h3"); //add author
        bookauthor.innerHTML = infoBooks[books[i]].author;
        lis.appendChild(bookauthor);

        let booklanguage = document.createElement("p");
        booklanguage.innerHTML = infoBooks[books[i]].language;
        lis.appendChild(booklanguage);
    }
}
createBookList();

//5.1 construct a new object with book covers: book id as a key, path to img source as value 
let bookCovers = {
    "doctor_faustus": "./covers/doctor_faustus.jpg",
    "homo_deus__history_tmr": "./covers/homodeus.jpg",
    "master_and_margarita": "./covers/master.jpg",
    "12million_stuffed_shark": "./covers/shark.jpg",
    "steppenwolf": "./covers/steppenwolf.jpg",
    "brief_answers_big_questions": "./covers/brief_answers.jpg",
    "open_veins_lat_am": "./covers/OpenVeinCover.jpg",
    "inmates_running_asylum": "./covers/inmates.jpg",
    "code_the_hidden_language": "./covers/code.jpg",
    "buddenbrooks": "./covers/buddenbrooks.jpg"
}

//5.2 loop over the entries of bookCovers
const coverKey = Object.keys(bookCovers);
const coverPath = Object.values(bookCovers);

//5.3 write a function which places an image at the corresponding li element. 
//Remember that Objects are not ordered, so you cannot guarantee that the first key is the first li element.
//(Hint: you could give each li item an id tag by modifying the function you made before)
/*function addCover() {
    for (let i = 0; i < books.length; i++){
        let img = document.createElement("img");
        img.src = bookCoverPath[i];
        let lis = document.getElementById(books[i]);
        lis.appendChild(img);
    }
}

addCover();*/

function addCover() {
    for (let i = 0; i < books.length; i++) {
        for (let j = 0; j < coverPath.length; j++) {
            let img = document.createElement("img");
            img.src = coverPath[j];
            img.alt = "book_cover"
            let lis = document.querySelectorAll("li");
            if(lis[i].id === coverKey[j]){
                lis[i].appendChild(img);
            }
        }
    }
}
addCover();

