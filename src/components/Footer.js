import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.svg';
import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import pinterest from '../images/icon-pinterest.svg';
import instagram from '../images/icon-instagram.svg';
const Footer = () => {
  return (
    <FooterStyles>
      <UlStyles>
        <div>
          <h2>Shortly</h2>
        </div>
        <div>
          <h3>Features</h3>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </div>
        <div>
          <h3>Resources</h3>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </div>
        <div>
          <h3>Company</h3>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contacts</li>
        </div>
        <SocialStyles>
          <div>
            <img src={facebook} alt="facebook" />
          </div>
          <div>
            <img src={twitter} alt="facebook" />
          </div>
          <div>
            <img src={pinterest} alt="facebook" />
          </div>
          <div>
            <img src={instagram} alt="instagram" />
          </div>
        </SocialStyles>
      </UlStyles>
    </FooterStyles>
  );
};

export default Footer;

const FooterStyles = styled.footer`
  padding: 3rem;
  color: white;
  background-color: var(--color-neutral-very-dark-violet);
  h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 3rem;
  }
`;
const UlStyles = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  h3 {
    text-align: center;
    margin-bottom: 1.25rem;
  }
  li {
    list-style: none;
    text-align: center;
    color: var(--color-neutral-grayish-violet);
    margin-bottom: 0.75rem;
    transition: 0.4s;
  }
  li:hover {
    color: var(--color-primary-cyan);
    cursor: pointer;
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    h2 {
      line-height: 3rem;
    }
  }
`;

const SocialStyles = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  div {
    cursor: pointer;
  }
`;
