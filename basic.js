function welcome() {

}

function Add() {
    var distance;
    var timeest;
    distance = document.getElementById('dist').value;
    timeest = distance / 40;
    timeest = timeest * 60;
    document.getElementById('answ').innerText = "The Answer is (in mins):" + timeest;
}

function loadtestnames(){
    var  tnames = ['CBC','BSF&PP','LIPID PROFILE','LFT','RENAL FUNCTION TEST','CBC','BSF&PP','LIPID PROFILE','LFT','RENAL FUNCTION TEST','CBC','BSF&PP','LIPID PROFILE','LFT','RENAL FUNCTION TEST','CBC','BSF&PP','LIPID PROFILE','LFT','RENAL FUNCTION TEST'];
    for (let i = 0; i <= tnames.length-1; i++) {
       var tt = document.createElement('option');
        tt.textContent = tnames[i];
        tt.value = tnames[i];
        document.getElementById('testnames').appendChild(tt);
    }
}

function reversestring() {
var fullname;
var rfullname = "";
var i;
fullname = document.getElementById('dist').value;
fullname = fullname.split("")

for (i  = fullname.length - 1; i >= 0; i--) {
    rfullname += fullname[i];
}
document.getElementById('answ').innerText = rfullname;
document.getElementById('dist').value = "";
}