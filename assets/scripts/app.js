const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = []; // for the log entries

// gets the user input from the field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createTheOutput(operator, resultBefore, number) {
  const resultDescription = resultBefore + ' ' + operator + ' ' + number;
  // function from the verndor js file
  outputResult(currentResult, resultDescription); // current result is outside scope of the function
}

// objects are pushed to array and log is displayed
function createTheLog(operator, previousNumber, enteredNumber, resultNumber) {
  let logEntry = {
    previousNumber: previousNumber,
    operator: operator,
    enteredNumber: enteredNumber,
    result: resultNumber
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const number = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult + number;
  createTheOutput('+', initialResult, number);
  createTheLog('ADD', initialResult, number, currentResult);
}

function substract() {
  const number = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - number;
  createTheOutput('-', initialResult, number);
  createTheLog('SUBTRACT', initialResult, number, currentResult);
}

function multiply() {
  const number = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * number;
  createTheOutput('*', initialResult, number);
  createTheLog('MULTIPLY', initialResult, number, currentResult);
}

function division() {
  const number = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult / number;
  createTheOutput('/', initialResult, number);
  createTheLog('DIVISION', initialResult, number, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
divideBtn.addEventListener('click', division);
multiplyBtn.addEventListener('click', multiply);
