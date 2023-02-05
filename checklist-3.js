

// ১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়। 

// function feetToInch(feet) {
//     const inch = 12;
//     let formula = feet * inch;
//     return formula;
// }

// let feet = 6;
// const result = feetToInch(feet);
// console.log(result);








// ২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে। 

// function centimeterToMeter(cm){
//     const meter = 100;
//     formula = cm/meter;
//     return formula;
// }

// let centimeter = 150;
// const result = centimeterToMeter(centimeter);
// console.log(result);










// ৩.   আরেকটা ফাংশন লিখবে । যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 

// এইবার ভালো করে খেয়াল করো। 

// প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 

// সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 

// তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 

// এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। 

// উত্তর হিসেবে সংখ্যা রিটার্ন করবে। 


// function paperRequirements(book1, book2, book3) {
//     const book1Papers = 100;
//     const book2Papers = 200;
//     const book3Papers = 300;
//     let paperForBook1 = book1 * book1Papers;
//     let paperForBook2 = book2 * book2Papers;
//     let paperForBook3 = book3 * book3Papers;
//     const totalPapers = paperForBook1 + paperForBook2 + paperForBook3;
//     return totalPapers;
// }


// let book1Quantity = 4;
// let book2Quantity = 3;
// let book3Quantity = 2;
// const paperRequire = paperRequirements(book1Quantity, book2Quantity, book3Quantity);
// console.log('Total',paperRequire,'papers needed');












// ৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 

// let friends = ['rohim', 'korim', 'jobbar', 'anwar', 'yousuf', 'abdul karim', 'shakil'];

// function bestFriend(friends) {
//     let biggest = " ";
//     for (i = 0; i < friends.length; i++) {
//         let friend = friends[i];
//         if (friend.length > biggest.length) {
//             biggest = friend;
//         }
//     }
//     return biggest;
// }

// let bigName = bestFriend(friends);
// console.log(bigName);









// ৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 


// function positiveNumber(array) {
//     let positiveArray = [];
//     for (i = 0; i < array.length; i++) {
//         let number = array[i];
//         if (number >= 0) {
//             positiveArray.push(number);
//         }
//         else {
//             break;
//         }
//     }
//     return positiveArray;
// }

// let array = [4, 53, 2, 64, 46, 77, 34, -344, 5, 634, 22, 33, 23];
// const result = positiveNumber(array);
// console.log(result);










// 6. একটা ফাংশন লিখো। সেটার মধ্যে তিনটা প্যারামিটার নিবে। এই তিনটা প্যারামিটার হবে কোন একটা ত্রিভুজের তিনটা বাহু এর দৈর্য্য। এখন তোমার কাজ হচ্ছে ফাংশনের ভিতরে কিছু হিসাব নিকাশ করে ত্রিভুজের area (আয়তন) বের করা। কোন একটা ত্রিভুজের তিনটা বাহুর দৈর্য্য দেয়া থাকলে সেটা থেকে কিভাবে আয়তন বের করতে হয় সেই ফর্মুলা গুগল থেকে খুঁজে বের করো। 


// function calculateArea(a, b, c) {
//     const s = (a + b + c) / 2;
//     const area = Math.sqrt(s * 
//         (s - a) * (s - b) * (s - c));
//     return area;
// }


// let firstSide = 6;
// let secondSide = 9;
// let thirdSide = 12;
// const result = calculateArea(firstSide, secondSide, thirdSide);
// console.log(result);











// 7. কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো। 

function getPrimeNumber(number) {
    console.log( number,' is a Prime number,');
    if (number % 2 != 0 && number % 3 != 0) {
        return true;
    }
    else {
        return false;
    }
}

let number = 17;
const result = getPrimeNumber(number);
console.log(result);