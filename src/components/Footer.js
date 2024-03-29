import { Link } from "react-router-dom";
import "./Footer.css";
import home from "../assets/home.svg"
import services from "../assets/services.svg"
import webdev from "../assets/webdev.svg"
import dsa from "../assets/dsa.svg"
import twitter from "../assets/twitter.svg"
import facebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"
import linkedin from "../assets/linkedin.svg"
import mail from "../assets/mail.svg"


export const Footer = () => {
  return (
    <footer>
        <div className="Sub1">
        <div className="QuickLinks" >
            <p className="FHead" >HELPFUL LINKS</p>
            <Link to="/" className="FContent" >
              <img className="logos" src={home} alt="" />
              <p>Home</p>
              </Link>
            <Link to="/Services" className="FContent" >
              <img className="logos" src={services} alt="" />
              <p>Services</p></Link>
            <Link to="/WebDev" className="FContent" >
            <img className="logos" src={webdev} alt="" />
            Web Dev</Link>
            <Link to="/DSA" className="FContent" >
              <img className="logos" src={dsa} alt="" />
              DSA</Link>
        </div>
        <div className="Contact">
            <p className="FHead" >CONNECT WITH US</p>
            <a href="#0"><p className="FContent" ><img className="logos" src={linkedin} alt="" />Linkedin</p></a>
            <a href="#0" className="FContent" >
            <img className="logos" src={twitter} alt="" />
              Twitter</a>
            <a href="#0" className="FContent" ><img className="logos" src={facebook} alt="" />Facebook</a>
            <a href="#0" className="FContent" ><img className="logos" src={instagram} alt="" />Instagram</a>
        </div>
        <div className="Contact">
            <p className="FHead" >GET IN TOUCH</p>
            <a href="#0"><p className="FContent" ><img className="logos" src={mail} alt="" />webdev@veecsha.in</p></a>
            <a href="#0" className="FContent" ><img className="logos" src={mail} alt="" />dsa@veecsha.in</a>
        </div>
      </div>
      <div className="copyRight">
        <p>Copyright &copy; 2024</p>
      </div>
    </footer>
  )
}
