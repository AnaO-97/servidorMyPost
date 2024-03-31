const { User, Post } = require("../db");

module.exports = async( attUserChange, idUserChange ) => {
    const postsByUser = await Post.findAll({
        where      : { UserId : idUserChange }, 
        attributes : [ 'id', 'title' ],
        include    : { 
            model  : User,
            attributes: ['id', 'fullName', 'color', 'age', 'email'], 
        },
    })

    for (let postIndex = 0; postIndex < postsByUser.length; postIndex++) {
        let postChange  = postsByUser[ postIndex ];
        let postChanged = {};

        for (const att in attUserChange) {
            postChange.User[ att ] = attUserChange[ att ]
        } 
        
        postChanged = await postChange.save();
    }

    return postsByUser;
}