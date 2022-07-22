const Sequelize = require("sequelize");
const db = require("../utils/database");

const Flat = db.define("flats", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    flat_href: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    img_href: {
        type: Sequelize.STRING,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.STRING,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false 
    }
    ,
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    surface: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    price_num: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
},
{
    timestamps: false,
    createdAt: false,
    updatedAt: false
}
);


module.exports = Flat;
