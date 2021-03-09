/*
Calcular os gastos das familias, sendo as dispensas oq recebemos do trabalho e despensa oq gastamos
*/

//Foi criado um objeto com os respectivos valores 
let familia={
    receitas:[2500,3200,250.45,360.45],
    despensas:[320.34, 128.45, 176.87, 1450.00]
}

/* Na função de soma, recebemos os arrays do balanso e com o
 for of percorremos os valores dos array.
 */
function soma(array){
    let total=0;
    for (let value of array){
        total +=value
    }
    return total
}

// Balanço dos gastos, armazenamos em uma variavel, para passarmos os valores para a função de soma
function Balanso(){
    const calcularReceita=soma(familia.receitas);
    const calcularDespensas=soma(familia.despensas);

    const total=calcularReceita - calcularDespensas;

    const itsOk= total>=0

    let mensagem="negativo";

    if(itsOk){
       mensagem="positivo"
    }else{
        mensagem
    }


    console.log(`Seu saldo é ${mensagem}:${total.toFixed(2)}`)

}

Balanso();