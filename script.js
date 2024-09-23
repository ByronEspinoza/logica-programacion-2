function convertirTemperatura() {
    let celsius = document.getElementById('celsiusInput').value;
    
    
    if (isNaN(celsius) || celsius === "") {
        alert("Por favor ingrese un número válido.");
        return; 
    }

 
    celsius = Number(celsius);

  
    let fahrenheit = (celsius * 9/5) + 32;
    let kelvin = celsius + 273.15;

    
    document.getElementById('resultado').innerHTML = 
        `Grados Fahrenheit: ${fahrenheit.toFixed(2)}<br>Grados Kelvin: ${kelvin.toFixed(2)}`;
}