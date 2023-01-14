import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const ClipboardCopy = ({ link }) => {
  const [isCopied, setIsCopied] = useState(false);

  //Copy element to Clipboard
  async function copyTextTolipboard(text) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  const handleCopyClick = text => {
    copyTextTolipboard(text)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 3000);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <ButtonStyles isCopied={isCopied} onClick={() => handleCopyClick(link)}>
      {isCopied ? 'Copied!' : 'Copy'}
    </ButtonStyles>
  );
};

export default ClipboardCopy;

const ButtonStyles = styled.button`
  color: white;
  border: none;
  font-size: 22px;
  font-weight: bold;
  border-radius: 4px;
  padding: 13px 26px;
  width: 100%;
  background-color: ${props =>
    props.isCopied
      ? 'var(--color-primary-dark-violet)'
      : 'var(--color-primary-cyan)'};

  :hover {
    background: ${props =>
      props.isCopied
        ? 'var(--color-primary-dark-violet)'
        : 'var(--color-neutral-gray);'};
    cursor: ${props => (props.isCopied ? 'default' : 'pointer')};
  }
`;
