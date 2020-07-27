// para comentar
// document.write("Hello") //para escrever no documento.

// variaveis, tipo de dados
// variaveis serve para guardar um valor para guardar mais tarde
// var myvar = "Hello"
// let mylet = "Nice"
// const myconst = "Hi"
// document.write(myconst + myvar + mylet)

//string (tipo de dado) usa aspas duplas, simples ou crase
// const s1 = "Isso é uma string"
// const s2 = 'Isso também é uma string'
// const s3 = `Isso é uma string também`
// document.write(s3)

//number (tipo de dado) se colocar entre aspas vira uma string
// const n1 = 1
// const n2 = 13
// document.write(n1 + n2) //Soma, porem se colocar como string concatena(junta)

//boolean (tipo de dado) sempre recebe 1 dos 2 valores = true ou false
// const bTrue = true
// const bFalse = false
// document.write(bFalse)

// (tipo/estrutura de dados) OBJETO(todo objeto possuem PROPRIEDADES(peso,largura,altura, forma,etc..) e FUNCIONALIDADE(camera tira fotos, teclado digita letras, cartao de memoria guarda dados,etc...)) vc aciona um objeto com chaves {}
// const pessoa = {
//   altura: "1,80m", //propriedade
//   idade: 24,       //propriedade
//   solteiro: true,  //propriedade
//   correr(){        //Funcionalidade
//     document.write("executar uma grande logica de correr") 
//   }
// }

// pessoa.correr() // quando coloca um ponto eu me refiro a funcionalidade daquele objeto.

// ARRAY ou VETORES (tipo de dado) vc aciona um array com colchetes []. Array serve como um COLECIONADOR de dados(seja qual tipo for).
// const colecaoDeBolinhas = ["blue", "green", 1, {name: "Abner Willys"}]

//document.write(colecaoDeBolinhas) //Dessa forma o javascript tenta escrever tudo que esta dentro do array

// document.write(colecaoDeBolinhas[0]) //Dessa forma o JS escreve oque está na posição 0.

// document.write(colecaoDeBolinhas[3]) //Dessa forma o JS escreve oque está na posição 3.

// document.write(colecaoDeBolinhas[3].name) //Dessa forma o JS escreve oque está na posição 3 e ACESSA oque comporta esse OBJETO.

// FUNÇÕES (Funcionalidades - Atalhos - Reuso de código)
// //Existe funções ja com nome pre-programadas dentro do JS que tem seu objetivo definido e também
// //funções anonimas que pode ser de duas formas a sintaxe:(' function () {} ') ou (' () => {} ')


//registrar uma função
// function sayMyName(name) { //Oque contem dentro dos () chama ARGUMENTOS ou PARAMETROS
//   document.write(name)
// }

// //Executar uma função
// sayMyName("Douglas")
// sayMyName("Valeska")
// sayMyName("Joao")

// //Dessa forma a função vai registrando tudo que eu introduzir ao longo do documento.

// CONDICIONAIS

// const notaFinal = 5

// if ( notaFinal < 5 ) { //SE for true a condição usa o caminho 1, se nao(false) o caminho 2
//   document.write("Reprovado") //caminho1
// } else {
//   document.write("Aprovado")  //caminho2
// }

// LOOP - Repetições

// for (i = 0; i < 10; i++) { // o "i" é uma variavel(ou seja pode ser qq nome no lugar) quando entra no for a 1º vez recebe valor 0, depois verifica a condição e se for true, executa o descrito a seguir(++ significa pra somar +1 ao que existe na variavel) e logo depois executa o código dentro das {} e recomeça processo até a condição voltar FALSE onde para ali.
//   document.write("<p> Alo </p>") // o <p> serve para dar paragrafo igual no html
//   document.write(`<p>${i}</p>`)  // Nesse caso ao usar CRASE permite fazer o chamado INTERPOLAÇÃO(${})
// }