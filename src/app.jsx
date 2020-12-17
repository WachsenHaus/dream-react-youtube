import "./app.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import VideoCard from "./components/videoCard";
import { api } from "./components/api";

const App = (props) => {
  const [videos, setVideos] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const videos = await api.fetch_most_popular;
      console.log(videos);
      setVideos(videos);
    }
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <ul>
          {Array.isArray(videos) &&
            videos.map((video) => <VideoCard key={video.id} video={video} />)}
        </ul>
      </main>
    </>
  );
};

export default App;
