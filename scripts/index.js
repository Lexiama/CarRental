"use strict";

window.onload = init;

function init () {

let buttonCalculator = document.getElementById("estBtn");
buttonCalculator.onclick = buttoncalculateClicked;



 }

function buttoncalculateClicked() {
    let numberOfdays = document.getElementById("inputNumberOfDays").value;
    const basePay = 29.99;
    let outputCareRentalvalue = basePay * numberOfdays;
    let outputOptionsvalue;
    let outUnder25Surchargevalue;
    let outputTotalDuevalue;


    let isTollTagcheckecd = (document.getElementById("tollRadioBtn").checked);
    let isGpschecked = (document.getElementById("gpsRadioBtn").checked);
    let isRoadsidechecked = (document.getElementById("roadRadioBtn").checked);
    let is25Nochecked = (document.getElementById("nocheckbox1").checked);
    let isyeschecked =( document.getElementById("yescheckbox2").checked);

    const outputCareRental= document.getElementById("outputCareRental");
    const outputOptions= document.getElementById("outputOptions");
    const outUnder25Surcharge= document.getElementById("outUnder25Surcharge");

 
        function calculateTotalCost() {


 let tollTag = document.getElementById("tollRadioBtn").checked;
if (tollTag == true) {
 extraPerDay += 3.95;
}
let gps = document.getElementById("gpsRadioBtn").checked;
if (gps == true) {
 extraPerDay += 4.95;
}
let roadside = document.getElementById("roadRadioBtn").checked;
if (roadside == true) {
 extraPerDay += 2.95;
}

 }

}