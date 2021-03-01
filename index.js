const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/client/index.html"));
});

app.use(express.static('./client/public'));
app.use('/phaser', express.static(__dirname + '/node_modules/phaser/dist/'));

app.listen(3333, () => {
    console.log("listening");
}) 