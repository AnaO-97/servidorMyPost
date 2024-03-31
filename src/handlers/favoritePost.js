const postFind = require("../controllers/postFindOne");
const userFind = require("../controllers/userFindOne");
const favoriteAdd = require("../controllers/favoritePostAdd");

module.exports = async( req, res ) => {
    try {
        const { email } = req.userData
        const { idPost } = req.params;

        const user = await userFind( email );
        const post = await postFind( idPost );

        if( user === null || post === null){
            res.status(400).json({ error : "user or post not found" }) 
        }
        else{
            const responseFav = await favoriteAdd( user.id, post.id );

            if( responseFav )
                res.status(200).json( responseFav );

            else
                res.status(400).json({ AddFavError: error.message })

        }
        
    } catch (error) {
        res.status(400).json({ RouteError: error.message });
    }
};