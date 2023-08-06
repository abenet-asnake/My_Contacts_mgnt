// we are passing four parameters for middleware 
const errorHandler = (error,req,res,next) => {
// we have define the status code 
const statusCode =res.statusCode ? res.statusCode : 500 ;
//creating switch case define the status code 
switch (statusCode) {
    case 400:
        res.json({tittle:"Validation Error", stackTrace: error.stack});
        break ;
    case 401:
        res.json({tittle:"Unauthorized", stackTrace: error.stack});
        break ;
    case 403:
        res.json({tittle:"Forbidden", stackTrace: error.stack});
        break ;
    case 404:
        res.json({tittle:"Not Found", stackTrace: error.stack});
        break ;
    case 500:
        res.json({tittle:"Server Error", stackTrace: error.stack});
        break ;
    default:
        console.log("No Error It is Fine");
        break ;
}

};

module.exports =errorHandler;