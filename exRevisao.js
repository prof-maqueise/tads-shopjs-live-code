console.log('----🔍 Exercício 1: Desestruturando um Objeto de Aluno-----')
  
const aluno = {
  nome: 'João',
  email:"joao@email.com",
  matricula:'20251234',
  idade: 20,
  curso: 'ADS',
  notas: [7.5, 8.2, 6.9],
  endereco:{
    logradouro:'Rua X',
    cep:'87707-111'
  }
};
 let {nome,idade,curso, endereco} = aluno
 let [nota1,nota2,nota3] = aluno.notas
 //console.log(nota1,nota2,nota3)
//console.log(` ${aluno.nome}, ${aluno.idade} anos, cursando ${aluno.curso}, mora na ${aluno.endereco.logradouro}`) 
 console.log(`${nome}, ${idade} anos, cursando ${curso}, mora na ${endereco.logradouro}`)
 //✅ Tarefa: Crie uma função que receba um objeto com as propriedades nome, email e matricula, e retorne uma string formatada com essas informações usando desestruturação. 
 
 function mostrarDadosAluno({nome,email,matricula}){
  return `${nome}, email:${email}, matricula: ${matricula}`
 }
 console.log(mostrarDadosAluno(aluno))

 console.log('----🌟 Exercício 2: Usando o Spread para Copiar e Adicionar Valores-----')

const frutas = ['🍇', '🍌'];
const novasFrutas = ['🍎','🍓'];
const arrayComTodasAsFrutas = [...frutas,...novasFrutas]
/* frutas.forEach((fruta)=>{
  arrayComTodasAsFrutas.push(fruta)
})
novasFrutas.forEach((fruta)=>{
  arrayComTodasAsFrutas.push(fruta)
}) */

function gravarDados({matricula,nome,...rest}){
  console.log(rest)
}  
//gravarDados(aluno)

console.log(arrayComTodasAsFrutas)

console.log('----🧪 Exercício 3: Filtrando Produtos em Estoque-----')

 const produtos= [
  {id:1, descricao: 'Teclado mecânico', precoUnitario: 119.99, estoque: 10 },
  {id:2, descricao: 'Mouse sem fio', precoUnitario: 50.00, estoque: 0 },
  {id:3, descricao: 'Monitor LED 24"', precoUnitario: 299.00, estoque: 0 },
  {id:4,descricao: 'HD Externo 1TB', precoUnitario: 79.90, estoque: 3 }
];

let produtosComEstoque = produtos.filter((produto)=>{
    let temEstoque = produto.estoque>0
    return temEstoque
})
console.log(produtosComEstoque)