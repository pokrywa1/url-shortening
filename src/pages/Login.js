import React from 'react';
import styled from 'styled-components';
import backgroundMobile from '../images/bg-shorten-mobile.svg';

const Login = () => {
  return (
    <WrapStyles>
      <FormContainerStyles>
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="e-mail" />
          <input type="password" placeholder="password" />
          <button>Login</button>
        </form>
        <span>Don't have an account?</span>
        <span>Forgot password?</span>
        <BackgroundStyles>
          <img src={backgroundMobile} />
        </BackgroundStyles>
      </FormContainerStyles>
    </WrapStyles>
  );
};

export default Login;

const BackgroundStyles = styled.div`
  position: absolute;
  right: 0;

  top: 0;
  z-index: -1;

  img {
    width: 100%;
  }
`;

const WrapStyles = styled.div`
  position: relative;
  height: 100vh;
  background-color: #eef1f6;
`;

const FormContainerStyles = styled.div`
  position: absolute;
  overflow: hidden;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-primary-dark-violet);
  width: 80%;
  max-width: 300px;
  margin: 0 auto;
  padding: 2rem;
  max-width: 300px;
  border-radius: 12px;
  color: white;
  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    input {
      font-size: 16px;
      padding: 12px 24px;
      border-radius: 12px;
      border-color: transparent;
    }
    button {
      font-size: 20px;
      color: white;
      padding: 12px 24px;
      border-radius: 12px;
      border-color: transparent;
      font-weight: bold;
    }
  }
  span {
    display: block;
    text-align: center;
    margin-top: 1rem;
    font-size: 16px;
    color: var(--color-neutral-grayish-violet);
  }
`;
