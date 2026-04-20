/*  JavaScript 7th Edition
    Chapter 5
    Chapter Case Project

    Holt Guesthouse
    Author: Aubrey Brice
    Date:   4/16/26

    Filename: calendar.js
*/
// Calendar color key
// 0 = unavailable (dark blue)
// 1 = booked (light blue)
// 2 = available (white)

const calendarData = [
  2, 2, 1, 0, 2, 1, 2,
  2, 1, 1, 0, 2, 2, 2,
  1, 1, 2, 2, 0, 2, 1,
  2, 2, 1, 2, 2, 2, 1,
  2, 2
];

// Month info
const months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];

let currentMonth = 10;

function renderMonthTitle() {
  document.getElementById("monthTitle").textContent = months[currentMonth];
}

// Weekday header and rows
const weekDays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

window.addEventListener("load", buildCalendar);

function buildCalendar() {
  renderMonthTitle();
  buildWeekdays();
  buildDays();
}

function buildWeekdays() {
  let row = document.getElementById("weekdays");

  for (let i = 0; i < weekDays.length; i++) {
    let th = document.createElement("th");
    th.textContent = weekDays[i];
    row.appendChild(th);
  }
}

// Calendar cells
function buildDays() {
  let tbody = document.getElementById("calendar-body");
  tbody.innerHTML = "";

  let row;

  // 30 day months
  let daysInMonth = calendarData.length;

  for (let i = 0; i < daysInMonth; i++) {

    if (i % 7 === 0) {
      row = document.createElement("tr");
      tbody.appendChild(row);
    }

    let td = document.createElement("td");
    td.textContent = i + 1;

    if (calendarData[i] === 0) td.classList.add("unavailable");
    else if (calendarData[i] === 1) td.classList.add("booked");
    else td.classList.add("available");

    td.addEventListener("click", () => showActivityInfo(i));

    row.appendChild(td);
  }
}

// Daily activity availability function
function showActivityInfo(index) {
  let info = document.getElementById("activityInfo");

  let status = calendarData[index];

  let statusText = "";
  if (status === 0) statusText = "No excursions available";
  else if (status === 1) statusText = "Fully booked";
  else statusText = "Available";

  const dayOfWeek = index % 7;

  let activities = "";

  if (status === 0) {
    activities = "None";
  } 
  else {
    const isWeekend = (dayOfWeek === 5 || dayOfWeek === 6 || dayOfWeek === 0); // Fri, Sat, Sun
    const isWeekday = (dayOfWeek >= 1 && dayOfWeek <= 5);

    if (isWeekend && isWeekday) {
      activities = "Both Available";
    } 
    else if (isWeekend) {
      activities = "Horseback Riding";
    } 
    else {
      activities = "Sheep Farm Experience";
    }
  }

  info.innerHTML = `
    <p><strong>Day ${index + 1}</strong></p>
    <p>Status: ${statusText}</p>
    <p>Activities: ${activities}</p>
  `;
}
