  function temperature() {
    var celsius = document.getElementById("c").value;
    var fahrenheit = (celsius * 9/5) + 32
    document.getElementById("f").value = fahrenheit
}
