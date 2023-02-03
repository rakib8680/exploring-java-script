

const phones = [
    { name: 'iphone', price: 80000, color: 'green', camera: 48, storage: '128gb' },
    { name: 'xaomi', price: 50000, color: 'green', camera: 48, storage: '128gb' },
    { name: 'huawei', price: 60000, color: 'green', camera: 48, storage: '128gb' },
    { name: 'oppo', price: 20000, color: 'green', camera: 48, storage: '128gb' },
    { name: 'vivo', price: 33000, color: 'green', camera: 48, storage: '128gb' },
    { name: 'samsung', price: 70000, color: 'green', camera: 48, storage: '128gb' },
    { name: 'pixel', price: 55000, color: 'green', camera: 48, storage: '128gb' }
];


function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (i = 0; i < phones.length; i++) {
        let phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }

    return cheapest;
}

const result = cheapestPhone(phones);
console.log(result);