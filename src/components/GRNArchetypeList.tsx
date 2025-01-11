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
        <a href="#izzet">Agents of Artifice</a>
      </li>
      <li>
        <img src={g} alt="g" />
        <img src={b} alt="b" />
      &nbsp;
        <a href="#golgari">A Necessary Sacrifice</a>
      </li>
      <li>
        <img src={r} alt="r" />
        <img src={w} alt="w" />
      &nbsp;
        <a href="#boros">Fire &amp; Lightning</a>
      </li>
      <li>
        <img src={u} alt="u" />
        <img src={b} alt="b" />
      &nbsp;
        <a href="#dimir">Delving for Power</a>
      </li>
      <li>
        <img src={w} alt="w" />
        <img src={g} alt="g" />
      &nbsp;
        <a href="#selesnya">An Enchanting Presence</a>
      </li>
    </ul>
  );
}
