const { User } = require("../db");

module.exports = async( attributes ) => {
    const newUser = await User.create(attributes);

    return newUser;
};