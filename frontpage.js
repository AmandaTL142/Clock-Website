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
    document.getElementById(1).src='/Users/amandatolstruplaursen/Clock Website/images/Zero.png';
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
    document.getElementById(3).src='/Users/amandatolstruplaursen/Clock Website/images/Zero.png';
    fourthPlace = minutes;
    numberToPicture(fourthPlace, 4)
} else {
    thirdPlace = minutes[0]
    fourthPlace = minutes[1]
    numberToPicture(thirdPlace, 3)
    numberToPicture(fourthPlace, 4)
}

function numberToPicture(number) {
    switch (number, id){
        case 0:
            document.getElementById(id).src='/Users/amandatolstruplaursen/Clock Website/images/Zero.png';
            break;
        case 1:
            document.getElementById(id).src='/Users/amandatolstruplaursen/Clock Website/images/One.png';
            break;
        case 2:
            document.getElementById(id).src='/Users/amandatolstruplaursen/Clock Website/images/Two.png';
            break;
        case 3:
            document.getElementById(id).src='/Users/amandatolstruplaursen/Clock Website/images/Three.png';
            break;
        case 4:
            document.getElementById(id).src='/Users/amandatolstruplaursen/Clock Website/images/Four.png';
            break;
        case 5:
            document.getElementById(id).src='/Users/amandatolstruplaursen/Clock Website/images/Five.png';
            break;
        case 6:
            document.getElementById(id).src='/Users/amandatolstruplaursen/Clock Website/images/Six.png';
        case 7:
            document.getElementById(id).src='/Users/amandatolstruplaursen/Clock Website/images/Seven.png';
            break;
        case 8:
            document.getElementById(id).src='/Users/amandatolstruplaursen/Clock Website/images/Eight.png';
            break;
        case 9:
            document.getElementById(id).src='/Users/amandatolstruplaursen/Clock Website/images/Nine.png';
            break;
    }
}

