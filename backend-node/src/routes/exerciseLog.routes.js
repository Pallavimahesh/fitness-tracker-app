const express = require("express");
const router = express.Router();
const controller = require("../controllers/exerciseLog.controller");

router.post("/", controller.addExerciseLog);
router.get("/", controller.getExerciseLogs);
router.delete("/:id", controller.deleteExerciseLog);

module.exports = router;
