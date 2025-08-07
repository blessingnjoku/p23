import styled from 'styled-components';
import { SubscribeForm } from './SubscribeForm';
import logoImg from '../assets/images/Logo.png';

const FooterContainer = styled.footer`
  background: var(--primary-green);
  color: #fff;
  padding: 48px 20px 24px 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
  
  @media (max-width: 900px) {
    padding: 32px ;
    gap: 24px;

  }
`;
const RightColumn = styled.div`
  @media (max-width: 900px) {
    flex: 0.3;
    width: 100%;
  }
`;

const FooterRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 48px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  @media (max-width: 900px) {
    display: flex;
    flex-wrap: wrap;

    justify-content: space-between;
  }
`;

const LogoImg = styled.img`
  flex: 1;
  font-size: 1rem;
  width: 64px;
  height: auto;
  margin-bottom: 12px;
`;

const FooterMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 180px;
  text-align: left;
  @media (max-width: 900px) {
    margin-top: 16px;
    display:none;
  }
`;

const MenuTitle = styled.div`
  font-weight: 700;
  margin-bottom: 6px;
  font-size: 1.1rem;
`;

const MenuLink = styled.a`
  color: #fff;
  font-size: 1rem;
  opacity: 0.9;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
    text-decoration: underline;
  }
`;
 
const Socials = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 12px;
  a {
    color: #fff;
    font-size: 1.3rem;
    opacity: 0.85;
    transition: opacity 0.2s;
    &:hover {
      opacity: 1;
    }
  }
