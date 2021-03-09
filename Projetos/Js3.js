
// gerar um paragrafo contando de 2 em 2 de acordo com o numero de inicio e fim
function contar(){
    
    var inicio=document.querySelector("#txtano");
     var final=document.querySelector("#txtano2");
     var passo=document.querySelector("#txtano3");
    var res=document.querySelector("#resultado");
    // length retorna a quantidade de valores em algo
    if(inicio.value.length ==0 ||  final.value.length ==0 || passo.value.length ==0){
        alert("Erro");
        res.innerHTML=" ";
    }else{
        res.innerHTML="Contanto: ";
        var i=Number(inicio.value);
        var f=Number(final.value);
        var p=Number(passo.value);
// converte
        if(i<f){
            for(i; i<=f; i+=p)
            res.innerHTML+=i+" ";
            // para que a cada loop +p no i
        }else{
            //enquanto o i for maior que f ele vai diminuindo os passo 
            for(i;i>f;i-=p){
                res.innerHTML+=i+" ";

            }
        }

        
            
        }
    }
    

    

