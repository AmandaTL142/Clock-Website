/*
var today = new Date();
var minutes = today.getMinutes()
if (minutes.length === 1){
    var minutesString = minutes.toString()
    var minutes = '0' + minutesString
}
var time = today.getHours() + ":" + minutes

document.write(time);

 */
/*
var firstPlace;
var secondPlace;
var thirdPlace;
var fourthPlace;

var today = new Date();
var hours = today.getHours()
if (hours.length === 1){
    firstPlace = 0;
    secondPlace = hours;
} else {
    firstPlace = hours[0]
    secondPlace = hours[1]
}

var minutes = today.getMinutes()
if (minutes.length === 1){
    thirdPlace = 0;
    fourthPlace = minutes;
} else {
    thirdPlace = minutes[0]
    fourthPlace = minutes[1]
}

 */

var firstPlace;
var secondPlace;
var thirdPlace;
var fourthPlace;

var today = new Date();
var hours = today.getHours()
if (hours.length === 1){
    numberToPicture(0, 1)
    secondPlace = hours;
    numberToPicture(secondPlace, 2)

} else {
    firstPlace = hours[0]
    secondPlace = hours[1]
    numberToPicture(firstPlace, 1)
    numberToPicture(secondPlace, 2)
}

var minutes = today.getMinutes()
if (minutes.length === 1){
    numberToPicture(0, 3)
    fourthPlace = minutes;
    numberToPicture(fourthPlace, 4)
} else {
    thirdPlace = minutes[0]
    fourthPlace = minutes[1]
    numberToPicture(thirdPlace, 3)
    numberToPicture(fourthPlace, 4)
}

function numberToPicture(number, id) {
    switch (number){
        case 0:
            document.getElementById(id).src='/images/Zero.png';
            break;
        case 1:
            document.getElementById(id).src='images/One.png';
            break;
        case 2:
            document.getElementById(id).src='images/Two.jpg';
            break;
        case 3:
            document.getElementById(id).src='images/Three.png';
            break;
        case 4:
            document.getElementById(id).src='images/Four.png';
            break;
        case 5:
            document.getElementById(id).src='images/Five.jpg';
            break;
        case 6:
            document.getElementById(id).src='images/Six.jpg';
        case 7:
            document.getElementById(id).src='images/Seven2.jpg';
            break;
        case 8:
            document.getElementById(id).src='images/Eight.png';
            break;
        case 9:
            document.getElementById(id).src='images/Nine2.png';
            break;
    }
}

