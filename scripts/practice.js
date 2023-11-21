"use strict";

window.onload = init;

function init() {
    const estimatedTotal = document.getElementById("estBtn");
    estimatedTotal.onclick = estimatedTotalClicked;
}

function estimatedTotalClicked() {
    let numberOfDays = Number(document.getElementById("inputNumberOfDays").value);
    let tollBtn = document.getElementById("tollRadioBtn").checked;
    let gpsBtn = document.getElementById("gpsRadioBtn").checked;
    let roadBtn = document.getElementById("roadRadioBtn").checked;

    
    displayOptions(numberOfDays, tollBtn, gpsBtn, roadBtn);
}

function displayOptions(numberOfDays, isTollChecked, isGpsChecked, isRoadChecked) {
    let basicCarRental = 29.99;
    let carValue = numberOfDays * basicCarRental;
    let under25SurchargeValue = 0;

    if (isTollChecked) {
        carValue += 3.95 * numberOfDays;
    }

    if (isGpsChecked) {
        carValue += 2.95 * numberOfDays;
    }

    if (isRoadChecked) {
        carValue += 2.95 * numberOfDays;
    }

    let noCheckBox = document.getElementById("noCheckBox").checked;
    let yesCheckBox = document.getElementById("yesCheckBox").checked;

    let surchargePercentage = 30;
    let surchargeDecimal = surchargePercentage / 100;

    if (yesCheckBox) {
       
        under25SurchargeValue += carValue * surchargeDecimal;
    } else if (noCheckBox) {
        under25SurchargeValue = 0;
    }

   
    outPutTotal(carValue, under25SurchargeValue);
}


function outPutTotal(carValue, under25SurchargeValue) {
    document.getElementById("outputCarRental").value = carValue.toFixed(2);
    document.getElementById("outputSurcharge").value = under25SurchargeValue.toFixed(2);
    document.getElementById("outputTotalDue").value = (carValue + under25SurchargeValue).toFixed(2);
}
