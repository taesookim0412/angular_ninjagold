const gu = require('../controllers/gameusers.js');

module.exports = function(app) {
    app.get("/users", function(req, res) {
        gu.taskget(req, res);
    });
    app.post("/users", function(req, res){
        gu.taskpost(req, res);
    });
    app.get("/users/:name", function(req, res){
        gu.getone(req, res);
    });
    app.put("/users/:name", function(req, res) {
        gu.update(req, res);
    });
}