function sum(num1: number,num2: number, showRes: boolean,phrase: string){
    console.log(typeof num1)
    const nums = num1 + num2
    if(showRes){
        console.log(phrase+nums)
    }
    else{
    return num1 + num2
    }
}

const numberOne = 3;
const numberTwo = 4.5;
const returnRes = true;
const message = "Your answer is: ";
sum(numberOne,numberTwo,returnRes,message);
