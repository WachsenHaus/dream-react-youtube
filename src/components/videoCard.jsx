import React, { useEffect, useState } from "react";
import { api } from "./api";

const VideoCard = (props) => {
  const video = props.video.snippet;
  return (
    <>
      <li>
        <div className="column">
          <img src={video.thumbnails.default.url} alt="동영상의 썸네일 이미지입니다." />
        </div>
        <div className="column">
          <h1 className="title">{video.title}</h1>
          <h2 className="sub_title">{video.channelTitle}</h2>
        </div>
      </li>
    </>
  );
};

export default VideoCard;
