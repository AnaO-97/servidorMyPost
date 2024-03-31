const { Post, Favorite } = require("../db");

module.exports = async( post, user ) => {
    const [ postUncheck ] = await Favorite.findAll({
        where : {
            UserId : user,
            PostId : post,
        }
    })

    if ( postUncheck !== null){
        await postUncheck.destroy();
    
        const postLike = await Post.findByPk( post );
        postLike.likes = postLike.likes - 1;
        await postLike.save();

        return postUncheck;
    }
    else{
        return null;
    }
}