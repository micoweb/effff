// TIME
let today = new Date();
let curHr = today.getHours();
let time = null;

if (curHr < 12) {
    time = "Morning";
}
else if (curHr < 14) {
    time = "Afternoon";
}
else {
    time = "Evening";
}

document.querySelector('#time').innerHTML = "Good " + time;

// TIME //

function f1() {
    document.querySelector('#pic3').style.marginTop = '10px';
    document.querySelector('#pic4').style.marginTop = '10px';

    document.querySelector('#pic4').style.marginBottom = '-25%';

    document.querySelector('#pic4').style.zIndex = '16';

    document.querySelector('#pic2').style.borderRadius = '0px';
    document.querySelector('#pic3').style.borderRadius = '0px';
    document.querySelector('#pic4').style.borderRadius = '0px';
}
function exitF1() {
    document.querySelector('#pic3').style.marginTop = '-15%';
    document.querySelector('#pic4').style.marginTop = '-10%';

    document.querySelector('#pic4').style.marginBottom = '0%';

    document.querySelector('#pic4').style.zIndex = '10';

    document.querySelector('#pic2').style.borderRadius = '30px';
    document.querySelector('#pic3').style.borderRadius = '30px';
    document.querySelector('#pic4').style.borderRadius = '30px';
}

function f2() {
    document.querySelector('#pic6').style.marginTop = '10px';

    document.querySelector('#pic6').style.marginBottom = '-15%';

    document.querySelector('#pic5').style.borderRadius = '0px';
    document.querySelector('#pic6').style.borderRadius = '0px';
}
function exitF2() {
    document.querySelector('#pic6').style.marginTop = '-15%';

    document.querySelector('#pic6').style.marginBottom = '0%';

    document.querySelector('#pic5').style.borderRadius = '30px';
    document.querySelector('#pic6').style.borderRadius = '30px';
}

function f3() {
    document.querySelector('#pic8').style.marginTop = '0px';
    document.querySelector('#pic9').style.marginTop = '0px';

    document.querySelector('#pic8').style.marginLeft = '0%';
    document.querySelector('#pic9').style.marginLeft = '0%';
    
    document.querySelector('#pic9').style.marginBottom = '-43%';

    document.querySelector('#pic7').style.borderRadius = '0px';
    document.querySelector('#pic8').style.borderRadius = '0px';
    document.querySelector('#pic9').style.borderRadius = '0px';
}
function exitF3() {
    document.querySelector('#pic8').style.marginTop = '-20%';
    document.querySelector('#pic9').style.marginTop = '-23%';

    document.querySelector('#pic8').style.marginLeft = '2%';
    document.querySelector('#pic9').style.marginLeft = '5%';

    document.querySelector('#pic9').style.marginBottom = '0%';

    document.querySelector('#pic7').style.borderRadius = '30px';
    document.querySelector('#pic8').style.borderRadius = '30px';
    document.querySelector('#pic9').style.borderRadius = '30px';
}

const radio1 = document.getElementById('hL1Radio');
const radio2 = document.getElementById('hL2Radio');

function check1(){
radio1.checked = true;
radio2.checked = false;
document.querySelector('#hotelList1').style.display = 'block';
document.querySelector('#hotelList2').style.display = 'none';
}

function check2(){
radio1.checked = false;
radio2.checked = true;
document.querySelector('#hotelList1').style.display = 'none';
document.querySelector('#hotelList2').style.display = 'block';
}