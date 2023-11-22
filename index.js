var _ = require('lodash');

const errorCodeParser = (err) => {
    let polishedError = {
        code: 500,
        message: 'Something went wrong !!'
    };
    try {
        let errorMessage = _.get(err, 'body.error', null);
        let errorCase = "UNKNOWN";
        let errArray = [];
        if (_.get(err, 'raw.message', null)) {
            errArray = err.raw.message.split(" ");
        } else if (err.message) {
            errArray = err.message.split(" ");
        }
        errorCase = errArray.length > 0 ? errArray[0] : [];
        if (errArray.length) {
            polishedError.message = `${errArray.slice(1).join(" ")}`;
        }
        switch (errorCase) {
            case 'BAD_REQUEST':
            case 'BAD_REQUEST_TO_IGNORE':
                polishedError.code = 400;
                break;
            case 'NOT_FOUND':
                polishedError.code = 404;
                break;
            case 'FORBIDDEN':
                polishedError.code = 403;
                break;
            case 'CONFLICT':
                polishedError.code = 409;
                break;
            case 'UNPROCESSABLE_CONTENT':
                polishedError.code = 422;
                break;
            default:
                polishedError.code = 500;
                polishedError.message = errorMessage ? errorMessage : polishedError.message;
                break;
        }
        return polishedError;
    } catch (err) {
        return polishedError;
    }
}

module.exports = errorCodeParser;