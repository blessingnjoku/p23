import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)<{ isFeatured?: boolean; isAllTab?: boolean }>`
  background-color: ${({ isFeatured, isAllTab }) =>
    isAllTab || isFeatured ? "#0d4036" : "#fff"};
  color: ${({ isFeatured, isAllTab }) =>
    isAllTab || isFeatured ? "#fff" : "#333"};
  border-radius: 10px;
  box-shadow: var(--shadow);
  padding: 32px 24px 24px 24px;
  width: 395px;
  height: 280px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 35px;
  margin-right: 10px;
`;
const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.2rem;
  font-weight: 700;
  color: inherit;
`;

const CalendarIcon = styled.span`
  display: inline-block;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  color: inherit;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardBody = styled.div`
  font-size: 1rem;
  color: inherit;
  min-height: 60px;
`;

const CardActions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
`;

const Button = styled.button<{ primary?: boolean; isFeatured?: boolean; isAllTab?: boolean }>`
  width: 154px;
  height: 45px;
  border-radius: 10px;
  font-weight: bolder;
  display: flex;
  align-items: center;
  gap: 8px;
  outline: none;
  border: 1.5px solid
    ${({ isFeatured, isAllTab }) =>
      isAllTab || isFeatured ? "#fff" : "var(--primary-green)"};
  background: ${({ isAllTab, isFeatured }) =>
    isAllTab || isFeatured ? "#0d4036" : "#fff"};
  color: ${({ isAllTab, isFeatured }) =>
    isAllTab || isFeatured ? "#fff" : "var(--primary-green)"};
  transition: background var(--transition), color var(--transition),
    box-shadow var(--transition);

  color: inherit;
  &:hover {
    background: ${({ primary }) =>
      primary ? "#145c4a" : "var(--primary-green)"};
    color: #fff;
    outline: none;
  }
  a {
    color: inherit;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bolder;
    font-family: " GT Walsheim Trial";
  }
`;
const EventButton = styled.button`
  color: inherit;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  width: 154px;
  height: 45px;
  border-radius: 10px;
  background: none;
  cursor: pointer;
  a {
    text-decoration: none;
    color: inherit;
    font-family: " GT Walsheim Trial";
  }
`;
const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 800;
  color: inherit;
  margin: 0;
`;


type EventCardProps = {
  title: string;
  description: string;
  isAllTab: boolean;
  onBook: () => void;
  onDetails: () => void;
  isFeatured?: boolean;
};

