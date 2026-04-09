//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    // tot_temperature_in_fahrenheit,
    // tot_temperature_in_celsius,
    // avg_temperature_in_fahrenheit,
    // avg_temperature_in_celsius
};

// Data: 32°F, 25°C, 70°F, 18°C, 80°F, 15°C, 72°F, 28°C, 68°F, 20°C, 75°F, 23°C, 82°F, 30°C, 65°F, 22°C, 77°F, 26°C, 78°F, 24°C, 
// 73°F, 21°C, 79°F, 27°C, 71°F, 19°C, 74°F, 17°C, 76°F, 29°C



const dayTemperatures = {
    day1TempF: 32,
    day2TempC: 25,
    day3TempF: 70,
    day4TempC: 18,
    day5TempF: 80,
    day6TempC: 15,
    day7TempF: 72,
    day8TempC: 28,
    day9TempF: 68,
    day10TempC: 20,
    day11TempF: 75,
    day12TempC: 23,
    day13TempF: 82,
    day14TempC: 30,
    day15TempF: 65,
    day16TempC: 22,
    day17TempF: 77,
    day18TempC: 26,
    day19TempF: 78,
    day20TempC: 24,
    day21TempF: 73,
    day22TempC: 21,
    day23TempF: 79,
    day24TempC: 27,
    day25TempF: 71,
    day26TempC: 19,
    day27TempF: 74,
    day28TempC: 17,
    day29TempF: 76,
    day30TempC: 29,
};

let sum = 0;

const daysInFahrenheit = 0;
if (dayTemperatures.value % 2 === 0) {
    return dayTemperatures(Fahrenheit - 32) * 5 / 9;
}

console.log(daysInFahrenheit);

for (let i = 0; i < dayTemperatures.length; i++) {
    return sum += dayTemperatures.value;
}
