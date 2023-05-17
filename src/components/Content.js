import React from 'react';
import p6 from './../images/pattern/p4.png';
import bordofdir from './../images/bordofdir.jpg';
import leadership from './../images/leadership.jpg';
import people from './../images/people.jpg';
import lg1 from './../images/services/lg1.jpg';
import lg2 from './../images/services/lg2.jpg';
import lg3 from './../images/services/lg3.jpg';
import Slider from './Slider';
import { Link } from 'react-router-dom';

const Content = () => {
  return (
    <>
      
        <section id="home" class="divider">
          <Slider/>
        </section>
        <section class="" data-bg-img={p6}>
          <div class="container pt-40 pb-0">
            <div class="section-title text-center mb-20">
              <div class="row">
                <div class="col-md-8 col-md-offset-2">
                  <h2 class="title text-uppercase line-bottom-double-line-centered"><span class="text-theme-colored2">Overview</span></h2>
                  <p style={{"text-align":"center"}}>United securities with its superior market intelligence provide cutting edge information, processed by the finest professionals in the industry to its clients. USL assists institutional investors to make the right decision through insightful research coverage and a client-focused sales and trading team. Our dedicated specialized research team ensures the flow of well thought-out and well-researched stock ideas and investment strategies.</p>
                  <a href="#">Read More <i class="fa fa-caret-right"></i></a>
                </div>
              </div>
            </div>

            <div class="section-content">
              <div class="row" data-margin-top="0px">
                <div class="col-sm-12 col-md-4">
                  <div class="post icon-box iconbox-theme-colored bg-white border-1px text-center">
                    <div class="entry-content">
                      <Link to="/about/bod"><img src={bordofdir} alt=""/></Link>
                      <h3 class="mt-10">Board of Directors</h3>
                    </div>                
                  </div>
                </div>
                <div class="col-sm-12 col-md-4">
                  <div class="post icon-box  iconbox-theme-colored bg-white border-1px text-center">
                    <div class="entry-content ">
                      <Link to="/about/leadership"><img src={leadership} alt=""/></Link>
                      <h3 class="mt-10">Leadership</h3>
                    </div>                
                  </div>
                </div>
                <div class="col-sm-12 col-md-4">
                  <div class="post icon-box iconbox-theme-colored bg-white border-1px text-center">
                    <div class="entry-content " >
                      <Link to="/about/our-people"><img src={people} alt=""/></Link>
                      <h3 class="mt-10">Our People</h3>
                    </div>                
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="flat-tab-services">
          <div class="container">
            <div class="section-title text-center pt-20 mb-0">
              <div class="row">
                <div class="col-md-8 col-md-offset-2">
                  <h2 class="title text-uppercase line-bottom-double-line-centered"><span class="text-theme-colored2">Solutions & Service</span></h2>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="tab-services">
                  <div class="tab-list-services">
                    <div class="tab-item active">
                      <div class="box-tab">
                        <h4>Forign</h4>
                        <p>Institution</p>
                      </div>
                    </div>
                    <div class="tab-item">
                      <div class="box-tab">
                        <h4>NRB</h4>
                        <p>(Non Resident Bangladeshi)</p>
                      </div>
                    </div>
                    <div class="tab-item">
                      <div class="box-tab">
                        <h4>Local</h4>
                        <p>Individual</p>
                      </div>
                    </div>
                    <div class="tab-item pr-0">
                      <div class="box-tab">
                        <h4>Local</h4>
                        <p>Institution</p>
                      </div>
                    </div>
                    <div class="clearfix">
                    </div>
                  </div>
                  <div class="content-tab">
                    <div class="content-inner">
                      <div class="row">
                        <div class="{{ $result->image ? 'one-7' : 'one-12' }}">
                          <div class="text-tabs">
                            <div class="text-content">
                              <h3>Why invest in Stock</h3>
                              <ul>
                                <li>Allowing foreign investors to participate in IPO and Right Issue without any regulatory restrictions</li>
                                <li>Withdrawal of all regulatory restrictions on international portfolio investors in the secondary securities market</li>
                                <li>No capital gain tax on individuals (subject to the condition that such assesse is entitled to similar exemption in the country in which he/she is resident)</li>
                                <li>25% tax deducted at source on dividend earnings for foreign individuals</li>
                                <li>20% tax deducted at source on dividend earnings for foreign institutions and 10% tax on capital gain</li>
                                <li>100% investment is repatriable without any regulatory hassle</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="one-12">
                          <div class="text-content text-center">
                            <p><Link class="btn btn-theme-colored3 btn-border" to="/service/foreign"> View Details</Link></p>
                          </div>
                        </div>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                    <div class="content-inner">
                      <div class="row">
                        <div class="{{ $result->image ? 'one-7' : 'one-12' }}">
                          <div class="text-tabs">
                            <div class="text-content">
                              <h3>Why invest in Stock</h3>

                              <ul dir="ltr">
                                <li>10% quota in all Initial Public Offerings (IPOs) is reserved for non- resident Bangladeshis</li>
                                <li>Eligible to trade in the secondary market while abroad through a Nominee</li>
                                <li>0% tax on capital gain</li>
                                <li>Individual income tax assessment is similar to any other Resident Bangladeshi</li>
                                <li>10% tax rebate on investment allowance on security investment &nbsp;</li>
                                <li>100% investment is repatriable without any regulatory hassle</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="one-12">
                          <div class="text-tabs">
                            <div class="text-content">
                              <h3>Fee &amp; Services</h3>

                              <ul dir="ltr">
                              <li>BO Account opening is free of charge</li>
                              <li>Settlement and Transaction costs are inclusive of brokerage commission</li>
                              <li>Free advisory service</li>
                              <li>Trade order could be placed via email or over phone call at the convenience of the client</li>
                              <li>Apply to IPO through us</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="one-12">
                          <div class="text-content text-center">
                            <p><Link class="btn btn-theme-colored3 btn-border" to="/service/nrb"> View Details</Link></p>
                          </div>
                        </div>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                    <div class="content-inner">
                      <div class="row">
                        <div class="{{ $result->image ? 'one-7' : 'one-12' }}">
                          <div class="text-tabs">
                            <div class="text-content">
                              <h3>Required Documents for Opening Individual/ Joint Account</h3>
                              <ul>
                                <li>Three copies of Passport size photographs of each account holder(s) (Photographs must be signed by ALL account holders)</li>
                                <li>National ID or Photocopy of valid Passport/ Driving License/ Nationality Certificate/ e-TIN certificate of the account holder(s) (Duly signed by ALL account holders)</li>
                                <li>Bank Statement (last six months) or Bank Certificate with Routing No. &amp; Bank Branch No. or Copy of MICR Cheque Leaf</li>
                                <li>Three copies of Passport size photographs of the nominee(s) (Photographs must be attested by ALL account holders)</li>
                                <li>Three copies of Passport size photographs of authorized person and power of attorney with photocopy of National ID/ Valid Passport of Power of Attorney holder (Photographs must be attested by ALL account holders)</li>
                                <li>In case of the nominee is a minor, detail of legal guardian</li>
                                <li>In case of margin account, margin agreement duly signed (with 2 additional passport size photograph of ALL account holders).</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="one-12">
                          <div class="text-content text-center">
                            <p><Link class="btn btn-theme-colored3 btn-border" to="/service/individual"> View Details</Link></p>
                          </div>
                        </div>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                    <div class="content-inner">
                      <div class="row">
                        <div class="{{ $result->image ? 'one-7' : 'one-12' }}">
                          <div class="text-tabs">
                            <div class="text-content">
                              <h3>Overview</h3>
                              <p style={{"text-align": "justify"}}>United securities with its superior market intelligence provides cutting edge information, processed by the finest professionals in the industry to its clients. USL assist institutional investor to make the right decision through insightful research coverage and a client focused sales and trading team. Our dedicated specialized research team ensures flow of well thought-out and well-researched stock ideas and investment strategies.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="one-12">
                          <div class="text-content text-center">
                            <p><Link class="btn btn-theme-colored3 btn-border" to="/service/institution"> View Details</Link></p>
                          </div>
                        </div>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="main-content" class="main-content text-center">
          <div class="container">
            <div class="section-title text-center pt-20 mb-0">
              <div class="row">
                <div class="col-md-8 col-md-offset-2">
                  <h2 class="title text-uppercase line-bottom-double-line-centered"><span class="text-theme-colored2">Insights & Research</span></h2>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-4 col-sm-12">
                    <div class="feature-content box1 text-center">
                      <div class="img-box"><img src={lg1} alt=""/></div>
                      <h3>Daily Weekly</h3>
                      <h4>report</h4>
                      <a href="#">Readmore <i class="fa fa-caret-right"></i></a>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-12">
                    <div class="feature-content box1 text-center">
                      <div class="img-box"><img src={lg2} alt=""/></div>
                      <h3>Macroeconomy</h3>
                      <h4>report</h4>
                      <a href="#">Readmore <i class="fa fa-caret-right"></i></a>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-12">
                    <div class="feature-content box1 text-center">
                      <div class="img-box"><img src={lg3} alt=""/></div>
                      <h3>Coverage</h3>
                      <h4>report</h4>
                      <a href="#">Readmore <i class="fa fa-caret-right"></i></a>
                    </div>
                  </div>
                </div>
                <div class="gap-40"></div>
              </div>
            </div>
          </div>
        </section>        
    </>
  )
}

export default Content
