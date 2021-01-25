// First way to solve

// let j = 0;

// const logItems = function (array) {  

//     for (let i = 0; i < array.length; i+=1) {
        
//         const elementName = array[i];
//         j += 1;

//         console.log(`${j} - ${elementName}`);
//      }
// };

// Second way to solve

const logItems = function (array) {  

    for (let i = 0; i < array.length; i+=1) {
        
        const elementName = array[i];
        const elementPosition = array.indexOf(elementName) + 1;

        console.log(`${elementPosition} - ${elementName}`);
     }
};

const strangeNames = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

logItems(strangeNames);
