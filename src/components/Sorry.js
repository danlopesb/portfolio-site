import React from "react";
import styled from "@emotion/styled";

let Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0px;
  top: 0px;

  background-color: #ff9442;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

let Title = styled.div`
  //position: absolute;
  width: 100%;
  height: 48px;
  //left: 168px;
  //top: 423px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  /* identical to box height */

  color: #0c0a5d;
  //background-color: blue;

  display: flex;
  justify-content: center;
  align-items: center;
`;

function Sorry() {
  return (
    <Container>
      <Title>Coming Soon!</Title>
      <Title style={{ fontSize: "18px" }}>
        The mobile version of this site is under construction
      </Title>
    </Container>
  );
}

export default Sorry;
