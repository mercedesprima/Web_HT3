const celsius = Number.parseFloat(prompt("Введите температуру в градусах Цельсия: "));
fahrenheit = Math.round (((9 / 5) * celsius + 32) * 10) / 10
alert(`Температура ${celsius} °C = ${fahrenheit} °F`)
