import { PangeaErrors } from "pangea-node-sdk";

class HttpError extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
  }
}

const handleError = (err, req, res, next) => {
  if (err instanceof PangeaErrors.APIError) {
    res.status(422).json(err.response.summary);
  } else {
    res.status(err.status || 500).json(err);
  }
};

export { HttpError, handleError };
