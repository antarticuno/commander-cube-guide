import styled from 'styled-components';
import Column from './Column';
import GRNArchetypeList from './GRNArchetypeList';
import RNAArchetypeList from './RNAArchetypeList';

const TableOfContentsStyled = styled(Column)`
  align-items: center;
  padding: 30px 100px;
  
  h2 {
    width: 100%;
    text-align: left;
    margin-bottom: 0;
  }
  
  & > ul {
    list-style-type: none;
    width: 80%;
  }
`;

export default function TableOfContentsSection() {
  return (
    <TableOfContentsStyled>
      <h2>Table of Contents</h2>
      <ul>
        <li><h3>Rules</h3></li>
        <li>
          <h3><a href="#archetypes-section">Archetypes</a></h3>
          <GRNArchetypeList />
          <RNAArchetypeList />
        </li>
        <li><h3><a href="#shuffling-section">Shuffling the Cube</a></h3></li>
      </ul>
    </TableOfContentsStyled>
  );
}
