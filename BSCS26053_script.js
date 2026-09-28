window.onload = function () {
  alert("Welcome to APERTURE!");


  var yearSpot = document.getElementById("year");


  if (yearSpot) {
    yearSpot.innerHTML = new Date().getFullYear();
  }
};

function checkAvailability(stockId, message) {
  document.getElementById(stockId).innerHTML = message;
}