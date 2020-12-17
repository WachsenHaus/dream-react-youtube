import React, { useRef } from "react";
import styles from "./videoCard.module.css";
const VideoCard = (props) => {
  const video = props.video.snippet;
  const id = props.video.id;
  const liRef = useRef();

  const onLiClick = () => {
    console.log(video.id);
    return (
      <>
        <div>asdfasdfadsf</div>
      </>
    );
  };
  return (
    <>
      <li onClick={onLiClick} ref={liRef} className={styles.card}>
        <div className={styles.column}>
          <img src={video.thumbnails.default.url} alt="동영상의 썸네일 이미지입니다." />
        </div>
        <div className={styles.column}>
          <h4 className="title">{video.title}</h4>
          <h5 className="sub_title">{video.channelTitle}</h5>
        </div>
      </li>
    </>
  );
};

export default VideoCard;
