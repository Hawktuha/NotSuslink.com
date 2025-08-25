document.getElementById("sum").addEventListener("click", function() { 
    let x = Number(document.getElementById("input1").value)
    let y = Number(document.getElementById("input2").value) 
    let result = x + y
    document.getElementById("result").textContent += result; 
})

document.getElementById("sub").addEventListener("click", function() { 
    let x = Number(document.getElementById("input1").value)
    let y = Number(document.getElementById("input2").value) 
    let result = x - y
    document.getElementById("result").textContent += result; 
})

document.getElementById("dev").addEventListener("click", function() { 
    let x = Number(document.getElementById("input1").value)
    let y = Number(document.getElementById("input2").value) 
    let result = x / y
    document.getElementById("result").textContent += result; 
})

document.getElementById("mult").addEventListener("click", function() { 
    let x = Number(document.getElementById("input1").value)
    let y = Number(document.getElementById("input2").value) 
    let result = x * y
    document.getElementById("result").textContent += result;
     
})

document.getElementById("clear").addEventListener("click", function() {
    document.getElementById("result").textContent = "";
    let x = document.getElementById("input1").value = "";
    let y = document.getElementById("input2").value = "";

})