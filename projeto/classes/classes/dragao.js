class Dragao extends Criatura{

    constructor(nome){
        this.nome = nome
        this.ataqueMagico = " Sopro de fogo infernal"
        this.#energia = 100
    }
    agir(){
        if(this.#energia >=30){
            console.log(`${this.nome} lança ${this.ataqueMagico}`);
        }else{
            console.log(`${this.nome} esta sem energia`);
        } 
    }
    getEnergia (){
        return this.#energia;
    }
}
module.exports = Dragao;