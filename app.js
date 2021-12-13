const express = require("express");
const path = require("path");
// const port = processs.env.PORT || 3000;

const app = express();

app.use(express.static('public'));
app.use('/static', express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res) {
    res.sendFile("/index.html");
});

app.listen(3000, function() {
    console.log(`http://localhost:3000`);
});