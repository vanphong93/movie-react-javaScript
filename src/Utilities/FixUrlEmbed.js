export const FixUrl = (newData) => {
  let index = newData.trailer.lastIndexOf("/");
  let index_index = newData.trailer.lastIndexOf("=");
  if (index == -1) {
    let newURL = `https://www.youtube.com/embed/XDpoBc8t6gE`;
    newData.trailer = newURL;
  } else if (index_index != -1) {
    let result = newData.trailer.substr(index_index + 1);
    let newURL = `https://www.youtube.com/embed/${result}`;
    newData.trailer = newURL;
  } else {
    let result = newData.trailer.substr(index);
    let newURL = `https://www.youtube.com/embed${result}`;
    newData.trailer = newURL;
  }
  return newData;
};
