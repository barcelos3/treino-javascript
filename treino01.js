function contaLetras(palavra){
    let valorFinal = 0
    for (var i = 0; i < palavra.length; i++){
        valorFinal ++
    }
    return 'A palavra/nome ' + palavra + ' possuí ' + valorFinal + ' letras.'
}

console.log(contaLetras('batatinha'))


