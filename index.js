const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Configurar el directorio de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/staff', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'staff.html'));
});

app.listen(process.env.PORT || 5000, function () {
    console.log('Example app listening on port 5000!');
});