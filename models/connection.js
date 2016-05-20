var mongoose = require('mongoose'); // modulo de mongoose

//conexion al host de mLab a la base de datos "db_carrito"
mongoose.connect('mongodb://admin:1111@ds021999.mlab.com:21999/db_carrito', function(err) {
    if (err) {
        console.log('connection failed' + err);
    } else {
        console.log('¡connection ok!');
    }
});

//exportar mongoose para poder utilizarse en otro fichero
module.exports = mongoose;