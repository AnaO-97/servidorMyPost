const { User } = require("../db");
const postFindAll = require("./postFindAll");
const bcryptCreate = require("../middlewares/bcryptCreate");
const postUpdatedByUserChange = require("./postUpdatedByUserChange");

module.exports = async ( attributes, id ) => {    
    let allPosts = [];
    let postUpdated = [];
    const userChange = await User.findByPk(id);

    if(userChange){
        for (const att in attributes){
            if(att === "plainPassword"){
                userChange.password = await  bcryptCreate( attributes[ att ] );
            }
            else{                
                userChange[ att ] = attributes[ att ];
            }
        }
        const userChanged = await userChange.save();

        postUpdated = await postUpdatedByUserChange(attributes, id);
        allPosts    = await postFindAll();

        return ({
            userChanged,
            allPosts
        });
    }
    else{
        return null;
    }
};