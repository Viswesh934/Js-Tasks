function changeColor(color) {
    var coloredBox = document.getElementById('box');
    coloredBox.style.backgroundColor = color;
}
btn1.addEventListener('click', function() { changeColor('red') });
btn2.addEventListener('click', function() { changeColor('green') });
btn3.addEventListener('click', function() { changeColor('blue') });
