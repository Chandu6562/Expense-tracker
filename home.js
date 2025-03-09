let table = document.getElementById("table")
console.log("table",table)

function deleteRow(row){
    row.remove();
}


// Function to add a new row
function addRow(){

    // let date = document.getElementsByClassName("dateInput")[0].value
    // let amount = document.getElementsByClassName("amountInput")[0].value 
    // let transaction = document.getElementsByClassName("transactionType")[0].value 

    let dateInput = document.getElementsByClassName("dateInput")[0];
    let amountInput = document.getElementsByClassName("amountInput")[0];
    let transactionInput = document.getElementsByClassName("transactionType")[0];

    let date = dateInput.value;
    let amount = amountInput.value;
    let transaction = transactionInput.value;
    
    if (date.trim() === "" || amount.trim() === "") {
        alert("Please enter both date and amount.");
        return; // Stop function execution
    }

    // Check if amount is a valid number
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid positive number for the amount.");
        return; // Stop function execution
    }

    amount = parseFloat(amount); 

    let row =document.createElement("tr")

    let amountCell = document.createElement("td")
    amountCell.innerText=amount;

    let dateCell = document.createElement("td")
    dateCell.innerText=date;

    let transactionCell = document.createElement("td")
    transactionCell.innerText=transaction;

    let binCell = document.createElement("td")

    let deleteButton = document.createElement("button")

    let binImage= document.createElement("img")
    binImage.src="Expense Tracker Files/recycle-bin.png"
    binImage.style.width="25px";
    binImage.style.height="25px";
    deleteButton.classList.add("delete-button")
    deleteButton.onclick=()=>deleteRow(row)


    deleteButton.appendChild(binImage)
    binCell.appendChild(deleteButton);

    row.appendChild(amountCell)
    row.appendChild(transactionCell)
    row.appendChild(dateCell)
    row.appendChild(binCell)

    table.appendChild(row)

    let totalIncome =document.getElementById("total-income").innerText;
    let totalExpense = document.getElementById("total-Expense").innerText;
    let balance = document.getElementById("balance").innerText;

    if(transaction=="Income") 
    {
        if(totalIncome=="0")
        {
            document.getElementById("total-income").innerText=amount;
        }
        else
        {
            document.getElementById("total-income").innerText=parseFloat(totalIncome)+parseFloat(amount)
        }
        if(balance=="0")
        {
            document.getElementById("balance").innerText=amount;
        }
        else
        {
            document.getElementById("balance").innerText=parseFloat(balance)+parseFloat(amount)
        }
    }
    else if(transaction=="Expense")
    {
        if(totalExpense=="0")
        {
            document.getElementById("total-Expense").innerText=amount;
        }
        else
        {
            document.getElementById("total-Expense").innerText=parseFloat(totalExpense)+parseFloat(amount);
        }
        if(balance=="0")
        {
            document.getElementById("balance").innerText=amount;
        }
        else
        {
            document.getElementById("balance").innerText=parseFloat(balance)-parseFloat(amount)
        }
    }

     // **Clear input fields after adding a row**
     dateInput.value = "";
     amountInput.value = "";
     transactionInput.value = "Transaction Type"; // Reset to default selection
   
}