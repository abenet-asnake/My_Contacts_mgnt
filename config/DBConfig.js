// loading mongoose package
const mongoose= require('mongoose');
// let create arrow functions for db_connect 

const db_connect= async () => { 
    try {
        //there is await db_connect to connect to
        const connect = await mongoose.connect(process.env.DB_STRING);

    } catch (error) {

    }
};
// exporting this conection 
module.exports =db_connect;
