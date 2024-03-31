const { DataTypes } = require("sequelize");

module.exports = ( database ) => {
    database.define("Post", {
        id : {
            type : DataTypes.UUID,
            primaryKey : true,
            defaultValue : DataTypes.UUIDV4,
        },
        title : {
            type : DataTypes.STRING(100),
        },
        content : {
            type : DataTypes.TEXT
        },
        likes : {
            type : DataTypes.INTEGER,
            defaultValue : 0,
        },
        deletedAt : {
            type : DataTypes.DATE
        }        
    })
};