import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
     <Container>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/nikita-singh-08318924b/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/n-ikitasingh"><img src={navIcon2} alt="Icon" /></a>
              <a href="mailto:nikitasingh.uks@gmail.com"><img src={navIcon3} alt="Icon" /></a>
            </div>

      </Container>

    </footer>
  )
}
