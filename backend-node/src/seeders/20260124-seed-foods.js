"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("foods", [
      {
        name: "Rice",
        caloriesPer100g: 130,
        protein: 2.7,
        carbs: 28,
        fat: 0.3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Roti",
        caloriesPer100g: 120,
        protein: 3.1,
        carbs: 25,
        fat: 1.2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Egg",
        caloriesPer100g: 155,
        protein: 13,
        carbs: 1.1,
        fat: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Apple",
        caloriesPer100g: 52,
        protein: 0.3,
        carbs: 14,
        fat: 0.2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Chicken Breast",
        caloriesPer100g: 165,
        protein: 31,
        carbs: 0,
        fat: 3.6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("foods", null, {});
  },
};
