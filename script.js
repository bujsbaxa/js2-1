var str = +prompt('Введите ваш возраст')
if (str > 0 & str < 19) {
    var str2 = alert('Вы еще молоды , вам нужно учиться!')
} else if (str > 18 & str < 51 ) {
    var str3 = alert('Вам нужно работать!')
} else if (str > 50 & str < 60 ) {
    var str4 = alert('Вам скоро на пенсию!')
} else if (str > 59 & str < 101 ) {
    var str5 = alert('Вы пенсионер!')
} else {
    var str6 = alert('Что-то пошло не так!')
}


var a = +prompt('Write first number')
var b = +prompt('Write second number')
var c = +prompt('Write third number')

if (b < a && a < c || c < a && a < b ) {
    alert('Среднее число равно ' + a)
}else if (a < b && b < c || c < b && b < a ) {
    alert('Среднее число равно ' + b)
}else if (a < c && c < b || b < c && c < a ) {
    alert('Среднее число равно ' + c)
}
else {
    alert('error')
}




var time = +prompt('Введите число')
switch (true) {
    case (6 <= time && time <= 11):
        alert('Сейчас ' + time + ' часов утра');
        break;
    case (12 <= time && time <= 17):
        alert('Сейчас ' + time + ' часов дня');
        break;
    case (18 <= time && time <= 23):
        alert('Сейчас ' + time + ' часов вечера');
        break;
    case (5 <= time && time <= 24):
        alert('Сейчас ' + time + ' часа ночи');
        break;
    default:
        alert('error');
        break;
}
