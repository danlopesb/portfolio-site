import React from "react";
import { useState } from "react";
import "./NavBar.css";
import styled from "@emotion/styled";
import { Redirect, Switch, Route, Link, useRoute, Router } from "wouter";

let ToolBar = styled.div`
  display: flex;
  position: absolute;
  width: 100vw;
  height: 80px;
  left: 0px;
  top: 0px;

  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(8px);
  justify-content: flex-end;
`;

let Logo = styled.div`
  position: absolute;
  width: 180px;
  height: 50px;
  left: 163px;
  top: 15px;

  border: 1px solid #ff9442;
  box-sizing: border-box;
  border-radius: 8px;

  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 60px;
  /* identical to box height */

  color: #ff9442;

  display: flex;
  justify-content: center;
  align-items: center;
`;

let Button = styled.button`
  width: 134px;
  height: 30px;

  border: none;
  outline: none;
  display: inline-block;

  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;

  color: ${(props) => (props.primary ? "#FF9442" : "#0C0A5D")};
  background-color: rgba(255, 255, 255, 0.75);
`;

const ActiveLink = (props) => {
  const [isActive] = useRoute(props.href);
  // const [simpleButtonState, toggleSimpleButtonState] = useState(false);
  // const handleSimpleButtonClick = () => {
  //   console.log("click");
  //   toggleSimpleButtonState(!simpleButtonState);
  // };

  return (
    <Link {...props}>
      <Button primary={isActive} href={props.href}>
        {props.children}
      </Button>
    </Link>
  );
};

function NavBar() {
  const [simpleButtonState, toggleSimpleButtonState] = useState(false);
  const handleSimpleButtonClick = () =>
    toggleSimpleButtonState(!simpleButtonState);

  return (
    <ToolBar>
      <div
        style={{
          height: "100%",
          width: "50%",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Logo>danlopesb</Logo>
        <ActiveLink href="/">Home</ActiveLink>
        <ActiveLink href="/about">About</ActiveLink>
        <ActiveLink href="/skills">Skills</ActiveLink>
        <ActiveLink href="/qualifications">Qualification</ActiveLink>
        <ActiveLink href="/projects">Projects</ActiveLink>
      </div>
    </ToolBar>
  );
}

export default NavBar;
