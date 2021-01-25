// The best solution
const formatString = function (string) {
  if (string.length < 40) {
    return string;
  }
  const shortenString = string.slice(0, 39);
  return shortenString + "...";
};

// Not the best solution, but it works
// const formatString = function (string) {
//   if (string.length < 40) {
//     return string;
//   }

//   // const arrayOfWords = string.split(" ");

//   let count = 0;
//   let shortenArray = [];
//   for (const word of arrayOfWords) {

//     if (count < 36) {
//       count = count + word.length;

//       shortenArray.push(word);
//     }
//   }
//   shortenArray.push("...");

//   const editedSentence = shortenArray.join(" ");
//   return editedSentence;

// };

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// вернется форматированная строка
