const calculateButton = document.getElementById("calculateButton");
const infoTable = document.getElementById("infoTable");
yearsArray = new Array();

// Calculate Button Event Listener
calculateButton.addEventListener('click', (e) => {
    // Variable declarations
    let startAmount = document.getElementById("startAmount").value;
    let monthlyDeposit = document.getElementById("monthlyDeposit").value;
    let averageInterest = document.getElementById("averageInterest").value;
    let years = document.getElementById("years").value;
    const calculateButton = document.getElementById("calculateButton");

    // Creating an array for years to use as id's for rows
    for(var i = 0; i < years; i++){
        yearsArray.push(i);
    }

    // for(var i = 0; i < years; i ++){
    //     const tr = document.createElement("TR");
    //     infoTable.appendChild(tr);
    //     tr.setAttribute("id", i);
    //     let row = document.getElementById(i);
    //     let th = document.createElement("TH");
    //     th.innerText = years;
    //     i.appendChild(th);
    // }
});