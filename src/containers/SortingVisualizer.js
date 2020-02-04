import React from 'react';
import styled from 'styled-components';
import resetArray from '../utils/resetArray';
import bubbleSort from '../utils/sorting/bubbleSort';
import swap from '../utils/swap';

import Bar from '../components/Bar';
import Button from '../components/Button';

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

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  width: 100vw;
  height: 90vh;
  bottom: 0px;
`;

class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { array: [] };
  }

  componentDidMount() {
    this.setState({ array: resetArray(10, 850, 100) });
    // this.sortArray();
  }

  generateArray = () => {
    this.setState({ array: resetArray(10, 800, 100) });
  };

  sortArray = () => {
    const arr = [...this.state.array];
    const swaps = bubbleSort(arr);
    let newArr = [...this.state.array];
    let i = 0;

    const interval = setInterval(() => {
      // swap the 2 array values
      let temp = newArr[swaps[i].idxa];
      newArr[swaps[i].idxa] = newArr[swaps[i].idxb];
      newArr[swaps[i].idxb] = temp;
      i++;

      this.setState({ array: newArr });

      if (i === swaps.length) clearInterval(interval);
    }, 4);
    console.log(swaps);
  };

  render() {
    return (
      <>
        <FLexContainer>
          <ToolbarContainer>
            <Button primary={true} clicked={this.generateArray}>
              Generate Array
            </Button>
            <Button primary={false}>Bubble Sort</Button>
            <Button primary={false}>Quick Sort</Button>
            <Button primary={false}>Merge Sort</Button>
          </ToolbarContainer>
          <SortButtonContainer>
            <Button primary={true} clicked={this.sortArray}>
              Sort
            </Button>
          </SortButtonContainer>
        </FLexContainer>
        <MainContainer>
          {this.state.array.map((el, idx) => (
            <Bar height={el} isCompared={false} key={idx} />
          ))}
        </MainContainer>
      </>
    );
  }
}

export default SortingVisualizer;
