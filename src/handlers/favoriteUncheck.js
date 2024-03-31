const favoriteDestroy = require("../controllers/favoriteDestroy");

module.exports = async( req, res ) => {
    try {
        const { id }     = req.userData;
        const { idPost } = req.params;

        const postUncheck = await favoriteDestroy( idPost, id );

        if( postUncheck !== null )
            res.status(200).json( postUncheck );
        else
            res.status(400).json({ error: "post not found" });

    } catch (error) {
        res.status(400).json({ RouteError: error.message });
    }
};