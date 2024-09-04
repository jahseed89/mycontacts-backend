const {constants} = require('../../constants ')

// ********* @Using switch statement **************
// const errorHandler = (err, req, res, next) => {
//   const statusCode = res.statusCode ? res.statusCode : 500;

//   switch (statusCode) {
//     case constants.VALIDATION_ERROR:
//       res.json({ title: "Validation fail", message: err.message });
//       break;
//     case constants.NOT_FOUND:
//       res.json({
//         title: "Not Found",
//         message: err.message,
//         stackTrace: err.stack,
//       });
//       case constants.UNAUTHORIZED:
//       res.json({
//         title: "Not Unauthorized",
//         message: err.message,
//         stackTrace: err.stack,
//       });
//       case constants.FORBIDEEN:
//       res.json({
//         title: "Not Forbideen",
//         message: err.message,
//         stackTrace: err.stack,
//       });
//       case constants.SERVER_ERROR:
//       res.json({
//         title: "Server Error",
//         message: err.message,
//         stackTrace: err.stack,
//       });

//     default:
//       break;
//   }
// };

// ******** Using if statement *****************
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  if (statusCode === constants.VALIDATION_ERROR) {
    res.json({ title: "Validation fail", message: err.message });
  } 
  else if (statusCode === constants.NOT_FOUND) {
    res.json({
      title: "Not Found",
      message: err.message,
      stackTrace: err.stack,
    });
  } 
  else if (statusCode === constants.UNAUTHORIZED) {
    res.json({
      title: "Unauthorized",
      message: err.message,
      stackTrace: err.stack,
    });
  } 
  else if (statusCode === constants.FORBIDDEN) {
    res.json({
      title: "Forbidden",
      message: err.message,
      stackTrace: err.stack,
    });
  } 
  else if (statusCode === constants.SERVER_ERROR) {
    res.json({
      title: "Server Error",
      message: err.message,
      stackTrace: err.stack,
    });
  } 
  else {
    // Handle any other status codes that aren't covered by the specific cases
    res.json({
      title: "Error",
      message: err.message,
      stackTrace: err.stack,
    });
  }
};

module.exports = errorHandler;
