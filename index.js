function sum(num1, num2, showRes, phrase) {
    console.log(typeof num1);
    var nums = num1 + num2;
    if (showRes) {
        console.log(phrase + nums);
    }
    else {
        return num1 + num2;
    }
}
var numberOne = 3;
var numberTwo = 4.5;
var returnRes = true;
var message = "Your answer is: ";
sum(numberOne, numberTwo, returnRes, message);
