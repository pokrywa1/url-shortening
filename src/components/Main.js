import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LinksList from './LinksList';
import Statistics from './Statistics';
import LinkForm from './LinkForm';

const Main = () => {
  const [links, setLinks] = useState([]);

  const getLinkListHandle = link => {
    setLinks(prev => [...prev, link]);
    console.log(links);
  };

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem('LinkData'));
    if (!localStorageData) return;
    console.log(localStorageData);
    setLinks(localStorageData);
  }, []);

  return (
    <MainStyles>
      <FormAppStyles>
        <LinkForm
          getLinkListHandle={getLinkListHandle}
          links={links}
        ></LinkForm>
        <LinksList link={links}></LinksList>
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
  @media only screen and (min-width: 768px) {
    padding-bottom: 7rem;
  }
`;

const FormAppStyles = styled.section`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;
`;
