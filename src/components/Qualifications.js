import React from "react";
import NavBar from "./NavBar";
import { useState } from "react";
import styled from "@emotion/styled";
import { Redirect, Switch, Route, Link, useRoute, Router } from "wouter";
import education from "./../assets/education.png";
import job from "./../assets/job.png";
import calendar from "./../assets/calendar.png";
import research from "./../assets/research.svg";
import { AiOutlineAreaChart } from "react-icons/ai";

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

let SmallContainer = styled.div`
  position: absolute;
  width: 70vw;
  height: 350px;
  left: 15vw;
  top: 280px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  //background-color: green;
`;

let SmallColumnContainer = styled.div`
  width: 30%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  //background-color: pink;
`;
let QualiTitle = styled.text`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 42px;
  /* identical to box height */

  color: #0c0a5d;
`;

let QualiTitleSmall = styled.text`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 36px;
  text-align: center;
  /* identical to box height */
  padding-top: 20px;
  padding-bottom: 10px;

  color: #0c0a5d;
`;

let QualiBody = styled.text`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  color: #8c8c8c;
`;

function Qualifications() {
  return (
    <div>
      <Container>
        <NavBar />
        <Title>My Education and Professional Experience</Title>
        <SmallContainer>
          <SmallColumnContainer>
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "50px",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={education} style={{ height: "100%" }} />
              <QualiTitle>Education</QualiTitle>
            </div>
            <QualiTitleSmall>Degree in Computer Engineering</QualiTitleSmall>
            <div
              style={{
                display: "flex",
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-around",
                height: "16px",
                alignItems: "center",
              }}
            >
              <QualiBody>Federal University of Itajubá</QualiBody>
              <div
                style={{
                  display: "flex",
                  width: "20%",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  height: "16px",
                }}
              >
                <img src={calendar} style={{ height: "100%" }} />
                <QualiBody>2020</QualiBody>
              </div>
            </div>
          </SmallColumnContainer>
          <SmallColumnContainer>
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "50px",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AiOutlineAreaChart
                style={{ height: "50px", width: "50px", color: "#ff9442" }}
              />
              <QualiTitle>Research</QualiTitle>
            </div>
            <QualiTitleSmall>
              Development of CMOS low power devices for medical applications
            </QualiTitleSmall>
            <div
              style={{
                display: "flex",
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-around",
                height: "16px",
                alignItems: "center",
              }}
            >
              <QualiBody>Scientific Initiation Project</QualiBody>
              <div
                style={{
                  display: "flex",
                  width: "20%",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  height: "16px",
                }}
              >
                <img src={calendar} style={{ height: "100%" }} />
                <QualiBody>2018</QualiBody>
              </div>
            </div>
            <QualiTitleSmall>
              Design of a CMOS low voltage VFC for WSN applications
            </QualiTitleSmall>
            <div
              style={{
                display: "flex",
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-around",
                height: "16px",
                alignItems: "center",
              }}
            >
              <QualiBody>Graduation Thesis</QualiBody>
              <div
                style={{
                  display: "flex",
                  width: "20%",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  height: "16px",
                }}
              >
                <img src={calendar} style={{ height: "100%" }} />
                <QualiBody>2020</QualiBody>
              </div>
            </div>
          </SmallColumnContainer>
          <SmallColumnContainer>
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "50px",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={job} style={{ height: "100%", marginRight: "5px" }} />
              <QualiTitle>Experience</QualiTitle>
            </div>
            <QualiTitleSmall>Full Stack Developer</QualiTitleSmall>
            <div
              style={{
                display: "flex",
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-around",
                height: "16px",
                alignItems: "center",
              }}
            >
              <QualiBody>Teepad Software</QualiBody>
              <div
                style={{
                  display: "flex",
                  width: "20%",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  height: "16px",
                }}
              >
                <img src={calendar} style={{ height: "100%" }} />
                <QualiBody>2019</QualiBody>
              </div>
            </div>
            <QualiTitleSmall>Freelance Programmer</QualiTitleSmall>
            <div
              style={{
                display: "flex",
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-around",
                height: "16px",
                alignItems: "center",
              }}
            >
              <QualiBody>Freelancer</QualiBody>
              <div
                style={{
                  display: "flex",
                  width: "40%",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  height: "16px",
                }}
              >
                <img src={calendar} style={{ height: "100%" }} />
                <QualiBody>2018-Today</QualiBody>
              </div>
            </div>
          </SmallColumnContainer>
        </SmallContainer>
      </Container>
    </div>
  );
}

export default Qualifications;
