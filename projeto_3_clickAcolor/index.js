
const colors =['Red', 'black', 'Blue', 'Yellow', 'Purple', 'Green']; // Array com as cores
const btn = document.getElementById('btn'); // Botão
const color = document.querySelector('.color'); // Texto que exibe a cor

btn.addEventListener('click', function() { // Evento de click
    const randomColor = getRandomColor(); // Função que gera uma cor aleatória
    document.body.style.background = colors[randomColor]; // Altera a cor de fundo da página
   // console.log(randomColor);
   color.textContent = colors[randomColor]; // Altera o texto que exibe a cor
});

function getRandomColor() { // Função que gera uma cor aleatória
    return Math.floor(Math.random() * colors.length); // Retorna uma cor aleatória entre 0 e o tamanho do array
}