function escrever(){
var msg= document.querySelector('.mensagem')
var foto=document.querySelector(".img");
var data = new Date();
var hora=data.getHours();
// aqui é a hora do nosso computador, podemos odificar pegando hora=13 por ex.
msg.innerHTML="Agora são "+hora+"horas";

if(hora >=0 && hora <=12){
// se hora for maior que zero e tambem menor que 12
foto.src='imagens/Imagens-horario/manha.jpg'
document.body.style.backgroundColor='#e2cd9f'
}else if(hora >=12 && hora<=18){
    foto.src='imagens/Imagens-horario/tarde.jpg'
    document.body.style.backgroundColor='#b9846f'
}else{
    foto.src='imagens/Imagens-horario/noite.jpg';
    document.body.style.backgroundColor='#515154'
}

}