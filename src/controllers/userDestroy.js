const { User } = require("../db");

module.exports = async( id ) => {
    const userToDelete = await User.findByPk( id );

    if( userToDelete !== null ){
        await userToDelete.destroy();
        return userToDelete;
    }
    else{
        return null;
    }  
};