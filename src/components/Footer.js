import { Link } from "react-router-dom";
import "./Footer.css";
import home from "../assets/home.svg"
import services from "../assets/services.svg"
import webdev from "../assets/webdev.svg"


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
            <Link to="/DSA" className="FContent" >DSA</Link>
        </div>
        <div className="Contact">
            <p className="FHead" >CONNECT WITH US</p>
            <a href="#0"><p className="FContent" >Linkedin</p></a>
            <a href="#0" className="FContent" >Twitter</a>
            <a href="#0" className="FContent" >Facebook</a>
            <a href="#0" className="FContent" >Instagram</a>
        </div>
        <div className="Contact">
            <p className="FHead" >GET IN TOUCH</p>
            <a href="#0"><p className="FContent" >webdev@veecsha.in</p></a>
            <a href="#0" className="FContent" >dsa@veecsha.in</a>
        </div>
      </div>
      <div className="copyRight">
        <p>Copyright &copy; 2024</p>
      </div>
    </footer>
  )
}
