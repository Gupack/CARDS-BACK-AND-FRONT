const http = require("http");

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { url } = req
    if (url.inclides("rickandmorty/character/")) {

    }
})
    .listen(3001, "localhost");