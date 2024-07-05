export const Validate = (email, password, number = null) => {
  const isEmailvalid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordvalid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (number !== null) {
    const validNumber = /^\d{10}$/.test(number);
    if (!validNumber) {
      return "Phone No. is invalid";
    }
  }

  if (!isEmailvalid) {
    return "Email ID is not valid";
  }
  if (!isPasswordvalid) {
    return "Password is not valid";
  }
  return null;
};
