require('dotenv').config();
const { Sequelize } = require("sequelize");
const { DB_PROTOCOL, DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const postModel     = require("./models/Post");
const usersModel    = require("./models/User");
const favoriteModel = require("./models/Favorite");

const database = new Sequelize(
    `${ DB_PROTOCOL }://${ DB_USER }:${ DB_PASSWORD }@${ DB_HOST }/${ DB_NAME }`,
    { logging: false }
)

postModel( database );
usersModel( database );
favoriteModel( database );

const { User, Post, Favorite } = database.models;

User.hasMany( Post );   //tiene varios ...
Post.belongsTo( User ); //pertenece a ...

User.belongsToMany( Post, { through: Favorite } );
Post.belongsToMany( User, { through: Favorite } );

module.exports = { database, ...database.models };