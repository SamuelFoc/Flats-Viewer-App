const controller = require("../controllers/flats");
const router = require("express").Router();

router
    .get("/all/", controller.get_all_flats)
    .get("/filtered/", controller.get_filtered_flats)
    .post("/", controller.add_flat);
    //.delete("/:id", controller.delete_flat); 

module.exports = router;