// const dice = {
//     sides: 6,
//     roll() {
//         return Math.floor(this.sides * Math.random()) + 1;
//     }
// }

// const promise = new Promise((resolve, reject) => {
//     const n = dice.roll();
//     console.log(n);
//     setTimeout(() => {
//         (n > 1) ? resolve(n): reject(n);
//     }, n * 1000);
// });


// // promise.then(
// //     result => console.log(`Yes! I rolled a ${result}`),
// //     result => console.log(`Drat! ... I rolled a ${result}`));

// // promise.catch(
// //     result => console.log(`Drat! ... I rolled a ${result}`));

// promise.then(
//         result => console.log(`I rolled a ${result}`))
//     .catch(result => console.log(`Drat! ... I rolled a ${result}`));

const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
}
console.log('Before the roll');
const roll = new Promise((resolve, reject) => {
    // const n = dice.roll();
    const n = 0;
    console.log("roll number: " + n);
    if (n > 1) {
        setTimeout(() => { resolve(n) }, n * 200);
    } else {
        // throw new Error("test error outside");
        setTimeout(() => reject(n), n * 200);
    }
});
roll.then(result => console.log(`I rolled a ${result}`))
    .catch(result => console.log(`Drat! ... I rolled a ${result}`));
console.log('After the roll');

function returnHello() {
    console.log('returnHello() called');
    return function() {
        console.log("Hey, I'm Hello World");
    };
}

const hello = returnHello();

// function hello() {
//     console.log("Hello World");
// }