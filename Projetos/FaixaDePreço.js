// Criar objetos de diferentes formas e armazenar em um Array

// Primaira opção: Criando já em um array
let faixas=[
  {tooltip:'até 700$', minimo:0, maximo:700},
  {tooltip:'de 700$ a 1000$', minimo:700, maximo:1000},
  {tooltip:'até 9000$', minimo:1000, maximo:9000}
]

// Segunda opção: Factory

function criarFaixas(tooltip,minimo,maximo){
    return{
        tooltip:tooltip,
        minimo:minimo,
        maximo:maximo
    }
}

let faixas2=[
criarFaixas("até 700",0,700),
criarFaixas("até 1000",700,1000),
criarFaixas("até 9000",1000,9000)
// não precisa da New pois ja esta retornando como objeto;
]
// Terceira opção: contrutores

function criandoFaixas(tooltip,minimo,maximo){
     this.tooltip=tooltip;
     this.minimo=minimo;
     this.maximo=maximo;
}

 let faixas3=[
 new criandoFaixas("até 700",0,700),
 new criandoFaixas("até 1000",700,1000),
 new criandoFaixas("até 9000",1000,9000)
]

console.log(faixas)
console.log(faixas2)
console.log(faixas3)