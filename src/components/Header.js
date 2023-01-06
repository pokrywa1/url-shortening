import React from 'react';
import styled from 'styled-components';
import workingImg from '../images/illustration-working.svg';
const Header = () => {
  return (
    <HeaderStyles>
      <ImgContainerStyles>
        <img src={workingImg} alt="" />
      </ImgContainerStyles>
      <ContentHeaderStyles>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insight on how your
          links are performing.
        </p>
        <button>Get Started</button>
      </ContentHeaderStyles>
    </HeaderStyles>
  );
};

export default Header;

const HeaderStyles = styled.header`
  position: relative;
  overflow: hidden;
  padding: 1rem;
  @media only screen and (min-width: 768px) {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'left right';
    max-width: 1440px;
    margin: 0 auto;
  }
  @media only screen and (min-width: 768px) {
    overflow: visible;
  }
`;

const ImgContainerStyles = styled.div`
  transform: translateX(10%);
  img {
    width: 120%;
  }
  @media only screen and (min-width: 768px) {
    grid-area: right;
  }
`;

const ContentHeaderStyles = styled.div`
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
    padding: 16px 32px;
    margin: 1rem auto;
    text-align: center;
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    border-radius: 25px;
    display: block;
    transition: 0.4s;
    cursor: pointer;
  }
  button:hover {
    background-color: var(--color-neutral-gray);
  }
  @media only screen and (min-width: 768px) {
    grid-area: left;
    h1 {
      text-align: left;
    }
    p {
      text-align: left;
    }
    button {
      margin: 1rem 0 0 0;
    }
  }
  @media only screen and (min-width: 1040px) {
    grid-area: left;
    h1 {
      font-size: 4rem;
    }
    p {
      text-align: left;
      font-size: 1.25rem;
    }
    button {
      font-size: 1.5rem;
    }
  }
`;
