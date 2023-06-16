function temperature() {
    var celsius = document.getElementById("c").value;
    var fahrenheit = (celsius * 9/5) + 32
    document.getElementById("f").value = fahrenheit
}

function weight() {
  var kilograms = document.getElementById("kg").value;
  var pounds = kilograms * 2.2
  document.getElementById("lbs").value = pounds
}
