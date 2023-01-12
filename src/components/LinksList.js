import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';

const LinksList = ({ link }) => {
  const [links, setLinks] = useState([]);

  // useEffect(() => {
  //   if (!link) return;
  //   setLinks(prev => [...prev, link]);
  //   console.log(links);
  // }, [link]);

  return (
    <Fragment>
      {link.map(item => (
        <LinkInfoStyles key={item.shortedLink}>
          <p>{item.link}</p>
          <p>{item.shortedLink}</p>

          <button>Copy</button>
        </LinkInfoStyles>
      ))}
      {/* <LinkInfoStyles>
        <p>https://www.facebook.com/</p>
        <p>https://bit.ly/3CyqPo5</p>
        <button>Copy</button>
      </LinkInfoStyles>
      <LinkInfoStyles>
        <p>https://www.facebook.com/</p>
        <p>https://bit.ly/3CyqPo5</p>
        <button>Copy</button>
      </LinkInfoStyles> */}
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
  button {
    color: white;
    border: none;
    font-size: 22px;
    font-weight: bold;
    border-radius: 4px;
    padding: 13px 26px;
    width: 100%;
  }
`;
