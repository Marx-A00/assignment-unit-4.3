console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem(item){
    basket.push(item);

    for(let i of basket){
        if(i == item){
            return true;
        }
    }
    return false;
}
console.log("Should return true: ", addItem("fedora"));

function listItems(){
    if(basket.length == 0){
        return ("Basket is empty");
    }
    for(let i of basket){
        console.log(i+"\n");
    }
}
addItem("gold chain");
addItem("Master Chief helmet");
addItem("1 Vans skate shoe");
listItems();

function empty(){
    basket.length = 0;
    return ("Basket has been emptied");
}
empty();
console.log(listItems());












// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
