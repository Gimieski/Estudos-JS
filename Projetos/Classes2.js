/*Programação orientada objeto é quando programamos objetos que interagem entre si.*/
class Pencil{
    write(cont){
      console.log(cont)
    }
}

class Paper{
    constructor(cont){
      const cont=this.content=Pencil.prototype.write(cont);
    }
}

console.log(new Paper("ola"))