"use strict"
function Task1() {
let array = new Array;
	array[0] = 6 + Math.pow(Math.PI, 2) + 3 * Math.exp(8);
	array[1] = 2 * Math.cos(4) + Math.cos(12) + 8 * Math.exp(3);
	array[2] = 3 * Math.sin(9) + Math.log(5) + Math.sqrt(3);
	array[3] = 2 * Math.tan(5) + 6 * Math.PI + Math.sqrt(12);	
let min = Math.min(...array),
	max = Math.max(...array),
	min_in = array.indexOf(min),
	max_in = array.indexOf(max);
document.write("Минимальное значение: ", min, " Номер в массиве: ", min_in, "; максимальное значение: ", max, " Номер в массиве: ", max_in,);
}
function Task2() {
	let arrayB = 'pow,pop,push,shift,round,floor,slice,sort'.split(','),
	array_method = arrayB.filter((a) => Array.prototype.hasOwnProperty(a)),
	math_method = arrayB.filter((a) => Math.hasOwnProperty(a));
	array_method.unshift('unshift');
	math_method.push('exp');
	document.write("Первоначальный массив: ", arrayB, "Длина массива: ", arrayB.length, "; Методы array: ", array_method, "Длина массива: ", array_method.length, "; Методы math: ", math_method, " лина массива: ", math_method.length);
}
function Task3() {
	let string = "Хаменко Глеб",
	stringUppercase = string.toUpperCase(),
	stringLowercase = string.toLowerCase(),
	stringJoined = stringUppercase.concat(" ", stringLowercase),
	stringChanged = string.replace("Хаменко Глеб", "Х.Г.");
	document.write(string, ", длина строки: ", string.length, ", ", stringUppercase, ", ", stringLowercase, ", ", stringJoined, ", ", stringChanged);
}
function Task4() {
	let date = new Date(),
	tdShort = "<td style = 'width: 64px; height: 24px; border: 1px solid black; text-align: center;'>",
	tdLong = "<td style = 'width: 192px; height: 24px; border: 1px solid black; text-align: center;'>",
	text = "Год",
	value = date.getFullYear();
	document.write("<table style = 'width: 256px; height: 144px; border: 1px solid black; border-collapse: collapse; margin: 0 auto;'>");
	for (let row = 1; row <= 6; row++) {
		switch (row) {
			case 2:
			text = "Месяц";
			value = date.getMonth() + 1;
			break;
			case 3:
			text = "День";
			value = date.getDate();
			break;
			case 4:
			text = "Час";
			value = date.getHours();
			break;
			case 5:
			text = "Минута";
			value = date.getMinutes();
			break;
			case 6:
			text = "Секунда";
			value = date.getSeconds();
			break;
		}
		document.write("<tr>");
		document.write(tdLong + text);
		document.write(tdShort + value);
	}
}