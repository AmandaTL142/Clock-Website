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
    display_image('/Users/amandatolstruplaursen/Clock Website/images/Zero.png',
        276,
        110);
    secondPlace = hours;
    numberToPicture(secondPlace)

} else {
    firstPlace = hours[0]
    secondPlace = hours[1]
    numberToPicture(firstPlace)
    numberToPicture(secondPlace)
}

var minutes = today.getMinutes()
if (minutes.length === 1){
    display_image('/Users/amandatolstruplaursen/Clock Website/images/Zero.png',
        276,
        110);
    fourthPlace = minutes;
    numberToPicture(fourthPlace)
} else {
    thirdPlace = minutes[0]
    fourthPlace = minutes[1]
    numberToPicture(thirdPlace)
    numberToPicture(fourthPlace)
}

function numberToPicture(number) {
    switch (number){
        case 0:
            display_image('/Users/amandatolstruplaursen/Clock Website/images/Zero.png',
                276,
                110);;
            break;
        case 1:
            display_image('/Users/amandatolstruplaursen/Clock Website/images/One.png',
                276,
                110);;
            break;
        case 2:
            display_image('/Users/amandatolstruplaursen/Clock Website/images/Two.png',
                276,
                110);
            break;
        case 3:
            display_image('/Users/amandatolstruplaursen/Clock Website/images/Three.png',
                276,
                110);
            break;
        case 4:
            display_image('/Users/amandatolstruplaursen/Clock Website/images/Four.png',
                276,
                110);
            break;
        case 5:
            display_image('/Users/amandatolstruplaursen/Clock Website/images/Five.png',
                276,
                110);
            break;
        case 6:
            display_image('/Users/amandatolstruplaursen/Clock Website/images/Six.png',
                276,
                110);
        case 7:
            display_image('/Users/amandatolstruplaursen/Clock Website/images/Seven.png',
                276,
                110);
            break;
        case 8:
            display_image('/Users/amandatolstruplaursen/Clock Website/images/Eight.png',
                276,
                110);
            break;
        case 9:
            display_image('/Users/amandatolstruplaursen/Clock Website/images/Nine.png',
                276,
                110);
    }
}