`;
 const FooterBottom = styled.ul`
   display: flex;
   gap: 24px;
   align-items: right;
   justify-content: flex-end;
   padding: 0px 60px 24px 50px;

   font-size: 0.9rem;

   @media (max-width: 900px) {
     li:nth-child(n + 2) {
       display: none;
       list-style: none;
     }
   }
   li {
     list-style: disc;
     @media (max-width: 900px) {
  
         list-style: none;
       }
     }
   
   a {
   }
 `;
const QuickLinks = styled.div`
display:none;
  @media (max-width: 900px) {
  
    display: flex;
    flex-direction: column;

  }

  a{
    display: block;
  }
  `;

export const Footer = () => (
  <FooterContainer>
    <FooterRow>
      <RightColumn>
        <LogoImg src={logoImg} alt="P23 Logo" />
        <div style={{ fontSize: "0.95rem", opacity: 0.8, marginBottom: 8 }}>
          P23 Africa LTD is registered in the United Kingdom. Company No:
          15264700
        </div>
      </RightColumn>
      <FooterMenu>
        <MenuTitle>Who We Are</MenuTitle>
        <MenuLink href="#">Business Referral Network</MenuLink>
        <MenuLink href="#">University Partnership</MenuLink>
        <MenuLink href="#">The 54th Pitch</MenuLink>
      </FooterMenu>
      <FooterMenu>
        <MenuTitle>What We Do</MenuTitle>
        <MenuLink href="#">Business Strategy</MenuLink>
        <MenuLink href="#">Market Entry</MenuLink>
        <MenuLink href="#">Business Research</MenuLink>
        <MenuLink href="#">Sales</MenuLink>
        <MenuLink href="#">Marketing</MenuLink>
        <MenuLink href="#">Business Audit</MenuLink>
      </FooterMenu>
      <QuickLinks>
        <h2>Quick Links</h2>
        <a href="#">Who we are</a>
        <a href="#">What we do</a>
        <a href="#">Our Event</a>
        <a href="#">Resources Hub</a>
        <a href="#">Lets Collaborate</a>
      </QuickLinks>
      <div>
        <MenuTitle>Connect</MenuTitle>
        <Socials>
          <a href="#" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 10.268h-3v-4.604c0-1.099-.021-2.513-1.532-2.513-1.533 0-1.768 1.197-1.768 2.434v4.683h-3v-9h2.881v1.233h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.599v4.731z"
                fill="#cced60"
              />
            </svg>
          </a>
          <a href="#" aria-label="Facebook">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12v9.294h6.116c.729 0 1.321-.593 1.321-1.326v-21.349c0-.734-.592-1.326-1.325-1.326z"
                fill="#cced60"
              />
            </svg>
          </a>

          <a href="#" aria-label="Instagram">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99731 6.66512C8.16111 6.66512 6.66262 8.16361 6.66262 9.99981C6.66262 11.836 8.16111 13.3345 9.99731 13.3345C11.8335 13.3345 13.332 11.836 13.332 9.99981C13.332 8.16361 11.8335 6.66512 9.99731 6.66512ZM19.9989 9.99981C19.9989 8.61891 20.0114 7.25051 19.9338 5.8721C19.8563 4.27105 19.4911 2.85012 18.3203 1.67935C17.147 0.506076 15.7286 0.143338 14.1275 0.0657868C12.7466 -0.0117642 11.3782 0.000744099 9.99981 0.000744099C8.61891 0.000744099 7.25051 -0.0117642 5.8721 0.0657868C4.27105 0.143338 2.85012 0.508578 1.67935 1.67935C0.506076 2.85262 0.143338 4.27105 0.0657868 5.8721C-0.0117642 7.25301 0.000744099 8.62141 0.000744099 9.99981C0.000744099 11.3782 -0.0117642 12.7491 0.0657868 14.1275C0.143338 15.7286 0.508578 17.1495 1.67935 18.3203C2.85262 19.4936 4.27105 19.8563 5.8721 19.9338C7.25301 20.0114 8.62141 19.9989 9.99981 19.9989C11.3807 19.9989 12.7491 20.0114 14.1275 19.9338C15.7286 19.8563 17.1495 19.4911 18.3203 18.3203C19.4936 17.147 19.8563 15.7286 19.9338 14.1275C20.0139 12.7491 19.9989 11.3807 19.9989 9.99981ZM9.99731 15.1307C7.15795 15.1307 4.86644 12.8392 4.86644 9.99981C4.86644 7.16045 7.15795 4.86894 9.99731 4.86894C12.8367 4.86894 15.1282 7.16045 15.1282 9.99981C15.1282 12.8392 12.8367 15.1307 9.99731 15.1307ZM15.3383 5.85709C14.6754 5.85709 14.14 5.32174 14.14 4.6588C14.14 3.99587 14.6754 3.46052 15.3383 3.46052C16.0013 3.46052 16.5366 3.99587 16.5366 4.6588C16.5368 4.81622 16.5059 4.97213 16.4458 5.1176C16.3856 5.26308 16.2974 5.39525 16.1861 5.50656C16.0748 5.61787 15.9426 5.70613 15.7971 5.76628C15.6516 5.82643 15.4957 5.85729 15.3383 5.85709Z"
                fill="#CCED60"
              />
            </svg>
          </a>
          <a href="#" aria-label="YouTube">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112c-1.863-.502-9.386-.502-9.386-.502s-7.523 0-9.386.502a2.994 2.994 0 0 0-2.112 2.112c-.502 1.863-.502 5.754-.502 5.754s0 3.891.502 5.754a2.994 2.994 0 0 0 2.112 2.112c1.863.502 9.386.502 9.386.502s7.523 0 9.386-.502a2.994 2.994 0 0 0 2.112-2.112c.502-1.863.502-5.754.502-5.754s0-3.891-.502-5.754zm-13.498 9.568v-7.568l6.545 3.784-6.545 3.784z"
                fill="#cced60"
              />
            </svg>
          </a>
        </Socials>
      </div>
      <div>
        <MenuTitle>Subscribe to get updates</MenuTitle>
        <SubscribeForm />
      </div>
    </FooterRow>
    <FooterBottom>
      <li>
        <a href="#">P23. Africa 2025</a>
      </li>
      <li>
        <a href="#">Privacy Policy</a>
      </li>
      <li>
        <a href="#">Terms and condition</a>
      </li>
    </FooterBottom>
  </FooterContainer>
);