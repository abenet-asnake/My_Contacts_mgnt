// we are passing four parameters for middleware 
const errorHandler = (error,req,res,next) => {
// we have define the status code 
const statusCode =res.statusCode ? res.statusCode : 500 ;
res.json({message: error.message, stackTrace: error.stack});
};

module.exports =errorHandler;