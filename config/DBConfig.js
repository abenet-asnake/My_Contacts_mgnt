// loading mongoose package
const mongoose= require('mongoose');
// let create arrow functions for db_connect 

const db_connect= async () => { 
    try {
        //there is await db_connect to connect to
        const connect = await mongoose.connect(process.env.DB_STRING);
        // console log to display host and database name 
        console.log("The Database is connected: ", connect.connection.host, connect.connection.name);
    } catch (error) {
            console.log(error);
            process.exit(1);
    }
};
// exporting this Connection  
module.exports =db_connect;
