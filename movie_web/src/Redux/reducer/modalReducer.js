let initalState = {
  data: "",
};
export const modalReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case "open_modal":
      console.log('payload: ', payload.trailer);

      //xu li link url trailer
      let clonePayload = { ...payload };
      let index = clonePayload.trailer.lastIndexOf("/");
      let index_index = clonePayload.trailer.lastIndexOf("=");
      if (index == -1) {
        let newURL = `https://www.youtube.com/embed/XDpoBc8t6gE`;
        clonePayload.trailer = newURL;
        return { ...state, data: clonePayload };
      } else if (index_index != -1) {
        let result = clonePayload.trailer.substr(index_index + 1);
        let newURL = `https://www.youtube.com/embed/${result}`;
        clonePayload.trailer = newURL;

        return { ...state, data: clonePayload };
      } else {
        let result = clonePayload.trailer.substr(index);
        let newURL = `https://www.youtube.com/embed${result}`;
        clonePayload.trailer = newURL;
        return { ...state, data: clonePayload };
      }

    default:
      return { ...state };
  }
};
