const { Router } = require("express");
const { postHandlers }  = require("../handlers/index");

const postRoutes = Router();

postRoutes.post("/", postHandlers.postNew);

postRoutes.get("/all", postHandlers.postsAll);

postRoutes.put("/:id", postHandlers.postChange);

postRoutes.delete("/:id", postHandlers.postDelete);


module.exports = postRoutes;