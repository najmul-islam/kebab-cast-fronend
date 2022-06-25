import React from "react";
import Heading from "../helper/Heading";
import Devider from "../helper/Devider";
import TagContainer from "./TagContainer";

const CategorieSection = () => {
  return (
    <section className="container py-5 my-5 text-center">
      <Heading head="Categories" subhead="Our articles" />
      <Devider />
      <TagContainer />
    </section>
  );
};

export default CategorieSection;
