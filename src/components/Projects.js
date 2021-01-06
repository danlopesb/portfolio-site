import React from "react";
import NavBar from "./NavBar";
import { useState } from "react";
import styled from "@emotion/styled";
import { Redirect, Switch, Route, Link, useRoute, Router } from "wouter";
import nice from "./../assets/nice.png";
import tfg from "./../assets/tfg.png";
import github from "./../assets/github.png";
import nano from "./../assets/nano.jpg";

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

let ProjectsContainer = styled.div`
  position: absolute;
  width: 60vw;
  height: 350px;
  left: 20vw;
  top: 300px;

  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  //background-color: blue;
`;

let ProjectBoxContainer = styled.div`
  //position: absolute;
  width: 25%;
  height: 350px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  //background-color: green;
`;

let ProjectBox = styled.img`
  margin-top: 20px;
  width: 200px;
  height: 200px;

  background: #ffffff;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  &:hover {
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7);
  }
`;

let QualiBody = styled.text`
  margin-top: 10px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  color: #8c8c8c;
`;

function Projects() {
  return (
    <div>
      <Container>
        <NavBar />
        <Title>Recent Projects</Title>
        <ProjectsContainer>
          <ProjectBoxContainer>
            <ProjectBox
              src={nice}
              onClick={() => {
                window.open(
                  "https://nice.com.br/produto/especialista-nice-2-0/"
                );
              }}
            />
            <QualiBody>Nice App</QualiBody>
          </ProjectBoxContainer>
          <ProjectBoxContainer>
            <ProjectBox
              src={nano}
              onClick={() => {
                window.open("https://www.youtube.com/watch?v=XdcAfbUYf0w");
              }}
            />
            <QualiBody>Nano Proxy Creator</QualiBody>
          </ProjectBoxContainer>
          <ProjectBoxContainer>
            <ProjectBox
              src={tfg}
              style={{ objectFit: "contain" }}
              onClick={() => {
                window.open("https://www.overleaf.com/read/fbryvjccsqvj");
              }}
            />
            <QualiBody>Graduation Thesis</QualiBody>
          </ProjectBoxContainer>
          <ProjectBoxContainer>
            <ProjectBox
              src={github}
              style={{ objectFit: "contain" }}
              onClick={() => {
                window.open("https://github.com/danlopesb");
              }}
            />
            <QualiBody>GitHub Page</QualiBody>
          </ProjectBoxContainer>
        </ProjectsContainer>
      </Container>
    </div>
  );
}

export default Projects;
