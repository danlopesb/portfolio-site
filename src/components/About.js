import React from "react";
import NavBar from "./NavBar";
import { useState } from "react";
import styled from "@emotion/styled";
import { Redirect, Switch, Route, Link, useRoute, Router } from "wouter";
import mailIcon from "./../assets/mailIcon.png";
import placeIcon from "./../assets/placeIcon.png";
import profile from "./../assets/profile.jpg";

let Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0px;
  top: 0px;

  background: linear-gradient(180deg, #ffffff 20.38%, #e5e5e5 100%);
`;

let Intro = styled.div`
  position: absolute;
  width: 127px;
  height: 48px;
  left: 738px;
  top: 150px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 48px;
  /* identical to box height */

  color: #ff9442;
`;

let Title1 = styled.div`
  position: absolute;
  width: 241px;
  height: 72px;
  left: 738px;
  top: 200px;

  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 72px;
  /* identical to box height */

  color: #0c0a5d;
`;

let Title2 = styled.div`
  position: absolute;
  width: 275px;
  height: 36px;
  left: 738px;
  top: 390px;

  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height */

  color: #0c0a5d;
`;

let Body1 = styled.div`
  position: absolute;
  width: 535px;
  height: 96px;
  left: 738px;
  top: 270px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  color: #8c8c8c;
`;

let ContactInfoContainer = styled.div`
  position: absolute;
  left: 738px;
  top: 430px;

  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 535px;
  height: 80px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

let MailIcon = styled.img`
  height: 19.04296875px;
  width: 25px;
`;

let PlaceIcon = styled.img`
  height: 35.56px;
  width: 25px;
`;

let Profile = styled.img`
  position: absolute;
  width: 440px;
  height: 657px;
  left: 176px;
  top: 106px;
  object-fit: contain;

  border-radius: 18px;
`;

let SmallSquare = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  left: 150px;
  top: 90px;

  background: ${(props) =>
    props.opaco ? "#ff9442" : "rgba(255, 148, 66, 0.5)"};
  border-radius: 8px;
`;

function About() {
  return (
    <div>
      <Container>
        <NavBar />
        <Intro>My Intro</Intro>
        <Title1>About Me</Title1>
        <Body1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna duis
          convallis convallis tellus id interdum velit laoreet id. Et tortor at
          risus viverra adipiscing. Nullam vehicula ipsum a arcu cursus vitae.
        </Body1>
        <Title2>Contact</Title2>
        <ContactInfoContainer>
          <div
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <MailIcon src={mailIcon} />
            <text>danilolb42@gmail.com</text>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <PlaceIcon src={placeIcon} />
            <text>Itajubá, Minas Gerais, Brasil</text>
          </div>
        </ContactInfoContainer>
        <SmallSquare opaco />
        <SmallSquare style={{ left: "536px", top: "679px" }} />
        <Profile src={profile} />
      </Container>
    </div>
  );
}

export default About;
