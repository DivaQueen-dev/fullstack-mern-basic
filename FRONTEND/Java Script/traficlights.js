
function resetLights() {
    document.querySelector('.c1').style.backgroundColor = 'white';
    document.querySelector('.c2').style.backgroundColor = 'white';
    document.querySelector('.c3').style.backgroundColor = 'white';
}

function red() {
    resetLights();
    document.querySelector('.c1').style.backgroundColor = 'red';
}

function yellow() {
    resetLights();
    document.querySelector('.c2').style.backgroundColor = 'yellow';
}

function green() {
    resetLights();
    document.querySelector('.c3').style.backgroundColor = 'green';
}
