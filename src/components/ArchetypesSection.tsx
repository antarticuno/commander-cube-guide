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
  padding: 30px 10%;
  max-width: 100vw;
  overflow: scroll;
  
  h2 {
    width: 100%;
    text-align: left;
  }
  li {
    list-style-type: none;
    font-weight: 300;
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
      <Row style={{ alignItems: 'flex-start', marginBottom: '20px', justifyContent: 'center' }}>
        <Column style={{ maxWidth: '45vw' }}>
          <ArchetypeBlurb>
            <h4 id="izzet">
              Agents of Artifice
              {' '}
              <img src={u} alt="u" />
              <img src={r} alt="r" />
            </h4>
            <p>
              This archetype focuses on synergy between manufacturing artifact creature tokens and equipment to make those
              &nbsp;creatures more effective at dealing damage. Focus on creatures and keyword abilities involving evasion (such as&nbsp;
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=559810">Whirler Rogue</a>
              ) as these are key to maneuvering past your opponents&apos; defenses. Better still when you can utilize cards like&nbsp;
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=665626">Goldspan Dragon</a>
              {' or '}
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=553909">Cyberdrive Awakener</a>
              &nbsp;to power-up all of your assembled toys.
            </p>
          </ArchetypeBlurb>
          <ArchetypeBlurb>
            <h4 id="golgari">
              A Necessary Sacrifice
              {' '}
              <img src={g} alt="g" />
              <img src={b} alt="b" />
            </h4>
            <p>
              This archetype focuses on exploiting the natural order of life &amp; death to generate repeated advantage over your opponents.
              &nbsp;Often this will manifest as sacrificing creatures for powerful spells &amp; effects, followed by resurrecting them
              &nbsp;so the cycle can begin again. With a litany of reanimation/recursion spells (such as&nbsp;
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=522255">Timeless Witness</a>
              ) and efficiently costed creatures, you&apos;ll be sure to wear down your opponents&apos; defenses.
              &nbsp;Solid picks for this archetype include&nbsp;
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=622804">Vindictive Lich</a>
              {' and '}
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=679138">High-Society Hunter</a>
              .
            </p>
          </ArchetypeBlurb>
          <ArchetypeBlurb>
            <h4 id="boros">
              Fire &amp; Lightning
              {' '}
              <img src={r} alt="r" />
              <img src={w} alt="w" />
            </h4>
            <p>
              This archetype focuses on casting many damage-dealing instant and sorcery spells. Pick up cards that trigger off of
              &nbsp;casting instant and sorcery spells to add extra value upon every spell cast (such as&nbsp;
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=470691">Guttersnipe</a>
              ). Then, cast mass-damage dealing spells and watch the world burn. Some of the haymakers for this archetype include&nbsp;
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=513572">Crackle with Power</a>
              {' and '}
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=519217">Volcanic Vision</a>
              .
            </p>
          </ArchetypeBlurb>
          <ArchetypeBlurb>
            <h4 id="dimir">
              Delving for Power
              {' '}
              <img src={u} alt="u" />
              <img src={b} alt="b" />
            </h4>
            <p>
              This archetype focuses on top-deck, hand &amp; graveyard manipulation. Often, cards like&nbsp;
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=665616">Necrogoyf</a>
              &nbsp;scale in power with the size of your graveyard. Other times, you can use cards in the graveyard as fuel
              &nbsp;for high-costed, powerful spells like&nbsp;
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=559809">Treasure Cruise</a>
              . Be sure to pick up cards that fill your graveyard via repeatable activated or triggered abilities to keep your engine
              &nbsp;running smoothly (such as&nbsp;
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=220179">Merfolk Looter</a>
              ).
            </p>
          </ArchetypeBlurb>
          <ArchetypeBlurb>
            <h4 id="selesnya">
              An Enchanting Presence
              {' '}
              <img src={w} alt="w" />
              <img src={g} alt="g" />
            </h4>
            <p>
              This archetype excels at augmenting your creatures - allowing the smallest woodland critter to become a terrifying presence.
              &nbsp;Combine multiple auras with synergistic effects to create an unstoppable linebreaker, and utilize protective
              &nbsp;spells &amp; enchantments to further shield them from harm. Strong picks for this archetype include&nbsp;
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=680704">Angelic Destiny</a>
              {' and '}
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=662316">Nyxborn Hydra</a>
              .
            </p>
          </ArchetypeBlurb>
        </Column>
        <Column style={{ maxWidth: '45vw' }}>
          <ArchetypeBlurb>
            <h4 id="orzhov">
              Life Exacts a Toll
              {' '}
              <img src={w} alt="w" />
              <img src={b} alt="b" />
            </h4>
            <p>
              This archetype focuses on cards that offset your life total, and then utilizes that resource later for punishing effects.
              &nbsp;Commanders in this archetype will let you trade life for any number of advantages - just be sure not to run out of life!
              &nbsp;Noteworthy utility picks for this archetype include&nbsp;
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=489678">Archangel of Thune</a>
              {' and '}
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=673500">Enduring Tenacity</a>
              .
            </p>
          </ArchetypeBlurb>
          <ArchetypeBlurb>
            <h4 id="simic">
              Land&apos;s Bounty
              {' '}
              <img src={u} alt="u" />
              <img src={g} alt="g" />
            </h4>
            <p>
              This archetype epitomizes boundless growth. Assemble an ever-increasing pool of mana through land acceleration
              {' spells such as '}
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=683336">Rampant Growth</a>
              . Once you&apos;ve accumulated sufficient lands though, you&apos;ll need to cast plenty of haymaker creatures
              &nbsp;and other spells to quickly finish the game such as&nbsp;
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=583754">Awaken the Woods</a>
              {' and '}
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=500883">Scourge of Fleets</a>
              .
            </p>
          </ArchetypeBlurb>
          <ArchetypeBlurb>
            <h4 id="rakdos">
              Exiled Ones
              {' '}
              <img src={r} alt="r" />
              <img src={b} alt="b" />
            </h4>
            <p>
              This archetype focuses on cards that can be cast from exile, possibly at a later time or possibly for free.
              &nbsp;Utilize mechanics like cascade and adventure that guarantee two-for-one effects for every spell you cast.
              &nbsp;High synergy picks for this archetype include&nbsp;
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=553732">Kami of Celebration</a>
              {' and '}
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=612506">Murderous Rider</a>
              .
            </p>
          </ArchetypeBlurb>
          <ArchetypeBlurb>
            <h4 id="azorius">
              Political Ploys
              {' '}
              <img src={u} alt="u" />
              <img src={w} alt="w" />
            </h4>
            <p>
              This archetype leans into the delicate touch required to navigate the multiplayer landscape. At times you&apos;ll
              &nbsp;need to play nice, gifting boons to your opponents&apos; creatures with cards like&nbsp;
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=650171">Orzhov Advokist</a>
              , or incapacitating some major threats with cards like&nbsp;
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=622701">Fall From Favor</a>
              . Ultimately, when the right moment presents itself, strike with powerful, evasive creatures (like&nbsp;
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=519118">Angel of Serenity</a>
              ) and seize your victory!
            </p>
          </ArchetypeBlurb>
          <ArchetypeBlurb>
            <h4 id="gruul">
              Maximum Impact
              {' '}
              <img src={r} alt="r" />
              <img src={g} alt="g" />
            </h4>
            <p>
              This archetype focuses on maximizing power and leveraging it to your advantage. Pesky utility creatures making life difficult?
              &nbsp;Force them to fight your behemoths - it&apos;s about to go down! In this contest, you&apos;re the apex
              &nbsp;predator and it&apos;s all about survival of the fittest. Standout picks for this archetype include&nbsp;
              <a href="https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=627777">Predatory Rampage</a>
              {' and '}
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
        &nbsp;is a 3-color commander that slots well into the UW-politics and UB-topdeck/mill strategies,
        &nbsp;but focuses the deck-builder to prioritize something new (odd-costed cards). The 3-color commanders
        &nbsp;also help establish a safety net for deck-builders who may find themselves pivoting on color-identities mid-draft.
      </p>
      <img src={yennet} alt="yennet-cryptic-sovereign" width="200px" />
    </ArchetypesStyled>
  );
}
