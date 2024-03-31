const userFind = require("../controllers/userFindOne");
const bcryptRead = require("../middlewares/bcryptRead");

module.exports = async( req, res, next ) => {
    try {
        const { email, plainPassword } = req.body;

        const user = await userFind(email);

        if(user !== null){
            const isPassword = await bcryptRead(plainPassword, user.password);                       

            if(isPassword === true){
                req.userData  = { ...user.dataValues };

                next();
            }
            if(isPassword === false)
                res.status(400).json({ BcryptError : "password incorrect" })
            if(typeof isPassword !== "boolean")
                res.status(400).json({ BcryptError : "error in server" }) 

        }
        else{
            res.status(400).json({ error : "user not found" }) 
        }

    } catch (error) {
        res.status(400).json({ RouteError: error.message })
    }
};