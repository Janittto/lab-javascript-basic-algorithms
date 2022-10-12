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

//bonus

let loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel placerat mi. Mauris posuere risus id dolor auctor, non auctor purus commodo. Aenean iaculis ipsum nec mi porttitor, eu fringilla lacus consectetur. Integer vel massa varius urna mollis molestie id vel libero. Donec scelerisque hendrerit libero, in lacinia libero euismod quis. In pulvinar erat a pellentesque vehicula. Ut vestibulum et ex vitae elementum. Sed non dui justo. Sed nec dapibus mi, non iaculis magna. Cras interdum ligula et nisl lobortis, ut fermentum nibh placerat. Nam vitae enim vitae mi imperdiet lobortis. Proin augue neque, posuere at sapien eu, ornare porta sapien. Nulla ullamcorper vestibulum orci. Nullam sit amet felis finibus, malesuada diam nec, dapibus felis. Pellentesque eleifend magna non imperdiet ultricies. Quisque sit amet erat eu ligula tincidunt convallis in sed nisi. Nam rutrum porttitor ornare. Morbi pellentesque tortor quis volutpat egestas. Etiam eu faucibus urna. Duis at massa purus. Suspendisse potenti. In porttitor luctus nisl, nec mollis erat molestie in. Curabitur mattis lacus nisl, quis rhoncus libero tincidunt nec. Suspendisse eget consectetur urna, sed lacinia velit. Praesent elementum dolor ac lacus aliquam posuere in id enim. Aenean condimentum dignissim nibh. Sed quis tellus velit. Mauris venenatis pretium diam. Cras ut faucibus orci. Nullam dapibus mollis sapien vel volutpat.";

let wordCounter = 1;
for (let i = 0; i < loremIpsum.length; i++) {
  if (loremIpsum[i] === " ") {
    ++wordCounter;
  }
}
console.log(wordCounter);

let etCounter = 0;
for (let i = 0; i < loremIpsum.length; i++) {
  if (
    loremIpsum[i - 1] === " " &&
    loremIpsum[i] === "e" &&
    loremIpsum[i + 1] === "t"
  )
    ++etCounter;
}
console.log(etCounter);
