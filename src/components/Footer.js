import React from 'react';
import './../css/footer.css';
import { Link } from 'react-router-dom';

const Footer = ({imgObject}) => {
    const year = new Date().getFullYear();
  return (
    <>
    <footer id="footer" className="footer" data-bg-img="{{ asset('public/website/images/footer-bg.png') }}" data-bg-color="#333">
        <div className="container pt-40">
            <div className="row border-bottom">
                <div className="col-sm-6 col-md-3">
                    <div className="widget dark">
                        <img className="mt-5 mb-20" alt="" src={imgObject.logo}/>
                        <p>Gulshan Centre Point, Level 8,<br></br>
                        House 23-26, Road 90,<br></br>
                        Gulshan 2, Dhaka 1212, Bangladesh<br></br></p>
                        <ul className="list-inline mt-5">
                            <li className="m-0 pl-10 pr-10"> <i className="fa fa-phone text-theme-colored2 mr-5"></i> <a className="text-gray" href="tel:+880255052000">+880 2 550 52 000</a> </li>                
                            <li className="m-0 pl-10 pr-10"> <i className="fa fa-envelope-o text-theme-colored2 mr-5"></i> <a className="text-gray" href="#"> info@unitedsecurities.com.bd</a> </li>                
                            <li className="m-0 pl-10 pr-10"> <i className="fa fa-globe text-theme-colored2 mr-5"></i> <a className="text-gray" href="#">www.unitedsecurities.com.bd</a> </li>
                        </ul>
                    </div>
                </div>
            <div className="col-sm-6 col-md-3">
                <div className="widget dark">
                    <h4 className="widget-title">About Us </h4>
                    <ul className="list angle-double-right list-border">
                        <li><Link to="/about/who-we-are">The Company (Who we are)</Link></li>
                        <li><Link to="/about/bod">Board of Directors</Link></li>
                        <li><Link to="/about/leadership">Leadership</Link></li>
                        <li><Link to="/about/our-people">Our People</Link></li>
                        <li><Link to="/about/values">Our Values/Culture (Mission/ Vision)</Link></li>          
                    </ul>
                    <br></br>
                    <h4 className="widget-title">Our Thinking </h4>
                    <ul className="list angle-double-right list-border">
                        <li><Link to="/our-thinking/why-usl">Why United Securities Limited</Link></li>
                    </ul>
                </div>
            </div>
            <div className="col-sm-6 col-md-3">
                <div className="widget dark">
                    <h4 className="widget-title">Our Services </h4>
                    <ul className="list angle-double-right list-border">
                        <li><Link to="/service/foreign">Foreign Institution</Link></li>
                        <li><Link to="/service/nrb">Non Resident Bangladeshi (NRB)</Link></li>
                        <li><Link to="/service/individual">Local Individual</Link></li>
                        <li><Link to="/service/institution">Local Institution</Link></li>
                    </ul>
                    <br></br>

                    <h4 className="widget-title">Useful Links</h4>
                    <ul className="list angle-double-right list-border">
                        <li><a className="tips" title="Bangladesh Securities and Exchange Commission" target="_blank" href="http://www.sec.gov.bd/">Bangladesh Securities and Exchange Commission</a></li>
                        <li><a href="http://dse.com.bd/" className="tips" title="Dhaka Stock Exchange Ltd" target="_blank"> Dhaka Stock Exchange Ltd</a></li>
                        <li><a href="https://www.cse.com.bd/" className="tips" title="Chittagong Stock Exchange" target="_blank">Chittagong Stock Exchange Ltd</a></li>                
                        <li><a href="https://www.cdbl.com.bd/" className="tips" title="CDBL" target="_blank">Central Depository Bangladesh Ltd</a></li>                
                        <li><a href="https://www.bb.org.bd/" className="tips" title="BSEC" target="_blank">Bangladesh Bank</a></li>      
                    </ul>
                </div>
            </div>
            <div className="col-sm-6 col-md-3">
                <div className="widget dark">
                    <h4 className="widget-title line-bottom-theme-colored-2">Opening Hours</h4>
                    <div className="opening-hours">
                        <ul className="list-border">
                        <li className="clearfix"> <span> Sun - Tues :  </span>
                            <div className="value pull-right"> 10.00 am - 5.00 pm </div>
                        </li>
                        <li className="clearfix"> <span> Fri-Sat & Govt. Holidays: </span>
                            <div className="value pull-right"> Closed </div>
                        </li>
                        </ul>
                    </div>
                </div>
                <div className="widget dark" id="social-media">
                    <h5 className="widget-title mb-10">Connect With Us</h5>
                    <ul className="styled-icons icon-bordered icon-sm">
                        <li><a href="https://www.facebook.com/UnitedSecuritiesLtd/"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="https://www.linkedin.com/company/uslbd/"><i className="fa fa-linkedin"></i></a></li>                
                    </ul>
                </div>
            </div>
        </div>
        <div className="row mt-30">
            <div className="col-md-12">
                <div className="widget dark text-center">
                    <p>USL has a dedicated expert research team and a foreign desk, which provide both insights on the local market and execute trades on behalf of foreign institutional clients. It also works on supporting the foreign fund managers with arranging roadshows and management meetings with the local investee companies.</p>
                    <a href="#" target="_blank" className="text-center" style={{color:"#09F"}}>Know More</a>
                </div>
            </div>
        </div>
    </div>
        <div className="footer-bottom bg-theme-colored-transparent-5">
            <div className="container pt-20 pb-20">
                <div className="row">
                    <div className="col-md-6">
                    <p className="font-11 text-black-777 m-0">Copyright &copy;{year} United Securities Ltd. All Rights Reserved</p>
                    </div>
                    <div className="col-md-6 text-right">
                        <div className="widget no-border m-0">
                            <ul className="list-inline sm-text-center mt-5 font-12">
                                <li><a href="#">FAQ</a></li>                
                                <li>|</li>
                                <li><a href="#">Help Desk</a></li>                
                                <li>|</li>
                                <li><a href="#">Support</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
