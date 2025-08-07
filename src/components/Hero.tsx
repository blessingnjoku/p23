import styled from 'styled-components';
import { motion } from 'framer-motion';
import heroLeft from '../assets/images/hero-left.png';
import heroRight from '../assets/images/hero-right.png';
import bg from '../assets/images/bg.png'
import Img1 from '../assets/images/mobile-hero-left.png';
import Img2 from '../assets/images/mobile-hero-right.png';
import mb from '../assets/images/mb.png'
const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  max-width: 1512px;
  height: 100vh;
  margin: 0 auto;
  min-height: 480px;
  padding-top: 123px;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    padding-top: 90px;
    min-height: 320px;
 height: 100vh;
    overflow: hidden;
  }
`;

const HeroLeft = styled(motion.div)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;

  @media (max-width: 900px) {

    justify-content: center;
    margin-bottom: 24px;
    padding-right: 0;
    width: 100%;
    height: 20vh;
  }
`;



const HeroImg = styled.img`
  width: 100%;
  max-width: 515px;
  height: auto;
  border-radius: 18px;

  @media (max-width: 900px) {
    max-width: 350px;
       display: none;
  }
  @media (max-width: 600px) {
 
  }
`;

const MobileImgWrapper = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 25px;
margin-bottom:0;
    
  }

`
const MobileImg1 = styled.img`
  @media (max-width: 780px) {
    width: 100%;
    max-width: 250px;
    height: auto;
    border-radius: 18px;
    padding-left:40px;
  }
`;
const MobileImg2 = styled.img`
   @media (max-width: 780px) {
    width: 100%;
    max-width: 250px;
    height: auto;
    border-radius: 18px;
    padding-right:40px;
  }
  `
const HeroRight = styled(motion.div)`
  flex: 1.3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  margin-right: 0;
  margin-left: 30px;
  width: 100%;

  position: relative;
  padding: 0;
  @media (max-width: 780px) {
  
    padding-left: 0;
    text-align: center;

    width: 100%;
    margin: 0;
    padding: 0;
    
    height: 80vh;
  }
`;
const ImgWrapper = styled(motion.div)`
  margin-top: 15px;
  height: 496.77px;
  margin-left: 90px;
  background: radial-gradient(
    circle at center,
    green 0%,
    #b3ebcd 2%,
    #cef2df 0%,
    transparent 85%
  );
  width: 100%;
  max-width: 500px;
  padding: 0;
  display: flex;
  align-items: center;

  @media (max-width: 900px) {
    width: 100%;
    max-width: 100%;
  }
  @media (max-width: 600px) {
    width: 100%;
   
    height: 100%;

  
    padding: 0px;
  }
`;

const HeroImgRight = styled.img`
  height: 100%;

  @media (max-width: 900px) {
    margin-left: 0;
    margin-right: 0;
    width: 100%;

    max-width: 100%;
    height: 300px;
  }
  @media (max-width: 600px) {
    display: none;

  }
`;

const TextWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  height: auto;
  padding-right: 0;
  padding-bottom: 0;

  @media (max-width: 900px) {
    align-items: center;
    text-align: center;
    padding-right: 0;
    padding: 0;
    padding:30px 15px;
    width: 100%;

   
  }
`;

const HeroTitle = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 60px;
  font-weight: 800;
  margin-bottom: 10px;
  letter-spacing: 0.05px;
  color: var(--primary-green);
  line-height: 1.05;

  @media (max-width: 900px) {
    font-size: 2.5rem;
  }
  @media (max-width: 780px) {
    font-size: 1.7rem;

    padding: 0 20px;
  }
`;

const HeroSubtitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 65px;
  font-weight: 100;
  font-style: normal;
  color: var(--primary-green);
  line-height: 1;
  margin-top: -10px;
  margin-bottom: 0;
  width: 100%;
  letter-spacing: 0.5px;

  @media (max-width: 900px) {
    font-size: 35px;
  }
  @media (max-width: 600px) {
    font-size: 1.9rem;
  }
`;
const MobileHeroImg = styled.img`
  display: none;
  @media (max-width: 900px) {
    display: none;
  }
  @media (max-width: 600px) {
    display: block;
    width: 100%;
  }
`;

export const Hero = () => (
  <HeroSection>
    <HeroLeft
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <HeroImg src={heroLeft} alt="Hero Left" />
      <MobileImgWrapper>
        <MobileImg1 src={Img1}  />
        <MobileImg2 src={Img2} />
      </MobileImgWrapper>
    </HeroLeft>

    <HeroRight>
      <TextWrapper
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 5, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <HeroTitle>Gaining Knowledge</HeroTitle>
        <HeroSubtitle>Through Connection.</HeroSubtitle>
      </TextWrapper>

      <ImgWrapper
        initial={{ x: 0, opacity: 0 }}
        animate={{ x: -100, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <HeroImgRight
          src={heroRight}
          alt="Hero Right"
          style={{ marginBottom: 24 }}
        />
        <MobileHeroImg src={mb}/>
      </ImgWrapper>
    </HeroRight>
  </HeroSection>
);
