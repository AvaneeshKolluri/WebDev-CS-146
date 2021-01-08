/**
 * Resets the state of the calculator and the display
 */
var result = 0;
var currentOp = "";
var buffer = 0;
setDisplay(0);

function resetCalc() {
   // implement
   setDisplay(0);
   result = 0;
   currentOp = "";
   buffer = 0;
}

/**
 * Sets the inner text of the div with id="output"
 * @param {String} str the string to set the inner text to
 */
function setDisplay(str) {
   // implement
   document.getElementById("output").innerHTML = str;
}

/**
 * Returns the current result of the calculator
 * Hint: you can use a global variable for the result
 */
function getResult() {
   // implement
   return result;
}

/**
 * Update the calculator state with the next number and sets the display
 * @param {Number} num the number that was pressed
 */
function pressNum(num) {
   // implement
   result = (10*result) + num;
   if (result > 999999999){
   	result = 999999999
   }
   if (result < -999999999){
   	result = -999999999
   }

   setDisplay(result);
   
}

/**
 * Operation is pressed, move the current result value to a temporary buffer and
 * set the current result to zero.
 * @param {String} op the operation pressed, either: +,-,*,/
 */
function pressOp(op) {
   // implement
   if (currentOp == ""){
   buffer = result;
   result = 0;
}
   currentOp = op;
}

/**
 * Should compute the current operation with the buffer value and current
 * result value based on the current operation. If there is no current
 * operation, do nothing.
 */
function pressEquals() {
   // implement
   if(currentOp == "-"){
   	result = buffer - result
   }
   if(currentOp == "+"){
   	result = buffer + result
   }
   if(currentOp == "*"){
   	result = buffer * result
   }
   if(currentOp == "/"){
   	if(buffer == 0){
   		if (result == 0){
   			result = 0
   			setDisplay("ERROR")
   			return
   		}
   	}
   	result = Math.floor(buffer / result)
   }

   setDisplay(result.toString())
}