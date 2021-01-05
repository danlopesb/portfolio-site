import React from "react";
import NavBar from "./NavBar";
import { useState } from "react";
import styled from "@emotion/styled";
import { Redirect, Switch, Route, Link, useRoute, Router } from "wouter";

let Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 800px;
  left: 0px;
  top: 0px;

  background: linear-gradient(180deg, #ffffff 20.38%, #e5e5e5 100%);
`;

function Home() {
  return (
    <div>
      <Container>
        <NavBar />
      </Container>
    </div>
  );
}

export default Home;
