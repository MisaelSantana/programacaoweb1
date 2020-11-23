const livro = {
    title: 'A Cabana',
    editora: 'Sextante',
    ano: '2008',
    category: 'Romance, Suspense, Romance Cristão, Ficção Religiosa',
    author: {
        nameauthor: 'William P. Young',
    },
    price: '$19,99',
    magazines: 'Novatec, Cubo, Pressman',
}

let {title, author: {nameauthor}, magazines} = livro;
console.log (`O nome do livro é: ${title}
O nome do autor é: ${nameauthor}
As Magazines para compra são: ${magazines}`)

function contarVotos(candidato1, candidato2, candidato3) {
      candidato1 = candidato1 || 10;
      candidato2 = candidato2 || 10;
      candidato3 = candidato3 || 10;
      total = 0;
  
  if (candidato1 === 10) {
      console.log(`Total de votos + ${candidato1}`);
  }  else if(candidato2 === 10) {
      console.log(`Total de votos + ${candidato2}`);
  }  else if(candidato3 === 10) {
      console.log(`Total de votos + ${candidato3}`);
  } else {
    let sum = candidato1 + candidato2 + candidato3
    console.log(`Total de votos: ${sum}`);
  }
}

contarVotos(2,5,9);