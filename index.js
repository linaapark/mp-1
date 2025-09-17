
function addition() {
    let first=document.getElementById("first-number").value;
    let second=document.getElementById("second-number").value;
    let result=Number(first)+Number(second);
    document.getElementById("output").innerHTML=String(result)
}
function subtraction() {
    let first=document.getElementById("first-number").value;
    let second=document.getElementById("second-number").value;
    let result=Number(first)-Number(second);
    document.getElementById("output").innerHTML=String(result)
}

function multiplication() {
    let first=document.getElementById("first-number").value;
    let second=document.getElementById("second-number").value;
    let result=Number(first)*Number(second);
    document.getElementById("output").innerHTML=String(result)
}

function division() {
    let first=document.getElementById("first-number").value;
    let second=document.getElementById("second-number").value;
    if (Number(second) === 0) {
        output.innerHTML = "Error: Division by 0";
        output.style.color = "red";
    } else {
        let result = Number(first) / Number(second);
        document.getElementById("output").innerHTML=String(result)
    }
}

function power() {
    let first=document.getElementById("first-number").value;
    let second=document.getElementById("second-numberr").value;
    let base = Number(first);
    let exp = Number(second);
    let result = 1;
    for (let i = 0; i < exp; i++) {
        result *= base;
    }
    document.getElementById("output").innerHTML=String(result)
}

function clear() {
    let first=document.getElementById("first-number").value;
    let second=document.getElementById("second-number").value;
    let output=document.getElementById("output");
    first = "";
    second = "";
    output.innerHTML = "";
    output.style.color = "black";
}
