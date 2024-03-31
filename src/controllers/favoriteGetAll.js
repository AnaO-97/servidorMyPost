const { Favorite, User, Post } = require("../db");

const fixData = async( arrayData, mainEntity ) => {    
    let   newArrayData = [];
    const secondEntity = (( mainEntity.name === "UserId" )
        ? "PostId" : "UserId"
    );

    for (let index = 0; index < arrayData.length; index++) {
        const record = arrayData[index];
        let extendedData = {};

        if( mainEntity.name === "UserId" ){
            extendedData = await Post.findByPk( 
                record[ secondEntity ], 
                { 
                    include: {
                        model     : User,
                        attributes: [ 'id', 'fullName', 'color', 'age', 'email' ],
                    }
                },
            )
        }
        if( mainEntity.name === "PostId" ){
            extendedData = await User.findByPk( 
                record[ secondEntity ],
                {
                    attributes : [ 'id', 'fullName', 'color', 'age', 'email' ],
                }
            )
        }  
        
        newArrayData.push( extendedData );
    }

    return newArrayData;     
};

module.exports = async( getBy, entity ) => {
    const nameId = (( getBy === "user" )
        ? "UserId" 
        : "PostId"
    );

    const { count, rows } = await Favorite.findAndCountAll({
        where   : { [ nameId ] : entity.id },
    })

    const mainEntity = {
        name : nameId,
        id   : entity.id,
    }

    const response = await fixData( rows, mainEntity )

    return ({ 
        count, 
        mainEntity     : entity, 
        secondEntities : response 
    });
};