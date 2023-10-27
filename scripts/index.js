"use strict";

window.onload = init;

function init() {
    let buttonCalculator = document.getElementById("estBtn");
    buttonCalculator.onclick = calculateTotalCost;

}
    //inputs
function calculateTotalCost() {
    let numberOfDays = parseFloat(document.getElementById("inputNumberOfDays").value);
    const paymentValue = 29.99;
    let carRentalValue = paymentValue * numberOfDays;
    let optionsValue = 0;
    let under25SurchargeValue = 0;
    let nocheckbox1 = 0;

    //options



    let tollTag = document.getElementById("tollRadioBtn").checked;
    if (tollTag) {
        optionsValue += 3.95 * numberOfDays;
    }

    let gps = document.getElementById("gpsRadioBtn").checked;
    if (gps) {
        optionsValue += 2.95 * numberOfDays;
    }

    let roadside = document.getElementById("roadRadioBtn").checked;
    if (roadside) {
        optionsValue += 2.95 * numberOfDays;
    }

     

    //under25Surcharge


   




    //outputs

    document.getElementById("outputCarRental").value = carRentalValue.toFixed(2);
    document.getElementById("outputTotal").value = optionsValue.toFixed(2);
    document.getElementById("outputSurcharge").value = under25SurchargeValue.toFixed(2);
    document.getElementById("outputTotalDue").value = total.toFixed(2);
  
}

        

