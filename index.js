let one = document.getElementById("one");
let two = document.getElementById("two");
let output = document.getElementById("output");

function addition() {
    let first=document.getElementById("first-number").value;
    let second=document.getElementById("first-number").value;
    let result=Number(first)+Number(second);
    document.getElementById("output").innerHTML=String(result)
}
function doSubtract() {
    let result = Number(one.value) - Number(two.value);
    showResult(result);
}

function doMultiply() {
    let result = Number(one.value) * Number(two.value);
    showResult(result);
}

function doDivide() {
    if (Number(two.value) === 0) {
        output.innerHTML = "Error: Division by 0";
        output.style.color = "red";
    } else {
        let result = Number(one.value) / Number(two.value);
        showResult(result);
    }
}

function doPower() {
    let base = Number(one.value);
    let exp = Number(two.value);
    let result = 1;
    for (let i = 0; i < exp; i++) {
        result *= base;
    }
    showResult(result);
}

function doClear() {
    one.value = "";
    two.value = "";
    output.innerHTML = "";
    output.style.color = "black";
}

function showResult(result) {
    output.innerHTML = String(result);
    if (result < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "black";
    }
}