import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import ClipboardCopy from './ClipboardCopy';

const LinksList = ({ link }) => {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <Fragment>
      {link.map(item => (
        <LinkInfoStyles key={item.shortedLink} isCopied={isCopied}>
          <p>{item.link}</p>
          <p>{item.shortedLink}</p>
          <ClipboardCopy link={item.shortedLink}></ClipboardCopy>
          {/* <button
            onClick={() => {
              handleCopyClick(item.shortedLink);
            }}
          >
            {isCopied ? 'Copied!' : 'Copy'}
          </button> */}
        </LinkInfoStyles>
      ))}
    </Fragment>
  );
};

export default LinksList;

const LinkInfoStyles = styled.div`
  background-color: white;
  padding: 1rem 2rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;

  p {
    font-size: 16px;
  }
  p:nth-child(1) {
    color: var(--color-neutral-very-dark-blue);
    position: relative;
  }
  p:nth-child(1)::after {
    content: '';
    position: absolute;
    height: 3px;
    background-color: #eef1f6;
    right: -2rem;
    left: -2rem;
    bottom: -0.5rem;
  }
  p:nth-child(2) {
    color: var(--color-primary-cyan);
  }
`;
