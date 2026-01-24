"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("exercises", [
      {
        name: "Walking",
        caloriesPerMinute: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Running",
        caloriesPerMinute: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cycling",
        caloriesPerMinute: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Yoga",
        caloriesPerMinute: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Skipping",
        caloriesPerMinute: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("exercises", null, {});
  },
};
