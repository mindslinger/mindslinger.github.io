// standard variable
var num = 0;
var key = 0;
var number = 0;
var operation = 0;
// clear
function clean() {
    num = 0;
    key = 0;
    number = 0;
    operation = 0;
    document.getElementById("output").innerHTML = 0;
    document.getElementById("liloutput1").innerHTML = "";
    document.getElementById("liloutput2").innerHTML = "";
    document.getElementById("liloutput3").innerHTML = "";
    document.getElementById("liloutput4").innerHTML = "";
}
// lilcleaner
function lilcleaner() {
    document.getElementById("liloutput2").innerHTML = "";
    document.getElementById("liloutput3").innerHTML = "";
    document.getElementById("liloutput4").innerHTML = "";

}

// keys function 
function b7() {
    key = 7
    main();
}
function b8() {
    key = 8
    main();
}
function b9() {
    key = 9
    main();
}
function b4() {
    key = 4
    main();
}
function b5() {
    key = 5
    main();
}
function b6() {
    key = 6
    main();
}
function b1() {
    key = 1
    main();
}
function b2() {
    key = 2
    main();
}
function b3() {
    key = 3
    main();
}
function b0() {
    key = 0
    main()
}
// main function
function main() {
    num = (num * 10) + key;
    document.getElementById("output").innerHTML = num;
}
// equals
function equal() {
    if (operation == 1) {
        document.getElementById("liloutput3").innerHTML = num;
        document.getElementById("liloutput4").innerHTML = "=";
        num = num + number;
        document.getElementById("output").innerHTML = num;
    }
    else if (operation == 2) {
        document.getElementById("liloutput3").innerHTML = num;
        document.getElementById("liloutput4").innerHTML = "=";
        num = number - num;
        document.getElementById("output").innerHTML = num;
    }
    else if (operation == 3) {
        document.getElementById("liloutput3").innerHTML = num;
        document.getElementById("liloutput4").innerHTML = "=";
        num = number * num;
        document.getElementById("output").innerHTML = num;
    }
    else if (operation == 4) {
        document.getElementById("liloutput3").innerHTML = num;
        document.getElementById("liloutput4").innerHTML = "=";
        num = number / num;
        document.getElementById("output").innerHTML = num;
    }
}
// backspace
function backspace() {
    num = (num - key) / 10;
    document.getElementById("output").innerHTML = num;
    key=0;
}
// decimal
function decimal() {
    num += "."
    document.getElementById("output").innerHTML = num;
}
// airthematic functions
function addition() {
    lilcleaner();
    document.getElementById("output").innerHTML = 0;
    document.getElementById("liloutput1").innerHTML = num;
    document.getElementById("liloutput2").innerHTML = "+";
    number = num;
    operation = 1;
    num = 0;
}
function subtract() {
    lilcleaner();
    document.getElementById("output").innerHTML = 0;
    document.getElementById("liloutput1").innerHTML = num;
    document.getElementById("liloutput2").innerHTML = "-";
    number = num;
    operation = 2;
    num = 0;
}
function multiply() {
    lilcleaner();
    document.getElementById("output").innerHTML = 0;
    document.getElementById("liloutput1").innerHTML = num;
    document.getElementById("liloutput2").innerHTML = "x";
    number = num;
    operation = 3;
    num = 0;
}
function divide() {
    lilcleaner();
    document.getElementById("output").innerHTML = 0;
    document.getElementById("liloutput1").innerHTML = num;
    document.getElementById("liloutput2").innerHTML = "/";
    number = num;
    operation = 4;
    num = 0;
}
function percent() {
    num = num / 100
    lilcleaner()
    document.getElementById("liloutput1").innerHTML = "";
    document.getElementById("output").innerHTML = num;
    key=0;
}