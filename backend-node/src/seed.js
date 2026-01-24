const sequelize = require("./config/database");

(async () => {
  try {
    const queryInterface = sequelize.getQueryInterface();

    await require("./seeders/20260124-seed-foods").up(queryInterface);
    await require("./seeders/20260124-seed-exercises").up(queryInterface);

    console.log("✅ Seed data inserted successfully");
    process.exit();
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
})();
