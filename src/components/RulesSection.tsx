import styled from 'styled-components';
import Column from './Column';

const RulesStyled = styled(Column)`
  align-items: center;
  padding: 30px 10%;
  
  h2 {
    width: 100%;
    text-align: left;
  }
  code {
    display: block;
    margin: 10px auto;
    font-weight: 200;
    font-size: 0.9em;
  }
`;

export default function RulesSection() {
  return (
    <RulesStyled id="rules-section">
      <h2>Rules</h2>
      <p>
        The following excerpts are taken loosely from the original Commander &amp; Commander Legends release notes:
      </p>
      <code>
        The Commander format is all about picking your hero and building a deck around them. In this casual, multiplayer format,
        &nbsp;you choose a legendary creature to serve as your commander and build the rest of your deck around their color identity and
        &nbsp;unique abilities. Players are only allowed one of each card in their deck, with the exception of basic lands...
      </code>
      <code>
        A card&apos;s color identity can come from any part of that card, including its casting cost and any mana symbols in its text.
        &nbsp;Every card in your Commander deck must only use mana symbols that also appear on your commander.
        &nbsp;Colorless cards are allowed as well.
      </code>
      <code>
        [The command zone] is where your commander resides during the game when they are not in play. At the start of the game,
        &nbsp;each player puts their commander face up into the command zone. A commander can be cast from the command zone
        &nbsp;for its normal costs, plus an additional two mana for each previous time it&apos;s been cast from the command zone this game.
        &nbsp;If your commander would be put into your library, hand, graveyard or exile from anywhere, you may return it to your
        &nbsp;command zone instead.
        <a href="https://magic.wizards.com/en/formats/commander"><sup>1</sup></a>
      </code>
      <code>
        Commander Draft combines aspects of Booster Draft and Commander. Rather than build a deck beforehand, players draft and build a
        &nbsp;Commander Draft deck as part of the experience. Each player needs three Commander Legends booster packs to draft. All players
        &nbsp;should sit around the table in a random order. To begin, each player opens one booster pack. Each player chooses
        &nbsp;two cards from the pack and puts them face down in front of them, then passes the remaining cards to the player on their left.
        &nbsp;Each player takes two cards from the pack they were passed and places those cards face down in front of them, forming a single
        &nbsp;face down pile of drafted cards. Each player passes the remaining cards to their left, repeating this process until all cards
        &nbsp;from the first round of booster packs have been drafted. Then players open their second pack, repeating the above procedure,
        &nbsp;except this time passing cards to the right. For the third booster pack, players once again pass to the left.
      </code>
      <code>
        The sixty cards each player has drafted form their &quot;draft pool&quot;. Using those cards (and as many basic lands as desired),
        &nbsp;each player builds a deck of at least 60 cards, including their commander. As with constructed Commander decks,
        &nbsp;the deck can include only cards allowed by the color identity of its commander.
        <a href="https://magic.wizards.com/en/articles/archive/feature/commander-legends-release-notes-2020-11-06"><sup>2</sup></a>
      </code>
      <p>
        Note that every pack from the commander cube is guaranteed to contain two (2) commander cards. Each pack contains 20 cards in total.
      </p>
    </RulesStyled>
  );
}
