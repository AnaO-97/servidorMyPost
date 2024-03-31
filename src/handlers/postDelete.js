const postDestroy = require("../controllers/postDestroy");

module.exports = async( req, res ) => {
    try {        
        const { id } = req.params;
                        
        const postDeleted = await postDestroy( id );

        if(postDeleted !== null){
            res.status(200).json( postDeleted );
        }
        else{
            res.status(400).json({ ControllerError: "post not found" })
        }

    } catch (error) {
        res.status(400).json({ RouteError : error.message })
    }
};