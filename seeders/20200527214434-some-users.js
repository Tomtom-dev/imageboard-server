'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
    [
      {
        email: "funkt@gmail.com",
        password:"123456",
        fullName: "Francis kunts",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        password:"123456",
        fullName: "vitalik ethereum",
        email: "dan@redux.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    )},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null,{})
  }
};
