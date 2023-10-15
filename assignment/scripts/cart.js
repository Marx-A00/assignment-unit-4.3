console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
let maxItems = 5;

function addItem(item){
    if (isFull()){
        return false;
    }
    
    basket.push(item);
    console.log(listItems());
    return true;
}

function listItems(){
    if(basket.length == 0){
        return ("Basket is empty");
    }
    for(let i of basket){
        console.log(i +"\n");
    }
}

console.log("test to add item to basket: ",addItem("Air Force 1s"));
console.log("test to add item to basket: ",addItem("True Blue air jordan 3s"));
console.log("Test to see list: ",listItems());
console.log("manual Array print: ",basket);

function empty(){
    basket.length = 0;
    return ("Basket has been emptied");
}

function isFull(){
    if(basket.length < maxItems){
        return false;
    }
    else{
        return true;
    }
}
function removeItem(item){      // function to remove item from basket array.
    let specialItem = basket.indexOf(item);
    console.log ("special item", specialItem);
    if(specialItem != -1){

        let removedItem = basket.splice(specialItem, 1);
        
        return removedItem[0];

    }
    return null;
}



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
