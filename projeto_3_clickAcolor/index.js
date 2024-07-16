
const colors =['Red', 'Blue', 'Yellow', 'Purple', 'Green'];
const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    document.body.style.background = colors[4];
    const randomColor = getRandomColor();
   // console.log(randomColor);
});

function getRandomColor() {
    return Math.floor(Math.random() * colors.length);
}