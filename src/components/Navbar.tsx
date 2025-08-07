import React, { useState } from 'react';
import styled from 'styled-components';
import logoImg from '../assets/images/Logo.png';

const NavbarContainer = styled.nav`
  width: 100vw;
  max-width: 1512px;
  height: 123px;
  background: var(--primary-green);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: -2px;
  z-index: 10;
  opacity: 1;
  padding: 10px 9%;
  margin-bottom: 150px;
  box-shadow: 0 2px 8px rgba(13, 64, 54, 0.04);
  margin: 0 auto;
  @media (max-width: 1512px) {
    max-width: 100vw;

  }
`;

const NavbarContent = styled.div`
  width: 100%;
  max-width: 1512px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
  display: block;
`;


const Menu = styled.ul<{ open?: boolean }>`
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 0;
    width: 100vw;
    background: var(--primary-green);
    padding: 24px 0;
    position: absolute;
    top: 123px;
    left: 0;
    z-index: 20;
    display: ${({ open }) => (open ? "flex" : "none")};
    box-shadow: 0 8px 32px rgba(13, 64, 54, 0.12);
  }
`;

const MenuItem = styled.li`
  font-family: "GT Walsheim Trial";
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: 1;
  letter-spacing: 0px;
  cursor: pointer;
  padding: 8px 0;
  transition: color 0.2s;
  &:hover {
    color: var(--accent-yellow);
  }
  @media (max-width: 900px) {
    width: 100vw;
    text-align: center;
    padding: 16px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }
`;
const RightSection = styled.div<{ open?: boolean }>`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 900px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    width: 100vw;
    background: var(--primary-green);
    padding: 24px 0;
    position: absolute;
    top: 123px;
    left: 0;
    z-index: 20;
  }
`;

const SubscribeBtn = styled.button`
  background: transparent;
  border: 2px solid #fff;
  color: #fff;
  border-radius: 8px;
  /* padding: 8px 22px; */
  font-size: 1rem;
  font-family: " GT Walsheim Trial", sans-serif;
  font-weight: 400;
  font-style: normal;
  line-height: 24px;
  letter-spacing: 0;
  text-align: center;
  margin-right: 8px;
  width: 281;
  height: 48;
  border-width: 1px;

  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #fff;
    color: var(--primary-green);
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 12px;
  a {
    color: #fff;
    font-size: 1.35rem;
    opacity: 0.85;
    transition: opacity 0.2s;
    &:hover {
      opacity: 1;
    }
  }
`;

const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  @media (max-width: 900px) {
    display: block;
    margin-left: 16px;
  }
`;

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <NavbarContainer>
      <NavbarContent>
        <Logo src={logoImg} alt="P23 Logo" />
        <Hamburger aria-label="Open Menu" onClick={() => setOpen((o) => !o)}>
          <svg
            width="32"
            height="20"
            viewBox="0 0 32 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.5" width="32" height="3" rx="1.5" fill="white" />
            <rect x="17" y="8.5" width="15" height="3" rx="1.5" fill="white" />
            <rect y="16.5" width="32" height="3" rx="1.5" fill="white" />
          </svg>
        </Hamburger>
        <Menu open={open}>
          <MenuItem>Who We Are</MenuItem>
          <MenuItem>What We Do</MenuItem>
          <MenuItem>Our Events</MenuItem>
          <MenuItem>Resource Hub</MenuItem>
          <MenuItem>Let's Collaborate</MenuItem>
        </Menu>
        <RightSection>
          <SubscribeBtn onClick={() => console.log("Subscribe Clicked")}>
            Subscribe
          </SubscribeBtn>
          <Socials>
            <a href="#" aria-label="LinkedIn">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 10.268h-3v-4.604c0-1.099-.021-2.513-1.532-2.513-1.533 0-1.768 1.197-1.768 2.434v4.683h-3v-9h2.881v1.233h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.599v4.731z" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12v9.294h6.116c.729 0 1.321-.593 1.321-1.326v-21.349c0-.734-.592-1.326-1.325-1.326z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.4973 7.16531C8.66111 7.16531 7.16262 8.66379 7.16262 10.5C7.16262 12.3362 8.66111 13.8347 10.4973 13.8347C12.3335 13.8347 13.832 12.3362 13.832 10.5C13.832 8.66379 12.3335 7.16531 10.4973 7.16531ZM20.4989 10.5C20.4989 9.11909 20.5114 7.75069 20.4338 6.37228C20.3563 4.77123 19.9911 3.3503 18.8203 2.17953C17.647 1.00626 16.2286 0.643521 14.6275 0.56597C13.2466 0.488419 11.8782 0.500927 10.4998 0.500927C9.11891 0.500927 7.75051 0.488419 6.3721 0.56597C4.77105 0.643521 3.35012 1.00876 2.17935 2.17953C1.00608 3.3528 0.643338 4.77123 0.565787 6.37228C0.488236 7.75319 0.500744 9.12159 0.500744 10.5C0.500744 11.8784 0.488236 13.2493 0.565787 14.6277C0.643338 16.2288 1.00858 17.6497 2.17935 18.8205C3.35262 19.9937 4.77105 20.3565 6.3721 20.434C7.75301 20.5116 9.12141 20.4991 10.4998 20.4991C11.8807 20.4991 13.2491 20.5116 14.6275 20.434C16.2286 20.3565 17.6495 19.9912 18.8203 18.8205C19.9936 17.6472 20.3563 16.2288 20.4338 14.6277C20.5139 13.2493 20.4989 11.8809 20.4989 10.5ZM10.4973 15.6309C7.65795 15.6309 5.36644 13.3394 5.36644 10.5C5.36644 7.66063 7.65795 5.36913 10.4973 5.36913C13.3367 5.36913 15.6282 7.66063 15.6282 10.5C15.6282 13.3394 13.3367 15.6309 10.4973 15.6309ZM15.8383 6.35728C15.1754 6.35728 14.64 5.82192 14.64 5.15899C14.64 4.49605 15.1754 3.9607 15.8383 3.9607C16.5013 3.9607 17.0366 4.49605 17.0366 5.15899C17.0368 5.3164 17.0059 5.47231 16.9458 5.61779C16.8856 5.76326 16.7974 5.89543 16.6861 6.00675C16.5748 6.11806 16.4426 6.20631 16.2971 6.26646C16.1516 6.32661 15.9957 6.35747 15.8383 6.35728Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112c-1.863-.502-9.386-.502-9.386-.502s-7.523 0-9.386.502a2.994 2.994 0 0 0-2.112 2.112c-.502 1.863-.502 5.754-.502 5.754s0 3.891.502 5.754a2.994 2.994 0 0 0 2.112 2.112c1.863.502 9.386.502 9.386.502s7.523 0 9.386-.502a2.994 2.994 0 0 0 2.112-2.112c.502-1.863.502-5.754.502-5.754s0-3.891-.502-5.754zm-13.498 9.568v-7.568l6.545 3.784-6.545 3.784z" />
              </svg>
            </a>
          </Socials>
        </RightSection>
      </NavbarContent>
    </NavbarContainer>
  );
}; 