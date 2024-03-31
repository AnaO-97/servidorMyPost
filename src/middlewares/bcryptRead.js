const bcrypt = require("bcryptjs");

module.exports = async( enteredPassword, databasePassword ) => {
    try {
        const isPassword = await bcrypt.compare( enteredPassword, databasePassword );

        if (isPassword) {
            console.log("Correct bcryptRead: Right password");
            return true;
        } 
        else {
            console.log("Error bcryptRead: Wrong password");
            return false;
        }
    } catch (error) {
        console.log("Error bcryptRead: ", error);
        return error;
    }
};