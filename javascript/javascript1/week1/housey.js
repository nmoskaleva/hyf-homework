let housePrice;
let actualHousePrice = 100000;
let volumeInMeters = 5*11*8;
let gardenSizeInM2 = 70; 
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

if(housePrice > actualHousePrice) {
console.log("That's too much");
} else {
    console.log("Good deal");
}
