//just a circle on canvas
let canvas = document.querySelector(`canvas`);

function resizeCanvas() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();

window.addEventListener('resize', resizeCanvas);

//circle class
class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor //is it redundant if also specified in "draw" method?
    }
    draw(x, y, r, startAngle, endAngle, fillColor) {
        let ctx = canvas.getContext(`2d`);
        ctx.beginPath();
        ctx.arc(x, y, r, startAngle, endAngle, fillColor);
        ctx.fillStyle = fillColor;
        ctx.fill();
    }
}

const c1 = new Circle();
c1.draw(50, 50, 20, 0, 2 * Math.PI, 'pink');
const c2 = new Circle();
c2.draw(50, 100, 20, 0, 2 * Math.PI, 'red');
const c3 = new Circle();
c3.draw(150, 300, 20, 0, 2 * Math.PI, 'purple');

//Art part!
function drawRandomCircle() {
    let newCircle = new Circle();
    let randomX = (Math.random() * window.innerWidth);
    let randomY = (Math.random() * window.innerHeight);
    let randomR = (Math.random() * (Math.random() *150));
    let randomColor = "#" +  Math.floor(Math.random()*0xFFFFFF).toString(16);
    newCircle.draw(randomX, randomY, randomR, 0, 2 * Math.PI, randomColor);
}

setInterval(() => drawRandomCircle(), 100);