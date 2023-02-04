const shoppingCart = [
    {name:'shoe', price: 1200},
    {name:'shirt', price: 2200},
    {name:'Pant', price: 3700},
    {name:'Belt', price: 600},
];


function totalCost(products){
    let sum = 0;
    for(let i=0; i<products.length; i++){
        const product = products[i];
        sum = sum+product.price;
        // console.log(product);
    }
    return sum;
}
const expense = totalCost(shoppingCart);
console.log("Total Cost:", expense);