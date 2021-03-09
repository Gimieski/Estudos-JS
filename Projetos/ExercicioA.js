// Fazer um algoritimo que identifique as notas 
// Se maior que 90 A
// Entre 80-89 passou B
// Entre que 70-79 C
// Entre 60-69 D
// Menor que 60 E

let score=88;
let scoreA=score >=90 && score<=100
let scoreB=score >=80 && score<=89
let scoreC=score >=70 && score<=79
let scoreD=score >=60 && score<=69
let scoreE=score <=60 && score >=0

let scoreFinal;

if(scoreA){
    scoreFinal="A";
}else if(scoreB){
    scoreFinal="B";
}else if(scoreC){
    scoreFinal="C";
}else if(scoreD){
    scoreFinal="D";
}else if(scoreE){
    scoreFinal="E";
}else{
    "Nota invalida"
}

console.log(scoreFinal)