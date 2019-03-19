const fs = require('fs');

module.exports = function (mongoose) {

    let models_path = __dirname + "./../model";
    fs.readdirSync(models_path).forEach(function (file) {
        if (file.indexOf('.js') > 0) {
            require(models_path + "/" + file)(mongoose);
        }
    })
}