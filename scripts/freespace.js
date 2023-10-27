"use strict";

window.onload = init;

function init () {

let buttonCalculator = document.getElementById("estBtn");
buttonCalculator.onclick = buttonCalculatorClicked;
 }

function buttonCalculatorClicked() {
    let numberOfdays = document.getElementById("inputNumberOfDays").value;
    const basePay = 29.99;
    let outputCareRentalValue = basePay * numberOfdays;
    let outputOptionsvalue;
    let outUnder25Surchargevalue;
    let outputTotalDuevalue;


    let selectedOption =
    document.querySelector("input[name='option']:checked");
   // //const outputCareRental= document.getElementById("outputCareRental");
    //const outputOptions= document.getElementById("outputOptions");
    //const outUnder25Surcharge= document.getElementById("outUnder25Surcharge");

 
        function calculateTotalCost() {
   
        
 let tollTag = document.getElementById("tollRadioBtn").checked;
    if (selectedOption.value == "toll")
    extraPerDay += 3.95;
}
    let gps = document.getElementById("gpsRadioBtn").checked;
    if (selectedOption.value == "gps") {
    extraPerDay += 2.95;}

    let roadside = document.getElementById("roadRadioBtn").checked;
    if (selectedOption.value == "roadside") {
    extraPerDay += 2.95;}

   queryselector("outputCareRental").value = outputCareRentalValue;

 }



function calculateUnder25Surcharge() {
    let is25Nochecked = (document.getElementById("nocheckbox1").checked);
    let isyeschecked =( document.getElementById("yescheckbox2").checked);
    if (is25Nochecked == true) {
        outUnder25Surchargevalue = 0.30;
    } else if (isyeschecked == true) {
        outUnder25Surchargevalue = 0.30;
        
    }
}
