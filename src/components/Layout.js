import styled from 'styled-components';

const Layout = styled.div`
  min-height: 100vh;
  background-color: #713e44;
  color: white;
  font-size: calc(10px + 2vmin);
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    & {
      display: grid;
      grid-template-columns: 200px 1fr 200px;
      grid-template-rows: auto 1fr auto;
    }
  }
`;

export default Layout;