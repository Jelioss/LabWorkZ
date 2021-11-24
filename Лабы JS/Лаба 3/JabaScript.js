"use strict"
function Task1() {
let array = [];
	array[0] = 6 + Math.pow(Math.PI, 2) + 3 * Math.exp(8);
	array[1] = 2 * Math.cos(4) + Math.cos(12) + 8 * Math.exp(3);
	array[2] = 3 * Math.sin(9) + Math.log(5) + Math.sqrt(3);
	array[3] = 2 * Math.tan(5) + 6 * Math.PI + Math.sqrt(12);	
let min = Math.min(...array),
	max = Math.max(...array),
	min_in = array.indexOf(min),
	max_in = array.indexOf(max);
document.write("Минимальное значение: ", min, "Номер в массиве:</p> ", min_in, "; максимальное значение: ", max, " Номер в массиве: ", max_in,);
}