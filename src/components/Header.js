import React from 'react';
import styled from 'styled-components';
import workingImg from '../images/illustration-working.svg';
const Header = () => {
  return (
    <HeaderStyles>
      <div>
        <img src={workingImg} alt="" />
      </div>
      <h1>More than just shorter links</h1>
      <p>
        Build your brand's recognition and get detailed insight on how your
        links are performing.
      </p>
      <button>Get Started</button>
    </HeaderStyles>
  );
};

export default Header;

const HeaderStyles = styled.header`
  position: relative;
  overflow: hidden;
  padding: 1rem;
  div {
    transform: translateX(10%);
    img {
      width: 120%;
    }
  }
  h1 {
    margin-top: 1rem;
    text-align: center;
    color: var(--color-neutral-very-dark-blue);
  }
  p {
    text-align: center;
    margin-top: 0.5rem;
    color: var(--color-neutral-grayish-violet);
  }
  button {
    background-color: var(--color-primary-cyan);
    border: none;
    color: white;
    padding: 12px 24px;
    margin: 1rem auto;
    text-align: center;
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    border-radius: 25px;
    display: block;
  }
`;
