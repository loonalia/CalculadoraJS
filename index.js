const numero1Input = document.getElementById('numero1')
const operacao = document.getElementById('operacao')
const numero2Input = document.getElementById('numero2')
const resultado = document.getElementById('resultado')

function calcular () {
    const numero1 = parseFloat(numero1Input.value)
    const numero2 = parseFloat(numero2Input.value)
    const operador = operacao.value

    const calculo = [
        {
            "+": (a,b) => a + b
        }, {
            "-": (a,b) => a - b
        }, {
            "*": (a,b) => a * b
        }, {
            "/": (a,b) => a / b
        }
    ]
}