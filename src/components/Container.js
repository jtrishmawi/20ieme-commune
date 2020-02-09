import styled from 'styled-components';

const Container = styled.main`
  flex: 1;

  p {
    text-align: center;
    padding: 20px;
    margin: 0;

    &::first-letter {
      text-transform: capitalize;
    }
  }
`;

export default Container;