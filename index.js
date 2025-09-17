
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
    let first=doc