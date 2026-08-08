const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const sequelize = require("./config/database");
const userRoutes = require("./routes/userRoutes");
const customerRoutes = require("./routes/customerRoutes");
const customerCardRoutes = require("./routes/customer_cardRoutes");
const setupSwagger = require("./swagger/swagger");

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors({ origin: "*"}));

app.use("/app", userRoutes);
app.use("/api", customerRoutes);
app.use("/api", customerCardRoutes);
setupSwagger(app);



sequelize
    .sync()
    .then(() => {
      console.log("Bazaga ulandi");
      app.listen(PORT, '0.0.0.0', () => {
        console.log('Server ishlayapti');
        console.log(`Local: http://localhost:${PORT}/api-docs`);
      });  
    })

    .catch((err) => console.error("Baza xatosi", err));