export const EventCard: React.FC<EventCardProps> = ({
  title,
  description,
  onBook,
  onDetails,
  isAllTab,
  isFeatured,
}) => (
  <Card
    isAllTab={isAllTab}
    isFeatured={isFeatured}
    initial={{ opacity: 0, y: 40, rotate: 0 }}
    animate={{
      opacity: 1,
      y: isFeatured ? 8 : 0,
      rotate: isFeatured ? -8 : 0,
    }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <CardHeader>
      <CalendarIcon>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32 39.5H8C6.01088 39.5 4.10322 38.7098 2.6967 37.3033C1.29018 35.8968 0.5 33.9891 0.5 32V11C0.5 9.01088 1.29018 7.10322 2.6967 5.6967C4.10322 4.29018 6.01088 3.5 8 3.5H32C33.9891 3.5 35.8968 4.29018 37.3033 5.6967C38.7098 7.10322 39.5 9.01088 39.5 11V32C39.5 33.9891 38.7098 35.8968 37.3033 37.3033C35.8968 38.7098 33.9891 39.5 32 39.5ZM8 6.5C6.80653 6.5 5.66193 6.97411 4.81802 7.81802C3.97411 8.66193 3.5 9.80653 3.5 11V32C3.5 33.1935 3.97411 34.3381 4.81802 35.182C5.66193 36.0259 6.80653 36.5 8 36.5H32C33.1935 36.5 34.3381 36.0259 35.182 35.182C36.0259 34.3381 36.5 33.1935 36.5 32V11C36.5 9.80653 36.0259 8.66193 35.182 7.81802C34.3381 6.97411 33.1935 6.5 32 6.5H8Z"
            fill={isAllTab || isFeatured ? "#fff" : "#0D4036"}
          />
          <path
            d="M32 33.5H26C25.6022 33.5 25.2206 33.342 24.9393 33.0607C24.658 32.7794 24.5 32.3978 24.5 32V26C24.5 25.6022 24.658 25.2206 24.9393 24.9393C25.2206 24.658 25.6022 24.5 26 24.5H32C32.3978 24.5 32.7794 24.658 33.0607 24.9393C33.342 25.2206 33.5 25.6022 33.5 26V32C33.5 32.3978 33.342 32.7794 33.0607 33.0607C32.7794 33.342 32.3978 33.5 32 33.5ZM27.5 30.5H30.5V27.5H27.5V30.5Z"
            fill={isAllTab || isFeatured ? "#fff" : "#0D4036"}
          />
          <path
            d="M38 15.5H2C1.60218 15.5 1.22064 15.342 0.93934 15.0607C0.658035 14.7794 0.5 14.3978 0.5 14C0.5 13.6022 0.658035 13.2206 0.93934 12.9393C1.22064 12.658 1.60218 12.5 2 12.5H38C38.3978 12.5 38.7794 12.658 39.0607 12.9393C39.342 13.2206 39.5 13.6022 39.5 14C39.5 14.3978 39.342 14.7794 39.0607 15.0607C38.7794 15.342 38.3978 15.5 38 15.5Z"
            fill={isAllTab || isFeatured ? "#fff" : "#0D4036"}
          />
          <path
            d="M12.5 9.5C12.1022 9.5 11.7206 9.34196 11.4393 9.06066C11.158 8.77936 11 8.39782 11 8V2C11 1.60218 11.158 1.22064 11.4393 0.93934C11.7206 0.658035 12.1022 0.5 12.5 0.5C12.8978 0.5 13.2794 0.658035 13.5607 0.93934C13.842 1.22064 14 1.60218 14 2V8C14 8.39782 13.842 8.77936 13.5607 9.06066C13.2794 9.34196 12.8978 9.5 12.5 9.5Z"
            fill={isAllTab || isFeatured ? "#fff" : "#0D4036"}
          />
          <path
            d="M27.5 9.5C27.1022 9.5 26.7206 9.34196 26.4393 9.06066C26.158 8.77936 26 8.39782 26 8V2C26 1.60218 26.158 1.22064 26.4393 0.93934C26.7206 0.658035 27.1022 0.5 27.5 0.5C27.8978 0.5 28.2794 0.658035 28.5607 0.93934C28.842 1.22064 29 1.60218 29 2V8C29 8.39782 28.842 8.77936 28.5607 9.06066C28.2794 9.34196 27.8978 9.5 27.5 9.5Z"
            fill={isAllTab || isFeatured ? "#fff" : "#0D4036"}
          />
        </svg>
      </CalendarIcon>

      <CardTitle> {title}</CardTitle>
    </CardHeader>
    <CardBody>{description}</CardBody>
    <CardActions>
      <Button
        primary
        isFeatured={isFeatured}
        isAllTab={isAllTab}
        onClick={onBook}
      >
        <a> Book A Seat</a>
        <svg
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.90642 0.975621C9.12074 0.758466 9.41138 0.636475 9.71443 0.636475C10.0175 0.636475 10.3081 0.758466 10.5224 0.975621L15.6654 6.18816C15.8796 6.40538 16 6.69995 16 7.0071C16 7.31425 15.8796 7.60883 15.6654 7.82605L10.5224 13.0386C10.3069 13.2496 10.0182 13.3663 9.71855 13.3637C9.41889 13.3611 9.13224 13.2392 8.92034 13.0245C8.70845 12.8097 8.58825 12.5192 8.58565 12.2155C8.58304 11.9118 8.69824 11.6192 8.90642 11.4007L12.0002 8.16545H1.14287C0.839765 8.16545 0.549071 8.04341 0.33474 7.82618C0.12041 7.60894 0 7.31432 0 7.0071C0 6.69989 0.12041 6.40526 0.33474 6.18803C0.549071 5.9708 0.839765 5.84876 1.14287 5.84876H12.0002L8.90642 2.61352C8.69217 2.39629 8.5718 2.10172 8.5718 1.79457C8.5718 1.48742 8.69217 1.19284 8.90642 0.975621Z"
            fill={isAllTab || isFeatured ? "#fff" : "#0D4036"}
          />
        </svg>
      </Button>
      <EventButton onClick={onDetails}>
        <a> Event Details</a>
        <svg
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.90642 0.975621C9.12074 0.758466 9.41138 0.636475 9.71443 0.636475C10.0175 0.636475 10.3081 0.758466 10.5224 0.975621L15.6654 6.18816C15.8796 6.40538 16 6.69995 16 7.0071C16 7.31425 15.8796 7.60883 15.6654 7.82605L10.5224 13.0386C10.3069 13.2496 10.0182 13.3663 9.71855 13.3637C9.41889 13.3611 9.13224 13.2392 8.92034 13.0245C8.70845 12.8097 8.58825 12.5192 8.58565 12.2155C8.58304 11.9118 8.69824 11.6192 8.90642 11.4007L12.0002 8.16545H1.14287C0.839765 8.16545 0.549071 8.04341 0.33474 7.82618C0.12041 7.60894 0 7.31432 0 7.0071C0 6.69989 0.12041 6.40526 0.33474 6.18803C0.549071 5.9708 0.839765 5.84876 1.14287 5.84876H12.0002L8.90642 2.61352C8.69217 2.39629 8.5718 2.10172 8.5718 1.79457C8.5718 1.48742 8.69217 1.19284 8.90642 0.975621Z"
            fill={isAllTab || isFeatured ? "#fff" : "#0D4036"}
          />
        </svg>
      </EventButton>
    </CardActions>
  </Card>
);