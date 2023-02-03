// array slice ....................................................

let array = [44, 54, 23, 75 ,  234, 3, 6,234, 64, 634, 12 ];

const Slice = array.slice(3, 9);
console.log(Slice);



// // splice 
const Splice = array.splice(3,5, 44,55,66,77,88);
console.log(Splice);
console.log(array);




// remove duplicate elements from Array 

function removeDuplicate(array) {
    let finalResult = [];
    for (i = 0; i < array.length; i++) {
        const age = array[i];
        if (finalResult.includes(age) == false) {
            finalResult.push(age);
        }
    }
    return finalResult;
}


let ages = [33, 55, 44, 11, 33, 44, 66, 88, 11, 11, 33, 55, 77];
const result = removeDuplicate(ages);
console.log(result);