const { DataTypes } = require("sequelize");

module.exports = (database) => {
    database.define("User", {
        id : {
            type : DataTypes.UUID,
            defaultValue : DataTypes.UUIDV4,
            primaryKey : true,
        },
        fullName : {
            type : DataTypes.STRING(100),
            allowNull : false,
        },
        age : {
            type : DataTypes.INTEGER,
            allowNull : false,
        },
        email : {
            type : DataTypes.STRING(100),
            unique : true,
            allowNull : false,
        },
        password : {
            type : DataTypes.STRING(100),
            allowNull : false,
        },
        color : {
            type : DataTypes.STRING,
            defaultValue : "#808080",
        },
        deletedAt : {
            type : DataTypes.DATE
        }
    })
};