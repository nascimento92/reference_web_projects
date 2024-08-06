const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    return res.json({ msg: 'Olá dev' });
});

app.listen(port, () => { console.log(`server running on port ${port} ✨`) });