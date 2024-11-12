const express = require('express');
const app = express();
const routesApi = require('./routers');
const port = process.env.PORT || 4000;


app.get('/', (req, res) => {
    res.send('Hello World!');
});
routesApi(app)
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})