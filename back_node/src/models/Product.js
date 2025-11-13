'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        static associate(models){
            // définir des relations
        }
    }

    Product.init({ // () : initialisation {} : colonnes
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: {
                isDecimal: true,
                min: 0
            }
        }
    },{
        // configuration
        sequelize,
        modelName:  'Product', // le nom du model en JS
        tableName:  'product', // nom de table en BDD
        underscored: true, // snake case => kamelcase
        timestamps:  true, // gestion du created at et updated automatiquement
        createdAt:  'created_at',
        updatedAt:  'updated_at'
    });
    return Product; // envoyé vers index.js dans dossier models
};