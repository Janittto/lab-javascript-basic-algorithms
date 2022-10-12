// Iteration 1: Names and Input

let hacker1 = "yasemin";
console.log(`the driver's name is ${hacker1}`);
let hacker2 = "jeanne";
console.log(`the navigator's name is ${hacker2}`);

// conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `the driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `it seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `wow, you both have equally long names, ${hacker1.length} characters`
  );
}

// Iteration 3: Loops
let newName = "";
let nameSpaced = "";

for (let i = 0; i < hacker1.length; i++) {
  newName += hacker1[i] + " ";
}
console.log(newName.toUpperCase());

let nameReverse = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  nameReverse += hacker1[i];
}
console.log(nameReverse);

for (let i = 0; i < hacker2.length; i++) {
  if (hacker1[i] === hacker2[i] && hacker1.length === hacker2.length) {
    console.log(`what?! you both have the same name?`);
  } else if (hacker1[i] < hacker2[i]) {
    console.log(`the driver's name goes first`);
  } else {
    console.log(`yo, the navigator goes first`);
  }
  break;
}
