const bcrypt = require("bcryptjs");


module.exports = async ( plainPassword ) => {    
    try {
        const saltRounds = 10;
        const passwordHash = await bcrypt.hash( plainPassword, saltRounds );
        
        console.log("Correct bcryptCreate:", passwordHash);
        return passwordHash;

    } catch (error) {        
        console.log("Error bcryptCreate:", error);
        return( error );
    }
};