const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = []; // for the log entries

// gets the user input from the field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createTheOutput(operator, resultBefore, number) {
  const resultDescription = resultBefore + ' ' + operator + ' ' + number;
  // to remove the previous input
  userInput.value = '';
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

function calculateTheResult(calculationType) {
  if (
    calculationType !== 'ADD' &&
    calculationType !== 'SUBTRACT' &&
    calculationType !== 'MULTIPLY' &&
    calculationType !== 'DIVISION'
  ) {
    return;
  }

  const number = getUserNumberInput();

  if (!number) {
    return;
  }

  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === 'ADD') {
    mathOperator = '+';
    currentResult = currentResult + number;
  } else if (calculationType === 'SUBTRACT') {
    mathOperator = '-';
    currentResult = currentResult - number;
  } else if (calculationType === 'MULTIPLY') {
    mathOperator = '*';
    currentResult = currentResult * number;
  } else if (calculationType === 'DIVISION') {
    mathOperator = '/';
    currentResult = currentResult / number;
  }
  createTheOutput(mathOperator, initialResult, number);
  createTheLog(calculationType, initialResult, number, currentResult);
}

function add() {
  calculateTheResult('ADD');
}

function substract() {
  calculateTheResult('SUBTRACT');
}

function multiply() {
  calculateTheResult('MULTIPLY');
}

function division() {
  calculateTheResult('DIVISION');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
divideBtn.addEventListener('click', division);
multiplyBtn.addEventListener('click', multiply);
