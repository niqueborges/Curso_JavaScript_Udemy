
const colors =['Red', 'Blue', 'Yellow', 'Purple', 'Green'];
const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    document.body.style.background = colors[4];
});