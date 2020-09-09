function IA (color) {
  const IA = string
  return 'Digite sua cor.'

  if (color = verde) {
    return 'Você deve gostar de floresta'
  }
  if (color = azul) {
    return 'Você deve gostar de praias'
  }
  if (color = amarelo) {
    return 'Você deve gostar do Egito'
  }
  if (color = indefinido) {
    return 'Por favor, informe uma cor.'
  }
}

IA (Verde)
IA (Azul)
IA (Amarelo)
IA (undefined)

// exemplo feito pelo cris

// Crie uma function da qual ela recebe um parâmetro do tipo string. Esse parametro é uma cor, com base nisso ele deve exibir uma paisagem condizente com aquela cor.
// Exemplo:

// Cor informada: Verde > Paisagens que combinam com essa cor é Floresta Faça 3 cenário e o quarto cenário seria cor não informada.

// verde > Você deve gostar de Floresta
// azul > Você deve gostar de Praias
// amarelo > Você deve gostar do Egito
// ? > Por favor informe uma cor.

function setLandscape(color) {
  if(!color) {
    return 'Insira uma cor';
  } else if(color === 'verde') {
    return 'Você deve gostar de florestas!';
  } else if(color === 'azul') {
    return 'Você deve gostar de praia!';
  } else if(color === 'amarelo') {
    return 'Você deve gostar do Egito!';
  } else {
    return `Infelizmente a cor ${color} informada não existe no nosso banco de dados`;
 }
}

setLandscape('amarelo');
setLandscape('verde');
setLandscape('azul');
setLandscape();
setLandscape('roxo');