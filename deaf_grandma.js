function deafGrandma() {
  let count = 0;
  console.log("HEY KID!");
  while (count < 2) {
    let userInput = prompt("Enter message");
    let capital = userInput.toUpperCase();
    if (userInput === "") {
      console.log(`WHAT?!`);
    } else if (capital !== userInput) {
      console.log(`SPEAK UP, KID!`);
    } else if (userInput === "GOODBYE!") {
      count++;
      if (count < 2) console.log(`LEAVING SO SOON?`);
    } else if (capital === userInput) {
      console.log(`NO, NOT SINCE 1946!`);
    }
  }
  console.log(`LATER, SKATER!`);
}

deafGrandma();
