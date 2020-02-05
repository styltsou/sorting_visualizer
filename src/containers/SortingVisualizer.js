import React from 'react';
import styled from 'styled-components';
import resetArray from '../utils/resetArray';
import bubbleSort from '../utils/sorting/bubbleSort';
// import swap from '../utils/swap';

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

// VISUALIZATION OPTIONS
const ARRAY_SIZE = 80;
const UPDATE_SPEED = 5;
const RESET_TIMEOUT = 1500;

class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { array: [], compared: [] };
  }

  componentDidMount() {
    this.setState({ array: resetArray(ARRAY_SIZE) });
    // this.sortArray();
  }

  generateArray = () => {
    this.setState({ array: resetArray(ARRAY_SIZE) });
  };

  sortArray = () => {
    const arr = [...this.state.array];
    const { comparisons, swaps } = bubbleSort(arr);
    let newArr = [...this.state.array];
    let comparedElements = [];
    let i = 0;

    const intervalID = setInterval(() => {
      if (i > 0) {
        comparedElements[comparisons[i - 1].idxa] = false;
        comparedElements[comparisons[i - 1].idxb] = false;
      }
      comparedElements[comparisons[i].idxa] = true;
      comparedElements[comparisons[i].idxb] = true;

      let temp = newArr[swaps[i].idxa];
      newArr[swaps[i].idxa] = newArr[swaps[i].idxb];
      newArr[swaps[i].idxb] = temp;
      i++;

      this.setState({ array: newArr, compared: comparedElements });

      if (i === swaps.length) {
        comparedElements[comparisons[i - 1].idxa] = false;
        comparedElements[comparisons[i - 1].idxb] = false;

        this.setState({ compared: comparedElements });

        clearInterval(intervalID);

        if (RESET_TIMEOUT !== 'none') {
          setTimeout(() => {
            this.setState({ array: resetArray(ARRAY_SIZE) });
          }, RESET_TIMEOUT);
        }
      }
    }, UPDATE_SPEED);
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
            <Bar height={el} isCompared={this.state.compared[idx]} key={idx} />
          ))}
        </MainContainer>
      </>
    );
  }
}

export default SortingVisualizer;
