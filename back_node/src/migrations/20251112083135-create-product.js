'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('product', {
      id: {
        type : Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull:false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      price: {
        // valeur 10 chiffres avant la virgule et 2 chiffres aprés la virgule
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('product');
  }
};
