const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("<h1>Thong bao</h1> ")
})

app.listen(port, () => {
    console.log(`server dang chay o cong ${port}`);
})