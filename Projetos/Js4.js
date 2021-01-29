function Tabuada(){
    var input=document.querySelector("#txtano");
    var seletor=document.querySelector("#resultado");
    var i=Number(input.value); 
    var n1=1;
    var msg="";

    while(n1<=10){
        msg +=i+"x"+n1+"="+(i*n1)+"<br>";
        n1=n1+1;
    }
    seletor.innerHTML=msg;
}