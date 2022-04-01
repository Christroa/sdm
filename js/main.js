const menuBtn = document.querySelector('#menu');
const closeBtn = document.querySelector('#closeMenu');
const navContainer = document.querySelector('#nav');

menuBtn.addEventListener('click', () => {
    // navContainer.style.display = "block";
    navContainer.style.left = "0%";
});
closeBtn.addEventListener('click', () => {
    navContainer.style.left = "-100%";
});
// if (window.screen.width <= 768) {
//     alert('lk');
// }

let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];


nums.forEach(number => {
    if (number % 3 === 0 && number % 5 === 0) {
        return console.log('FizzBuzz');
    }
    else if(number % 3 === 0) {
       return console.log('Fizz');
    } else if(number % 5 === 0) {
        return console.log('Buzz');
    }
    console.log(number)
});

// let aaa = ['Rock', 'Papper', 'Scissors'];
// let computerPlay = (computerSelection, playerSelection) => {
//     let random = Math.random() * 4;
//     console.log(Math.floor(random))
// };

// computerPlay()