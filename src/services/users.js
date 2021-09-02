import http from "./http";

export const signUp = (
  firstName,
  familyName,
  phoneNumber,
  email,
  password,
  confirmPassword
) => {
  return http.post("sign-up", {
    firstName,
    familyName,
    phoneNumber,
    email,
    password,
    confirmPassword,
  });
};

export const signIn = (email, password) => {
  return http.post("sign-in", {
    email,
    password,
  });
};
