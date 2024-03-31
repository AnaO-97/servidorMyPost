const userCreate = require("../controllers/userCreate");
const bcryptCreate = require("../middlewares/bcryptCreate");

module.exports = async( req, res, next ) => {
    try {        
        const { fullName, age, email, plainPassword, color } = req.body;

        const password = await  bcryptCreate( plainPassword );

        if( typeof password === "string" ){
            const newUser = await userCreate({ fullName, age, email, password, color });
            
            req.userData  = { ...newUser.dataValues };
                               
            next();
        }
        else{
            res.status(400).json({ BcryptError : "error in server" }) 
        }

    } catch (error) {
        res.status(400).json({ RouteError : error.message })
    }
};