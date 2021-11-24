//Конструктор для создания объекта Gruppa со свойствами n, spec, kolich и методом add_stud
function Gruppa(n,spec,kolich) {
	this.n=n;
	this.spec=spec;
	this.kolich=kolich;
	//Метод (добавить в группу k студентов)
	this.add_stud=function add_stud(k) {
	this.kolich+=k;
	document.write('Вгруппу ' + this.n + ' добавили'+ k + ' студентов.<br\>');
	}
	}
	//Теперь