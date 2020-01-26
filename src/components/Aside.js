import styled from 'styled-components';
import { List } from './List';

const Aside = styled.aside`
  background-color: #936;

  ${List} {
    @media (min-width: 768px) {
      position: sticky;
      top: 0;
    }
  }
`;

export default Aside;