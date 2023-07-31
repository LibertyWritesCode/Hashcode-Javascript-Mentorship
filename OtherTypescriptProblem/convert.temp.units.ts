/*
Write a TypeScript function that converts a temperature value from Celsius to Fahrenheit and vice versa.

Input:

A number representing the temperature value.
A string indicating the current unit of the temperature ('C' for Celsius or 'F' for Fahrenheit).

Output:

A number representing the converted temperature value.

*/

function temperatureConverter(temperature: number, unit: string): number {
    if (unit === 'C') {
      // Celsius to Fahrenheit conversion formula: (°C × 9/5) + 32
      return (temperature * 9/5) + 32;
    } else if (unit === 'F') {
      // Fahrenheit to Celsius conversion formula: (°F - 32) × 5/9
      return (temperature - 32) * 5/9;
    } else {
      throw new Error("Invalid unit. Only 'C' (Celsius) or 'F' (Fahrenheit) are allowed.");
    }
  }
  
  // Test the function
  const celsiusValue = 30;
  const fahrenheitValue = temperatureConverter(celsiusValue, 'C');
  console.log(fahrenheitValue); // Output: 86 (30 degrees Celsius is equal to 86 degrees Fahrenheit)
  
  const fahrenheitValue2 = 86;
  const celsiusValue2 = temperatureConverter(fahrenheitValue2, 'F');
  console.log(celsiusValue2); // Output: 30 (86 degrees Fahrenheit is equal to 30 degrees Celsius)
  