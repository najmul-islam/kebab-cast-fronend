import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

// url endpoint
const post_url = process.env.REACT_APP_POSTS_URL;
const categories_url = process.env.REACT_APP_CATEGORIES_URL;

const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  // category
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState();
  const [categoryPost, setCategoryPost] = useState([]);

  const getPosts = () => {
    axios
      .get(post_url)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCategories = () => {
    axios
      .get(categories_url)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPosts();
    getCategories();
  }, []);

    useEffect(() => {
      if (categoryId) {
        axios
          .get(`${post_url}?categories=${categoryId}`)
          .then((res) => {
            setCategoryPost(res.data);
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }, [categoryId]);

  return (
    <PostsContext.Provider
      value={{ posts, categories, categoryPost, setCategoryId}}
    >
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => {
  return useContext(PostsContext);
};
