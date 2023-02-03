

// show output from 1 to 50
// if the number is divisible by 3, then show rakib instead of the number 
// if the number is divisible by 5, then show khan instead of the number 
// if the number is divisible by both 3 and 5 , then show Rakib Khan instead of the number 


for (i = 1; i <= 50; i++) {
    if ((i % 3) == 0 && (i % 5) == 0) {
        console.log('Rakib Khan');
    }

    else if ((i % 5) == 0) {
        console.log('Khan');
    }
    else if ((i % 3) == 0) {
        console.log('Rakib');
    }
    else {
        console.log(i);
    }
}