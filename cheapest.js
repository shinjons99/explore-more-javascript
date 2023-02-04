const phone =[
    { name:'samsung', camera:12, storage: '32gb', price: 36000, color:'silver'},
    { name:'Walton', camera:12, storage: '32gb', price: 22000, color:'silver'},
    { name:'iphone', camera:12, storage: '32gb', price: 82000, color:'silver'},
    { name:'Xiomi', camera:12, storage: '32gb', price: 53000, color:'silver'},
    { name:'Oppo', camera:12, storage: '32gb', price: 20000, color:'silver'},
    { name:'Nokia', camera:12, storage: '32gb', price: 43000, color:'Golden'},
    { name:'HTC', camera:12, storage: '32gb', price: 62000, color:'silver'},
];

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i=0; i<phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }

    }
    return cheapest;

}
const mySelection = cheapestPhone(phone);
console.log(mySelection);