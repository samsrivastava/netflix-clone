import React, {useEffect, useState} from 'react'
import "./Nav.css"



function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 120){
                handleShow(true);
            }
            else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);
    return (
        
        <div className={`nav ${show && "nav_black"}`}>
            <img
            className="nav_logo" 
            src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png" 
            alt="Netflix and chill logo"
            />
            
        <img
        className="nav_avatar" 
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
        alt="avatar"/>
        
        </div>  
    );
}

export default Nav
