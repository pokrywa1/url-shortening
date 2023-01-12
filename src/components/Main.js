import React, { useState } from 'react';
import styled from 'styled-components';
import LinksList from './LinksList';
import Statistics from './Statistics';
import LinkForm from './LinkForm';

const Main = () => {
  const [link, setList] = useState();
  const getLinkListHandle = link => {
    setList(link);
    console.log(link);
  };
  return (
    <MainStyles>
      <FormAppStyles>
        <LinkForm getLinkListHandle={getLinkListHandle}></LinkForm>
        <LinksList link={link}></LinksList>
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
