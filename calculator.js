// function calculator (a,b){
//  return a+b;
//  return a-b;
//  return a

// };
// let value = calculator(10,20);
// console.log(value);


function sum(){
var number1= document.getElementById("num1");
var number2= document.getElementById("num2");
var numInput1 = parseFloat(number1.value);
var numInput2 = parseFloat(number2.value);
document.getElementById("result").innerHTML =  numInput1 + numInput2 ;


}

function add(){
    var number1= document.getElementById("num1");
var number2= document.getElementById("num2");
var numInput1 = parseFloat(number1.value);
var numInput2 = parseFloat(number2.value);
document.getElementById("result").innerHTML =  numInput1 - numInput2 ;
}

function multi(){
    var number1= document.getElementById("num1");
    var number2= document.getElementById("num2");
    var numInput1 = parseFloat(number1.value);
    var numInput2 = parseFloat(number2.value);
    document.getElementById("result").innerHTML =  numInput1 * numInput2 ;
}

function dive(){
    var number1 = document.getElementById("num1");
    var numInput1 = number1.value;
    var number2 = document.getElementById("num2");
    var numinput2 = number2.value;
    document.getElementById("result").innerHTML= numInput1/numinput2;
}

function resetInput(){
    var form = document.getElementById("myform")
    form.reset();
}