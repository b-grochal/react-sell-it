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

export const updateAdvert = (userToken, advertId, advertData) => {
  return http.put(`adverts/${advertId}`, advertData, {
    headers: { Authorization: `Bearer ${userToken}` },
  });
};

export const deleteAdvert = (userToken, advertId) => {
  return http.delete(`adverts/${advertId}`, {
    headers: { Authorization: `Bearer ${userToken}` },
  });
};
