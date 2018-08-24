const calculateButton = document.getElementById("calculateButton");
const infoTable = document.getElementById("infoTable");
yearsArray = new Array();
interestArray = new Array();

function calculateInterest(balance, deposit, interest){
    let startBalance = balance + deposit;
    let balanceInterest = (startBalance/100) * 100;
    let newBalance = startBalance + interest;
    return newBalance;
}

// Calculate Button Event Listener
calculateButton.addEventListener('click', (e) => {
    // Variable declarations
    let startAmount = document.getElementById("startAmount").value;
    let monthlyDeposit = document.getElementById("monthlyDeposit").value;
    let averageInterest = document.getElementById("averageInterest").value;
    let years = document.getElementById("years").value;

    // Creating an array for years to use as id's for rows
    for(var i = 0; i < years; i++){
        yearsArray.push(i + 1);
    }

    

    for(var i = 0; i < years; i ++){
        const tr = document.createElement("TR");
        infoTable.appendChild(tr);
        let rowNumber = yearsArray[i];
        tr.setAttribute("id", rowNumber);
        let row = document.getElementById(rowNumber);
        let th = document.createElement("TH");
        th.innerText = yearsArray[i];
        row.appendChild(th);
    }
});