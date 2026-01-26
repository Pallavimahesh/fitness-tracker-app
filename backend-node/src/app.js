const express = require("express");
const sequelize = require("./config/database");

require("./models/user.model");
require("./models/weightLog.module");
require("./models/food.model");
require("./models/mealLog.model");
require("./models/exercise.model");
require("./models/exerciseLog.model");
const app = express();
app.use("/api/foods", require("./routes/food.routes"));
app.use("/api/meals", require("./routes/meal.routes"));
app.use("/api/exercises", require("./routes/exercise.routes"));
app.use("/api/exercise-logs", require("./routes/exerciseLog.routes"));

app.use(express.json());
(async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("Database synced Successfully");
  } catch (error) {
    console.log("Error in syncing", error);
  }
})();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
