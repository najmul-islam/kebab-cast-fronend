import styled from "styled-components";
export const DeviderBox = styled.div`
  width: 100%;
  position: relative;
`;

export const Line = styled.div`
  &:before {
    content: "";
    background-color: #461616;
    height: 2px;
    width: 40px;
    position: absolute;
    transform: translateY(-50%);
    left: 44.5%;
  }
  &:after {
    content: "";
    background-color: #461616;
    height: 2px;
    width: 40px;
    position: absolute;
    transform: translateY(-50%);
    right: 44.5%;
  }
`;

export const Box = styled.div`
  height: 0;
  width: 0;
  margin: 0 auto;
  position: relative;

  &:before {
    border-color: #461616 transparent transparent;
    border-image: none;
    border-style: solid;
    border-width: 8px;
    position: absolute;
    left: -8px;
    content: "";
    height: 0;
    top: -16px;
    transform: rotate(180deg);
    width: 0;
  }

  &:after {
    border-color: #461616 transparent transparent;
    border-image: none;
    border-style: solid;
    border-width: 8px;
    content: "";
    height: 0;
    position: absolute;
    left: -8px;
    top: 0;
    width: 0;
  }
`;
