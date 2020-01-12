let previousDigit = 0;
let isNewDigit = false;
let operator = "";

function pressClearButton() {
   previousDigit = 0;
   isNewDigit = false;
   operator = "";
   document.getElementById("calc-screen").value = "";
}

function pressBackButton() {
   document.getElementById("calc-screen").value =
      document.getElementById("calc-screen").value.substring(0, document.getElementById("calc-screen").value.length - 1)
}

function pressPlusMinusButton() {
   let currentValue = document.getElementById("calc-screen").value;
   currentValue *= -1;
   document.getElementById("calc-screen").value = currentValue;
}

function pressOperationButton(op) {
   let currentValue = document.getElementById("calc-screen").value;

   if (!currentValue) {
      document.getElementById("calc-screen").value = "";
   } else {
      if (isNewDigit && operator != '=') {
         document.getElementById("calc-screen").value = previousDigit;
      } else {
         isNewDigit = true;
         if (operator === '+') {
            previousDigit += parseFloat(currentValue);
         } else if (operator === '-') {
            previousDigit -= parseFloat(currentValue);
         } else if (operator === '*') {
            previousDigit *= parseFloat(currentValue);
         } else if (operator === '/') {
            previousDigit /= parseFloat(currentValue);
         } else {
            previousDigit = parseFloat(currentValue);
         }
         document.getElementById("calc-screen").value = previousDigit;
         operator = op;
      }
   }
}

function pressDigitButton(num) {
   if (isNewDigit) {
      document.getElementById("calc-screen").value = num;
      isNewDigit = false;
   } else {
      document.getElementById("calc-screen").value += num;
   }
}