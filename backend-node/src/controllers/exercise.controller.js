const Exercise = require("../models/exercise.model");

exports.getAllExercises = async (req, res) => {
  try {
    const exercises = await Exercise.findAll();
    res.status(200).json(exercises);
  } catch {
    res.status(500).json({ message: "Failed to fetch Exercise" });
  }
};
