const mongoose = require("mongoose");

const dbConnect = async () =>{
    try {
        dbConnection = await mongoose.connect(process.env.CONNECTION_STRING);
        if (dbConnect){
            console.log(`Database connection established: `);
            console.log(`-Host: ${dbConnection.connection.host}`);
            console.log(`-Name: ${dbConnection.connection.name}`);
        }
    } catch (error) {
        console.log("There was an error trying to connect to the database");
    }
} 

module.exports = dbConnect;