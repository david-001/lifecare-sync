class HttpError extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
  }
}

const handleError = (err, req, res, next) => {
  res.status(err.status || 500).json(err);
};

export { HttpError, handleError };
