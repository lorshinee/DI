const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];


fruits.shift();

fruits.sort();


fruits.push("Kiwi");


const indexOfApples = fruits.indexOf("Apples");
if (indexOfApples !== -1) {
  fruits.splice(indexOfApples, 1);
}


fruits.reverse();


console.log(fruits);

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1][0]);

