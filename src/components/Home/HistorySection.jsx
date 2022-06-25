import React from "react";
import styled from "styled-components";
import Heading from "../helper/Heading";
import Devider from "../helper/Devider";
import HistoryPosts from "./HistoryPosts";

const HistorySection = () => {
  return (
    <HistorySec>
      <div className="container">
        <Heading head="History" subhead="Historical articles" />
        <Devider />
        <HistoryPosts />
      </div>
    </HistorySec>
  );
};

export default HistorySection;

const HistorySec = styled.section`
  background-image: url(img/bar1.png), url(img/bar2.png);
  background-position: left top, right bottom;
  background-repeat: no-repeat;
  background-size: auto auto, auto;
  padding: 10% 0;
`;
