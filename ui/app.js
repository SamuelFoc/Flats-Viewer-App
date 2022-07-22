const express   = require("express");
const app       = express();
const path      = require("path");
const bodyParser = require("body-parser");

const flat_routes = require("./routes/flat_routes")

//Using JSON data
app.use(bodyParser.urlencoded({ extended: true}));
// app.use(bodyParser.json());

// Public folder
app.use(express.static("public"));

// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"))

// Routes
app.get("/", (req, res) => {
    res.redirect("/flats/all");
})
app.use("/flats", flat_routes);


app.listen(process.env.PORT, () => {
    console.log("UI listening on port 4000...")
});