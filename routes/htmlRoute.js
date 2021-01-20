const path = require("path")

module.exports = function (p) {
    p.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })
    p.get('/notes', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"))
    })
}