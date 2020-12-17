export const api = {
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
      //   a.items.map((item) => {
      //     console.log(`이미지 : ${item.snippet.thumbnails.default.url}`);
      //     console.log(`제목 : ${item.snippet.localized.title}`);
      //     console.log(`채널타이틀 : ${item.snippet.channelTitle}`);
      //     return item;
      //   });
    })
    .catch((error) => console.log("error", error)),
};
