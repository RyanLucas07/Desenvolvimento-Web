var numero1 = document.getElementById('n1')
var numero2 = document.getElementById('n2')

function comparaValores() {
    if(Number(numero1.value) === Number(numero2.value)){
        console.log(true)
    }
    else{
        console.log(false)
    }
}

function Somar() {
    var resultado = Number(numero1.value) + Number(numero2.value)
    var res = document.getElementById('resultado') 
    res.textContent = resultado
}