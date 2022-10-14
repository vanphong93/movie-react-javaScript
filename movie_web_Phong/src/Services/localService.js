const USER = "USER";

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
    remove:() => { 
      localStorage.removeItem(USER)
     }
  },
};
  