/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(x) {
    x === true ? true : false;
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(false);
isTruthy(0);
isTruthy(-0);
isTruthy("");
isTruthy(null);
isTruthy(undefined);
isTruthy(Nan);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(true);
isTruthy({});
isTruthy([]);
isTruthy(10);
isTruthy("foo");
isTruthy("MisaelGatao");
isTruthy(new Date());
isTruthy(function() {});
isTruthy(5 + 5);
isTruthy(5 * 2);

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = {
    marca: 'Renault',
    modelo: 'Clio',
    placa: 'MIR-2608',
    ano: '2008',
    cor: 'Prata',
    qunatasPortas: '4',
    assentos: '5',
    quantidadePessoas: '0',
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function(cor) {
    carro.cor = cor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function() {
    return carro.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function() {
    return carro.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function() {
    return carro.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function() {
    return "A marca deste veículo é" + carro.obterMarca() + " " + carro.obterModelo;
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.addPessoas = function(x) {
    var vagas = carro.assentos - carro.quantidadePessoas;
    var singularOuPlural = vagas === 1 ? " pessoa" : " pessoas";
    if (carro.quantidadePessoas >= carro.assentos) {
      return "Já temos " + carro.quantidadePessoas + " pessoas no carro!" + "\nO carro já está lotado!";
    }else if (carro.quantidadePessoas <= carro.assentos) {
      if (vagas >= x) {
      carro.quantidadePessoas += x;
      return "Já temos " + carro.quantidadePessoas + " pessoas no carro!";
      }else {
        return "Só cabem mais " + vagas + singularOuPlural + "!";
      }
    }
  }

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor(); //"Prata"

// Mude a cor do carro para vermelho.
carro.mudaCor("vermelho");

// E agora, qual a cor do carro?
carro.obterCor(); //"vermelho"

// Mude a cor do carro para verde musgo.
carro.mudaCor("verde musgo");

// E agora, qual a cor do carro?
carro.obterCor(); //"verde musgo"

// Qual a marca e modelo do carro?
carro.obterMarcaModelo(); //"Esse carro é um Renault Clio"

// Adicione 2 pessoas no carro.
carro.addPessoas(2); //"Adicionando 2 duas pessoas ao veículo"

// Adicione mais 4 pessoas no carro.
carro.addPessoas(4); //"4 pessoas adicionadas ao veículo"

// Faça o carro encher.
carro.addPessoas(3); //"5 pessoas dentro do carro"
carro.addPessoas(1); //"Carro cheio"

// Tire 4 pessoas do carro.
carro.addPessoas(-4); //1

// Adicione 10 pessoas no carro.
carro.addPessoas(10); //"Exedido o limite de pessoas a bordo, cabem apenas mais 4 passageiros"

// Quantas pessoas temos no carro?
carro.quantidadePessoas //1