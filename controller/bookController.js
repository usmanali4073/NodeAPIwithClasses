// function bookController() {
//     function get(req, res) {
//         res.send("test");
//     }

//     function getById(req, res) {
//         const parmas = req.params.bookId
//         res.send(parmas);
//     }
//     return {get, getById }
// }
// module.exports = bookController;

class bookController {
    get(req, res) {
        res.send("test");
    }
    getById(req, res) {
        const parmas = req.params.bookId
        res.send(parmas);
    }
}

module.exports = new bookController();