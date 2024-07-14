// Função sem parametros
function imprimirNome(){
    console.log('Fulano')
}

imprimirNome()

//Função com parametros
function comparaNumero(n1, n2){
    if(n1 === n2){
        console.log(true)
    }
    else{
        console.log(false)
    }
}
comparaNumero(5, 5 )

function imprimirNome(pessoa) {
    console.log(pessoa)
    console.log(pessoa.nome)
}

var pessoa = {
    nome: 'fulano'
}

imprimirNome(pessoa)