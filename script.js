let billAmount = document.querySelector("#bill-amount");
let cashGiven = document.querySelector("#cash-given");
let calculate = document.querySelector("#calculate");
let nextButton = document.querySelector("#next-button");
let nextSection = document.querySelector(".next-section");
let table = document.querySelector("table");
let errorMessage = document.querySelector("#error-message");
let showOnTable = document.querySelectorAll(".no-of-notes");

let denominations = [2000,500,100,20,10,5,1];

nextButton.addEventListener("click", ()=> {
    hideElement(errorMessage);
    hideElement(nextSection);
    if(parseInt(billAmount.value) > 0) {
        nextSection.style.display = "flex";
        // Calculate Button Clicking
        calculate.addEventListener("click", () => {
            hideElement(errorMessage);
            hideElement(table);
            if(parseInt(cashGiven.value) >= parseInt(billAmount.value)) {
                table.style.display = "table";
                let changeMoney  = parseInt(cashGiven.value) - parseInt(billAmount.value);
                calculateChange(changeMoney); 
            }
            else{
                showError("Where's the rest of the money?");
            }
        })
    }
    else{
        showError("Bill amount is invalid");
    }
})

function hideElement(elementToHide){
    elementToHide.style.display = "none";
}

function calculateChange(changeMoney) {
    for(let i=0; i<denominations.length; i++) {
        showOnTable[i].innerText = Math.trunc(changeMoney/denominations[i]);
        changeMoney = changeMoney%denominations[i];
        if(showOnTable[i].innerText == 0) {
            showOnTable[i].classList.add("grey");
        }
    }
}

function showError(msg) {
    errorMessage.style.display = "block";
    errorMessage.innerText = msg;
}