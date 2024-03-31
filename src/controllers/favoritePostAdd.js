const { Post, Favorite } = require("../db");

module.exports = async( UserId, PostId ) => {
    const postAddUser = await Favorite.create({
        UserId, PostId,
    });

    const postLike = await Post.findByPk( PostId );
    postLike.likes = postLike.likes + 1;
    await postLike.save();

    return postAddUser;
}