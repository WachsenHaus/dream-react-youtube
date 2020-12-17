export const api = {
  fetch_search: (keyword) => {
    return fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&type=video&key=AIzaSyCVP2UEis579Lb6aZyZ7zwirDlDM-u-gZo`,
      {
        method: "GET",
        redirect: "follow",
      }
    )
      .then((response) => response.json())
      .then((result) => result.items.map((item) => ({ ...item, id: item.id.videoId })))
      .then((result) => {
        return result;
      })
      .catch((error) => console.log("error", error));
  },
  fetch_most_popular: fetch(
    "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCVP2UEis579Lb6aZyZ7zwirDlDM-u-gZo",
    {
      method: "GET",
      redirect: "follow",
    }
  )
    .then((response) => response.json())
    .then((result) => {
      return result.items;
    })
    .catch((error) => console.log("error", error)),
};
