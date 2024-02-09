import "./DSA.css";
import java from "../assets/java.svg";
import python from "../assets/python.svg";
import js from "../assets/js.svg";
import cpp from "../assets/c++.svg";
import c_pro from "../assets/c-pro.svg";
import { useEffect } from "react";


export const DSA = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  return (
    <div className='DSA' >
        <div className="dsaCon">
            <img className="img1" src={java} alt="" />
            <img className="img2" src={python} alt="" />
            <img className="img3" src={js} alt="" />
            <img className="img4" src={cpp} alt="" />
            <img className="img5" src={c_pro} alt="" />
        <p className="dsaH brnd" >Data Structures &amp; Algorithms</p>
        </div>
    </div>
  )
}
