const { Router }  = require("express");
const { userHandlers, userMiddle } = require("../handlers/index");

const userRoutes = Router();

userRoutes.post("/register", 
    userMiddle.validationsCreate, 
    userMiddle.validationsPassword,
    userHandlers.register,
    userMiddle.JWTGenerate,
);

userRoutes.post("/login",
    userHandlers.login,
    userMiddle.JWTGenerate,
)

userRoutes.put("/change",
    userMiddle.JWTValidation,
    userHandlers.userChanges,
)

userRoutes.delete("/deleteUser",
    userMiddle.JWTValidation,
    userHandlers.userDelete,
)

module.exports = userRoutes;