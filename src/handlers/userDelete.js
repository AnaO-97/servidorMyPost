const userDestroy = require("../controllers/userDestroy");

module.exports = async ( req, res ) => {
    try {
        const { id } = req.userData;

        const userDeleted = await userDestroy( id );

        if(userDeleted !== null){
            res.status(200).json( userDeleted );
        }
        else{
            res.status(400).json({ ControllerError: "user not found" })
        }

    } catch (error) {
        res.status(400).json({ RouteError: error.message })
    }
};