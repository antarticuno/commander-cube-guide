import styled from 'styled-components';
import Row from './Row';
import dreadhorde from '../assets/dreadhorde.jpeg';

const SplashStyle = styled(Row)`
  width: 100%;
  background-image: url(${dreadhorde});
  min-height: 100vh;
  background-size: cover;
  background-repeat: none;
  background-position: center top;
  align-items: center; 
  
  & > div {
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    text-align: center;
    width: 100%;
    padding: 50px 0;
    
    h1 {
      font-size: 2.1em;
      margin: 0 20px;
    }
    
    p {
      margin: 0;
      font-style: italic;
      font-size: 0.9em;
    }
  }
`;

export default function SplashSection() {
  return (
    <SplashStyle>
      <div>
        <h1>Commander Cube Rules &amp; Archetypes</h1>
        <p>Designed by: Brendan Yang</p>
      </div>
    </SplashStyle>
  );
}
