import React from 'react';
import styled from 'styled-components';
import boostImg from '../images/bg-boost-mobile.svg';
import boostDesktopImg from '../images/bg-boost-desktop.svg';
const Boost = () => {
  return (
    <BoostStyles>
      <h2>Boost your links today</h2>
      <button>Get Started</button>
      <MobileStylesImg>
        <img src={boostImg} />
      </MobileStylesImg>
      <DesktopStylesImg>
        <img src={boostDesktopImg} />
      </DesktopStylesImg>
    </BoostStyles>
  );
};

export default Boost;

const MobileStylesImg = styled.div`
  display: block;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
const DesktopStylesImg = styled.div`
  display: none;
  @media only screen and (min-width: 768px) {
    display: block;
  }
`;

const BoostStyles = styled.section`
  position: relative;
  overflow: hidden;
  color: white;
  background-color: var(--color-primary-dark-violet);
  z-index: 1000;
  height: 35vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  h2 {
    font-size: 30px;
  }
  button {
    padding: 18px 36px;
    font-size: 20px;
    font-weight: bold;
    border: none;
    border-radius: 30px;
    color: white;
    transition: 0.4s;
  }
  button:hover {
    background-color: var(--color-neutral-gray);
  }
  div {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    img {
      height: 100%;
      width: 100%;
      display: block;
    }
  }
`;
