
// 1. Crie um objeto com seus dados pessoais
// 2. Deve possui pelo menos duas propriedades como nome e sobrenome
// 3. Crie um método no objeto anterior, que mostre o seu nome completo
var dadosPessoais = {
    nome: 'Misael',
    sobrenome: 'Santana',
    
    mostrarnome: function() {
        return this.nome + this.sobrenome
    }
}


// 5. Crie um objeto de um cachorro que represente um labrador com as características:
//  Preto com 12 anos, que lata ao ver um homem do correio. 

var labrador = {
    nome: 'marley',
    pelo: 'preto',
    idade: '12 anos',

    latir: function () {
        return this.mome + ', meu labrador de pelo ' + this.pelo + ' tem ' + this.idade + 'de'
    }
}

// 4. Modifique o valor da propriedade preco para 3000 do objeto abaixo;

const car = {
  price: 3000,
  ports: 4,
  company: 'Renault'
}
