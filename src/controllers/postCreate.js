const { Post, User } = require("../db");

module.exports = async( attributes ) => {
    const auxi = await Post.create(attributes);

    const newPost = await Post.findByPk(
        auxi.id, 
        {
            include: {
                model     : User,
                attributes: ['id', 'fullName', 'color', 'age', 'email'],
            }
        }
    );

    return newPost;
}