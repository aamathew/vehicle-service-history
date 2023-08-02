const express = require("express");
const router = express.Router();
const noteCtrl = require("../../controllers/api/notes");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.post("/", notesCtrl.create);
router.post("/userNote", noteCtrl.getUserNote);

module.exports = router;
