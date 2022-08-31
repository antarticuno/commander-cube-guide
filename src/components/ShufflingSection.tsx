import styled from 'styled-components';
import Column from './Column';

const ShufflingStyled = styled(Column)`
  align-items: center;
  padding: 30px 10%;
  
  h2 {
    width: 100%;
    text-align: left;
  }
  li {
    font-weight: 200;
  }
`;

export default function ShufflingSection() {
  return (
    <ShufflingStyled id="shuffling-section">
      <h2>Shuffling the Cube</h2>
      <p>
        After every draft, it&apos;s generally a good idea to shuffle up the cards in preparation for the next draft.
        &nbsp;This accomplishes a few goals: 1) you can verify that all of the contents of the cube are accounted for and
        &nbsp;2) this shortens the setup time for the next game.
      </p>
      <p>
        In order to shuffle the Commander Cube though, you&nbsp;ll want to take care to ensure that every pack contains exactly
        &nbsp;two (2) commander cards. Additionally, there are some extra measures that you can take while shuffling to better the
        &nbsp;odds that all packs have at least 1 card of every color represented. The method I&apos;ve devised takes large inspiration from
        &nbsp;the&nbsp;
        {/* eslint-disable-next-line max-len */}
        <a href="https://www.reddit.com/r/mtgcube/comments/34fet8/novel_method_for_shuffling_a_cube/" target="_blank" rel="noreferrer">Reddit post here</a>
        , so feel free to check that out if you&apos;re curious behind the math of it all. Listed below
        &nbsp;is my own cube&apos;s formula/instructions (calculated on a 500 card cube).
      </p>
      <ol>
        <li>Separate the fifty (50) commander cards into a pile. Shuffle them and set aside.</li>
        <li>
          Divide the remaining cards (450) into 6 piles. This amounts to one pile per color, plus a pile for everything-else.
          &nbsp;This should total 73 cards per mono-colored pile, and 85 cards in the everything-else pile. Shuffle the mono-colored piles.
        </li>
        <li>
          Move cards from each mono-colored pile to the everything-else pile until 50% of the cards are in the everything-else pile
          &nbsp;(73 - 28 = 45 per mono-colored pile, 28 * 5 + 85 = 225 in the everything-else pile).
          &nbsp;Shuffle the everything-else pile.
        </li>
        <li>
          Redistribute cards from the everything-else pile (225) into the mono-colored piles until 6 even piles
          &nbsp;(30 cards to each of the 5 mono-colored piles results in 75 cards per pile). Shuffle the mono-colored+ piles.
        </li>
        <li>
          Pull 3 cards from each of the 6 piles, shuffle the pack, then add 2 cards from the commander pile (18 + 2).
        </li>
      </ol>
    </ShufflingStyled>
  );
}
