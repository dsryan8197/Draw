// select the elements on the page - canvas, shake button

const canvas = document.querySelector('#etch-a-sketch');

//setup our canvas for drawing
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 40;

//write draw funciton
const { width, height } = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
//create random x y starting points


ctx.lineJoin = 'round';
ctx.lineCap = 'round'; //make shape
ctx.lineWidth = 60; // makes size

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath(); // start drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();


//make a draw function
function draw({ key }) {
    //increment hue
    hue = hue + 5;
    ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
    console.log(key)
    //start path
    ctx.beginPath();
    ctx.moveTo(x, y);
    // move our x and y depends on user
    switch (key) {
        case 'ArrowDown':
            y = y + MOVE_AMOUNT;
                break;
        case 'ArrowRight':
            x = x + MOVE_AMOUNT;
                  break;
        case 'ArrowLeft':
            x = x - MOVE_AMOUNT;
                break;
        case 'ArrowUp':
            y = y - MOVE_AMOUNT;
                break;
    }
    ctx.lineTo(x,y);
    ctx.stroke();
}
//write a handler for keys
function handleKey(e) {
   if (e.key.includes('Arrow')) {
      e.preventDefault();
      draw({ key: e.key })
  
   }
}

//clear shaeke function
function clearCanvas() {
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener('animationend', function(){
        canvas.classList.remove('shake');
    }); { once: true }
}

//listen for arrow keys
window.addEventListener('keydown', handleKey)
shakebutton.addEventListener('click', clearCanvas);