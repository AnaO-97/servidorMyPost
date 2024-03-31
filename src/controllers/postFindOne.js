const { Post } = require("../db");

module.exports = async( id ) => {
    const post = await Post.findByPk( id );

    // console.log("post",post.title);
    
    return post;
};