const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//"c" stands for "context"
let c = canvas.getContext('2d');

var mouse = {
    x: undefined,
    y: undefined
}


var maxRadius = 40;
// var minRadius = 2;

var colorArray = [
    '#69306D',
    '#C20114',
    '#EB5160',
    '#235789',
    '#581F18'
]

window.addEventListener('mousemove',
    function(event) {
        // console.log(event);
        mouse.x = event.x;
        mouse.y = event.y;
    }
);


function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, radius, Math.PI * 2, false);
        // c.strokeStyle = "blue";
        // c.stroke();
        c.fillStyle = this.color;
        c.fill();
    }

    this.update = function () {

        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        // interactivity with the mouse
        if ( mouse.x - this.x < 50 && mouse.x - this.x > -50
            && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if (radius < maxRadius) {
                radius++;
            }
        } else if (radius > this.minRadius) {
            radius--;
        }

        this.draw();

    }
}


var circleArray = [];

for (var i = 0; i < 900; i++) {
    var radius = Math.random() * 3 + 1;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5);
    var dy = (Math.random() - 0.5);
    circleArray.push(new Circle(x, y, dx, dy, radius));
    var circle = new Circle(200, 200, 3, 3, 30);

}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }

}

animate();






changeBg = function () {
    var bgbtn = document.getElementById("bg-btn");
    let bgA = Math.random() * 255;
    let bgB = Math.random() * 255;
    let bgC = Math.random() * 255;
    bgbtn.style.background = `rgb(${bgA}, ${bgB}, ${bgC})`;

    var can = document.getElementById("the-canvas");

    let bg1 = Math.random() * 255;
    let bg2 = Math.random() * 255;
    let bg3 = Math.random() * 255;
    let bg4 = Math.random() * 255;
    let bg5 = Math.random() * 255;
    let bg6 = Math.random() * 255;

    can.style.background = `radial-gradient(rgb(${bg1}, ${bg2}, ${bg3}), rgb(${bg4}, ${bg5}, ${bg6}))`;
}

