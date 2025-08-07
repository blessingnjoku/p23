import React, { useState } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EventCard } from './components/EventCard';
import { Footer } from './components/Footer';
import { motion } from 'framer-motion';
import bg from './assets/images/Rectangle 6640.png'
import mb from './assets/images/bg.png';
const events = [
  {
    title: "Vision & Execution",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    type: "BRN Only",
  },
  {
    title: "Event Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    title: "Event Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    type: "BRN Only",
  },
  {
    title: "Event Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    title: "Event Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
];

const Main = styled.main`
  min-height: 100vh;
  background: #f6f3f0;
`;

const EventsSection = styled.section`
  background: #0d4036;
  padding: 56px 0 64px 0;
  display: flex;

  align-items: center;
  justify-content: space-between;
  width: 100vw;
  background-image: url("${bg}");
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 900px) {
  flex-direction: column;
    justify-content: center;
    padding:0;
    margin:0;
    width:100%;
    background-image: url("${mb}");
  }
`;


const CardsGrid = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 12px; 
  width: 90%;
  margin:0 auto;
  align-content: center;
  align-items: center;
 
  margin-top: 16px;
  @media (max-width: 900px) {
 flex-direction: column;
 align-items: center;
 justify-content:center;
 padding:0;
 margin:0;
 margin-right:0;
  }
`;
 const EventsHeader = styled.div`
   border-radius: var(--radius);
   box-shadow: var(--shadow);
   padding: 32px 24px 24px 24px;
   width: 395px;
   min-height: 280px;
   @media (max-width: 900px) {
     padding: 32px;
     width: 395px;
     height: 280px;
     border-radius: 0;
     box-shadow: none;
   margin-bottom:30px;
   height: auto;

  
     background-image: url("${bg}");
   }
 `;
 const EventsTitle = styled.h2`
 color: #fff;
  font-size: 1.5rem;
  font-weight: 800;
 `
 const EventsDesc = styled.p`
  color: #fff;
  font-size: 1rem;
  line-height: 1.5;
 
`
const SeeAllButton = styled.button`
display: flex;
  align-items: center;
 gap:10px;
 justify-content: center;

  /* padding: 10px 22px; */
  width: 265px;
  height: 53px;
  border-radius: 10px;
  background-color:#fff;

  a{
    color: var(--primary-green);
    font-size: 1.3rem;
    font-weight: 100;
    text-decoration: none;
    text-align:center;
  }

`

const MobileToggle = styled.div`
  display: none;
  margin-bottom: 24px;

  @media (max-width: 900px) {
    display: flex;
    /* gap: 16px; */
    width: 100%;
    height: 50px;
    margin: 0;
    padding: 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    border-bottom: 3px solid #000;



    p {
      padding: 10px 16px;
      text-align: center;
      width: 100%;
    height: 100%;
      color: var(--primary-green);
      font-weight: 700;
      cursor: pointer;

      &.active {
        background: var(--primary-green);
        color: #fff;
      }
    }
  }
`;
export default function App() {
  const [activeTab, setActiveTab] = React.useState<"all" | "BRN Only">("all");

  const filteredEvents =
    activeTab === "all" ? events : events.filter((e) => e.type === "BRN Only");

  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const isMobile = windowWidth <= 900;


  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Main>
        <Hero />
        <EventsSection>
          <CardsGrid
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.18,
                },
              },
            }}
          >
            <EventsHeader>
              <EventsTitle>Upcoming Event For The Year</EventsTitle>
              <EventsDesc>
                Explore upcoming events tailored to equip, connect, and empower
                businesses across Africa and beyond.
              </EventsDesc>
              <SeeAllButton onClick={() => console.log("See All Events")}>
                <a> See All Events</a>
                <svg
                  width="17"
                  height="13"
                  viewBox="0 0 17 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.40642 0.475499C9.62074 0.258344 9.91138 0.136353 10.2144 0.136353C10.5175 0.136353 10.8081 0.258344 11.0224 0.475499L16.1654 5.68804C16.3796 5.90526 16.5 6.19983 16.5 6.50698C16.5 6.81413 16.3796 7.10871 16.1654 7.32593L11.0224 12.5385C10.8069 12.7495 10.5182 12.8662 10.2185 12.8636C9.91889 12.8609 9.63224 12.7391 9.42034 12.5244C9.20845 12.3096 9.08825 12.0191 9.08565 11.7153C9.08304 11.4116 9.19824 11.119 9.40642 10.9006L12.5002 7.66532H1.64287C1.33977 7.66532 1.04907 7.54328 0.83474 7.32605C0.62041 7.10882 0.5 6.81419 0.5 6.50698C0.5 6.19977 0.62041 5.90514 0.83474 5.68791C1.04907 5.47068 1.33977 5.34864 1.64287 5.34864H12.5002L9.40642 2.11339C9.19217 1.89617 9.0718 1.6016 9.0718 1.29445C9.0718 0.987296 9.19217 0.69272 9.40642 0.475499Z"
                    fill="#0D4036"
                  />
                </svg>
              </SeeAllButton>
            </EventsHeader>
            <MobileToggle>
              <p
                className={activeTab === "all" ? "active" : ""}
                onClick={() => setActiveTab("all")}
              >
                All Events
              </p>
              <p
                className={activeTab === "BRN Only" ? "active" : ""}
                onClick={() => setActiveTab("BRN Only")}
              >
                BRN Only
              </p>
            </MobileToggle>
            {filteredEvents.map((event, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <EventCard
                  title={event.title}
                  description={event.description}
                  onBook={() => console.log(`Book A Seat: ${event.title}`)}
                  onDetails={() => console.log(`Event Details: ${event.title}`)}
                  isFeatured={
                    i === 0 &&
                    !(isMobile && activeTab === "all") &&
                    !(isMobile && activeTab === "BRN Only")
                  }
                  isAllTab={isMobile && activeTab === "all"}
                />
              </motion.div>
            ))}
          </CardsGrid>
        </EventsSection>
        <Footer />
      </Main>
    </>
  );
}
