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
        <a href="#orzhov">Life Exacts a Toll</a>
      </li>
      <li>
        <img src={u} alt="u" />
        <img src={g} alt="g" />
      &nbsp;
        <a href="#simic">Land&apos;s Bounty</a>
      </li>
      <li>
        <img src={r} alt="r" />
        <img src={b} alt="b" />
      &nbsp;
        <a href="#rakdos">Exiled Ones</a>
      </li>
      <li>
        <img src={u} alt="u" />
        <img src={w} alt="w" />
      &nbsp;
        <a href="#azorius">Political Ploys</a>
      </li>
      <li>
        <img src={r} alt="r" />
        <img src={g} alt="g" />
      &nbsp;
        <a href="#gruul">Maximum Impact</a>
      </li>
    </ul>
  );
}
