import styled from 'styled-components';
import { List } from './List';

const Nav = styled.nav`
  background-color: #ffffff;

  ${List} {
    @media (min-width: 768px) {
      position: sticky;
      top: 0;
    }
  }
`;

export default Nav;