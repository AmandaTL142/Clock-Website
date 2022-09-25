var today = new Date();
var minutes = today.getMinutes()
if (minutes.length === 1){
    var minutesString = minutes.toString()
    var finalString = '0' + minutesString
    minutes = Number(finalString)
}
var time = today.getHours() + ":" + minutes

document.write(time);