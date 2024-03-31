const postFindAll = require("../controllers/postFindAll");
const favoriteSearchAll = require("./favoriteSearchAll");

module.exports = async( req, res ) => {
    try {                       
        const { email } = req.userData;
        
        const allPosts     = await postFindAll();
        const allFavorites = await favoriteSearchAll( "user", email );

        res.status(200).json({
            allPosts     : allPosts,
            allFavorites : allFavorites
        });

    } catch (error) {
        res.status(400).json({ RouteError : error.message })
    }
};