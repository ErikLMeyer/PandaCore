/*
    Node.js/Express for PandaCore.
    By: Erik, Ren, Matt, Carter
*/

const express = require('express');
const expressHandelbars = require('express-handlebars');
const app = express();
const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/'));

app.engine('handlebars', expressHandelbars({
    defaultLayout: 'main',
}))
app.set('view engine', 'handlebars');

app.get('/', (req,res) => res.render('index'));

app.get('/proposal', (req, res) => res.render('pandacore'));


app.listen(port, () => console.log(`server started on port ${port}; ` +
    'press Ctrl-C to terminate....'))