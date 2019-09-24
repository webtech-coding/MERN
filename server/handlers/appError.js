class AppError extends Error {
  constructor(msg, statusCode) {
    super(msg)

    this.statusCode = statusCode || 500
    this.msg = msg

    Error.captureStackTrace(this, this.constructio)
  }
}

module.exports = AppError
