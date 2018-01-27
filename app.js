const path = require('path');
cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');

//EXPRESS
const app = express();
app.use(cors());
app.use(bodyParser.json());
//comment out static vvvvv line when trying to hit end points from somewhere besides your static files
app.use(express.static(path.join(__dirname)));


let port = 8080;
app.listen(port, function() {
    console.log('express is running on port ' + port);
})