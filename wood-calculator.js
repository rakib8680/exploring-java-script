

function woodCalculator(chair, table, bed) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    const chairWood = chair * perChairWood;
    const tableWood = table * perTableWood;
    const bedQWood = bed * perBedWood;
    const totalWood = chairWood + tableWood + bedQWood;
    return totalWood;
}


let chair = 5;
let table = 2;
let bed = 3;

const result = woodCalculator(chair, table, bed);
console.log(result);