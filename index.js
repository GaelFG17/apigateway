const express = require('express');
const cors = require('cors');

const PORT = 4000;
// crear la instacia del servidor
const app = express();
app.use(cors());
app.use(express.json());


app.listen(PORT, () => {
    console.log('Servidor running in http://localhost:' + PORT);
}); 