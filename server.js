const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const initialPath = path.join(__dirname, 'public');
app.use(express.static(initialPath));

app.get('/', (req,res) => {
    res.sendFile(path.join(initialPath), 'index.html');
})
app.listen(PORT, (req,res) => {
    console.log(`Server Running at PORT : ${PORT}`);
});