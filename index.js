const text =
  "Lorem, ipsum dolor sit amet, consectetur adipisicing elit, \
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi \
  ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit \
  in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
  Excepteur sint occaecat cupidatat non proident, \
  sunt in culpa qui officia deserunt mollit anim id est laborum.";

let counter = 0;

// User Input via String
function forbiddenWords(userText) {
  userArray = userText.split(" ");
  for (let i = 0; i < userArray.length; i++) {
    const textWord = userArray[i];
    if (textWord === "sunt" || textWord === "enim") {
      counter += 1;
      userArray[i] = "Beep";
    }
  }
  // User Output
  userArray = (userArray.toString(), userArray.join(" "));
  console.log(`Number of changed words = ${counter}`);
  return userArray;
}

//User input via string is inputed into the function
// User input is split into multiple array values
// For loop goes through all array values
// If loop finds a forbidden word
// Changes to a accepted word
// Array returned and  is converted back into a string
