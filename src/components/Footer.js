import { Link } from "react-router-dom";
import "./Footer.css";


export const Footer = () => {
  return (
    <footer>
        <div className="Sub1">
        <div className="QuickLinks" >
            <p className="FHead" >HELPFUL LINKS</p>
            <Link to="/" className="FContent" >Home</Link>
            <Link to="/Services" className="FContent" >Services</Link>
            <Link to="/WebDev" className="FContent" >Web Dev</Link>
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
