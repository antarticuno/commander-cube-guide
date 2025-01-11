import u from '../assets/u.png';
import r from '../assets/r.png';
import g from '../assets/g.png';
import b from '../assets/b.png';
import w from '../assets/w.png';

export default function GRNArchetypeList() {
  return (
    <ul>
      <li>
        <img src={u} alt="u" />
        <img src={r} alt="r" />
      &nbsp;
        <a href="#agents-of-artifice">Agents of Artifice</a>
      </li>
      <li>
        <img src={g} alt="g" />
        <img src={b} alt="b" />
      &nbsp;
        <a href="#a-greater-sacrifice">A Greater Sacrifice</a>
      </li>
      <li>
        <img src={r} alt="r" />
        <img src={w} alt="w" />
      &nbsp;
        <a href="#spells-thunder">Spell&apos;s Thunder</a>
      </li>
      <li>
        <img src={u} alt="u" />
        <img src={b} alt="b" />
      &nbsp;
        <a href="#delving-for-power">Delving for Power</a>
      </li>
      <li>
        <img src={w} alt="w" />
        <img src={g} alt="g" />
      &nbsp;
        <a href="#an-enchanting-presence">An Enchanting Presence</a>
      </li>
    </ul>
  );
}
