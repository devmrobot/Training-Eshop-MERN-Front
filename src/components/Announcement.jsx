import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  padding: 8px;
  font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>Super Deal ! Free shipping on orders over $100.000</Container>
  );
};

export default Announcement;
