window.onload = function() {
document.getElementById("start-button").onclick = startButton;
document.getElementById("stop-button").onclick = stopButton;

function startButton() {
var firstcard = document.getElementById("firstcard");
firstcard.className += " firstcard";
var secondcard = document.getElementById("secondcard");
secondcard.className += " secondcard";
var thridcard = document.getElementById("thridcard");
thridcard.className += " thridcard";
var fourthcard = document.getElementById("fourthcard");
fourthcard.className += " fourthcard";
}
}

function stopButton(){
var firstcard = document.getElementById("firstcard");
firstcard.classList.remove("firstcard");
var secondcard = document.getElementById("secondcard");
secondcard.classList.remove("secondcard");
var thridcard = document.getElementById("thridcard");
thridcard.classList.remove("thridcard");
var fourthcard = document.getElementById("fourthcard");
fourthcard.classList.remove("fourthcard");
}
