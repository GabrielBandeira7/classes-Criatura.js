const Dragao = require('./Dragao');
const Fada = require('./Fada');
const Gnomo = require('./Gnomo');
const mago = require('./slime');

let fadinha = new Fada('weedbell')
let cospefoisgo = new Dragao('spyro')
let ginomio = new Gnomo('DrDavidNelson')
let amoeba = new mago('amoeba')
console.log("---");
console.log('ataques:');
console.log(fadinha.agir());
console.log(cospefogo.agir());
console.log(ginomio.agir());
console.log(amoeba.agir());
console.log("---");
console.log('descanço:');
console.log(fadinha.descansar());
console.log(cospefogo.descansar());
console.log(ginomio.descansar());
console.log(amoeba.descansar());
console.log("---");
