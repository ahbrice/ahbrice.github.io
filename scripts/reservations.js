/*  JavaScript 7th Edition
    Chapter 3
    Chapter Case Project

    Holt Guesthouse
    Author: Aubrey Brice
    Date:   4/12/26

    Filename: reservations.js
*/


// Pricing constants
const ROOM_RATE = 243;
const HORSE_TOUR = 120;
const FARM_TOUR = 150;
const SWEATER = 400;
const CHEESE = 15;
const JAM = 9;

// Tax rates
const TAX_STANDARD = 0.11;   // rooms + cheese + jam
const TAX_CLOTHING = 0.24;   // sweaters

window.addEventListener("load", setupForm);

function setupForm() {
  // Set defaults
  document.getElementById("rooms").value = 1;
  document.getElementById("nights").value = 2;

  document.getElementById("horseTour").value = 0;
  document.getElementById("farmTour").value = 0;
  document.getElementById("sweater").value = 0;
  document.getElementById("cheese").value = 0;
  document.getElementById("jam").value = 0;

  // Attach event listeners to ALL inputs
  let inputs = document.querySelectorAll("#estimateform input");
  inputs.forEach(input => {
    input.addEventListener("input" , getEstimate);
  });

  getEstimate();
}

function getEstimate() {
  let rooms = parseInt(document.getElementById("rooms").value) || 0;
  let nights = parseInt(document.getElementById("nights").value) || 0;

  let horse = parseInt(document.getElementById("horseTour").value) || 0;
  let farm = parseInt(document.getElementById("farmTour").value) || 0;

  let sweater = parseInt(document.getElementById("sweater").value) || 0;
  let cheese = parseInt(document.getElementById("cheese").value) || 0;
  let jam = parseInt(document.getElementById("jam").value) || 0;

  // Base costs
  let roomCost = rooms * nights * ROOM_RATE;
  let excursionCost = (horse * HORSE_TOUR) + (farm * FARM_TOUR);
  let souvenirCost = (sweater * SWEATER) + (cheese * CHEESE) + (jam * JAM);

  // Taxes (kept separate)
  let taxStandard = (roomCost + excursionCost + (cheese * CHEESE) + (jam * JAM)) * TAX_STANDARD;
  let taxClothing = (sweater * SWEATER) * TAX_CLOTHING;

  let totalTax = taxStandard + taxClothing;

  // Final total (includes tax)
  let total = roomCost + excursionCost + souvenirCost + totalTax;

  // DISPLAY
  document.getElementById("tax").innerHTML =
    "$" + totalTax.toFixed(2);

  document.getElementById("estimate").innerHTML =
    "$" + total.toFixed(2);
}
