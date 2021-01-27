function validar(){
    var conteiner=document.querySelector(".conteiner");
    conteiner.setAttribute("style","height:550px;");

    // vamos validar a idade que o usuario digitou
    var data= new Date;
    var ano=data.getFullYear();
    var dig=document.querySelector('#txtano');
    var res= document.querySelector("#resultado");

    // o lenght retorna quantos valores tem em algo.Se não tiver nenhum da erro.
    if(dig.value.length == 0 || dig.value > ano  ){
        alert("Digite algo valido");
    }else{
        var sex= document.getElementsByName("radsex");
        var idade=ano -Number(dig.value);
        // pega o ano atual menos o valor digitado
        var genero='';
        
        var img =document.createElement('img');
        img.setAttribute('id', 'foto');

        
        
        if(sex[0].checked){
            genero= "Homem";
            if(idade >=0 && idade <10){
                img.setAttribute("src","imagens/imagens-pessoas/foto-bebe-m.jpg")
            }else if(idade <=21){
                img.setAttribute("src","imagens/imagens-pessoas/foto-jovem-m.jpg")
            }else if(idade <=50){
                img.setAttribute("src","imagens/imagens-pessoas/foto-adulto-m.jpg")
            }else{
                img.setAttribute("src","imagens/imagens-pessoas/foto-idoso-m.jpg")
            }
        }else if(sex[1].checked){
            genero="Mulher";
            if(idade >=0 && idade <10){
                img.setAttribute("src","imagens/imagens-pessoas/foto-bebe-f.jpg")
            }else if(idade <=21){
                img.setAttribute("src","imagens/imagens-pessoas/foto-jovem-f.jpg")
            }else if(idade <=50){
                img.setAttribute("src","imagens/imagens-pessoas/foto-adulto-f.jpg")
            }else{
                img.setAttribute("src","imagens/imagens-pessoas/foto-idoso-f.jpg")
            }
            // colocar para mulheres, colocar para max 100 anos e arrumar bug das imagens
        }
        res.innerHTML=`Detectamos ${genero} com ${idade} anos`;
        res.appendChild(img);
        }
    }


