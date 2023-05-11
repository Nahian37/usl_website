import React from 'react';
import './../css/navbar.css';
import menuImage from './../images/megamenu/megamenu-dropdown.jpg';

const Navbar3 = (props) => {
  return (
    <>        
    <nav>
        <div class="wrapper">
        <div class="logo"><a href="#"><img src={props.logo} alt=""/></a></div>
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
                                <li><a href="{{ route('aboutWho') }}">The Company (Who we are)</a></li>
                                <li><a href="{{ route('aboutBod') }}">Board of Directors</a></li>
                                <li><a href="{{ route('aboutLeadership') }}">Leadership</a></li>
                                <li><a href="{{ route('aboutPeople') }}">Our People</a></li>
                                <li><a href="{{ route('aboutMission') }}">Our Values/Culture</a></li>
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
                                <li><a href="{{ route('thinkingWhyusl') }}">Why United Securities Limited</a></li>
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
                                <li><a href="{{ route('rOverview') }}">Overview</a></li>
                                <li><a href="{{ route('researchDaily') }}">Daily</a></li>
                                <li><a href="{{ route('researchWeekly') }}">Weekly</a></li>
                                <li><a href="{{ route('researchEconomy') }}">Economy</a></li>
                                <li><a href="{{ route('researchCompany') }}">Company updates</a></li>
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
                                <li><a href="{{ route('serviceForeign') }}">Foreign Institution</a></li>
                                <li><a href="{{ route('serviceNrb') }}">Non Resident Bangladeshi (NRB)</a></li>
                                <li><a href="{{ route('serviceIndividual') }}">Local Individual</a></li>
                                <li><a href="{{ route('serviceInstitution') }}">Local Institution</a></li>
                                <li><a href="{{ route('serviceDownloads') }}">Downloads</a></li>
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
                                <li><a href="{{ route('homeContactus') }}">Address</a></li>
                                <li><a href="{{ route('contactusBranch') }}">Our Branch</a></li>
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
