//carga todos los archivos *html *css *jpg *js dentro del directorio
var express = require("express");
const app = express();
// const cors = require("cors");
const path = require('path');
const bodyParser = require("body-parser");

const router = express.Router();              // get an instance of the express Router


var port = process.env.PORT || 3000; // set our port


// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

app.use(express.static(path.join(__dirname, 'www')));

app.listen(port, () => console.log("Express app running on port 3000"));

app.post("/obtenerClima", function (req, res) {
    res.status(200).send("You have posted a query: "+ req.body.qCiudad);
});