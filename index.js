const app = require("./src/app");
const { PORT } = require("./src/config");
const { database } = require("./src/db");

// force : elimina
// alter : actualiza

// database.sync({ alter: true }).then((res)=>{
    app.listen(PORT, "0.0.0.0", ()=>{
        console.log(`Server running on port ${ PORT } XD`);
    });
// }).catch((err)=>{
//     console.log(`SRC/APP error ${ err }`)
// });