const validation = (userData) => {
  let errors = {};

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,4}$/i.test(userData.email)) {
    errors.email = "As the space guardian, your invalid email is unacceptable";
  }
  if (!userData.email) {
    errors.email = "State your email, traveler. It is required";
  }
  if (userData.email.length > 35) {
    errors.email =
      "Attention, spacefarer! Your email cannot surpass the 35 character limit";
  }
  if (!/.*\d+.*/.test(userData.password)) {
    errors.password =
      "To ensure security, your password must contain at least one number";
  }
  if (!userData.password) {
    errors.password =
      "As a guardian of the space, I demand that you enter a password";
  }
  if (userData.password.length < 7 || userData.password.length > 14) {
    errors.password =
      "Protecting the galaxy requires passwords between 7-14 characters";
  }
  return errors;
};

export default validation;
