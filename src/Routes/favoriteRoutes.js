const { Router } = require("express");
const { favoriteHandlers } = require("../handlers/index");

const favoriteRoutes = Router();

favoriteRoutes.post("/check/:idPost", favoriteHandlers.favoritePost);

favoriteRoutes.delete("/uncheck/:idPost", favoriteHandlers.favoriteUncheck)

module.exports = favoriteRoutes;