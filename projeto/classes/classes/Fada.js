class Fada extends Criatura{
    #energia;
  
    constructor(nome) {
      this.nome = nome;
      this.ataqueMagico = "Bola de Luz Arco-Íris";
      this.#energia = 100; 
    }
  
    agir() {
      if (this.#energia >= 15) {
        console.log(`${this.nome} ataca com ${this.ataqueMagico}!`);
        this.#energia -= 15;
      } else {
        console.log(`${this.nome} está sem energia para atacar.`);
      }
    }
  
   
    getEnergia() {
      return this.#energia;
    }
  }
  
  module.exports = Fada;