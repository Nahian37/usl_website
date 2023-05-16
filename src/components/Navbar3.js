import React from 'react';
import './../css/navbar.css';
import menuImage from './../images/megamenu/megamenu-dropdown.jpg';
import { Link } from 'react-router-dom';

const Navbar3 = ({imgObject}) => {
  return (
    <>        
    <nav>
        <div class="wrapper">
        <div class="logo"><a href="/"><img src={imgObject.logo} alt=""/></a></div>
        <input type="radio" name="slider" id="menu-btn"/>
        <input type="radio" name="slider" id="close-btn"/>
        <ul class="nav-links">
            <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>
            <li>
                <a href="#" class="desktop-item">About Us <i class='fa fa-angle-down'></i></a>
                <input type="checkbox" id="showMega1"/>
                <label for="showMega1" class="mobile-item">About Us</label>
                <div class="mega-box">
                    <div class="content">
                        <div class="row">
                            <img src={menuImage} alt=""/>
                        </div>
                        <div class="row">
                            <header>About Us</header>
                            <ul class="mega-links">
                                <li><Link to="/about/who-we-are">The Company (Who we are)</Link></li>
                                <li><Link to="/about/bod">Board of Directors</Link></li>
                                <li><Link to="/about/leadership">Leadership</Link></li>
                                <li><Link to="/about/our-people">Our People</Link></li>
                                <li><Link to="/about/values">Our Values/Culture</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <a href="#" class="desktop-item">Our Thinking <i class='fa fa-angle-down'></i></a>
                <input type="checkbox" id="showMega2"/>
                <label for="showMega2" class="mobile-item">Our Thinking</label>
                <div class="mega-box">
                    <div class="content">
                        <div class="row">
                            <img src={menuImage} alt=""/>
                        </div>
                        <div class="row">
                            <header>Our Thinking</header>
                            <ul class="mega-links">
                                <li><Link to="/our-thinking/why-usl">Why United Securities Limited</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <a href="#" class="desktop-item">Insight & Research <i class='fa fa-angle-down'></i></a>
                <input type="checkbox" id="showMega3"/>
                <label for="showMega3" class="mobile-item">Insight & Research</label>
                <div class="mega-box">
                    <div class="content">
                        <div class="row">
                            <img src={menuImage} alt=""/>
                        </div>
                        <div class="row">
                            <header>Insight & Research</header>
                            <ul class="mega-links">
                                <li><Link to="/research/overview">Overview</Link></li>
                                <li><Link to="/research/daily">Daily</Link></li>
                                <li><Link to="/research/weekly">Weekly</Link></li>
                                <li><Link to="/research/economy">Economy</Link></li>
                                <li><Link to="/research/company">Company updates</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <a href="#" class="desktop-item">Solution & Services <i class='fa fa-angle-down'></i></a>
                <input type="checkbox" id="showMega4"/>
                <label for="showMega4" class="mobile-item">Solution & Services</label>
                <div class="mega-box">
                    <div class="content">
                        <div class="row">
                            <img src={menuImage} alt=""/>
                        </div>
                        <div class="row">
                            <header>Solution & Services</header>
                            <ul class="mega-links">
                                <li><Link to="/service/foreign">Foreign Institution</Link></li>
                                <li><Link to="/service/nrb">Non Resident Bangladeshi (NRB)</Link></li>
                                <li><Link to="/service/individual">Local Individual</Link></li>
                                <li><Link to="/service/institution">Local Institution</Link></li>
                                <li><Link to="/service/downloads">Downloads</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <a href="#" class="desktop-item">Connect us <i class='fa fa-angle-down'></i></a>
                <input type="checkbox" id="showMega5"/>
                <label for="showMega5" class="mobile-item">Connect us</label>
                <div class="mega-box">
                    <div class="content">
                        <div class="row">
                            <img src={menuImage} alt=""/>
                        </div>
                        <div class="row">
                            <header>Connect us</header>
                            <ul class="mega-links">
                                <li><Link to="/contactus">Address</Link></li>
                                <li><Link to="/contactus/branch">Our Branch</Link></li>
                                <li><a href="https://www.facebook.com/UnitedSecuritiesLtd/">Social Media links</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars"></i></label>
        </div>
    </nav>
    </>
  )
}

export default Navbar3
