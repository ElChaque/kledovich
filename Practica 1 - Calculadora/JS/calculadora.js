const form = document.querySelector('form');

function sumatoria() {
    const valor1 = parseFloat(document.getElementById("Valor 1").value);
    const valor2 = parseFloat(document.getElementById("Valor 2").value);
    const resultado = valor1 + valor2;
    document.getElementById("resultado").textContent = resultado;
}
form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    sumatoria(); 
});





