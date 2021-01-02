//Function returning types
function add(num1: number,num2: number){
    return num1 + num2
}
//Void can be used to check the return if any function returns any information
//But if the 'return' does not carry information it will retunr as 'undefined'
//'undefined' can be used as a type just like 'void'. 
function printRes(res):void{
    console.log(res)
}
printRes(add(2,5))