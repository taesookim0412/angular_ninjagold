const gu = require('../controllers/gameusers.js');

module.exports = function(app) {
    app.get("/users", function(req, res) {
        gu.taskget(req, res);
    });
    app.post("/users", function(req, res){
        gu.taskpost(req, res);
    });
}