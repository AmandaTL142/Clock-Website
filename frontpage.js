var today = new Date();
var minutes = today.getMinutes()
if (minutes.length === 1){
    var minutesString = minutes.toString()
    var minutes = '0' + minutesString
}
var time = today.getHours() + ":" + minutes

document.write(time);