import { NavLink } from 'react-router-dom';

const Navbar = () => (
    <nav className="navbar">
        <img className="navlogo" src="../img/roket.png" alt="" />
        <h2>SPACE TRAVELER'S HUB</h2>
        <ul className="navlinks">
        <li><NavLink to="./">ROCKETS</NavLink></li>
      <li className="missionnav"><NavLink to="/missions">Missions</NavLink></li>
      <li><NavLink to="/my-profile">MY PROFILE</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
