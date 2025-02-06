const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
}

const errorHandler = (err, req, res, next) => { 
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message=err.message;

    if (err.name === 'CastError' && err.kind === 'ObjectId') {
        message = 'Resource not found. Invalid ID';
        statusCode = 404;
    }   
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });
}    
export { notFound, errorHandler };