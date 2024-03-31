const { Router } = require("express");
const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");
const favoriteRoutes = require("./favoriteRoutes");
const JWTValidation = require("../middlewares/JWTValidation");

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/post", JWTValidation, postRoutes);
routes.use("/favorite", JWTValidation, favoriteRoutes);

module.exports = routes;