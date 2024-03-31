const postFind = require("../controllers/postFindOne");
const userFind = require("../controllers/userFindOne");
const favoriteGetAll = require("../controllers/favoriteGetAll");

module.exports = async ( getBy, email, id ) => {
    const entity = (( getBy === "user" )
        ? await userFind(email)
        : await postFind(id)
    );    
    
    if( entity === null){
        return({ error : "entity not found" }) 
    }
    else{
        const responseAllFav = await favoriteGetAll( getBy, entity );

        if( responseAllFav )
            return( responseAllFav );

        else
            return null;
    }
};