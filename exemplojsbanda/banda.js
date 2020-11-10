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

