const array = [
  {
    name: "Bhaskar Deb",
    email: "orghodeb@gmail.com",
    confirmEmail: "orghodeb@gmail.com",
    Password: "YouNooB",
  },
  {
    name: "Dharitree Deb",
    email: "shyama@gmail.com",
    confirmEmail: "shyama@gmail.com",
    Password: "Asdfg",
  },
  {
    name: "Alak Dam",
    email: "alak@gmail.com",
    confirmEmail: "alak@gmail.com",
    Password: "12345",
  },
  {
    name: "Raj Dutta",
    email: "raj@gmail.com",
    confirmEmail: "raj@gmail.com",
    Password: "raj",
  },
];
function mailConfirmation(a, b, c) {
  if (a.toLowerCase() == b.toLowerCase()) {
    return `Welcome ${c}\n`;
  } else {
    return "I don't know you";
  }
}
function initials(a) {
  return (
    a.charAt(0).toUpperCase() +
    a.split(" ").slice(-1).join().charAt(0).toUpperCase() +
    `\n`
  );
}
let result = "";
let initial = "";
for (let index = 0; index < array.length; index++) {
  result += mailConfirmation(
    array[index].email,
    array[index].confirmEmail,
    array[index].name
  );
  initial += initials(array[index].name);
}

console.log(result);
console.log(initial);
