import "./app.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import { api } from "./components/api";
import VideoItem from "./components/video_item/video_item";
import VideoList from "./components/video_list/video_list";

const App = (props) => {
  const [videos, setVideos] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const videos = await api.fetch_most_popular;
      setVideos(videos);
    }
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      {Array.isArray(videos) && <VideoList videos={videos} />}
    </>
  );
};

export default App;
