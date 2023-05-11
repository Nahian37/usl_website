import React from 'react';

const Navbar = (props) => {
  return (
    <>
      <header id="header" className="header header-floating-text-dark">
        <div className="header-top sm-text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-8"></div>
              <div className="col-md-4">
                <div className="widget" style={{float:"right"}}>
                  <ul className="styled-icons icon-dark icon-sm mt-5">
                    <li className="wow fadeInLeft text-white" data-wow-duration="1.5s" data-wow-delay=".1s" data-wow-offset="10" style={{visibility: "visible", "animation-duration": "1.5s", "animation-delay": "0.1s"}}><a href="https://www.facebook.com/UnitedSecuritiesLtd/" data-bg-color="#f47b20" ><i className="fa fa-facebook"></i></a></li>                    
                    <li className="wow fadeInLeft text-white" data-wow-duration="1.5s" data-wow-delay=".3s" data-wow-offset="10" style={{visibility: "visible", "animation-duration": "1.5s", "animation-delay": "0.3s"}}><a href="https://www.linkedin.com/company/uslbd/" data-bg-color="#f47b20"><i className="fa fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-nav navbar-scrolltofixed navbar-sticky-animated">
          <div className="header-nav-wrapper">
            <div className="container">
              <nav id="menuzord-right" className="menuzord blue bg-white pl-15 pr-15">
                <a className="menuzord-brand pull-left flip" href="{{ route('home') }}"><img src={props.logo} alt=""/></a>
                <div className="header-inner-right">
                  <ul className="menu-icons-list">
                    <li className="menu-icons">
                      <i className="menu-icons-style search search-close search-btn fa fa-search"></i>
                      <div className="search-open">
                        <input type="text" className="animated fadeIn form-control" placeholder="Start searching ..."/>
                      </div>
                    </li>
                  </ul>
                </div>

                <ul className="menuzord-menu">
                  <li><a href="javascript:void(0)">About Us</a>
                    <div className="megamenu megamenu-bg-img">
                      <div className="megamenu-row">
                        <div className="col4">
                          <h4 className="megamenu-col-title">About Us</h4>
                          <ul className="list-dashed list-icon">
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
                  <li><a href="javascript:void(0)">Our Thinking</a>
                    <div className="megamenu megamenu-bg-img">
                      <div className="megamenu-row">
                        <div className="col4">
                          <h4 className="megamenu-col-title">Our Thinking</h4>
                          <ul className="list-dashed list-icon">
                            <li><a href="{{ route('thinkingWhyusl') }}">Why United Securities Limited</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li><a href="javascript:void(0)">Insight & Research</a>
                    <div className="megamenu megamenu-bg-img">
                      <div className="megamenu-row">
                        <div className="col4">
                          <h4 className="megamenu-col-title">Insight & Research</h4>
                          <ul className="list-dashed list-icon">
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

                  <li><a href="javascript:void(0)">Solutions &amp; Services</a>
                    <div className="megamenu megamenu-bg-img">
                      <div className="megamenu-row">
                        <div className="col4">
                          <h4 className="megamenu-col-title">Solutions &amp; Services</h4>
                          <ul className="list-dashed list-icon">
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

                  <li><a href="javascript:void(0)">Connect us</a>
                    <div className="megamenu megamenu-bg-img">
                      <div className="megamenu-row">
                        <div className="col4">
                          <h4 className="megamenu-col-title">Connect us</h4>
                          <ul className="list-dashed list-icon">
                            <li><a href="{{ route('homeContactus') }}">Address</a></li>
                            <li><a href="{{ route('contactusBranch') }}">Our Branch</a></li>
                            <li><a href="https://www.facebook.com/UnitedSecuritiesLtd/">Social Media links</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
