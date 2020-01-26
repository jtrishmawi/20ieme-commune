import React from 'react';
import useFitText from "use-fit-text";
import styled from 'styled-components';

const Title = styled.h1`
  margin: 0;
  height: calc(100vh - 164px);
  text-align: center;

  @media (min-width: 768px) {
    & {
      height: calc(100vh - 104px);
    }
  }
`;

const Hero = ({ children }) => {
  const { fontSize, ref } = useFitText({ maxFontSize: 10000 });

  return (
    <Title ref={ref} style={{ fontSize }}>
      {children}
    </Title>
  );
};

export default Hero;