
createDivArray(16, 'black');
function createDivArray1(type) {
    let length = 16;
    if (type === 'clear') {
        length = prompt("Please enter number of squares", 16);
    }
    createDivArray(length, type);
}
function createDivArray(length, type) {
    //var container = document.getElementsByClassName('main-container');
    reset();
    createDivContet(length, type);

}
function createDivContet(length, type) {
    var container = document.createElement('div');
    container.id = 'container';
    container.className = 'container';
    var body = document.getElementsByTagName('body');
    body[0].appendChild(container);
    for (var i = 0; i < length; i++) {
        var main_container = document.createElement('div');
        main_container.id = 'container' + i;
        main_container.className = 'main-container';
        container.appendChild(main_container);
        for (var j = 0; j < length; j++) {
            var div1 = document.createElement('div');
            div1.id = 'child-container' + i + j;
            div1.className = 'items';
            div1.style.width = 500 / length + 'px'
            div1.style.height = 500 / length + 'px'
            div1.onmouseover = function () { changeColor(this, type) };
            main_container.appendChild(div1);
        }
    }
}
function rangeChange(color) {
    var slider = document.getElementById("myRange");
    length = parseInt(slider.value);
    createDivArray(color, length)
}
var rangeInput = document.getElementById("myRange");
var range = document.getElementById("myRange");
var rangeValue = document.getElementById("range-value");
rangeInput.addEventListener("change", function () {
    rangeInput.oninput = rangeOutput;
}, false);

function rangeOutput() {
    rangeValue.innerText = rangeInput.value + 'X' + rangeInput.value
}
function changeColor(element, type) {
    if (type === 'black' || type === 'clear')
        element.style.backgroundColor = getBlackColor();
    if (type === 'rainbow')
        element.style.backgroundColor = getRainbowColor();
    if (type === 'random')
        element.style.backgroundColor = getRandomColor();
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function getRainbowColor() {
    const colors = ['#9400D3', '#4B0082', '#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000'];
    const min = 1, max = 8;
    var rand1 = Math.floor(Math.random() * (max - min + 1)) + min;
    return colors[rand1]
}
function getBlackColor() {
    return 'black';
}
function reset() {
    var parent = document.getElementsByClassName('container');
    let index = 0;
    while (index < parent.length) {
        parent[index].remove();
        index++;
    }
}
function createDivArray2() {
    var parent = document.getElementsByClassName('items');
    for (var i = 0; i < parent.length; i++) {
        parent[i].style.backgroundColor = 'white';
    }
}