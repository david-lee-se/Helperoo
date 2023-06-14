require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.json());
app.use(cors());



app.use('/employees', )

app.listen(PORT, () => {
    console.log(`server is using port ${PORT}`)
})