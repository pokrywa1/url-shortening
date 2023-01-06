import React from 'react';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import logo from '../images/logo.svg';
import styled from 'styled-components';

const Nav = () => {
  const [showBar, setShowBar] = useState(false);
  return (
    <NavStyles>
      <div>
        <img src={logo} alt="shortly" />
      </div>
      <BarIconStyles show={showBar} onClick={() => setShowBar(!showBar)}>
        <FiMenu></FiMenu>
      </BarIconStyles>
      <ListStyles show={showBar}>
        <div>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </div>
        <LoginButtonStyles>
          <li>Login</li>
          <li>Sign Up</li>
        </LoginButtonStyles>
      </ListStyles>
    </NavStyles>
  );
};

export default Nav;

const NavStyles = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  position: relative;
  z-index: 2;
  @media only screen and (min-width: 768px) {
    max-width: 1440px;
    margin: 0 auto;
    img {
      display: block;
    }
  }
`;

const BarIconStyles = styled.div`
  font-size: 1.75rem;
  transition: 0.4;
  color: ${({ show }) =>
    show ? 'var(--color-neutral-grayish-violet)' : 'black'};
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
const LoginButtonStyles = styled.div`
  li:last-child {
    border-radius: 25px;
    background-color: var(--color-primary-cyan);
    color: white;
    transition: 0.4s;
  }
  li:last-child:hover {
    background-color: var(--color-neutral-grayish-violet);
    color: white;
  }
`;

const ListStyles = styled.ul`
  z-index: 1;
  background-color: var(--color-primary-dark-violet);
  color: white;
  position: absolute;
  left: 0rem;
  right: 0rem;
  transition: all 0.4s;
  top: ${({ show }) => (show ? '100%' : '0')};
  transform: ${({ show }) => (show ? 'none' : 'translateY(-110%)')};

  text-align: center;
  padding: 1.5rem;
  list-style-type: none;
  border-radius: 25px;
  li {
    padding: 1rem;
    cursor: pointer;
  }

  li:nth-child(3) {
    position: relative;
    margin-bottom: 2rem;
  }
  li:nth-child(3):after {
    content: '';
    position: absolute;
    bottom: -40%;
    left: 0;
    right: 0;
    height: 0.5em;

    border-top: 0.5px solid var(--color-neutral-grayish-violet);
  }

  @media only screen and (min-width: 768px) {
    position: static;
    transform: none;
    background: none;
    color: var(--color-neutral-grayish-violet);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    width: 100%;
    li {
      transition: all 0.4s;
    }
    li:hover {
      color: var(--color-primary-dark-violet);
    }
    li:nth-child(3) {
      position: static;
      margin-bottom: 0;
    }
    li:nth-child(3):after {
      display: none;
    }
    div {
      display: flex;
      margin-left: 1.25rem;
    }
  }
`;
