import { HttpError } from "../lib/http-error.js";

const validateName = (name, next) => {
  const nameRegex = /^[A-Za-z\s'-]+$/;
  if (!nameRegex.test(name)) {
    const error = new HttpError(
      "Please ensure that the First and Last Name fields contains only letters.",
      422
    );
    return next(error);
  }
};

const validateEmail = (email, next) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    const error = new HttpError("Please ensure that the email is valid.", 422);
    return next(error);
  }
};

const validatePhone = (phone, next) => {
  const phoneRegex =
    /^(\+\d{1,4})?[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,9}[-.\s]?\d{1,9}$/;
  if (!phoneRegex.test(phone)) {
    const error = new HttpError(
      "Please ensure that the phone number is valid. Example 18001234567",
      422
    );
    return next(error);
  }
};

const validatePassword = (password, next) => {
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,}$/;
  if (!passwordRegex.test(password)) {
    const error = new HttpError(
      `
          Please ensure that your password contains:
          At least one digit (0-9).
          At least one lowercase letter (a-z).
          At least one uppercase letter (A-Z).
          At least one of the specified special characters (@, #, $, %, ^, &, +, =, !).
          A minimum length of 8 characters`,
      422
    );
    return next(error);
  }
};

export { validateName, validateEmail, validatePassword, validatePhone };
