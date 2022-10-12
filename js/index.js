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

for (let i = 0; i < hacker1.length; i++) {
  //   hacker1[i].toUpperCase() += " "
  console.log(hacker1[(i += 1)].toUpperCase());
  break;
}
