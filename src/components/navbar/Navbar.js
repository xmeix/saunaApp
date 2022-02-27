import "./Navbar.css";

const Navbar = () => {
  return (
    <ul className="navbar">
      <a href="#home">
        <li>Home</li>
      </a>
      <a href="#quoi">
        <li>Amma Assis</li>
      </a>
      <a href="#comment">
        <li>Votre séance</li>
      </a>
      <a href="#pourquoi">
        <li>Le mal-être</li>
      </a>
      <a href="#bienfaits">
        <li>Les bienfaits</li>
      </a>
      <a href="#tarif">
        <li>Tarif</li>
      </a>
      <a href="#contact">
        <li>Contact</li>
      </a>
    </ul>
  );
};

export default Navbar;
