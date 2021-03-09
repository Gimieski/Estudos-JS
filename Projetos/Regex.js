/*Regex é uma forma de identificar caracteres em uma cadeia de caracteres(tudo em stirng)
e depois com isso, podemos tratar esse valor.
O Regex é um objeto bem estruturado no javascript, podendo identificar até tags
O Regex é utilizado para: Identificar email, sms, mensagens,ip,senhas etc*/


/*FLAGS
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
//Testa se tem João no texto(retorna um boolean)
console.log(regex.exec(texto))
// Ele mostra uma copia de um objeto com tudo dele(posição a string) se tiver a palavra do Regex
console.log(regex.exec(texto).index)
// Podemos pegar as propriedades do objeto retornado(JSON)


// Podemos separar em grupos as string, podendo assim, fazer uma verificação mais precisa. encontrar duas coisas
const regex1=/(maria|joão)(, hoje sua esposa)/i
const found=regex1.exec(texto)
// sim podemos usar operadores logico nisso(procura maria oou joão)
console.log(found[0])
// mostrou a primeira posição(maria hoje e sua esposa(pois encontrou os 2)
console.log(found[1])
// primeiro grupo, a segunda propriedade(maria)
console.log(found[2])
// segunda pripriedade, hoje sua esposa


// quando pegar um caractere especial tem que usar \ ex: <br> <\/br>
// pegar o texto de qualquer tega <.*>(.*)<\/.*>

const numbers=[1,2,3,4]
// o colchetes informa que estamos tentando encontrar um grupo de caracteres que começe com tal e termine com tal.Esses conjuntos podem ser uma escala de "0" a "9", ou de "a" a "z", etc.
let reg=/\W/i

console.log(reg.test(numbers))

// Meta Caracteres:
/*
\W encontra incidentes de 0-9 e A-Z  \.
* encontra caracteres repetidos. Ex: bo* =boooo
^ verifica se ta em primeiro /^oi/.test('oi, tudo certo?')
$ verifica se esta em ultimo /$certo/.test('oi, tudo certo?')
. Corresponde à qualquer caractere, exceto quebra de linha: \.
\d Corresponde à um caractere numérico. É o mesmo que [0-9].
\D Corresponde à um caractere não numérico. Ex: a,b ..
\w Corresponde à qualquer caractere alfanumérico mais _. Equivalente à [0-9a-zA-Z_]
\s Corresponde à um caractere de espaço, tab e quebra de linha.
\S Corresponde à qualquer caractere que não seja espaço, tab ou quebra de linha.
? pode ser considerado como um operador para especificar algo opcional.
*/