import React from "react";
import { Route, Switch } from "react-router-dom";
import GlobalStyle from "./theme/GlobalStyle";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import PostsPage from "./pages/PostsPage";
import SinglePostPage from "./pages/SinglePostPage";
import CategoriesPage from "./pages/CategoriesPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";

import GoToTop from "./components/other/GoToTop";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/all" component={PostsPage} />
        <Route exact path="/category/:category" component={CategoriesPage} />
        <Route exact path="/:id" component={SinglePostPage} />
        <Route exact path="/about-us" component={AboutUsPage} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
      <Footer />
      <GoToTop />
    </>
  );
};

export default App;
