const banda = {
id: 001,
nome: 'Santana',
integrantes: 6,
localizacao : {
  rua: 'Rua Carlos Maia',
  numero: 99,
  bairro: 'América',
  cidade: 'Joinville',
  estado: 'SC',
  },
};

let {nome, localizacao: {bairro, cidade, estado}} = banda;
console.log(`Nome da Banda: ${nome}`);
console.log(`Localização da Banda: Fica localizada no
bairro ${bairro} na cidade de ${cidade} - ${estado}`);

function ehPar(numero) {
  if(numero % 2 === 0) {
  console.log('O numero é par');
  } else {
  console.log('O valor informado é impar')
  };
};

function ehParTernario(numero) {
  return numero % 2 === 0 ? 'É par' : 'É impar';
}

ehPar(13);

// arrow function

function sayHello() {}

const digaSeuNome3 = function(name) {
  console.log(nome)
};

const parArrow = numero => numero % 2 === 0 ? 'É par' : 'É impar';

function tipoDeAnimal(animal) {
  if(animal === 'dog') {
  console.log('Auau')
  } else {
  console.log('Miau');
  }
}

tipoDeAnimal('dog')
tipoDeAnimal('cat')

const setTypeAnimal = (animal) => {
  if(!animal) {
  return 'Animal não identificado';
  }
  return animal === 'dog'?
console.log('auauauau'): console.log('miauuuuu');
} 

setTypeAnimal('dog')
setTypeAnimal('cat')
setTypeAnimal();