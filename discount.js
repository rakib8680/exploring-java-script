

function discountCalculator(tickets) {
    const first100Tickets = 100;
    const second100Tickets = 90;
    const third100Tickets = 70;
    if (tickets <= 100) {
        let price = tickets * first100Tickets;
        return price;
    }
    else if (tickets <= 200) {
        let first100price = 100 * first100Tickets;
        let remainingTickets = tickets - 100;
        let remainingPrice = remainingTickets * second100Tickets;
        let totalPrice = remainingPrice + first100price;
        return totalPrice;
    }
    else {
        let first100price = 100 * first100Tickets;
        let second100Price = 100 * second100Tickets;
        let remainingTickets = tickets - 200;
        let remainingPrice = remainingTickets * third100Tickets;
        let totalPrice = first100price + second100Price + remainingPrice;
        return totalPrice;
    }
}


const finalPrice = discountCalculator(300);
console.log(finalPrice);