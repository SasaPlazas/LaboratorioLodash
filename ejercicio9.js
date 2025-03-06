const _ = require('lodash');

const persona = { nombre: "Carlos", apellido: "Pérez", edad: 28 };

const personaTransformada = _.mapKeys(persona, (valor, clave) => clave.toUpperCase());

console.log(personaTransformada);
