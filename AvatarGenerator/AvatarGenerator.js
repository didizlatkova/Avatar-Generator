function resetButtons(){
    document.getElementById("stop").disabled = true;
    document.getElementById("start").disabled = false;
}

var selectedGender="Male";
function onGenderChange() {
    stopTimer();
    resetButtons();
    document.getElementById("color").style.display = 'none';
    document.getElementById("avatar").style.backgroundColor = 'transparent';
    document.getElementById("avatar").src = "Images/avatar.png";
    var select = document.getElementById("gender-select");
    selectedGender = select.options[select.selectedIndex].value;

}

function getColorPart() {
    var value = Math.floor(Math.random() * 256);
    var hex = value.toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
}

function changeBodyColor() {
    var red = getColorPart();
    var green = getColorPart();
    var blue = getColorPart();
    var color = "#" + red + green + blue;
    var img = document.getElementById("avatar");
    img.style.backgroundColor = color;
}

var timer;
function startTimer() {
    document.getElementById("avatar").style.backgroundColor = 'transparent';
    document.getElementById("color").style.display = 'none';
    timer = setInterval(setAvatar, 50);
    document.getElementById("stop").disabled = false;
    document.getElementById("start").disabled = true;
}
function stopTimer() {
    document.getElementById("color").style.display = 'block';
    clearInterval(timer);
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
}
function setAvatar() {
    var randomNumber = Math.floor(Math.random() * 20);
    document.getElementById("avatar").src = "Images/"+selectedGender+"/avatar" + randomNumber+ ".png";
}