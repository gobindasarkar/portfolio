import React from 'react';
import {NavLink} from 'react-router-dom';
const Header = () => {
     return(
          <>
               <header className="header-area sticky-top">
                    <div className="container">
                         <nav className="navbar navbar-expand-lg navbar-light ">
                              <NavLink className="navbar-brand" to="/"><img src="images/gobindasarkar.png" alt="gobinda sarkar" /></NavLink>
                              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                   <span className="navbar-toggler-icon"></span>
                              </button>
                              <div className="collapse navbar-collapse" id="navbarNav">
                                   <ul className="navbar-nav ms-auto">
                                        <li>
                                             <NavLink exact activeClassName="active"  to="/">Home</NavLink>
                                        </li>
                                        <li>
                                             <NavLink exact activeClassName="active" to="/about">About</NavLink>
                                        </li>
                                        <li>
                                             <NavLink exact activeClassName="active" to="/service">Service</NavLink>
                                        </li>
                                        <li>
                                             <NavLink exact activeClassName="active" to="/portfolio">Portfolio</NavLink>
                                        </li>
                                        <li>
                                             <NavLink exact activeClassName="active" to="/contact">Contact</NavLink>
                                        </li>
                                   </ul>
                              </div>
                         </nav>
                    </div>
               </header>
          </>
     );
}
export default Header;