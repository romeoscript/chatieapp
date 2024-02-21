const express = require('express');
const app = express();
const port = 3200;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`listening at http://localhost:${port}`));