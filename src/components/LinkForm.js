import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import formBackground from '../images/bg-shorten-mobile.svg';
import formBackgroundDesktop from '../images/bg-shorten-desktop.svg';

const LinkForm = () => {
  const [link, setLink] = useState('');
  const linkRef = useRef(undefined);

  const handleSubmit = event => {
    event.preventDefault();
    const tLink = linkRef.current.value;
    setLink(tLink);
    event.target.reset();
  };

  useEffect(() => {
    fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => {
        console.log(err);
      });
  }, [link]);

  return (
    <FormStyles>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="link"
          placeholder="Shorten link here"
          ref={linkRef}
        />
        <button type="submit">Shorten It</button>
        {/* <input type="submit" value="Shorten It!" /> */}
      </form>
      <BackgroundMobileStyles>
        <img src={formBackground} />
      </BackgroundMobileStyles>
      <BackgroundDesktopStyles>
        <img src={formBackgroundDesktop} />
      </BackgroundDesktopStyles>
    </FormStyles>
  );
};

export default LinkForm;

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

    input,
    button {
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    input[type='text'] {
      padding: 12px 24px;
      font-size: 16px;
    }
    button {
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
