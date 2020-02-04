import React from 'react';
import styled from 'styled-components';

import Button from '../Button';

const FLexContainer = styled.div`
  display: flex;
  max-width: 100%;
  flex-direction: row;
  background-color: var(--color-white);
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.1);
`;

const ToolbarContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
`;

const SortButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-grow: 1;
`;

const Header = () => {
  return (
    <FLexContainer>
      <ToolbarContainer>
        <Button primary={true}>Generate Array</Button>
        <Button primary={false}>Bubble Sort</Button>
        <Button primary={false}>Quick Sort</Button>
        <Button primary={false}>Merge Sort</Button>
      </ToolbarContainer>
      <SortButtonContainer>
        <Button primary={true}>Sort</Button>
      </SortButtonContainer>
    </FLexContainer>
  );
};

export default Header;
