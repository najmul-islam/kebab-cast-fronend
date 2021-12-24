import React from "react";
import styled from "styled-components";
import Heading from "../other/Heading";
import Devider from "../other/Devider";
import LiteratureBlogs from "./LiteratureBlogs";

const LiteratureSection = () => {
  return (
    <LiteratureSec>
      <div className="container">
        <Heading head="Literature" subhead="Literature related articles" />
        <Devider />
        <LiteratureBlogs />
      </div>
    </LiteratureSec>
  );
};

export default LiteratureSection;

const LiteratureSec = styled.div``;
