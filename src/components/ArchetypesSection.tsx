import styled from 'styled-components';
import Column from './Column';
import yennet from '../assets/yennet.jpeg';
import w from '../assets/w.png';
import u from '../assets/u.png';
import b from '../assets/b.png';
import r from '../assets/r.png';
import g from '../assets/g.png';
import Row from './Row';
import GRNArchetypeList from './GRNArchetypeList';
import RNAArchetypeList from './RNAArchetypeList';

const ArchetypesStyled = styled(Column)`
  align-items: center;
  padding: 30px 100px;
  
  h2 {
    width: 100%;
    text-align: left;
  }
  li {
    list-style-type: none;
    font-weight: 200;
  }
`;

const ArchetypeBlurb = styled.div`
  h4 {
    margin-bottom: 0;
  }
  p {
    margin: 10px 15px;
  }
`;

export default function ArchetypesSection() {
  return (
    <ArchetypesStyled id="archetypes-section">
      <h2>Archetypes</h2>
      <p>
        The Commander Cube is geared towards providing players with strong draft archetypes focused around 2-color pairings.
        Each 2-color pairing contributes a distinct flavor and strategy towards the overall deck-building design,
        &nbsp;and rewards players for choosing cards that synergize well with said strategies.
        The 2-color draft archetypes for my cube are as follows:
      </p>
      <Row>
        <GRNArchetypeList />
        <RNAArchetypeList />
      </Row>
      <Row style={{ alignItems: 'flex-start', marginBottom: '20px' }}>
        <Column>
          <ArchetypeBlurb>
            <h4 id="agents-of-artifice">
              Agents of Artifice&nbsp;
              <img src={u} alt="u" />
              <img src={r} alt="r" />
            </h4>
            <p>
              This archetype focuses on cards that give payoffs for playing many equipments and artifact creatures.
              &nbsp;Create flying artifact thopter tokens, and equip them to score evasive damage! Notable standout picks for this archetype
              &nbsp;include&nbsp;
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=559810">Whirler Rogue</a>
              &nbsp;and&nbsp;
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=563086">Two-Handed Axe</a>
              .
            </p>
          </ArchetypeBlurb>
          <ArchetypeBlurb>
            <h4 id="a-greater-sacrifice">
              A Greater Sacrifice&nbsp;
              <img src={g} alt="g" />
              <img src={b} alt="b" />
            </h4>
            <p>
              This archetype focuses on sacrificing and resurrecting creatures to gain value over time. With a litany of
              &nbsp;reanimation spells and efficiently costed (and often re-animatable) creatures, you&apos;ll be sure to wear down your
              &nbsp;opponents&apos; defenses in no time! Notable standout picks for this archetype include&nbsp;
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=539379">Fleshbag Marauder</a>
              &nbsp;and&nbsp;
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=430381">Viridian Emissary</a>
              .
            </p>
          </ArchetypeBlurb>
          <ArchetypeBlurb>
            <h4 id="spells-thunder">
              Spell&apos;s Thunder&nbsp;
              <img src={r} alt="r" />
              <img src={w} alt="w" />
            </h4>
            <p>
              This archetype focuses on casting many damage-dealing instant and sorcery spells. Pick up cards that trigger off of
              &nbsp;casting instant and sorcery spells to add value to every spell cast.&nbsp;
              Then, cast a mass-damage dealing spell and watch the world burn. Notable standout picks for this archetype include&nbsp;
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=470691">Guttersnipe</a>
              ,&nbsp;
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=513497">Leonin Lightscribe</a>
              , and&nbsp;
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=519217">Volcanic Vision</a>
              .
            </p>
          </ArchetypeBlurb>
          <ArchetypeBlurb>
            <h4 id="delving-for-power">
              Delving for Power
              <img src={u} alt="u" />
              <img src={b} alt="b" />
            </h4>
            <p>
              This archetype focuses on top-deck and graveyard manipulation. Often times cards like&nbsp;
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=571415">Liliana&apos;s Elite</a>
              &nbsp;get stronger the larger your graveyard becomes. Other times, you can use the cards in your graveyard as fuel
              &nbsp;for high-costed power plays like&nbsp;
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=559809">Treasure Cruise</a>
              . Be sure to pick up cards that fill your graveyard via repeatable activated or triggered abilities to keep your engine
              &nbsp;running smoothly (such as&nbsp;
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=495970">Nightveil Sprite</a>
              ).
            </p>
          </ArchetypeBlurb>
          <ArchetypeBlurb>
            <h4 id="count-on-our-strength">
              Count on Our Strength
              <img src={w} alt="w" />
              <img src={g} alt="g" />
            </h4>
            <p>
              This archetype focuses on creating and manipulating +1/+1 counters. Any creature can become a threatening champion
              &nbsp;for your cause - so long as you buff them with enough counters! Notable standout picks for this archetype include&nbsp;
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=559777">Luminarch Aspirant</a>
              &nbsp;and&nbsp;
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=485519">Pridemalkin</a>
              .
            </p>
          </ArchetypeBlurb>
        </Column>
        <Column>
          <ArchetypeBlurb>
            <h4 id="life-exacts-a-toll">
              Life Exacts a Toll&nbsp;
              <img src={w} alt="w" />
              <img src={b} alt="b" />
            </h4>
            <p>
              This archetype focuses on cards that offset your life total, and then utilizes that resource later for punishing effects.
              &nbsp;Commanders in this archetype will let you trade life for any number of advantages - just be sure not to run out of life!
              &nbsp;Notable standout picks for this archetype include&nbsp;
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=567569">Feed the Swarm</a>
              &nbsp;and&nbsp;
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=425849">Soul Warden</a>
              .
            </p>
          </ArchetypeBlurb>
          <ArchetypeBlurb>
            <h4 id="lands-bounty">
              Land&apos;s Bounty&nbsp;
              <img src={u} alt="u" />
              <img src={g} alt="g" />
            </h4>
            <p>
              This archetype idealizes ramp, ramp, ramp! Once you&apos;ve accumulated sufficient lands though, you&apos;ll be primed
              &nbsp;to cast plenty of haymaker creatures and spells to quickly finish the game. Notable standout picks for this archetype
              &nbsp;include&nbsp;
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=451085">Baloth Woodcrasher</a>
              &nbsp;and&nbsp;
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=548360">Mirrorshell Crab</a>
              .
            </p>
          </ArchetypeBlurb>
          <ArchetypeBlurb>
            <h4 id="all-star-offense">
              All-Star Offense&nbsp;
              <img src={r} alt="r" />
              <img src={b} alt="b" />
            </h4>
            <p>
              This archetype focuses on a hyper-aggressive strategy - attack! Mechanics like goad are your friend here since it
              &nbsp;allows you to attack without care for the back-swing. Keep your opponents&apos; life totals down, and sooner or later
              &nbsp;they&apos;ll all buckle to your relentless assault. Notable standout picks for this archetype include&nbsp;
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=466838">Audacious Thief</a>
              &nbsp;and&nbsp;
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=567629">Vengeful Ancestor</a>
              .
            </p>
          </ArchetypeBlurb>
          <ArchetypeBlurb>
            <h4 id="above-the-clouds">
              Above the Clouds&nbsp;
              <img src={u} alt="u" />
              <img src={w} alt="w" />
            </h4>
            <p>
              This archetype focuses on dealing large amounts of unblocked damage. Utilize all available tools to lift your
              &nbsp;army into the skies and then hit hard - be it equipments, auras, or counters, you&apos;ll watch your opponents fall.
              &nbsp;Notable standout picks for this archetype include&nbsp;
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=485402">Tide Skimmer</a>
              &nbsp;and&nbsp;
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=522092">Healer&apos;s Flock</a>
              .
            </p>
          </ArchetypeBlurb>
          <ArchetypeBlurb>
            <h4 id="maximum-impact">
              Maximum Impact&nbsp;
              <img src={r} alt="r" />
              <img src={g} alt="g" />
            </h4>
            <p>
              This archetype focuses on maximizing power and leveraging it to your advantage. Pesky utility creature making life difficult?
              &nbsp;Force it to fight your behemoths - it&apos;s sure to go down! In this contest, you&apos;re top dog!
              &nbsp;Notable standout picks for this archetype include&nbsp;
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=443072">Territorial Allosaurus</a>
              &nbsp;and&nbsp;
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=489509">Flametongue Kavu</a>
              .
            </p>
          </ArchetypeBlurb>
        </Column>
      </Row>
      <p>
        In addition, the cube supports one commander in each 3-color combination.
        &nbsp;Typically these commanders will establish an additional archetype on top of the ones introduced by the 2-color pairings,
        &nbsp;but strive to do something unique on top of the existing archetypes. For instance,&nbsp;
        <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=450652">Yennet, Cryptic Sovereign</a>
        &nbsp;is a 3-color commander that slots well into the UW-fliers and UB-topdeck/mill strategies,
        &nbsp;but focuses the deck-builder to prioritize something new (odd-costed cards). The 3-color commanders
        &nbsp;also help establish a safety net for deck-builders who may find themselves pivoting on color-identities mid-draft.
      </p>
      <img src={yennet} alt="yennet-cryptic-sovereign" width="200px" />
    </ArchetypesStyled>
  );
}
