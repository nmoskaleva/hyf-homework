/* DONT MODIFY ANY OF THIS CODE!!!*/

window.getAvailableProducts = function () {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getRandomItem(availableProductNames) {
        return availableProductNames[getRandomInt(0, availableProductNames.length - 1)];
    }

    function getRandomProductname() {
        const preWords = ['Used', 'Fantastic', '"Used"', 'Broken', 'Beautiful', 'Wet', 'Green', 'Sloppy', 'Dirty'];
        const productNames = ['Carrot', 'Drone', 'Giftcard', 'Puppy', 'Car', 'Shirt', 'Milk', 'Chalk', 'Fish fingers', 'Socks', 'Chocolate', 'Toothbrush', 'Computer', 'Nokia', 'Cologne'];

        let chosenProductName = getRandomItem(productNames);
        const shouldHavePreWord = getRandomInt(0, 10) > 6;

        if (shouldHavePreWord) {
            const preWord = preWords[getRandomInt(0, preWords.length - 1)];
            chosenProductName = `${preWord} ${chosenProductName}`;
        }

        return chosenProductName;
    }

    /* DONT MODIFY ANY OF THIS CODE!!!*/
    function getRandomCountries() {
        const availableCountries = ['Denmark', 'Sweden', 'Norway', 'Germany', 'Iceland', 'England'];
        const numberOfCountries = getRandomInt(1, availableCountries.length);

        const randomCountries = [];
        while (randomCountries.length < numberOfCountries) {
            const randomIndex = getRandomInt(0, availableCountries.length - 1);
            const randomCountry = availableCountries[randomIndex];
            if (!randomCountries.includes(randomCountry)) {
                randomCountries.push(randomCountry);
            }
        }

        return randomCountries;
    }

    const numberOfAvailableProducts = getRandomInt(0, 30);
    const availableProducts = Array.apply(null, Array(numberOfAvailableProducts))
        .map(() => {
            const name = getRandomProductname();
            return {
                id: `${name}${getRandomInt(0, 100000)}`,
                name,
                price: getRandomInt(0, 10000),
                rating: getRandomInt(1, 10),
                shipsTo: getRandomCountries(),
            };
        });

    return availableProducts;
}

window.sendPricesToServer = function (prices, callback) {
    console.log(`Sending these prices: ${prices} to an analytics server`);

    setTimeout(() => {
        callback(`These prices were received ${prices}`);
    }, 3000)
}

// *****************************************************
// 1. Add products to DOM
let availableProducts = getAvailableProducts();

function addProducts() {
    availableProducts.forEach(element => {
        console.log(availableProducts);
        let lis = document.createElement("li");
        let divs = document.createElement("div")
        document.querySelector(".products ul").appendChild(lis);
        lis.appendChild(divs);

        let productNames = document.createElement("div");
        productNames.className = "name";
        productNames.innerHTML = element.name;
        lis.appendChild(productNames);

        let productPrice = document.createElement("div");
        productPrice.className = "price";
        productPrice.innerHTML = element.price;
        lis.appendChild(productPrice);

        let productRating = document.createElement("div");
        productRating.className = "rating";
        productRating.innerHTML = element.rating;
        lis.appendChild(productRating);

        let shipsTo = document.createElement("div");
        shipsTo.className = "ships-to";
        shipsTo.innerHTML = element.shipsTo;
        lis.appendChild(shipsTo);

        let buttonAddtoCart = document.createElement("button");
        buttonAddtoCart.setAttribute("data-id", element.id);
        buttonAddtoCart.innerHTML = "Add to cart";
        divs.appendChild(buttonAddtoCart);
    });
}

addProducts();

// 2. Price analytics
const productsPricesArr = availableProducts.map(product => product.price);
console.log(productsPricesArr); //array of prices

function messageFromServer(message) {
    console.log(message);
}

sendPricesToServer(productsPricesArr, messageFromServer); //console log server responce 

// 3.Filter using countries
let country = document.querySelector(".country select");
let getCountryValue = function () {
    return country.value;
}

const productSection = document.querySelector(".products");
const lis = productSection.getElementsByTagName("li");
const lisArr = Array.from(lis);

country.addEventListener("change", () => {
    const choosenCountry = getCountryValue();
    lisArr.forEach((li) => {
        let cntry = li.lastElementChild.textContent; //!!!
        if (cntry.includes(choosenCountry)) {
            li.style.display = "";
        } else {
            li.style.display = "none";
        }
    });
});

//4. Filter using search
const searchField = document.querySelector(".search input");
let searchFieldValue = function () {
    let searchValue = searchField.value.toLowerCase();
    return searchValue;
}

searchField.addEventListener("keyup", () => {
        let searchFilter = searchFieldValue();
        lisArr.forEach((li) => {
            let nowProduct = li.children[1].textContent.toLowerCase();
                if (nowProduct.indexOf(searchFilter) != -1) {
                    li.style.display = "";
                } else {
                    li.style.display = "none";
                }
            });
    });

// //4. (with for loop)
// function filteredByName() {
//     // let filteredProducts = availableProducts.filter(product => product.name.toLowerCase().includes(searchFieldValue()));
//     // console.log(filteredProducts);
//     let searchFilter = searchFieldValue();
//     let productSection = document.querySelector(".products");
//     let lis = productSection.getElementsByTagName("li");
//     for (let i = 0; i < lis.length; i++) {
//         let productNames = lis[i].getElementsByClassName("name")[0]; //?почему 0?
//         let namesText = productNames.innerHTML;
//         if (namesText.toLowerCase().indexOf(searchFilter) != -1) {
//             lis[i].style.display = "";
//         } else {
//             lis[i].style.display = "none";
//         }
//     }
// }