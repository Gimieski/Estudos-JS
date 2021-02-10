function* perguntas(){
    const name=yield "Qual o seu nome?"
    const idade=yield "Qual a sua idade?"
    return "ai "+name+idade; 
}
// iterator é um objeto que tem a habilidade(que é dada por uma função)de percorrer seus itens manualmente com next()

/*As funções geradoras (generator functions) são funções onde a execução é adiada até o momento
 que precisamos de seu retorno. Os contextos ficam salvos a cada reentrada. Funções geradoras
 são pilares para uma programação assíncrona que mitigam os problemas com callbacks(me liga de volta).*/

const gen=perguntas();
console.log(gen.next())
// chama QUal o seu nome
console.log(gen.next())
// chama Qual a sua idade
console.log(gen.next())
//o valor de tudo(return)
console.log(gen.next())
//para no return