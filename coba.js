function convertCelciusToFarenheit(temperature) {
    const calculateTemperature = 9 / 5 * temperature + 32;
    return calculateTemperature;
}

console.log(convertCelciusToFarenheit(50))