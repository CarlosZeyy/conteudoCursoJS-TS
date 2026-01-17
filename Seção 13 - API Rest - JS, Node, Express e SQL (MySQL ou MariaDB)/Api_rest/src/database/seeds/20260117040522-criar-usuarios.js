const bcrypt = require("bcryptjs");
const { faker } = require("@faker-js/faker");

const criarUser = async () => {
  const nome = faker.person.firstName();
  return {
    nome,
    email: faker.internet.email({ firstName: nome }),
    password_hash: await bcrypt.hash(faker.internet.password(8), 8),
    created_at: new Date(),
    updated_at: new Date(),
  };
};

("use strict");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [await criarUser(), await criarUser(), await criarUser()],
      {},
    );
  },

  async down() {},
};
