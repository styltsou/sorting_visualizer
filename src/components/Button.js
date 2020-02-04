import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin: 1.5rem 2rem;
  padding: 1rem 1.5rem;
  font-size: 1.8rem;
  border: 2px solid var(--color-secondary);
  border-radius: 0.3rem;
  color: ${props =>
    props.primary ? 'var(--color-white)' : 'var(--color-secondary)'};
  background-color: ${props =>
    props.primary ? 'var(--color-secondary)' : 'var(-color--white)'};
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${props =>
      props.primary ? 'var(--color-secondary)' : 'var(--color-white)'};
    background-color: ${props =>
      props.primary ? 'transparent' : 'var(--color-secondary)'};
  }

  &:active {
    transform: translateY(-3px);
  }
`;

const Button = ({ primary, clicked, children }) => {
  if (primary) {
    return <Div primary onClick={clicked}>{children}</Div>;
  } else {
    return <Div onClick={clicked}>{children}</Div>;
  }
};

export default Button;
