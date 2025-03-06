const _ = require('lodash');


const personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 22 },
    { nombre: "Juan", edad: 30 }
];


console.log(_.sortBy(personas, 'edad'));