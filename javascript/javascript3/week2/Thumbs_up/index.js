function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.body.classList.add(`gradient-${getRandomInt(1,4)}`);
let i = 0;
let container = document.querySelector(`.container`);

function animateLiOut(e) {
    return new Promise((resolve) => {

        let card = container.children[i];
        if (!card) { return};
        card.addEventListener("transitionend", function(event) {
            resolve(); //is it ok to resolve without an argument? - YES!
        }, false);
        if (e.target === thumbsUpBtn || e.target.innerHTML === "Thumbs up" || e.target.innerHTML === "👍") {
            card.style.transform = "translateX(1000px)";
        } else if (e.target === thumbsDownBtn || e.target.innerHTML === "Thumbs down" || e.target.innerHTML === "👎") {
            card.style.transform = "translateX(-1000px)";
        }
        ++i;
       
    }).then(() => {

        if (container.children[i]) {
            container.children[i].classList.add("current-card");
        } else {
            alert('no more images');
        }
    
    }).catch((err) => console.error(err));
}

let thumbsUpBtn = document.querySelector(`.accept`);
let thumbsDownBtn = document.querySelector(`.reject`);

thumbsUpBtn.addEventListener("click", animateLiOut);
thumbsDownBtn.addEventListener("click", animateLiOut);

// render html with API
fetch(`https://www.rijksmuseum.nl/api/nl/collection?key=V51JuyCZ&format=json&type=schilderij&f.normalized32Colors.hex=%20%23367614`)
    .then(response => response.json())
    .then(response => {
        //console.log(response);
        let items = response.artObjects;
        let webImage = items.map((item) => item.webImage);
        let picSrc = webImage.map((item) => item.url);
        let titles = items.map(item => item.longTitle);
        picSrc.forEach((picsource) => { 
            let li = document.createElement("li");
            container.appendChild(li);
            let imgs = document.createElement("img");
            li.classList.add('loading')
            imgs.classList.add("rendered-img");
            li.appendChild(imgs);
        });
        
        // Recursive function to load images consecutively
        ;(function getRealImage (number, lis = document.querySelectorAll("ul li")) {
            var img = lis[number].querySelector('img');
            img.src = picSrc[number]
            img.alt = titles[number];
            img.addEventListener('load', () => {
                console.log('img loaded')
                if (picSrc[number +1]) getRealImage(number + 1);
            } )
        })(0);
    });


// window.addEventListener("click", function (e) {
//     console.log(e.target);
// })
//dynamically render html with array of objects

// let cars = [{
//     make: "BMW",
//     color: "black",
//     pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwUI3JBTFISLLQYyu4WWMYrILTKx0swWqsZaeuqwTxtuvMXcda"
// }, {
//     make: "Audi",
//     color: "white",
//     pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdS_hGpMS83VDktto9NxfpAiSzV5BjeCheCMr_cTfPrSo50GIzBQ"
// }, {
//     make: "Alfa Romeo",
//     color: "red",
//     pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWw5tOelFaoAD4vuf9k70ASQRDK4OtXOITKydKwKE4Fy5xncWzAA"
// }, {
//     make: "Peugeot",
//     color: "green",
//     pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwUI3JBTFISLLQYyu4WWMYrILTKx0swWqsZaeuqwTxtuvMXcda"
// }, {
//     make: "Bentley",
//     color: "blue",
//     pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwUI3JBTFISLLQYyu4WWMYrILTKx0swWqsZaeuqwTxtuvMXcda"
// }, {
//     make: "Citroen",
//     color: "metallic",
//     pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM8WXJwPSqh2WyXe2W8Y6Oxh4AnwF5i4wuKnIFGKPJAuBpic8b7g"
// }, {
//     make: "Lada",
//     color: "black",
//     pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwUI3JBTFISLLQYyu4WWMYrILTKx0swWqsZaeuqwTxtuvMXcda"
// }, {
//     make: "Kia",
//     color: "red",
//     pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwUI3JBTFISLLQYyu4WWMYrILTKx0swWqsZaeuqwTxtuvMXcda"
// }, {
//     make: "Infiniti",
//     color: "grey",
//     pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0dkdOEeqFcjCfpg5KlHBBsxCTIqjtCxjjeYZx6xTAUfPMjtT"
// }, {
//     make: "Porsche",
//     color: "black",
//     pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwUI3JBTFISLLQYyu4WWMYrILTKx0swWqsZaeuqwTxtuvMXcda"
// }];

// function addThings() {
//     cars.forEach((car) => {
//         let lis = document.createElement("li"); //is it better to dynamically create elements? how can i iterate through existing lis instead(the question is about their index)?
//         container.appendChild(lis);
//         lis.innerHTML = car.color + " " + car.make;
//         let imgs = document.createElement("img");
//         imgs.src = car.pic;
//         imgs.classList.add("rendered-img")
//         lis.appendChild(imgs);        
//     })
// }
// addThings();