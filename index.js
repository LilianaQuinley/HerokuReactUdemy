//udemy : quiet-caverns-84365
const express = require ('express');
const app = express();

app.get('/', (req,res) => {
    res.send({Hello: "Heroku  API" })
});


const PORT = process.env.PORT || 3000;
app.listen(PORT);

