function init(){
    var canvas = document.querySelector('canvas');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var c = canvas.getContext('2d');

    c.fillRect(0,0,5,5);
}

window.onload = init;