const { User } = require("../db");

module.exports = async(email) => {
    const user = await User.findOne({ where: { email } });
    
    // console.log("user",user.fullName);

    return user;
};