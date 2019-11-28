const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;

// Configure server app
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});