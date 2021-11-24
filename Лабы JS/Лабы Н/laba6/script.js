"use strict";
var window1, window2, window3;
function Task11() {
	window1 = window.open("", "popup1", "popup, width=600, height=400, left=200, top=400");
	window2 = window.open("", "popup2", "popup, width=400, height=800, left=1200, top=100");
	window3 = window.open("", "popup3", "popup, width=600, height=400, left=800, top=600");
}
function Task12() {
	window1.close();
	window2.close();
	window3.close();
}
function Task13() {
	window1.document.write("Имя данного окна: " + window1.name);
	window2.document.write("Имя данного окна: " + window2.name);
	window3.document.write("Имя данного окна: " + window3.name);
}

function Task2() {
	let tdShort = '<td style = "border: 1px solid black; width: 96px">',
	tdLong = '<td style = "border: 1px solid black; width: 192px">',
	text,
	value;
	document.write('<table style = "border: 2px solid black; border-collapse: collapse; text-align: center; margin: auto">');
	for (let counter = 0; counter <= 12; counter++) {
		switch(counter) {
			case 0:
			text = "Свойство";
			value = "Значение";
			break;
			case 1:
			text = "navigator.userAgent";
			value = navigator.userAgent;
			break;
			case 2:
			text = "navigator.appVersion";
			value = navigator.appVersion;
			break;
			case 3:
			text = "navigator.appName";
			value = navigator.appName;
			break;
			case 4:
			text = "navigator.appCodeName";
			value = navigator.appCodeName;
			break;
			case 5:
			text = "navigator.platform";
			value = navigator.platform;
			break;
			case 6:
			text = "navigator.javaEnabled()";
			value = navigator.javaEnabled();
			break;
			case 7:
			text = "screen.width";
			value = screen.width;
			break;
			case 8:
			text = "screen.height";
			value = screen.height;
			break;
			case 9:
			text = "screen.colorDepth";
			value = screen.colorDepth;
			break;
			case 10:
			text = "history.length";
			value = history.length;
			break;
			case 11:
			text = "location.href";
			value = location.href;
			break;
			case 12:
			text = "location.pathname";
			value = location.pathname;
			break;
			case 13:
			text = "location.host";
			value = location.host;
			break;
		}
		document.write("<tr>");
		document.write(tdShort + text);
		document.write(tdLong + value);
	}
}