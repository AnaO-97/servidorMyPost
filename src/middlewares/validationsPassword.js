module.exports = ( req, res, next ) => {
    const { plainPassword } = req.body;
    
    const regex = /^(?=.*[a-zA-Z]{3})(?=.*\d{3}).{6,}$/;
    
    const validations = [
        plainPassword !== undefined,
        plainPassword ? plainPassword.length !== 0 : false,
        plainPassword ? plainPassword.length >= 6 : false,  
        regex.test(plainPassword)
    ]

    if(!validations[0] || !validations[1])
        return res.status(400).json({ error: "Please enter a password" })
    if(!validations[2])
        return res.status(400).json({ error: "Enter minimum 6 characters" })
    if(!validations[3])
        return res.status(400).json({ error: "Enter at least 3 letters and 3 numbers" })

    else {
        next();   
    }
}