

const shoppigItems = [
    { name: 'shirt', price: 2600 },
    { name: 'pant', price: 2000 },
    { name: 'tShirt', price: 1600 },
    { name: 'shoe', price: 3000 },
    { name: 'cap', price: 1400 }
]

function totalExpense(items) {
    let sum = 0;
    for (i = 0; i < items.length; i++) {
        let item = items[i];
        let price = item.price;
        sum = sum + price;
    }
    return sum;
}


const totalPrice = totalExpense(shoppigItems);
console.log(totalPrice);