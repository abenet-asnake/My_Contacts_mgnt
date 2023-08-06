// we are passing four parameters for middleware 
const errorHandler = (error,req,res,next) => {
// we have define the status code 
const statusCode =res.statusCode ? res.statusCode : 500 ;
res.json({tittle:"Validation Error", stackTrace: error.stack});
res.json({tittle:"Unauthorized", stackTrace: error.stack});
res.json({tittle:"Forbidden", stackTrace: error.stack});
res.json({tittle:"Not Found", stackTrace: error.stack});
};

module.exports =errorHandler;