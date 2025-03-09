document.getElementById("login-button").addEventListener("click", function(event) {
    let nameInput = document.getElementById("floatingInput").value.trim();
    
    if (nameInput === "") {
        event.preventDefault(); // Stops redirection
        alert("Please enter your name before proceeding!");
    } else {
        // Store the name in localStorage to use on other pages if needed
        localStorage.setItem("userName", nameInput);
        document.getElementById("login-link").href = "./main.html"; // Allow redirection
    }
});

let table = document.getElementById("table")
console.log("table",table)

function deleteRow(row){
    row.remove();
}


// Function to add a new row
function addRow(){

    let date = document.getElementsByClassName("dateInput")[0].value
    let amount = document.getElementsByClassName("amountInput")[0].value 
    let transaction = document.getElementsByClassName("transactionType")[0].value 

    
    if (date.trim() === "" || amount.trim() === "") {
        alert("Please enter both date and amount.");
        return; // Stop function execution
    }
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
    binImage.src="C:/Users/hp/Desktop/Expense Tracker/Expense Tracker Files/recycle-bin.png"
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
            document.getElementById("total-income").innerText=parseInt(totalIncome)+parseInt(amount)
        }
        if(balance=="0")
        {
            document.getElementById("balance").innerText=amount;
        }
        else
        {
            document.getElementById("balance").innerText=parseInt(balance)+parseInt(amount)
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
            document.getElementById("total-Expense").innerText=parseInt(totalExpense)+parseInt(amount);
        }
        if(balance=="0")
        {
            document.getElementById("balance").innerText=amount;
        }
        else
        {
            document.getElementById("balance").innerText=parseInt(balance)-parseInt(amount)
        }
    }

}

document.getElementById("login-button").addEventListener("click", function(event) {
    let nameInput = document.getElementById("floatingInput").value.trim();
    
    if (nameInput === "") {
        event.preventDefault(); // Prevents navigation
        alert("Please enter your name before proceeding!");
    } else {
        // Store the name in localStorage to use on other pages if needed
        localStorage.setItem("userName", nameInput);
    }
});