const postUpdated = require("../controllers/postUpdated");

module.exports = async ( req, res ) => {
    try {
       const { id }      = req.params;
       const attributes  = req.body;
       const updatedPost = await postUpdated( attributes, id );
       
       if(updatedPost !== null){
            res.status(200).json( updatedPost );
       }
       else{
            res.status(400).json({ error : "post not found" }) 
       }
    } catch (error) {
        res.status(400).json({ RouteError: error.message })
    }
};