// 1 (F)
//   (V)
//   (F)
//   (V)
//   (V)
//   (F)

// 2

function table(x,y) {
  return 2 + 1, 2 * 1, 2 / 1, 2 % 1; 
}

// para garantir eu dividi em pequenas funções, não sei se é possivel fazer como esta no primeiro formato.

function table() {
  return 2 * 1;
}

function table() {
  return 2 / 1;
}

function table() {
  return 2 % 1;
}

var numero01 = 1
var numero02 = 2

function soma(numero01 , numero02) {
  return numero01 + numero02
}

function multiplicacao(numero01 , numero02) {
  return numero01 * numero02
}

function divisao(numero01 , numero02) {
  return numero01 / numero02
}

function resto(numero01 , numero02) {
  return numero01 % numero02
}

// 3

var aluno = [
  nome = "Maria", 
  lista = 5, 
  trabalho = 5, 
  prova = 10, 
  soma = media,
  id = 1
]

var aluno = [
  nome = "Ana", 
  lista = 2, 
  trabalho = 1, 
  prova = 8,
  soma = media,
  id = 2
]

var aluno = [
  nome = "Carlos", 
  lista = 1, 
  trabalho = 1, 
  prova = 4,
  soma = media,
  id = 3
]

var aluno = [
  nome = "Pedro", 
  lista = 3, 
  trabalho = 1, 
  prova = 6,
  soma = media,
  id = 4
]

var aluno = [
  nome = "", 
  lista = "", 
  trabalho = "", 
  prova = "",
  soma = media,
  id = 5
]

function media() {
  return lista + trabalho + prova / 3;
}

Match.round(media)

function adicionarAluno() {
  aluno05.nome = "João",
  aluno05.lista = 0,
  aluno05.trabalho = 0,
  aluno05.prova = 0
  return "O aluno" + aluno05.nome + "foi adicionado com sucesso"
}

function removerAluno() {
  removerAluno(aluno.id.remove)
  return "O aluno(a)" + aluno.id + "foi removido do sistema com sucesso"
}

aluno.adicionarAluno = function() {
  nome = ""
  return "Ops, o aluno a ser inserido deve possuir um nome válido."
}

aluno.adicionarAluno = function() {
  id = ""
  return "Ops, não foi possível identificar o aluno com o id informado."
}