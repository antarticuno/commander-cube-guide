import styled from 'styled-components';
import Column from './Column';
import Row from './Row';
import smolderingEgg from '../assets/smoldering-egg.jpeg';
import ashmouthDragon from '../assets/ashmouth-dragon.jpeg';
import extusOriqOverlord from '../assets/extus-oriq-overlord.jpeg';
import awakenTheBloodAvatar from '../assets/awaken-the-blood-avatar.jpeg';
import biomassMutation from '../assets/biomass-mutation.jpeg';
import adantoFirstFort from '../assets/adanto-the-first-fort.jpeg';
import legionsLanding from '../assets/legions-landing.jpeg';
import witchEnchanter from '../assets/witch-enchanter.jpeg';
import witchBlessedMeadow from '../assets/witch-blessed-meadow.jpeg';
import strengthOfTheHarvest from '../assets/strength-of-the-harvest.jpeg';
import havenOfTheHarvest from '../assets/haven-of-the-harvest.jpeg';
import sinkIntoStupor from '../assets/sink-into-stupor.jpeg';
import soporificSprings from '../assets/soporific-springs.jpeg';
import fellTheProfane from '../assets/fell-the-profane.jpeg';
import fellMire from '../assets/fell-mire.jpeg';
import tarriansJournal from '../assets/tarrians-journal.jpeg';
import tombOfAclazotz from '../assets/the-tomb-of-aclazotz.jpeg';
import bloodsoakedInsight from '../assets/bloodsoaked-insight.jpeg';
import sanguineMorass from '../assets/sanguine-morass.jpeg';
import pinnacleMonk from '../assets/pinnacle-monk.jpeg';
import mysticPeak from '../assets/mystic-peak.jpeg';
import brassTunnelGrinder from '../assets/brasss-tunnel-grinder.jpeg';
import tecutlanSearingRift from '../assets/tecutlan-the-searing-rift.jpeg';
import stumpStomp from '../assets/stump-stomp.jpeg';
import burnwillowClearing from '../assets/burnwillow-clearing.jpeg';
import discipleOfFreyalise from '../assets/disciple-of-freyalise.jpeg';
import gardenOfFreyalise from '../assets/garden-of-freyalise.jpeg';
import growingRitesOfItlimoc from '../assets/growing-rites-of-itlimoc.jpeg';
import itlimocCradleOfTheSun from '../assets/itlimoc-cradle-of-the-sun.jpeg';
import glasswingGrace from '../assets/glasswing-grace.jpeg';
import ageGracedChapel from '../assets/age-graced-chapel.jpeg';
import legionLeadership from '../assets/legion-leadership.jpeg';
import legionStronghold from '../assets/legion-stronghold.jpeg';
import valkiGodOfLies from '../assets/valki-god-of-lies.jpeg';
import tibaltCosmicImposter from '../assets/tibalt-cosmic-imposter.jpeg';
import runoStromkirk from '../assets/runo-stromkirk.jpeg';
import krothussLordOfTheDeep from '../assets/krothuss-lord-of-the-deep.jpeg';
import stormTheVault from '../assets/storm-the-vault.jpeg';
import vaultOfCatlacan from '../assets/vault-of-catlacan.jpeg';
import sunbirdStandard from '../assets/sunbird-standard.jpeg';
import sunbirdEffigy from '../assets/sunbird-effigy.jpeg';
import heartflameDuelist from '../assets/heartflame-duelist.jpeg';

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
            <img src={legionsLanding} alt="legions-landing" />
            <img src={adantoFirstFort} alt="adanto-first-fort" />
          </MultiColumn>
          <MultiColumn>
            <img src={witchEnchanter} alt="witch-enchanter" />
            <img src={witchBlessedMeadow} alt="witch-blessed-meadow" />
          </MultiColumn>
          <MultiColumn>
            <img src={sinkIntoStupor} alt="sink-into-stupor" />
            <img src={soporificSprings} alt="soporific-springs" />
          </MultiColumn>
        </Row>
        <Row>
          <MultiColumn>
            <img src={fellTheProfane} alt="fell-the-profane" />
            <img src={fellMire} alt="fell-mire" />
          </MultiColumn>
          <MultiColumn>
            <img src={tarriansJournal} alt="tarrians-journal" />
            <img src={tombOfAclazotz} alt="tomb-of-aclazotz" />
          </MultiColumn>
          <MultiColumn>
            <img src={bloodsoakedInsight} alt="bloodsoaked-insight" />
            <img src={sanguineMorass} alt="sanguine-morass" />
          </MultiColumn>
        </Row>
        <Row>
          <MultiColumn>
            <img src={smolderingEgg} alt="smoldering-egg" />
            <img src={ashmouthDragon} alt="ashmouth-dragon" />
          </MultiColumn>
          <MultiColumn>
            <img src={pinnacleMonk} alt="pinnacle-monk" />
            <img src={mysticPeak} alt="mystic-peak" />
          </MultiColumn>
          <MultiColumn>
            <img src={brassTunnelGrinder} alt="brass-tunnel-grinder" />
            <img src={tecutlanSearingRift} alt="tecutlan-searing-rift" />
          </MultiColumn>
        </Row>
        <Row>
          <MultiColumn>
            <img src={stumpStomp} alt="stump-stomp" />
            <img src={burnwillowClearing} alt="burnwillow-clearing" />
          </MultiColumn>
          <MultiColumn>
            <img src={discipleOfFreyalise} alt="disciple-of-freyalise" />
            <img src={gardenOfFreyalise} alt="garden-of-freyalise" />
          </MultiColumn>
          <MultiColumn>
            <img src={growingRitesOfItlimoc} alt="growing-rites-of-itlimoc" />
            <img src={itlimocCradleOfTheSun} alt="itlimoc-cradle-of-the-sun" />
          </MultiColumn>
        </Row>
        <Row>
          <MultiColumn>
            <img src={strengthOfTheHarvest} alt="strength-of-the-harvest" />
            <img src={havenOfTheHarvest} alt="haven-of-the-harvest" />
          </MultiColumn>
          <MultiColumn>
            <img src={glasswingGrace} alt="glasswing-grace" />
            <img src={ageGracedChapel} alt="age-graced-chapel" />
          </MultiColumn>
          <MultiColumn>
            <img src={legionLeadership} alt="legion-leadership" />
            <img src={legionStronghold} alt="legion-stronghold" />
          </MultiColumn>
        </Row>
        <Row>
          <MultiColumn>
            <img src={extusOriqOverlord} alt="extus-oriq-overlord" />
            <img src={awakenTheBloodAvatar} alt="awaken-the-blood-avatar" />
          </MultiColumn>
          <MultiColumn>
            <img src={valkiGodOfLies} alt="valki-god-of-lies" />
            <img src={tibaltCosmicImposter} alt="tibalt-cosmic-imposter" />
          </MultiColumn>
          <MultiColumn>
            <img src={runoStromkirk} alt="runo-stromkirk" />
            <img src={krothussLordOfTheDeep} alt="krothuss-lord-of-the-deep" />
          </MultiColumn>
        </Row>
        <Row>
          <MultiColumn>
            <img src={stormTheVault} alt="storm-the-vault" />
            <img src={vaultOfCatlacan} alt="vault-of-catlacan" />
          </MultiColumn>
          <MultiColumn>
            <img src={sunbirdStandard} alt="sunbird-standard" />
            <img src={sunbirdEffigy} alt="sunbird-effigy" />
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
          <img src={heartflameDuelist} alt="heartflame-duelist" />
        </MultiColumn>
        <MultiColumn>
          <img src={biomassMutation} alt="biomass-mutation" />
        </MultiColumn>
      </Row>
    </StyledQuickReference>
  );
}
