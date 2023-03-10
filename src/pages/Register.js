import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import backgroundMobile from '../images/bg-shorten-mobile.svg';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState(undefined);
  const navigate = useNavigate();

  const resetPasswordForm = () => {
    passwordRef.current.value = '';
    passwordConfirmRef.current.value = '';
  };

  const signupHandler = async e => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      resetPasswordForm();
      return setError('Passwords do not match');
    }
    try {
      setError('');
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate('/');
    } catch {
      setError('Failed to create an account');
      resetPasswordForm();
    }
  };

  return (
    <WrapStyles>
      <FormContainerStyles>
        <h1>Login</h1>
        {error && (
          <ErrorStyles>
            <p>{error}</p>
          </ErrorStyles>
        )}
        <form>
          <input type="text" placeholder="e-mail" ref={emailRef} />
          <input type="password" placeholder="password" ref={passwordRef} />
          <input
            type="password"
            placeholder="rewrite password"
            ref={passwordConfirmRef}
          />
          <button onClick={signupHandler}>Submit</button>
        </form>

        <span>
          <Link to={'/login'}>Already have an account?</Link>
        </span>
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

const ErrorStyles = styled.div`
  background-color: var(--color-secondary-red);
  padding: 0.5rem 1rem;
  border-radius: 12px;
  color: white;
  margin-bottom: 1rem;
`;
