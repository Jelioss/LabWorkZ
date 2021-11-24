"use strict";
function Gruppa(n, spec, kolich, kurs) {
	this.n = n;
	this.spec = spec;
	this.kolich = kolich;
	this.kurs = kurs;
	this.add_stud = function add_stud(k) {
		this.kolich += k;
		document.write("В группу " + this.n + " добавили "+ k + " студентов.<br\>");
	}
	this.sub_stud = function add_stud(k) {
		this.kolich -= k;
		document.write("Из группы " + this.n + " исключили "+ k + " студентов.<br\>");
	}
	this.stats = function stats() {
		document.write("Группа " + this.n + " (" + this.spec + ", курс " + this.kurs + "), студентов в группе: " + this.kolich + ".<br\>");
	}
}
function Student(name, surname, phys, math, it) {
	this.name = name;
	this.surname = surname;
	this.phys = phys;
	this.math = math;
	this.it = it;
	this.showName = function showName() {
		alert("Имя, фамилия студента: " + this.name + " " + this.surname);
	}
	this.grade = function grade() {
		document.write((this.phys + this.math + this.it) / 3);
	}
	this.stats = function stats() {
		document.write("Имя, фамилия студента: " + this.name + " " + this.surname, ", средняя оценка студента: " + ((this.phys + this.math + this.it) / 3) + ".<br\>");
	}
}

var gr1 = new Gruppa(1, "ИСиТ", 25, 1),
gr2 = new Gruppa(4, "ПОИТ", 28, 2),
gr3 = new Gruppa(7, "ПОиБМС", 32, 1),
gr4 = new Gruppa(10, "ДЭиВИ", 23, 3);

function Task1() {
	gr1.add_stud(3);
	gr2.add_stud(1);
	gr3.sub_stud(8);
	gr4.sub_stud(15);
	gr1.stats();
	gr2.stats();
	gr3.stats();
	gr4.stats();
}

var student1 = new Student("Jason", "Newsted", 10, 4, 4);
var student2 = new Student("Chuck", "Schuldiner", 9, 8, 7);
var student3 = new Student("Tony", "Iommi", 6, 8, 9);

function Task2Name1() {
	student1.showName();
}
function Task2Grade1() {
	student1.grade();
}
function Task2Name2() {
	student2.showName();
}
function Task2Grade2() {
	student2.grade();
}
function Task2Name3() {
	student3.showName();
}
function Task2Grade3() {
	student3.grade();
}
function Task2Stats1() {
	student1.stats();
	student2.stats();
	student3.stats();
}
Student.prototype.courseWork = this.courseWork;
Student.prototype.courseWorkStats = function courseWorkStats() {
	document.write("Курсовая работа: " + this.courseWork + ".<br\>");
}
function Task2Stats2() {
	student1.courseWork = "Пересдача";
	student2.courseWork = "Сдана";
	student3.courseWork = "Сдана";
	student1.stats();
	student1.courseWorkStats()
	student2.stats();
	student2.courseWorkStats()
	student3.stats();
	student3.courseWorkStats()
}

var array = new Array();
array[0] = 6 + Math.pow(Math.PI, 2) + 3 * Math.exp(8);
array[1] = 2 * Math.cos(4) + Math.cos(12) + 8 * Math.exp(3);
array[2] = 3 * Math.sin(9) + Math.log(5) + Math.sqrt(3);
array[3] = 2 * Math.tan(5) + 6 * Math.PI + Math.sqrt(12);
var string = "Володькин Никифор Дмитриевич";                   // Строковый примитив
var actualString = new String("Володькин Никифор Дмитриевич"); // Объект String

function Task3Delete() {
	document.write("Первоначальный массив: " + array + "<br\>");
	delete array[3];
	document.write("Полученный массив: " + array + "<br\>");
}
function Task3In() {
	if (1 in array) {
		document.write("В массиве есть 2й элемент.<br\>");
	}
	else {
		document.write("В массиве нету 2го элемента.<br\>");
	}
	if ("n" in gr1) {
		document.write("В объекте gr1 есть свойство n.<br\>");
	}
	else {
		document.write("В объекте gr1 нет свойства n.<br\>");
	}
	if ("n" in student1) {
		document.write("В объекте student1 есть свойство n.<br\>");
	}
	else {
		document.write("В объекте student1 нет свойства n.<br\>");
	}
}
function Task3Instanceof() {
	let object,
	objectName;
	for (let count = 1; count <= 4; count++) {
		switch(count) {
			case 1:
			object = gr1;
			objectName = "gr1 ";
			break;
			case 2:
			object = array;
			objectName = "array ";
			break;
			case 3:
			object = string;
			objectName = "string ";
			break;
			case 4:
			object = actualString;
			objectName = "actualString ";
			break;
		}
		if (object instanceof Array) {
			document.write(objectName + "является Array.<br\>")
		}
		else {
			document.write(objectName + "не является Array.<br\>")
		}
		if (object instanceof String) {
			document.write(objectName + "является String.<br\>")
		}
		else {
			document.write(objectName + "не является String.<br\>")
		}
		if (object instanceof Object) {
			document.write(objectName + "является Object.<br\>")
		}
		else {
			document.write(objectName + "не является Object.<br\>")
		}
	}
}
function functionThatReturns5() {
	return 5;
}
function Task3Typeof() {
	document.write("gr1 - " + (typeof gr1) + "<br\>");
	document.write("array - " + (typeof array) + "<br\>");
	document.write("string - " + (typeof string) + "<br\>");
	document.write("actualString - " + (typeof actualString) + "<br\>");
	document.write("functionThatReturns5 - " + (typeof functionThatReturns5) + "<br\>");
}