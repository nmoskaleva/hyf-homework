let container = document.querySelector(`#container`);
let greeting = document.querySelector(`h1`);

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getPrice(currency) {
        return new Promise((resolve, reject) => {
            fetch(`http://data.fixer.io/api/latest?access_key=51522044ddf49cd15e96efe39a768113`) //unfinished
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                });
        });
    }
}

class ShoppingCart {
    constructor(products) {
        this.products = products;
    }

    addProduct(product) {
        this.products.push(product);
    }

    removeProduct(product) {
        const index = this.products.indexOf(product);
        if (index !== -1) {
            this.products.splice(index, 1);
        }
    }

    getTotal() {
        //let prices = this.products.map((product) => {product.price}); //wow, why it doesnt work because of brackets? aren't brackets just optional?
        let prices = this.products.map(product => product.price);
        // let sum = 0;
        // for (let i = 0; i < prices.length; i++) {
        //     sum += prices[i];
        // }
        // return sum;
        function getSum(total, num) {
            return total + num;
        }
        let totalCart = prices.reduce(getSum);
        return totalCart;
    }


    renderProducts() {
        this.products.forEach(product => {
            let productDivs = document.createElement(`div`);
            productDivs.className = `product-div`;
            container.appendChild(productDivs);
            let itemName = document.createElement(`h4`);
            itemName.classList = `product-name`;
            itemName.innerHTML = product.name;
            productDivs.appendChild(itemName);
            let itemPrice = document.createElement(`p`);
            itemPrice.classList = `price`;
            itemPrice.innerHTML = product.price + ` EUR`;
            itemName.appendChild(itemPrice);
            let removeBtn = document.createElement(`button`);
            removeBtn.classList = `remove-btn`;
            removeBtn.innerHTML = `Remove`;
            itemName.appendChild(removeBtn);
        });
        let cartTotal = document.querySelector(`#total`);
        cartTotal.innerHTML = `Total in cart: ` + myShoppingCart.getTotal() + ` EUR`;
    }

    getUser() {
        //returns a promise with the data from api
        return new Promise((resolve) => {
            fetch(`https://jsonplaceholder.typicode.com/users/1`)
                .then(response => response.json())
                .then(response => {
                    let justName = response.name.split(` `);
                    greeting.innerHTML = `Welcome to the store, ` + justName[0] + `!`; //just name, not surname
                    console.log(response);
                    resolve();
                })
                .catch(`error`);
        });
    }
}

const flatscreen = new Product('flat-screen', 5000);
const myShoppingCart = new ShoppingCart([flatscreen]);
const picture = new Product(`painting`, 1000);
const milk = new Product(`milk`, 20);
const puppy = new Product(`puppy`, 400);
myShoppingCart.addProduct(picture);
myShoppingCart.addProduct(milk);
myShoppingCart.addProduct(puppy);
console.log(myShoppingCart);
myShoppingCart.removeProduct(milk);
myShoppingCart.removeProduct("sds");
console.log(myShoppingCart);
myShoppingCart.getTotal();
myShoppingCart.getUser()
    .then(myShoppingCart.renderProducts());
flatscreen.getPrice();

let removeBtn = document.getElementsByClassName(`remove-btn`);

for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener(`click`, myShoppingCart.removeProduct()); //how to access the right product?  
}