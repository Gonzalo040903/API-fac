const mongoose = require('mongoose');

const dbconnect = () => {
    mongoose.set('strictQuery', true)
    mongoose.connect("mongodb://127.0.0.1:27017/user-test", {});

    mongoose.connection.on('error', (err) => {
        console.error('Error en la conexión a la base de datos:', err);
    });

    mongoose.connection.once('open', () => {
        console.log("Conexión a la base de datos establecida correctamente");
    });
}

module.exports = dbconnect;