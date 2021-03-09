/*Um iterator é  a habilidade de uma função dentro de um objeto, de percorrer de forma
controlada(usando um next())para cada execução. Então em vez de ser executada toda de uma vez
é em sequencia*/

const obj={
    nome:"José",
    idade:18,
    sla:"sla"
}

const arr = ['a', 'b', 'c'];

/*For in percorre um array, objeto etc.. Enumerado(pelo indice dele), então não 
possui iterator e então não usamos com Array(pois ele possui)
*/

/*For of percorre  umm array como um iterator(ja que nele possui um) e
 então percorre os valores dele mesmo. Oque da o erro TypeError: obj is not iterable
 quando trocamos o in pelo of, quer dizer que o OBjeto padrao, que criamos; Não possui
 iterator(teriamos que criar um, mas resolvemos usar o for in*/

 for (const keys in obj) {
     if (Object.hasOwnProperty.call(obj, keys)) {
         const element = obj[keys];
         console.log(element);
     }
 }

 for (const letras of arr) {
     console.log(letras)
 }

// Mas podemos percorrer um obeto com for of caso as propriedades sejam array. Veja:
const obj={
    numeros1:[2,3,78,90],
    numeros2:[5,89,565,1]
}

const array1=of(obj.numeros1);
const array2=of(obj.numeros2);

function of(array){
 let total=0 
 for (const value of array) {
     total+=value;    
    //  ele vai ser obrigado a fazer uma conta ja que estamos adicionando 0 sem o push
 }
 console.log(total)
}
of();