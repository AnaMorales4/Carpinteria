import React from "react";
import { useRef } from "react";
import{Link, link} from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa";
function Nav(){
    const navRef = useRef();
    const showNavar=()=>{
        navRef.current.classList.toggle("responsive_nav");
    };
    return(
        <header>
            <nav ref={navRef} className="navbar mx-auto" >
                <div>
                <img src={require("../Imagenes/logo.png")} style={{width:"4rem"}}/>
            <h3>LTHN Carpinteria</h3>
            
                </div>
                <ul>
                    <li>
                        <Link to={"/"} style={{color:'white'}}>INICIO</Link>
                    </li>
                    <li>
                        <Link to={"/Portafolio"} style={{color:'white'}}>PORTAFOLIO</Link>
                    </li>
                    <li>
                        <Link to={"/Comunicacion"} style={{color:'white'}}>CONTACTO</Link>
                    </li>
                </ul>
                <button className="nav-btn nav-close-btn" onClick={showNavar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavar}>
                <FaBars/>
            </button>
        </header>
    )
}

export default Nav;