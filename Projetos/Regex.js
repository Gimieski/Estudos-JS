/*Regex é uma forma de identificar caracteres em uma cadeia de caracteres(tudo em stirng)
e depois com isso, podemos tratar esse valor.
O Regex é um objeto bem estutorado no javascript, podendo identificar até tags
O Regex é utilizado para: Identificar email, sms, mensagens,ip,senhas etc*/


/*
g -global(encontrar todas, globalmente);

i-insensitive(encontrar todas, globalmente. Mas essa nãose limita a maiuscula, minusula, acento)
*/
// Primeira forma de criar um regex
const regex=/João/i;

const  texto  =  `
João trouxe flores para sua amada namorada em 10 de janeiro de 1970,
Maria era o nome dela.
Foi um ano excelente na vida de joão. Teve 5 filhos, todos adultos atualmente.
maria, hoje sua esposa, ainda faz aquele café com pão de queijo nas tardes de
domingo. Também né! Sendo uma boa mineira que é, nunca esquece seu famoso
pão de queijo.
Não canso de ouvir a Maria:
"Joooooooooãoooooooooooooooooooooooooooo, o café tá prontinho aqui. Veeemm"!
` ;

console.log(regex.test(texto))
//Testa se tem João no texto
console.log(regex.exec(texto))
// Ele mostra uma copia de um objeto com tudo dele(posição a string) se tiver a palavra do Regex
console.log(regex.exec(texto).index)

// Podemos separar em grupos as string, podendo assim, fazer uma verificação mais precisa

const regex1=/(maria|joão)(, hoje sua esposa)/i
const found=regex1.exec(texto)
// sim podemos usar operadores logico nisso(procura maria oou joão)
console.log(found[0])
// executou a primeira posição(todo)
console.log(found[1])
// primeiro grupo
console.log(found[2])
// segundo grupo


// quando pegar um caractere especial tem que usar \ ex: <br> <\/br>
// pegar o texto de qualquer tega <.*>(.*)<\/.*>