import React from 'react';
import styled from 'styled-components';
import useFitText from "use-fit-text";

const HeaderElement = styled.header`
  grid-column: span 2;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8em;
  background-color: #ffffff;
  color: #000000;
  text-shadow: 2px 2px 2px #801818;
  white-space: nowrap;
  font-family: Chalkduster;

  @media (min-width: 768px) {
      padding-left: 200px;
    }
`;

const Header = ({ children }) => {
  const { fontSize, ref } = useFitText({ 
    minFontSize: 10,
    maxFontSize: 180,
  });

  return (
    <HeaderElement ref={ref} style={{ fontSize }}>
      {children}
    </HeaderElement>
  );
};

export default Header;