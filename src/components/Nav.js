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
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
        <li>Login</li>
        <li>Sign Up</li>
      </ListStyles>
    </NavStyles>
  );
};

export default Nav;

const NavStyles = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
  position: relative;
  z-index: 2;
`;
const BarIconStyles = styled.div`
  font-size: 1.75rem;
  transition: 0.4;
  color: ${({ show }) =>
    show ? 'var(--color-neutral-grayish-violet)' : 'black'};
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
  li:last-child {
    border-radius: 25px;
    background-color: var(--color-primary-cyan);
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
`;
