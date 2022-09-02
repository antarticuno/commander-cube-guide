import styled from 'styled-components';
import Column from './Column';
import Row from './Row';
import thingInTheIce from '../assets/thing-in-the-ice.jpeg';
import awokenHorror from '../assets/awoken-horror.jpeg';
import smolderingEgg from '../assets/smoldering-egg.jpeg';
import ashmouthDragon from '../assets/ashmouth-dragon.jpeg';
import extusOriqOverlord from '../assets/extus-oriq-overlord.jpeg';
import awakenTheBloodAvatar from '../assets/awaken-the-blood-avatar.jpeg';
import cutRibbons from '../assets/cut-ribbons.jpeg';
import forbiddenAlchemy from '../assets/forbidden-alchemy.jpeg';
import biomassMutation from '../assets/biomass-mutation.jpeg';

const StyledQuickReference = styled(Column)`
  align-items: center;
  padding: 30px 10%;
  
  h2 {
    width: 100%;
    text-align: left;
  }
`;

const MultiColumn = styled(Column)`
  width: 30%;
  align-items: stretch;
  padding: 0 10px;
  
  img {
    display: block;
    width: 100%;
    height: auto;
    margin: 5px 0;
  }
`;

export default function QuickReferenceSection() {
  return (
    <StyledQuickReference>
      <h2 id="quick-reference-section">Quick Reference Section</h2>
      <p>
        The cards displayed here are two-sided. Since it can be difficult to read the backsides of these cards
        &nbsp;without pulling them out of their sleeves, I&apos;ve presented them here for reference.
        &nbsp;The color identity of these cards are the combination of their front and back faces.
      </p>
      <Row>
        <MultiColumn>
          <img src={thingInTheIce} alt="thing-in-the-ice" />
          <img src={awokenHorror} alt="awoken-horror" />
        </MultiColumn>
        <MultiColumn>
          <img src={smolderingEgg} alt="smoldering-egg" />
          <img src={ashmouthDragon} alt="ashmouth-dragon" />
        </MultiColumn>
        <MultiColumn>
          <img src={extusOriqOverlord} alt="extus-oriq-overlord" />
          <img src={awakenTheBloodAvatar} alt="awaken-the-blood-avatar" />
        </MultiColumn>
      </Row>
      <br />
      <p>
        Remember that all symbols on the card count towards determining a card&apos;s color identity, meaning that
        &nbsp;each card listed below is an example of a multicolored card.
      </p>
      <Row>
        <MultiColumn>
          <img src={cutRibbons} alt="cut-ribbons" />
        </MultiColumn>
        <MultiColumn>
          <img src={forbiddenAlchemy} alt="forbidden-alchemy" />
        </MultiColumn>
        <MultiColumn>
          <img src={biomassMutation} alt="biomass-mutation" />
        </MultiColumn>
      </Row>
    </StyledQuickReference>
  );
}
