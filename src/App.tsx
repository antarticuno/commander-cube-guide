import styled from 'styled-components';
import SplashSection from './components/SplashSection';
import Column from './components/Column';

const Article = styled(Column)`
  font-family: 'Raleway', sans-serif;
`;

function App() {
  return <Article><SplashSection /></Article>;
}

export default App;
