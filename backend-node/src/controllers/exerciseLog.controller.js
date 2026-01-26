const ExerciseLog = require("../models/exerciseLog.model");
const Exercise = require("../models/exercise.model");

exports.addExerciseLog = async (req, res) => {
  try {
    const { userId, exerciseId, durationMinutes, date } = req.body;

    const exercise = await Exercise.findByPk(exerciseId);
    if (!exercise)
      return res.status(404).json({ message: "Exercise not found" });

    const caloriesBurnt = exercise.caloriesPerMinute * durationMinutes;

    const log = await ExerciseLog.create({
      userId,
      exerciseId,
      durationMinutes,
      caloriesBurnt,
      date,
    });

    res.status(201).json(log);
  } catch (error) {
    res.status(500).json({ message: "Failed to add exercise log" });
  }
};

exports.getExerciseLogs = async (req, res) => {
  try {
    const { userId, date } = req.query;

    const logs = await ExerciseLog.findAll({
      where: { userId, date },
      include: [Exercise],
    });

    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch exercise logs" });
  }
};

exports.deleteExerciseLog = async (req, res) => {
  try {
    const { id } = req.params;
    await ExerciseLog.destroy({ where: { id } });
    res.status(200).json({ message: "Exercise log deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete exercise log" });
  }
};
