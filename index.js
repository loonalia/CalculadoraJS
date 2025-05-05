const numero1Input = document.getElementById('numero1Input')
const operacao = document.getElementById('operacao')
const numero2Input = document.getElementById('numero2Input')
const resultadoDiv = document.getElementById('resultadoDiv')

function calcular (event) {
    event.preventDefault()
    const numero1 = parseFloat(numero1Input.value)
    const numero2 = parseFloat(numero2Input.value)
    const operador = operacao.value

    const calculo = {
            "+": (a,b) => a + b,
            "-": (a,b) => a - b,
            "*": (a,b) => a * b,
            "/": (a,b) => {
                if (b === 0) {
                    return "Não é possível dividir por 0"
                } else {
                   return a / b
                }
            }
        }

    if (calculo[operador]) {
        const resultado = calculo[operador](numero1, numero2)
        resultadoDiv.innerHTML = `<p> Resultado: ${resultado} </p>`
    } else {
        resultadoDiv.innerHTML = '<p> Cálculo inválido </p>'
    }
    
}

function limparConteudo () {
    numero1Input.value = ""
    numero2Input.value = ""
    operacao.value = "+"
    resultadoDiv.innerHTML = ""
}