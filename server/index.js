const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: 'https://localhost:5000'
};

app.use(cors(corsOptions))

app.use(express.urlencoded({ extended: true }));


response.json({ message: "Welcome To The Digital Dev Server <3." });
;

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});