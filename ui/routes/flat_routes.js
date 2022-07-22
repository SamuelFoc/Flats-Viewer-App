const express   = require("express");
const flats     = require("../controllers/flat_controllers");

const router = express.Router();

router.get("/all/", flats.get_all_flats);
router.get("/filter/", flats.get_filtered_flats)

module.exports = router;