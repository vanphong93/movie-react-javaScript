const USER = "USER";
const FILM = "FILM";

export const localServ = {
  user: {
    set: (data) => {
      let jsonData = JSON.stringify(data);
      localStorage.setItem(USER, jsonData);
    },
    get: () => {
      let jsonData = localStorage.getItem(USER);
      if (jsonData) {
        return JSON.parse(jsonData);
      } else {
        return null;
      }
    },
    remove: () => {
      localStorage.removeItem(USER);
    },
  },
  film: {
    set: (data) => {
      let jsonData = JSON.stringify(data);
      localStorage.setItem(FILM, jsonData);
    },
    get: () => {
      let jsonData = localStorage.getItem(FILM);
      if (jsonData) {
        return JSON.parse(jsonData);
      } else {
        return null;
      }
    },
    remove: () => {
      localStorage.removeItem(FILM);
    },
  },
};
