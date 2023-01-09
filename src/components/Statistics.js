import React, { Fragment } from 'react';
import styled from 'styled-components';
import brandRecognitionImg from '../images/icon-brand-recognition.svg';
import customizableImg from '../images/icon-fully-customizable.svg';
import detailedImg from '../images/icon-detailed-records.svg';
const Statistics = () => {
  return (
    <StatisticsSectionStyles>
      <h2>Advanced Statistics</h2>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard
      </p>
      <StatisticsListStyles>
        <StatisticDescStyles>
          <StatisticImg>
            <img src={brandRecognitionImg} alt="Brand Recognition" />
          </StatisticImg>
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content
          </p>
        </StatisticDescStyles>

        <StatisticDescStyles>
          <StatisticImg>
            <img src={detailedImg} alt="Detailed Records" />
          </StatisticImg>
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decision.
          </p>
        </StatisticDescStyles>
        <StatisticDescStyles>
          <StatisticImg>
            <img src={customizableImg} alt="Fully Customizable" />
          </StatisticImg>
          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </StatisticDescStyles>
      </StatisticsListStyles>
    </StatisticsSectionStyles>
  );
};

export default Statistics;

const StatisticsSectionStyles = styled.section`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  h2 {
    font-size: 24px;
    text-align: center;
    margin-bottom: 1rem;
    color: var(--color-neutral-very-dark-blue);
  }
  h3 {
    color: var(--color-neutral-very-dark-blue);
    text-align: center;
    margin-top: -1rem;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 16px;
    text-align: center;
    color: var(--color-neutral-grayish-violet);
  }
`;

const StatisticDescStyles = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;
  padding: 0 1.5rem 1.5rem 1.5rem;
  background-color: white;
  position: relative;
  max-width: 295px;
  :nth-child(1)::after,
  :nth-child(2)::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 4rem;
    left: 50%;
    bottom: -4rem;
    transform: translate(-50%);
    background-color: var(--color-primary-cyan);
  }
  :nth-child(2) {
    @media only screen and (min-width: 768px) {
      transform: translateY(2rem);
    }
  }
  :nth-child(3) {
    @media only screen and (min-width: 768px) {
      transform: translateY(4rem);
    }
  }
  /* @media only screen and (min-width: 768px) {
    max-width: none;
    :nth-child(1)::after,
    :nth-child(2)::after {
      content: '';
      position: absolute;
      width: 3rem;
      height: 8px;

      left: calc(100% + 1.5rem);
      bottom: 50%;

      background-color: var(--color-primary-cyan);
    }
  } */
  @media only screen and (min-width: 768px) {
    max-width: none;
    :nth-child(1)::after {
      content: '';
      position: absolute;
      width: 3rem;
      height: 8px;

      left: calc(100% + 1.5rem);
      bottom: calc(50% - 2rem);

      background-color: var(--color-primary-cyan);
    }
    :nth-child(2)::after {
      content: '';
      position: absolute;
      width: 3rem;
      height: 8px;

      left: calc(100% + 1.5rem);
      bottom: 50%;

      background-color: var(--color-primary-cyan);
    }
  }
`;

const StatisticsListStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

const StatisticImg = styled.div`
  width: fit-content;
  padding: 1.25rem;
  border-radius: 50%;
  background-color: var(--color-primary-dark-violet);
  margin: 0 auto;
  transform: translateY(-50%);
`;
