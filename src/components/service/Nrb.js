import React, { useEffect } from 'react';
import $ from 'jquery';
import { Accordion } from 'react-bootstrap-accordion';
import 'react-bootstrap-accordion/dist/index.css';
import './../../css/accordion-style.css';

const Nrb = ({imgObject}) => {
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
                            <h2 className="title text-white">Non Resident Bangladeshi (NRB)</h2>
                            <ol className="breadcrumb text-left text-black mt-10">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Solutions & Services</a></li>
                                <li className="active text-gray-silver">Non Resident Bangladeshi (NRB)</li>
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
                            <h2 className="text-uppercase line-bottom-double-line-centered mt-0"> <span className="text-theme-colored2">Non Resident Bangladeshi (NRB)</span></h2>
                        </div>
                    </div>
                </div>
                <div className="accordion-usl">
                    <Accordion title="Why invest in Stock">
                        <ul dir="ltr">
                            <li>10% quota in all Initial Public Offerings (IPOs) is reserved for non- resident Bangladeshis</li>
                            <li>Eligible to trade in the secondary market while abroad through a Nominee</li>
                            <li>0% tax on capital gain</li>
                            <li>Individual income tax assessment is similar to any other Resident Bangladeshi</li>
                            <li>10% tax rebate on investment allowance on security investment &nbsp;</li>
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
                        <ul dir="ltr">
                            <li>Non-resident individuals (NRBs)</li>
                            <li>Age must be above eighteen years old</li>
                        </ul>
                    </Accordion>
                    <Accordion title="Document Requirement">
                        <ul dir="ltr">
                            <li>Account Opening Form and Signature Card duly filled up</li>
                            <li>Photocopy of valid passport or national ID card</li>
                            <li>Two copies passport size photograph of account holder</li>
                            <li>One copy passport size photograph of authorized person (if any)</li>
                            <li>Two copies passport size photograph of nominee</li>
                            <li>Photocopy of valid passport or national ID card of nominee</li>
                        </ul>
                    </Accordion>
                </div>
            </div>
        </section> 
    </>
  )
}

export default Nrb
