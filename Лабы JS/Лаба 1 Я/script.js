//** Задание №1
"use strict";  
function fun1() {
    alert("Вас приветствует учебный центр")
}
function fun2() {
    let userName = prompt("Ваше имя?")
    alert(`Добро пожаловать на наши курсы, ${userName}`); //*Использовал интерполяцию (Способ соединения строк через вставку значений)
}
function fun3() {
    if (confirm("Хотите стать Web-дизайнером?")) {
        alert("Учите стили CSS и JavaScript!");
    } else {
        alert("Упускаете время!");
    } 
}
//** Задание №2
function fun4() {
    let x = 6;
    let y = 7;
    let z = x + y;
    document.write(z);
}
function fun5() {
    let x = "6";
    let y = "7";
    let z = x + y;
    document.write(z);
}
function fun6() {
    let x = 6;
    let y = "14";
    let z = x + y;
    document.write(z);
}
function fun7() {
    let y = "8";
    let x = 9;
    let z = x + y;
    document.write(z);
}
function fun8() {
    alert("Результатом сложения строки и числа всегда будет строка");
}
//** Задание №3
function fun9() {

    let x = -29;
    let y = -2;

    let ecuation1 = ((35 * y - 25 * x) / 5 + 232);
    alert("Результат первого выражения: " + ecuation1);

    let ecuation2 = ((8 * y / x + 5 * x / y - 43) * 6);
    alert("Результат второго выражения: " + ecuation2);

    let response = term1 % term2
    alert("Остаток от деления первого выражения на второе: " + response);
    document.write("Остаток от деления первого выражения на второе: ", + response);
}
//** Задание №4
function fun10() {
    let x = prompt('Введите число');
    if (x < 20 || (x > 40 && x != 15 && x % 5)) {
        alert("Правильное значение");
    }
    else {
        alert("Неправильное значение");
    }
}
//** Задание №5
function fun11() {
    let a = prompt("Введите число А");
    let b = prompt("Введите число Б");
    a = parseInt(a); //* Функция Parseint интерпритирует аргумент в число
    b = parseInt(b);
    let result = (a > b) ? alert("Число " + a + " больше числа " + b) : //*Тернарный оператор
        (a == b) ? alert("Число " + a + " равняется числу " + b) :
            (a < b) ? alert("Число " + a + " меньше числа " + b) :
                alert(result);
}
//** Задание №6
function fun12() {
    let day = new Date();
    let weekDay = day.getDay();
    switch (weekDay) {
        case 1:
            document.write("Понедельник");
            break;
        case 2:
            document.write("Вторник");
            break;
        case 3:
            document.write("Среда");
            break;
        case 4:
            document.write("Четверг");
            break;
        case 5:
            document.write("Пятница");
            break;
        case 6:
            document.write("Cуббота");
            break;
        case 7:
            document.write("Воскресенье");
            break;
    }
}
//** Задание №7
function fun13() {
    try {
        alert('Тест запущен');  // Сработает
        FalseError; // Ошибка
        alert('Тест завершен'); // Не сработает 
    }
    catch (warning) {
        alert('Ошибка ' + warning.name + ' : ' + warning.message); // Сработает 
    }
    alert("Закрытие теста"); // Сработает
}



