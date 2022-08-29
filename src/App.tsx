import styled from 'styled-components';
import SplashSection from './components/SplashSection';
import Column from './components/Column';
import ArchetypesSection from './components/ArchetypesSection';

const Article = styled(Column)`
  font-family: 'Raleway', sans-serif;
  
  p {
    font-weight: 200;
  }
`;

function App() {
  return (
    <Article>
      <SplashSection />
      <ArchetypesSection />
    </Article>
  );
}

export default App;
