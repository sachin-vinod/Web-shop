import React from "react";
import logo from "../assets/shop.png";
import styled from "styled-components";

function Navbar() {
  return (
    <Container>
      <div className="main d-flex">
        <div className="justify-content-start">
          <img src={logo} alt="Shop" height="40px" />
        </div>
        <div className="justify-content-end">
          <h2 className="bi bi-cart2"></h2>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
    .main{
        width: 100%;
        background-color: gray;
        dispale: flex;
    }
`;

export default Navbar;
