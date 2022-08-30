import styled from 'styled-components';
import { ReactNode } from 'react';
import Row from './Row';

const SplashStyle = styled(Row)<{ image: string }>`
  width: 100%;
  background-image: url(${(props) => props.image});
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
      font-size: 1em;
    }
  }
`;

export interface SplashProps {
  image: string,
  children: ReactNode,
}

export default function SplashSection({ image, children }: SplashProps) {
  return (
    <SplashStyle image={image}>
      <div>
        {children}
      </div>
    </SplashStyle>
  );
}
