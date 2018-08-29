const calculateButton = document.getElementById("calculateButton");
const resetButton = document.getElementById("resetButton");
const resultsDiv = document.getElementsByClassName("resultsDiv");
const infoTable = document.getElementById("infoTable");
yearsArray = new Array();
depositArray = new Array();
noIBalanceArray = new Array();
interestArray = new Array();
balanceArray = new Array();
titleArray = ["Year", "Balance", "Deposit", "Interest", "Balance"];

// Create Table Headings
function tableHeadings(){
    const tr = document.createElement("TR");
    infoTable.appendChild(tr);
    tr.setAttribute("id", "table-heading");
    
    const tableHeading = document.getElementById("table-heading");
    
    for(var i = 0; i < titleArray.length; i++){
    let th = document.createElement("TH");
    let text = document.createTextNode(titleArray[i]);
    th.appendChild(text);
    tableHeading.appendChild(th);
    }
}

// Calculate Interest function
function calculateInterest(balance, deposit, interest){
    let startBalance = parseFloat(balance) + parseFloat(deposit);
    let newInterest = (startBalance/100) * parseFloat(interest);
    return newInterest;
}

// Calculate New Balance function
function calculateNewBalance(balance, deposit, interest){
    let startBalance = parseFloat(balance) + parseFloat(deposit);
    let balanceInterest = (startBalance/100) * parseFloat(interest);
    let newBalance = startBalance + balanceInterest;
    return newBalance;
}

// Creates row and appends to table
function createRow(array, counter){
        const tr = document.createElement("TR");
        infoTable.appendChild(tr);
        let rowNumber = yearsArray[counter];
        tr.setAttribute("id", rowNumber);
        let row = document.getElementById(rowNumber);
        let th = document.createElement("TH");
        th.innerText = array[counter];
        row.appendChild(th);
}

tableHeadings();

// Calculate Button Event Listener
calculateButton.addEventListener('click', (e) => {
    // Variable declarations
    let startAmount = document.getElementById("startAmount").value;
    noIBalanceArray.push(startAmount);
    balanceArray.push(startAmount);
    let monthlyDeposit = document.getElementById("monthlyDeposit").value;
    let averageInterest = document.getElementById("averageInterest").value;
    let years = document.getElementById("years").value;
    

    // Populating years & deposit arrays
    for(var i = 0; i < years; i++){
        yearsArray.push(i + 1);
        
        depositArray.push(monthlyDeposit);
    }

    // Populating no interest array
    for(let i = 1; i < years; i++){
        let val1 = parseFloat(noIBalanceArray[i-1]);
        let val2 = parseFloat(depositArray[i]);
        val3 = (val1 + val2);
        noIBalanceArray.push(val3);
    }

    // Calculating interest
    for(var i = 0; i < years; i ++){
        let v = calculateInterest(noIBalanceArray[i], depositArray[i], averageInterest);
        interestArray.push(v);    
    }

    // Calculating new balance
    for(var i = 0; i < years; i ++){
        let v = calculateNewBalance(noIBalanceArray[i], depositArray[i], averageInterest);
        balanceArray.push(v);    
    }

    // Years & deposit collumn population
    for(var i = 0; i < years; i ++){
        createRow(yearsArray, i);

        createRow(noIBalanceArray, i);

        createRow(depositArray, i);

        createRow(interestArray, i);
        
        // createRow(balanceArray, (i+1));
    }
});

// Reset Button Event Listener
resetButton.addEventListener('click', (e) =>{
    location.reload();
});