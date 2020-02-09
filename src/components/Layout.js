import styled from 'styled-components';

const Layout = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
  color: #000000;
  font-size: calc(10px + 2vmin);
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    & {
      display: grid;
      grid-template-columns: 180px 1fr;
      grid-template-rows: auto 1fr auto;
    }
  }
`;

export default Layout;