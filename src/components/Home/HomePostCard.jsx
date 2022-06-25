import React, { useState, useEffect } from "react";
import { Postcard, PostTitle } from "./style/homePostCard";
import axios from "axios";
const media_url = process.env.REACT_APP_MEDIA_URL;

const HomePostCard = ({ imgId, title }) => {
//   const [imgUrl, setImgUrl] = useState("");
//   console.log(imgId);
//   useEffect(() => {
//     if (imgId) {
//       axios
//         .get(`${media_url}/${imgId}`)
//         .then((res) => {
//           console.log(res);
//           setImgUrl(res.data.media_details.sizes.full.source_url);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
//   }, [imgId]);

  return (
    <Postcard>
      <img src={imgId} alt={title} className="img-fluid rounded" />
      <div className="p-3">
        <PostTitle>{title}</PostTitle>
      </div>
    </Postcard>
  );
};

export default HomePostCard;
