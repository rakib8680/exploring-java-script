

const shoppigItems = [
    { name: 'shirt', price: 2600, quantity: 3 },
    { name: 'pant', price: 2000, quantity: 2 },
    { name: 'tShirt', price: 1600, quantity: 4 },
    { name: 'shoe', price: 3000, quantity: 2 },
    { name: 'cap', price: 1400, quantity: 4 }
]

function totalExpense(items) {
    let sum = 0;
    for (i = 0; i < items.length; i++) {
        let item = items[i];
        let poriman = item.quantity;
        let total = item.price * poriman;
        sum = sum + total;
    }
    return sum;
}


const totalPrice = totalExpense(shoppigItems);
console.log(totalPrice);