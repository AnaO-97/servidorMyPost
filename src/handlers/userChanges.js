const userUpdated = require("../controllers/userUpdated");

module.exports = async ( req, res ) => {
    try {
       const { id }           = req.userData;
       const editAttributes   = req.body;
       const updatedPostsUser = await userUpdated( editAttributes, id );
       
       if(updatedPostsUser !== null){
            res.status(200).json( updatedPostsUser );
       }
       else{
            res.status(400).json({ error : "user not found" }) 
       }
    } catch (error) {
        res.status(400).json({ RouteError: error.message })
    }
};