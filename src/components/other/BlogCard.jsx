import React, { useState, useEffect } from "react";
import { Blogcard, BlogTitle, BlogDesc } from "./style/blogCard";
import axios from "axios";
const media_url = process.env.REACT_APP_MEDIA_URL;

const BlogCard = ({ imgId, title, excerpt }) => {
  const [imgUrl, setImgUrl] = useState("");
  console.log(imgId);
  useEffect(() => {
    if (imgId) {
      axios
        .get(`${media_url}/${imgId}`)
        .then((res) => {
          console.log(res);
          setImgUrl(res.data.media_details.sizes.full.source_url);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [imgId]);

  return (
    <Blogcard>
      <img src={imgUrl} alt={title} className="img-fluid rounded" />
      <div className="p-3">
        <BlogTitle>{title}</BlogTitle>
        <BlogDesc>
          <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
        </BlogDesc>
      </div>
    </Blogcard>
  );
};

export default BlogCard;
