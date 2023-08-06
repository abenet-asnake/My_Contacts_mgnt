// we are passing four parameters for middleware 
const errorHandler = (error,req,res,next) => {
// we have define the status code 
const statusCode =res.statusCode ? res.statusCode : 500 ;
//creating switch case define the status code 
switch (statusCode) {
    case 400:
        break ;
    case 401:
        break ;
    case 403:
        break ;
    case 404:
        break ;
    case 500:
        break ;
    default:
        console.log("No Error It is Fine");
        break ;
}
res.json({tittle:"Validation Error", stackTrace: error.stack});
res.json({tittle:"Unauthorized", stackTrace: error.stack});
res.json({tittle:"Forbidden", stackTrace: error.stack});
res.json({tittle:"Not Found", stackTrace: error.stack});
};

module.exports =errorHandler;