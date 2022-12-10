import w from '../assets/w.png';
import b from '../assets/b.png';
import u from '../assets/u.png';
import g from '../assets/g.png';
import r from '../assets/r.png';

export default function RNAArchetypeList() {
  return (
    <ul>
      <li>
        <img src={w} alt="w" />
        <img src={b} alt="b" />
      &nbsp;
        <a href="#life-exacts-a-toll">Life Exacts a Toll</a>
      </li>
      <li>
        <img src={u} alt="u" />
        <img src={g} alt="g" />
      &nbsp;
        <a href="#lands-bounty">Land&apos;s Bounty</a>
      </li>
      <li>
        <img src={r} alt="r" />
        <img src={b} alt="b" />
      &nbsp;
        <a href="#all-star-offense">All-Star Offense</a>
      </li>
      <li>
        <img src={u} alt="u" />
        <img src={w} alt="w" />
      &nbsp;
        <a href="#agents-of-artifice">Agents of Artifice</a>
      </li>
      <li>
        <img src={r} alt="r" />
        <img src={g} alt="g" />
      &nbsp;
        <a href="#maximum-impact">Maximum Impact</a>
      </li>
    </ul>
  );
}
