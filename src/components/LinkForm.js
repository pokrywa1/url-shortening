import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import formBackground from '../images/bg-shorten-mobile.svg';
import formBackgroundDesktop from '../images/bg-shorten-desktop.svg';

const LinkForm = props => {
  const linkRef = useRef(undefined);
  const [valid, setValid] = useState(true);
  const [error, setError] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    setValid(true);
    setError('');
    const link = linkRef.current.value;
    const isLinkExist = existLinkInArray(link);
    if (isLinkExist) {
      setValid(false);
      setError('The link just exist');
      return;
    }
    getLinkFromApi(link);
    event.target.reset();
  };

  const existLinkInArray = link => {
    const isInArray = props.links.some(item => item.link === link);
    return isInArray;
  };

  const saveLinksToLocalStorage = (link, shortedLink) => {
    const localData = localStorage.getItem('LinkData');
    const parselocalData = localData ? JSON.parse(localData) : [];
    const linkArray = [...parselocalData, { link, shortedLink }];
    localStorage.setItem('LinkData', JSON.stringify(linkArray));
  };

  const getLinkFromApi = link => {
    fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
      .then(response => response.json())
      .then(data => {
        const linkObj = {
          link: link,
          shortedLink: data?.result.short_link3,
        };
        props.getLinkListHandle(linkObj);
        saveLinksToLocalStorage(linkObj.link, linkObj.shortedLink);
        setValid(true);
      })
      .catch(err => {
        setError('Please add a valid link');
        setValid(false);
      });
  };

  return (
    <FormStyles valid={valid}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="link"
          placeholder="Shorten link here"
          ref={linkRef}
        />
        {!valid && <ErrorStyles>{error}</ErrorStyles>}
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
    display: grid;
    grid-template-areas:
      'input'
      'valid'
      'button';
    padding: 2rem;
    gap: 1.25rem;

    input,
    button {
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    button {
      grid-area: button;
    }

    input[type='text'] {
      grid-area: input;
      padding: 12px 24px;
      font-size: 16px;

      border-color: ${props =>
        !props.valid ? 'var(--color-secondary-red)' : '#ccc'};
    }
    input[type='text']::placeholder {
      color: ${props => (!props.valid ? 'var(--color-secondary-red)' : '#ccc')};
    }
    input[type='text']:focus {
      outline-color: ${props =>
        !props.valid
          ? 'var(--color-secondary-red)'
          : 'var(--color-primary-cyan)'};
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
      grid-template-columns: 2fr 1fr;
      grid-template-areas:
        'input button'
        'valid valid';
      gap: 1rem;
      justify-content: center;
    }
    input[type='text'] {
      width: 100%;
      padding: 13px 26px;
      font-size: 16px;
    }
    input[type='submit'] {
      width: 100%;
      padding: 13px 26px;
      font-size: 16px;
    }
  }
`;

const ErrorStyles = styled.span`
  grid-area: valid;
  color: var(--color-secondary-red);
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
