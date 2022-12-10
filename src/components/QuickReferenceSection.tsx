import styled from 'styled-components';
import Column from './Column';
import Row from './Row';
import thingInTheIce from '../assets/thing-in-the-ice.jpeg';
import awokenHorror from '../assets/awoken-horror.jpeg';
import smolderingEgg from '../assets/smoldering-egg.jpeg';
import ashmouthDragon from '../assets/ashmouth-dragon.jpeg';
import extusOriqOverlord from '../assets/extus-oriq-overlord.jpeg';
import awakenTheBloodAvatar from '../assets/awaken-the-blood-avatar.jpeg';
import kytheon from '../assets/kytheon-hero-of-akros.jpeg';
import gideon from '../assets/gideon-battle-forged.jpeg';
import flameChanneler from '../assets/flame-channeler.jpeg';
import embodimentOfFlame from '../assets/embodiment-of-flame.jpeg';
import nissaVastwood from '../assets/nissa-vastwood-seer.jpeg';
import nissaAnimist from '../assets/nissa-sage-animist.jpeg';
import uvilda from '../assets/uvilda.jpeg';
import nassari from '../assets/nassari.jpeg';
import spiderSpawning from '../assets/spider-spawning.jpeg';
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
      <Column>
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
        <Row>
          <MultiColumn>
            <img src={kytheon} alt="kytheon" />
            <img src={gideon} alt="gideon" />
          </MultiColumn>
          <MultiColumn>
            <img src={flameChanneler} alt="flame-channeler" />
            <img src={embodimentOfFlame} alt="embodiment-of-flame" />
          </MultiColumn>
          <MultiColumn>
            <img src={nissaVastwood} alt="nissa-vastwood" />
            <img src={nissaAnimist} alt="nissa-animist" />
          </MultiColumn>
        </Row>
      </Column>
      <br />
      <p>
        Remember that all symbols on the card count towards determining a card&apos;s color identity, meaning that
        &nbsp;each card listed below is an example of a multicolored card.
      </p>
      <Row>
        <MultiColumn>
          <img src={spiderSpawning} alt="spider-spawning" />
        </MultiColumn>
        <MultiColumn>
          <img src={uvilda} alt="uvilda" />
          <img src={nassari} alt="nassari" />
        </MultiColumn>
        <MultiColumn>
          <img src={biomassMutation} alt="biomass-mutation" />
        </MultiColumn>
      </Row>
    </StyledQuickReference>
  );
}
