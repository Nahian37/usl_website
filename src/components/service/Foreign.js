import React, { useEffect } from 'react';
import $ from 'jquery';
import { Accordion } from 'react-bootstrap-accordion';
import 'react-bootstrap-accordion/dist/index.css';
import './../../css/accordion-style.css';

const Foreign = ({imgObject}) => {
    useEffect(()=>{
        $('[data-bg-img]').each(function() {
            $(this).css('background-image', 'url(' + $(this).data("bg-img") + ')');
        });
        $('[data-margin-top]').each(function() {
            $(this).css('margin-top', $(this).data("margin-top"));
        });
    },[]);
  return (
    <>
        <section className="inner-header divider parallax layer-overlay overlay-dark-5" data-bg-img={imgObject.bgImage}>
            <div className="container pt-70 pb-20">
                {/* <!-- Section Content --> */}
                <div className="section-content">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="title text-white">Foreign Institution</h2>
                            <ol className="breadcrumb text-left text-black mt-10">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Solutions & Services</a></li>
                                <li className="active text-gray-silver">Foreign Institution</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="mission">
            <div className="container">
                <div className="section-title text-center">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h2 className="text-uppercase line-bottom-double-line-centered mt-0"> <span className="text-theme-colored2">Foreign Institution</span></h2>
                        </div>
                    </div>
                </div>
                <div className="accordion-usl">
                    <Accordion title="Why invest in Stock">
                        <ul>
                            <li>Allowing foreign investors to participate in IPO and Right Issue without any regulatory restrictions</li>
                            <li>Withdrawal of all regulatory restrictions on international portfolio investors in the secondary securities market</li>
                            <li>No capital gain tax on individuals (subject to the condition that such assesse is entitled to similar exemption in the country in which he/she is resident)</li>
                            <li>25% tax deducted at source on dividend earnings for foreign individuals</li>
                            <li>20% tax deducted at source on dividend earnings for foreign institutions and 10% tax on capital gain</li>
                            <li>100% investment is repatriable without any regulatory hassle</li>
                        </ul>
                    </Accordion>
                    <Accordion title="Fee & Services">
                        <ul dir="ltr">
                            <li>BO Account opening is free of charge</li>
                            <li>Settlement and Transaction costs are inclusive of brokerage commission</li>
                            <li>Free advisory service</li>
                            <li>Trade order could be placed via email or over phone call at the convenience of the client</li>
                            <li>Apply to IPO through us</li>
                        </ul>
                    </Accordion>
                    <Accordion title="Eligibility">
                        <ul>
                            <li>Foreign institutions</li>
                            <li>Institutions located abroad which are owned by NRBs</li>
                        </ul>
                    </Accordion>
                    <Accordion title="Transaction & settlement process">
                        <h3 dir="ltr" style={{"text-align":"justify"}}><strong>For Sell</strong></h3>

                        <ul>
                            <li style={{"text-align":"justify"}}>
                            <p>On T+0 or before, client will place sell order (through e-mail or FAX) to us (the broker).</p>
                            </li>
                            <li style={{"text-align":"justify"}}>
                            <p>It is suggested that the client ensures all the shares are sellable and ready to be transferred to the clearing account of the broker.</p>
                            </li>
                            <li style={{"text-align":"justify"}}>
                            <p>On T+0, the broker executes the trade in the exchange and sends trade confirmation to client accordingly after the trading hours. (through e-mail or FAX)</p>
                            </li>
                            <li style={{"text-align":"justify"}}>
                            <p>The same trade confirmation will also be sent to the client&rsquo;s local custodian bank on T+0. (After trading hours)</p>
                            </li>
                            <li style={{"text-align":"justify"}}>
                            <p>The custodial bank will pay-in the sold shares immediately to the clearing account of the broker.</p>
                            </li>
                            <li style={{"text-align":"justify"}}>
                            <p>The broker will make payment to the custodian bank by T+1. (Here, for &ldquo;Z&rdquo; category stocks, the broker will make payment to the custodian bank by T+9)</p>
                            </li>
                        </ul>

                        <h3 dir="ltr" style={{"text-align":"justify"}}><strong>For Buy</strong></h3>

                        <ul>
                            <li style={{"text-align":"justify"}}>
                            <p>On T+0 or before, client will place buy order (through e-mail or FAX) to us (the broker).</p>
                            </li>
                            <li style={{"text-align":"justify"}}>
                            <p>It is suggested that the client ensures the availability of required balance to purchase securities on his/her NITA account and ready to be transferred to the broker.</p>
                            </li>
                            <li style={{"text-align":"justify"}}>
                            <p>On T+0, the broker executes the trade in the exchange and sends trade confirmation to client accordingly after the trading hours. (through e-mail or FAX)</p>
                            </li>
                            <li style={{"text-align":"justify"}}>
                            <p>The same trade confirmation will also be sent to the client&rsquo;s local custodian bank on T+0. (After trading hours)</p>
                            </li>
                            <li style={{"text-align":"justify"}}>
                            <p>Custodial bank will issue pay cheque to the broker on T+0, the exact purchase amount plus the broker commission.</p>
                            </li>
                            <li style={{"text-align":"justify"}}>
                            <p>After the payment is received from custodial bank the broker is clear to pay out the purchased shares to the custodial bank.</p>
                            </li>
                            <li style={{"text-align":"justify"}}>
                            <p>On T+2 the broker is expected to receive shares from exchange clearing house and payout shares to the custodial bank. (T+3 will be applied for &ldquo;Z&rdquo; category stocks).</p>
                            </li>
                        </ul>
                    </Accordion>
                    <Accordion title="Document Requirement">
                        <ul dir="ltr">
                            <li>Company NITA A/C number with custodial bank or A/C statement</li>
                            <li>Board Resolution</li>
                            <li>Memorandum and Articles of Association</li>
                            <li>Specimen signature of account operators</li>
                            <li>Letter of Authorization</li>
                            <li>A valid photo ID of the Managing Director</li>
                            <li>Valid photo ID of Account Operator(s)</li>
                        </ul>
                    </Accordion>
                </div>
            </div>
        </section>
    </>
  )
}

export default Foreign
