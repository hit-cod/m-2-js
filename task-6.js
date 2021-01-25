let numbers = [];
let input;
let total = 0;
do {
  input = prompt("Enter your number: ");

  if (input === null) {
    break;
  }
  const numberedInput = Number(input);
  const notNum = Number.isNaN(numberedInput);

  if (notNum === true) {
    alert("Wrong number");
    break;
  }

  numbers.push(numberedInput);
} while (input !== null);

if (total !== 0) {
  for (const number of numbers) {
    total += number;
  }
  console.log(total);
}
