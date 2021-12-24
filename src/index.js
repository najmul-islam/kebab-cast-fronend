import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./hooks/ScrollToTop";
import { PostsProvider } from "./contexts/postsContext";

import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

ReactDOM.render(
  <PostsProvider>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </PostsProvider>,
  document.getElementById("root")
);
