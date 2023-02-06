import { Link } from "react-router-dom";
import Container from "./Container";
import styles from "./Navbar.module.css";
import logo from "../../img/costs_logo_gg.png";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Costs" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.items}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.items}>
            <Link to="/projects">Prejects</Link>
          </li>
          <li className={styles.items}>
            <Link to="/Contact">Contact</Link>
          </li>
          <li className={styles.items}>
            <Link to="/Company">Company</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
