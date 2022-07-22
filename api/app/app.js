const express = require("express");
const sequelize = require("./utils/database");
const Flat = require("./models/flats");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET", "POST", "PUT", "DELETE");
    next()
})

app.use("/flats", require("./routes/flats"));

(async () => {
    try {
        await sequelize.sync(
            {force: false}
        );
        console.log("Server running..")
        app.listen(process.env.EXTERNAL_PORT || 3000);
    } catch (error) {
        console.error(error)
    }
})()
