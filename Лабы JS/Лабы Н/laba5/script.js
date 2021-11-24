"use strict";

function Task1() {
	let tagsLength = document.all.length,
	allTags = new Array();
	for (let tag = 0; tag <= tagsLength; tag++) {
		allTags[tag] = document.all[tag];
	}
	for (let tagOut = 0; tagOut <= tagsLength; tagOut++) {
		document.write(allTags[tagOut].tagName + ", номер в массиве all: " + tagOut + ";<br\>")
	}
}

function Task2() {
	let bodyChildren = document.body.childNodes,
	bodyChildrenArray = new Array();
	for (let child = 0; child <= bodyChildren.length; child++) {
			bodyChildrenArray[child] = bodyChildren[child];
	}
	for (let child = 0; child <= bodyChildren.length; child++) {
		if (bodyChildrenArray[child].nodeType != 3) {
			document.write(bodyChildrenArray[child].tagName + "<br\>")
		}
	}
}

function Task31() {
	alert(document.all[9].innerHTML);
}
function Task32() {
	alert(document.getElementsByTagName("span")[0].innerHTML);
}

function Task33() {
	alert(document.getElementById("span").innerHTML);
}

function Task4() {
	let gradeIndex,
	grade = 0;
	for (let count = 0; count <= 4; count++) {
		gradeIndex = count * 2 + 1;
		grade = grade + parseInt(document.getElementsByTagName("td")[gradeIndex].innerHTML, 10);
	}
	alert("Средний балл: " + grade / 5);
	document.getElementsByTagName("span")[1].innerHTML = grade / 5;
}