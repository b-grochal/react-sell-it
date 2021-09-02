import http from "./http";

export const getAdverts = () => {
  return http.get("adverts");
};

export const getUserAdverts = (userToken) => {
  return http.get("adverts/my-adverts", {
    headers: { Authorization: `Bearer ${userToken}` },
  });
};
