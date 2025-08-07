import styled from 'styled-components';
import { useState } from 'react';

const Form = styled.form`
  box-shadow: var(--shadow);
  /* max-width: 340px; */
  @media (max-width: 900px) {
    max-width: 340px;
    display: flex;
    gap: 0;
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    padding: 0;
  }


`;

const Input = styled.input`
  padding: 14px 16px;
  border: 1px solid #cced60;
  width: 332px;
  height: 61px;
  border-radius: 10px;
  font-size: 1rem;
  outline: none;
  background: var(--primary-green);
  color: var(--primary-green);
  @media (max-width: 900px) {
    border: none;
    border-radius: 0;
    background-color: #fff;
    width: 70%; 
  }
`;

const Button = styled.button`
  background: #cced60;
  color: var(--primary-green);
  font-weight: 700;
  font-size: 1rem;
  padding: 0 24px;
  width: 163px;
  height: 48px;
  border-radius: 10px;
  border: none;
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap:20px;

  @media (max-width: 900px) {
    margin-top: 0;
    border-radius: 0;
    width: 30%; /* take 30% space in mobile */
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:hover {
    background: #ffe08a;
  }

  a {
    @media (max-width: 900px) {
      display: none;
    }
  }
`;

export const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribed email:', email);
      setEmail('');
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button type="submit">
        <a> Subscribe</a>
        <svg
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.90642 0.975621C9.12074 0.758466 9.41138 0.636475 9.71443 0.636475C10.0175 0.636475 10.3081 0.758466 10.5224 0.975621L15.6654 6.18816C15.8796 6.40538 16 6.69995 16 7.0071C16 7.31425 15.8796 7.60883 15.6654 7.82605L10.5224 13.0386C10.3069 13.2496 10.0182 13.3663 9.71855 13.3637C9.41889 13.3611 9.13224 13.2392 8.92034 13.0245C8.70845 12.8097 8.58825 12.5192 8.58565 12.2155C8.58304 11.9118 8.69824 11.6192 8.90642 11.4007L12.0002 8.16545H1.14287C0.839765 8.16545 0.549071 8.04341 0.33474 7.82618C0.12041 7.60894 0 7.31432 0 7.0071C0 6.69989 0.12041 6.40526 0.33474 6.18803C0.549071 5.9708 0.839765 5.84876 1.14287 5.84876H12.0002L8.90642 2.61352C8.69217 2.39629 8.5718 2.10172 8.5718 1.79457C8.5718 1.48742 8.69217 1.19284 8.90642 0.975621Z"
            fill= "#0D4036"
          />
        </svg>
      </Button>
    </Form>
  );
};