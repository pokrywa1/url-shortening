import React from 'react';
import styled from 'styled-components';
import LinksList from './LinksList';
import Statistics from './Statistics';
import formBackground from '../images/bg-shorten-mobile.svg';
import formBackgroundDesktop from '../images/bg-shorten-desktop.svg';

const Main = () => {
  return (
    <MainStyles>
      <FormAppStyles>
        <FormStyles>
          <form>
            <input type="text" name="link" placeholder="Shorten link here" />
            <input type="submit" value="Shorten It!" />
          </form>
          <BackgroundMobileStyles>
            <img src={formBackground} />
          </BackgroundMobileStyles>
          <BackgroundDesktopStyles>
            <img src={formBackgroundDesktop} />
          </BackgroundDesktopStyles>
        </FormStyles>
        <LinksList></LinksList>
      </FormAppStyles>
      <Statistics></Statistics>
    </MainStyles>
  );
};

export default Main;

const MainStyles = styled.main`
  background-color: #eef1f6;
  margin-top: 3rem;
  padding-bottom: 3rem;
`;

const FormAppStyles = styled.section`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;
`;

const FormStyles = styled.div`
  border-radius: 12px;
  transform: translateY(-30%);
  position: relative;
  overflow: hidden;

  background-color: var(--color-primary-dark-violet);
  form {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    gap: 1.25rem;

    input {
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    input[type='text'] {
      padding: 12px 24px;
      font-size: 16px;
    }
    input[type='submit'] {
      background-color: var(--color-primary-cyan);
      border: none;
      color: white;
      padding: 13px 26px;

      text-align: center;
      text-decoration: none;
      font-size: 16px;
      font-weight: bold;
      display: block;
      transition: 0.4s;
      cursor: pointer;
    }
  }
  @media only screen and (min-width: 768px) {
    form {
      flex-direction: row;
      gap: 1rem;
      justify-content: center;
    }
    input[type='text'] {
      width: 70%;
      padding: 13px 26px;
      font-size: 16px;
    }
    input[type='submit'] {
      width: 30%;
      padding: 13px 26px;
      font-size: 16px;
    }
  }
`;

const BackgroundMobileStyles = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const BackgroundDesktopStyles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  display: none;
  img {
    width: 100%;
  }
  @media only screen and (min-width: 768px) {
    display: block;
  }
`;
