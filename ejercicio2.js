const _ = require('lodash');

const valores = [0, "Hola", false, 42, "", null, "Mundo", undefined, NaN, true];

console.log(_.compact(valores));
