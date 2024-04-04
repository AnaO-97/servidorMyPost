require('dotenv').config();
const app = require("./src/app");
const { database } = require("./src/db");
const { PORT } = process.env || 3000;

// force : elimina
// alter : actualiza

database.sync({ alter: true }).then((res)=>{
    app.listen(PORT, '0.0.0.0', ()=>{
        console.log(`Server running on port ${ PORT } XD`);
    });
}).catch((err)=>{
    console.log(`SRC/APP error ${ err }`)
});