const validateName = (name) => {
  const nameRegex = /^[A-Za-z\s'-]+$/;
  return nameRegex.test(name);
};

const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,}$/;
  return passwordRegex.test(password);
};

export { validateName, validateEmail, validatePassword };
