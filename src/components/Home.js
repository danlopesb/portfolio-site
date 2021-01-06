import React from "react";
import NavBar from "./NavBar";
import { useState } from "react";
import styled from "@emotion/styled";
import { Redirect, Switch, Route, Link, useRoute, Router } from "wouter";
import background from "./../assets/dottedBackground.png";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";

let Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0px;
  top: 0px;

  background: linear-gradient(180deg, #ffffff 20.38%, #e5e5e5 100%);
`;

let Name = styled.div`
  position: absolute;
  width: 440px;
  height: 96px;
  left: 168px;
  top: 327px;

  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 96px;
  /* identical to box height */

  color: #0c0a5d;
`;

let Title = styled.div`
  position: absolute;
  width: 500px;
  height: 48px;
  left: 168px;
  top: 423px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 48px;
  /* identical to box height */

  color: #0c0a5d;
`;

let ButtonsContainer = styled.div`
  position: absolute;
  width: 400px;
  height: 48px;
  left: 168px;
  top: 551px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  //background-color: red;
`;

let Button = styled.button`
  //position: absolute;
  width: 145px;
  height: 50px;
  //left: 168px;
  //top: 551px;

  background: ${(props) => (props.primary ? "#FF9442" : "#FFFFFF")};
  //box-shadow: 3px 3px 6px rgba(255, 148, 66, 0.25);
  border-radius: 32px;

  outline: none;
  border: ${(props) => (props.primary ? "none" : "2px solid #FF9442")};

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: ${(props) => (props.primary ? "#FFFFFF" : "#FF9442")};

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  &:hover {
    color: #998a8a;
  }
`;

let Retangulo = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  left: ${(props) => (props.left ? "733px" : "933.55px")};
  top: ${(props) => (props.top ? "173.55px" : "353.55px")};

  background: linear-gradient(135.04deg, #ffa35c 10%, #ff9442 90%);
  /* background: ${(props) =>
    props.opaco
      ? "linear-gradient(135.04deg, #ffa35c 0%, #ff9442 99.98%)"
      : "linear-gradient(135.04deg, #ffa35c 10%, #ff9442 90%)"}; */
  border-radius: 16px;
  transform: rotate(-45deg);
`;

let Dots = styled.img`
  position: absolute;
  width: 150px;
  height: 243px;
  left: 80vw;
  top: ${(props) => (props.top ? "96px" : "541px")};
`;

function Home() {
  return (
    <div>
      <Container>
        <NavBar />
        <Name>Danilo Lopes</Name>
        <Title>Full Stack Developer and Computer Engineer</Title>
        <ButtonsContainer>
          <Button
            primary
            onClick={() => {
              window.open(
                "http://www.linkedin.com/in/danilo-lopes-barbosa-48643113b"
              );
            }}
          >
            <RiLinkedinBoxLine style={{ height: "30px", width: "30%" }} />
            LinkedIn
          </Button>
          <Button
            onClick={() => {
              window.open("http://lattes.cnpq.br/2927241181154812");
            }}
          >
            <AiOutlineSearch style={{ height: "30px", width: "30%" }} />
            CV Lattes
          </Button>
        </ButtonsContainer>
        <Retangulo top left></Retangulo>
        <Retangulo top></Retangulo>
        <Dots src={background} />
        <Dots src={background} top />
      </Container>
    </div>
  );
}

export default Home;
