import styled from 'styled-components';
import dreadhorde from './assets/dreadhorde.jpeg';
import deicide from './assets/deicide.jpg';
import SplashSection from './components/SplashSection';
import Column from './components/Column';
import ArchetypesSection from './components/ArchetypesSection';
import ShufflingSection from './components/ShufflingSection';
import TableOfContentsSection from './components/TableOfContentsSection';
import RulesSection from './components/RulesSection';
import QuickReferenceSection from './components/QuickReferenceSection';

const Article = styled(Column)`
  font-family: 'Raleway', sans-serif;
  
  a {
    color: #2E2633;
    text-decoration: none;
    cursor: pointer;
    
    &:hover {
      color: #009489;
    }
    
    &:visited {
      color: #2E2633;
      
      &:hover {
        color: #009489;
      }
    }
  }
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
      <SplashSection image={dreadhorde}>
        <>
          <h1>Commander Cube Rules &amp; Archetypes</h1>
          <p>Designed by: Brendan Yang</p>
        </>
      </SplashSection>
      <TableOfContentsSection />
      <hr />
      <RulesSection />
      <SplashSection image={deicide}>
        <p>&quot;It is done.&quot; - Elspeth</p>
      </SplashSection>
      <ArchetypesSection />
      <hr />
      <ShufflingSection />
      <hr />
      <QuickReferenceSection />
    </Article>
  );
}

export default App;
