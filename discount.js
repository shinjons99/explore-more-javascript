/**
 * 1. if ticket numbers is less than 100, per ticket price: 100
 * 2. if ticket numbers is more then 100 but less than 200, first 100 ticket will  ber 100 taka ticket rest tickets will be 90 taka  per pice: 100
 * first 100 ---->100tk
 * rest -----> 90tk
 * 3. if you purchase more than 200 tickets
 * first 100 --->100 tk
 * 101-200 -----> 90 tk
 * 200+ ----> 70 tk
 */

function ticketPrice(ticketQuantity){
    const frist100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if(ticketQuantity<=100){
        const price = ticketQuantity * frist100Rate;
        return price;
    }
    else if(ticketQuantity <= 200){
        const frist100Price = 100* frist100Rate;
        const restTicketQuantity = ticketQuantity -100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = frist100Price + restTicketPrice;
        return totalPrice;
    }
    else {
        const frist100Price = 100*frist100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketQuantity;
        const totalCost = frist100Price + second100Price + restTicketPrice;
        return totalCost;
    }
}
const price = ticketPrice(120);
console.log('price:', price);