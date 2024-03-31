module.exports = async( req, res, next ) => {
    const { fullName, age, email } = req.body;

    const attributes = { fullName, age, email };

    if(Object.values(attributes).includes(undefined)){
        const toComplete = []
        for (const att in attributes) {
           if(attributes[att] === undefined)
            toComplete.push(att.toUpperCase())
        }
        res.status(400).json({ error:`Complete the information in ${toComplete}` })
    }

    else    
        next();
};