// Busca de registro de dados em lista

var lista = ['Diego', 31, 'Renata', -64, 10, -50, 'Batatinha', 'Jeremias', 100, -80, 'hfhasi', 2132, -546546, 'casa']

function transform(listaInterna, busca){    
        
    if (listaInterna.indexOf(busca) === -1) {
        console.log('Desculpe, elemento ' + busca + ' Não encontrado')
    }else if (listaInterna.indexOf(busca) > -1){
        console.log('Encontramos o dado ' + busca + ' na posição ' + listaInterna.indexOf(busca))
    }
}   

transform(lista, 'Diego')

