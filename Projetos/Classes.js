/*Classes são modelos para criação de objetos.Antigamente usavamos funções para isso tipo: Construtora, factory..
mas com a chegada das classes ficou mais facil e melhor, pois melhorou a orientação a objeto, porque alem de criar
objetos, podemos emcapsular funções para trabalhar com elas, e tem esquema de herança..
*/
// Uma classe JavaScript não é um objeto.É um modelo para suas criações

// Exemple 1
class CreateCar{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
    age(){
        let data=new Date()
        return data.getFullYear() -this.year
    }
}

let one=new CreateCar("Corsa",2020)
console.log(one.age())


// Exemple 2
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak(){
      console.log(`${this.name} faz barulho`);
    }
}

class Cat {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
//   extends Herança, isso significa que emprestamos metodos/propriedades para outro Objeto, class... Ex:
// class usersRepository extends Repository
// a classe usersRepository ganhou a herança de Repository, e com isso ganhou suas funções
  class Lion extends Cat {
    speak() {
      super.speak();
    //super é usada para acessar e chamar funções no pai de um objeto.
      console.log(`${this.name} roars.`);
    }
  }
  
  let l = new Lion('Fuzzy');
  console.log(l.speak());