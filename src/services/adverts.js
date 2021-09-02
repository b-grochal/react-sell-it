import http from "./http";

export const getAdverts = () => {
  return http.get("adverts");
};

export const getUserAdverts = (userToken) => {
  return http.get("adverts/my-adverts", {
    headers: { Authorization: `Bearer ${userToken}` },
  });
};

export const getAdvertDetails = (advertId) => {
  return http.get(`adverts/${advertId}/details`);
};

export const createAdvert = (userToken, advert) => {
  return http.post("adverts", advert, {
    headers: { Authorization: `Bearer ${userToken}` },
  });
};
