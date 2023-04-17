const bcrypt = require('bcrypt');

//Función que crea un hash
const createHash = (myPassword)=> bcrypt.hashSync(myPassword, 10);

//Función que compara el hash con la contraseña
const compareHash = (myPassword, hash) => bcrypt.compareSync(myPassword, hash);

module.exports = {
    createHash,
    compareHash
};