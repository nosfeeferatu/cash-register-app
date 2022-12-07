let billAmount = document.querySelector("#bill-amount");
let cashGiven = document.querySelector("#cash-given");
let calculate = document.querySelector("#calculate");
let errorMessage = document.querySelector("#error-message");
let showOnTable = document.querySelectorAll(".no-of-notes");

let denominations = [2000,500,100,20,10,5,1];

calculate.addEventListener("click", ()=> {
    errorMessage.style.display = "none";
    if(billAmount.value > 0) {
        if(cashGiven.value >= billAmount.value) {
            let changeMoney  = cashGiven.value - billAmount.value;
            calculateChange(changeMoney); 
        }
        else{
            showError("Where's the rest of the money?");
        }
    }
    else{
        showError("Bill amount is invalid");
    }
})

function calculateChange(changeMoney) {
    for(let i=0; i<denominations.length; i++) {
        showOnTable[i].innerText = Math.trunc(changeMoney/denominations[i]);
        changeMoney = changeMoney%denominations[i];
        if(showOnTable[i].innerText == 0) {
            showOnTable[i].style.backgroundColor = "grey";
            showOnTable[i].style.color = "grey";
            showOnTable[i].style.borderColor = "grey";
        }
    }
}

function showError(msg) {
    errorMessage.style.display = "block";
    errorMessage.innerText = msg;
}