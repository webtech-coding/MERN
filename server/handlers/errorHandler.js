const errorHandler = (error, req, res, next) => {
  res.status(error.statusCode).json({
    status: false,
    statusCode: error.statusCode,
    msg: error.msg
  })
}

module.exports = errorHandler
