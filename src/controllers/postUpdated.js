const favoritePostAdd = require("./favoritePostAdd");
const favoriteSearchAll = require("../handlers/favoriteSearchAll");
const { Post, User, Favorite } = require("../db");

module.exports = async ( attributes, id ) => {  
    const postChange = await Post.findByPk(id);
    let   attributesChanged   = {};
    let   postChangedComplete = {};

    if(postChange){
        for (const att in attributes){               
            postChange[ att ] = attributes[ att ];
        }
                
        await postChange.save();
        
        attributesChanged = {
            UserId    : postChange.UserId,
            likes     : postChange.likes, 
            title     : postChange.title, 
            content   : postChange.content, 
            deletedAt : postChange.deletedAt,
        }        

        postChangedComplete = await Post.create( attributesChanged );        
       
        const userLikes = await favoriteSearchAll("post", null, postChange.id);
        if( userLikes.secondEntities.length > 0 ){
            userLikes.secondEntities.forEach(async( userLike )=>{            
                await favoritePostAdd( userLike.id, postChangedComplete.id );
            })
        }

        postChangedComplete = await Post.findByPk(
            postChangedComplete.id,
            {
                include: {
                    model     : User,
                    attributes: ['id', 'fullName', 'color', 'age', 'email'],
                }
            }
        );

        await postChange.destroy();

        return {
            idBefore  : id,
            postAfter : postChangedComplete
        };
    }
    else{
        return null;
    }
};