const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const sequelize = require("./database");


dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors({ origin: "*"}));



sequelize
    .sync()
    .then(() => {
      console.log("Bazaga ulanda");
      app.listen(PORT, '0.0.0.0', () => {
        console.log('Server ishlayapti');
        console.log('Local: http://localhost:${PORT}');
      });  
    })

    .catch((err) => console.error("Baza xatosi", err));