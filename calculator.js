function sum(){
    const number1 = document.getElementById("num1");
    const input1 = parseFloat(number1.value);
    const number2 = document.getElementById("num2");
    const input2 = parseFloat(number2.value);
    document.getElementById("output").innerHTML = input1+input2;
}

function add(){
    const number1 = document.getElementById("num1");
    const input1 = parseFloat(number1.value);
    const number2 = document.getElementById("num2");
    const input2 = parseFloat(number2.value);
    document.getElementById("output").innerHTML = input1-input2;
}

function multi(){
    const number1 = document.getElementById("num1");
    const input1 = parseFloat(number1.value);
    const number2 = document.getElementById("num2");
    const input2 = parseFloat(number2.value);
    document.getElementById("output").innerHTML = input1*input2;
}
function div(){
    const number1 = document.getElementById("num1");
    const input1 = parseFloat(number1.value);
    const number2 = document.getElementById("num2");
    const input2 = parseFloat(number2.value);
    document.getElementById("output").innerHTML = input1/input2;
}

function reset(){
    const resetData = document.getElementById("myFrom");
    resetData.reset();
    document.getElementById("output").innerHTML = "show output";
  

}
