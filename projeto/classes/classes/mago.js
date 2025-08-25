const Criatura = require("./Criatura");

class Mago extends Criatura {
  constructor(nome) {
    super(nome); 
    this.ataqueMagico = "Rajada de Feitiços Arcanos"; 
  }

  agir() {
    console.log(`${this.nome} conjura ${this.ataqueMagico}!`);
    this.alterarEnergia(-20); 
  }
}

module.exports = Mago;
