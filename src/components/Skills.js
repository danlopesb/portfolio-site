import React from "react";
import NavBar from "./NavBar";
import { useState } from "react";
import styled from "@emotion/styled";
import { Redirect, Switch, Route, Link, useRoute, Router } from "wouter";
import node from "./../assets/node.png";
import react from "./../assets/react-2.svg";
import arduino from "./../assets/arduino.png";
import cadence from "./../assets/cadence.png";

let Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0px;
  top: 0px;

  background: linear-gradient(180deg, #ffffff 20.38%, #e5e5e5 100%);
`;

let Title = styled.div`
  position: absolute;
  width: 100vw;
  height: 72px;
  left: 0px;
  top: 150px;

  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 72px;
  /* identical to box height */

  display: flex;
  justify-content: center;
  align-items: center;

  color: #0c0a5d;
`;

let TechsContainer = styled.div`
  position: absolute;
  width: 60vw;
  height: 350px;
  left: 20vw;
  top: 300px;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  //background-color: blue;
`;

let TechBox = styled.img`
  width: 200px;
  height: 200px;

  background: #ffffff;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  &:hover {
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7);
  }
`;

function Skills() {
  return (
    <div>
      <Container>
        <NavBar />
        <Title>Technologies I Use</Title>
        <TechsContainer>
          <TechBox
            src={react}
            onClick={() => {
              window.open("https://reactjs.org/");
            }}
          />
          <TechBox
            src={node}
            style={{ objectFit: "contain" }}
            onClick={() => {
              window.open("https://nodejs.org/en/");
            }}
          />
          <TechBox
            src={arduino}
            style={{ objectFit: "contain" }}
            onClick={() => {
              window.open("https://www.arduino.cc/");
            }}
          />
          <TechBox
            src={cadence}
            style={{ objectFit: "contain" }}
            onClick={() => {
              window.open(
                "https://www.cadence.com/ko_KR/home/tools/custom-ic-analog-rf-design/circuit-design/virtuoso-analog-design-environment.html"
              );
            }}
          />
        </TechsContainer>
      </Container>
    </div>
  );
}

export default Skills;
