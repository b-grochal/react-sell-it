import http from "./http";

export const signUp = async (
  firstName,
  familyName,
  phoneNumber,
  email,
  password,
  confirmPassword
) => {
  return await http.post("sign-up", {
    firstName,
    familyName,
    phoneNumber,
    email,
    password,
    confirmPassword,
  });
};

export const signIn = async (email, password) => {
  return await http.post("sign-in", {
    email,
    password,
  });
};
