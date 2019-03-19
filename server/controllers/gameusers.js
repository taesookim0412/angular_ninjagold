const mongoose = require('mongoose');
const gm = mongoose.model('gameUser');

module.exports = {
    taskget: function (req, res) {
        gm.find({}, function (err, data) {
            res.json({ "message": "Success", data: data });
        })
    },
    taskpost: function (req, res) {
        gm.create(req.body, function (err) {
            if (err) {
                res.json({ "message": "Error" });
            }
            else {
                res.json({ "message": "Success" });
            }
        });
    },
}