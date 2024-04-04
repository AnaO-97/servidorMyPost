require('dotenv').config();
const app = require("./src/app");
const { database } = require("./src/db");
const { PORT_SERVER } = process.env || 3000;

// force : elimina
// alter : actualiza

database.sync({ alter: true }).then((res)=>{
    app.listen(PORT_SERVER, ()=>{
        console.log(`Server running on port ${ PORT_SERVER } XD`);
    });
}).catch((err)=>{
    console.log(`SRC/APP error ${ err }`)
});