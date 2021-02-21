// Organizador de dados
var lista = ['Diego', 31, 'Renata', -64, 10, -50, 'Batatinha', 'Jeremias', 100, -80, 'hfhasi', 2132, -546546]
//var lista = []

function filtro(lista){
    //Declaração dos arrays vazios
    let nomes = [], nPositivos = [], nNegativos = [];
    
    // Valida se a lista está vazia
    if(lista.length == 0){
        return '[WARNING] - Lista vazia ou inexistente!'  
    } else {
    // Percorrendo a lista passado como parametro
        for (let i = 0; i < lista.length; i++ ){
            if(lista[i] < 0){ // // pegando só numeros negativo
                nNegativos.push(lista[i])
            } else if(lista[i] > 0){  // pegando só numeros positivos
                nPositivos.push(lista[i])
            } else {
                nomes.push(lista[i]) // pegando somente os nomes
            }
        }
    }
    //retornando os Arrays preenchidos
    return `${'['+nomes+']' + '  ['+nNegativos+']' + '  ['+nPositivos+']'}`
}

console.log(filtro(lista))