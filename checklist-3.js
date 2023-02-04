

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

let friends = ['rohim', 'korim', 'jobbar', 'anwar', 'yousuf', 'abdul karim', 'shakil'];

function bestFriend(friends) {
    let biggest = " ";
    for (i = 0; i < friends.length; i++) {
        let friend = friends[i];
        if (friend.length > biggest.length) {
            biggest = friend;
        }
    }
    return biggest;
}

let bigName = bestFriend(friends);
console.log(bigName);