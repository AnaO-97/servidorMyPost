const { Post } = require("../db");

module.exports = async( id ) => {
    const postToDelete = await Post.findByPk( id );

    if( postToDelete !== null ){
        await postToDelete.destroy();
        return postToDelete;
    }
    else{
        return null;
    }  
};