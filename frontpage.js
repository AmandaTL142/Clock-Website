var firstPlace;
var secondPlace;
var thirdPlace;
var fourthPlace;
var randomNumber;

var today = new Date();

//Timer omsættes til billeder
var hours = today.getHours()

//Hvis timer kun har ét digit, kører denne kode
if (hours.toString().length === 1){
    randomNumber = Math.floor(Math.random() * 2)        //Et tal mellem 0 og 1 findes, så ét af to billeder kan vælges tilfældigt
    numberToPicture(0, 1, randomNumber)
    secondPlace = hours;
    randomNumber = Math.floor(Math.random() * 2)
    numberToPicture(secondPlace, 2, randomNumber)

}
//Hvis timer har to digits, kører denne kode
else {
    firstPlace = String(hours)[0]
    secondPlace = String(hours)[1]
    randomNumber = Math.floor(Math.random() * 2)
    numberToPicture(Number(firstPlace), 1, randomNumber)
    randomNumber = Math.floor(Math.random() * 2)
    numberToPicture(Number(secondPlace), 2, randomNumber)
}


//Minutter omsættes til billeder
var minutes = today.getMinutes()

//Hvis timer kun har ét digit, kører denne kode
if (minutes.toString().length === 1){
    randomNumber = Math.floor(Math.random() * 2)
    numberToPicture(0, 3, randomNumber)
    fourthPlace = minutes;
    randomNumber = Math.floor(Math.random() * 2)
    numberToPicture(fourthPlace, 4, randomNumber)
}
//Hvis timer har to digits, kører denne kode
else {
    thirdPlace = String(minutes)[0]
    fourthPlace = String(minutes)[1]
    randomNumber = Math.floor(Math.random() * 2)
    numberToPicture(Number(thirdPlace), 3, randomNumber)
    randomNumber = Math.floor(Math.random() * 2)
    numberToPicture(Number(fourthPlace), 4, randomNumber)
}


//Denne funktion finder et billede, der passer med det nummer, der inputtes som parameter, og placerer dette billede på HTML-siden baseret på ID. Der vælges mellem to mulige billeder vha. randomNumber.
function numberToPicture(number, id, randomNumber) {
    switch (number){
        case 0:
            if (randomNumber===0){
                document.getElementById(id).src='images/Zero.png';
            } else{
                document.getElementById(id).src='images/Zero2.webp';
            }
            break;
        case 1:
            if (randomNumber===0) {
                document.getElementById(id).src = 'images/One.png';
            }else{
                document.getElementById(id).src = 'images/One2.png';
            }
            break;
        case 2:
            if (randomNumber===0) {
                    document.getElementById(id).src = 'images/Two.jpg';
                }else{
                    document.getElementById(id).src = 'images/Two2.jpg';
                }
            break;
        case 3:
            if (randomNumber===0){
                document.getElementById(id).src='images/Three.png';
            }else{
                document.getElementById(id).src='images/Three2.png';
            }
            break;
        case 4:
            if (randomNumber===0){
                document.getElementById(id).src='images/Four.png';
            }else{
                document.getElementById(id).src='images/Four2.png';
            }
            break;
        case 5:
            if (randomNumber===0){
                document.getElementById(id).src='images/Five.jpg';
            }else{
                document.getElementById(id).src='images/Five2.webp';
            }
            break;
        case 6:
            if (randomNumber===0){
                document.getElementById(id).src='images/Six.jpg';
            }else{
                document.getElementById(id).src='images/Six2.png';
            }
            break;
        case 7:
            if (randomNumber===0){
                document.getElementById(id).src='images/Seven.webp';
            }else{
                document.getElementById(id).src='images/Seven2.jpg';
            }
            break;
        case 8:
            if (randomNumber===0){
                document.getElementById(id).src='images/Eight.png';
            }else{
                document.getElementById(id).src='images/Eight2.jpg';
            }
            break;
        case 9:
            if (randomNumber===0){
                document.getElementById(id).src='images/Nine.webp';
            }else{
                document.getElementById(id).src='images/Nine2.png';
            }
            break;
    }
}

