module.exports = function (mongoose) {
    mongoose.connect("mongodb://localhost/gameuser", { useNewUrlParser: true });
    const gameUserSchema = new mongoose.Schema({
        name: { type: String, required: [true, "Name is required."] },
        points: { type: Number, default: 0 }
    });
    mongoose.model('gameUser', gameUserSchema);
}