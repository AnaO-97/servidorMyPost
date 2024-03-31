const { Post, User } = require("../db");
const postFind = require("./postFindOne");
const favoriteSearchAll = require("../handlers/favoriteSearchAll");

module.exports = async() => {
    const allPosts = await Post.findAll(
      {
        include: {
          model     : User,
          attributes: [ 'id', 'fullName', 'color',  'age', 'email' ], 
        },
        order: [
          [ 'createdAt', 'DESC' ]
        ],
      }
    );

    allPosts.forEach( async( post ) => { 
      const findPost = await postFind( post.id );
      const likesCount = await favoriteSearchAll( "post", null, post.id  );
      
      findPost.likes = likesCount.count;
      await findPost.save();

      post = { ...findPost };

      // console.log(likesCount.mainEntity.title, "*****", likesCount.count);
    })

    return allPosts;
}
