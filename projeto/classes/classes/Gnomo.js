class Gnomo extends Criatura(){

    constructor(nome){
        this.nome = nome
        this.ataqueMagico = "Chuva de Cogumelos Tóxicos"
        this.#energia = 100;
    }

    agir(){
        if(this.#energia >= 5){
            console.log(`${this.nome} ataca com${this.ataqueMagico}`);
        }else{
            console.log(`${this.nome} está sem energia para atacar`);
        }

        getEnergia(){
            return this.#energia;
    }
    }
}