import styled from 'styled-components';
import SplashSection from './components/SplashSection';
import Column from './components/Column';
import ArchetypesSection from './components/ArchetypesSection';
import ShufflingSection from './components/ShufflingSection';
import TableOfContentsSection from './components/TableOfContentsSection';
import RulesSection from './components/RulesSection';

const Article = styled(Column)`
  font-family: 'Raleway', sans-serif;
  
  p {
    font-weight: 200;
  }
  hr {
    margin: 10px auto;
    width: 40%;
  }
`;

function App() {
  return (
    <Article>
      <SplashSection />
      <TableOfContentsSection />
      <hr />
      <RulesSection />
      <hr />
      <ArchetypesSection />
      <hr />
      <ShufflingSection />
    </Article>
  );
}

export default App;
