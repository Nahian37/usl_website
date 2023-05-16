import React, { useEffect } from 'react';
import $ from 'jquery';
import { Accordion } from 'react-bootstrap-accordion';
import 'react-bootstrap-accordion/dist/index.css';
import './../../css/accordion-style.css';
import indv_form from './../../downloads/USL_CUSTOMER_ACCOUNT_OPENING_FORM_Individual.pdf';

const Individual = ({imgObject}) => {
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
                            <h2 className="title text-white">Local Individual</h2>
                            <ol className="breadcrumb text-left text-black mt-10">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Solutions & Services</a></li>
                                <li className="active text-gray-silver">Local Individual</li>
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
                            <h2 className="text-uppercase line-bottom-double-line-centered mt-0"> <span className="text-theme-colored2">Local Individual</span></h2>
                        </div>
                    </div>
                </div>
                <div className="accordion-usl">
                    <Accordion title="Local Individual">
                        <ul>
                            <li>Depository Services</li>
                            <li>Trading Services</li>
                            <li>Margin Facilities</li>
                            <li>Electronic Services</li>
                            <li>Panel Broking</li>
                        </ul>
                    </Accordion>
                    <Accordion title="Required Documents for Opening Individual/ Joint Account">
                        <ul>
                            <li>Three copies of Passport size photographs of each account holder(s) (Photographs must be signed by ALL account holders)</li>
                            <li>National ID or Photocopy of valid Passport/ Driving License/ Nationality Certificate/ e-TIN certificate of the account holder(s) (Duly signed by ALL account holders)</li>
                            <li>Bank Statement (last six months) or Bank Certificate with Routing No. &amp; Bank Branch No. or Copy of MICR Cheque Leaf</li>
                            <li>Three copies of Passport size photographs of the nominee(s) (Photographs must be attested by ALL account holders)</li>
                            <li>Three copies of Passport size photographs of authorized person and power of attorney with photocopy of National ID/ Valid Passport of Power of Attorney holder (Photographs must be attested by ALL account holders)</li>
                            <li>In case of the nominee is a minor, detail of legal guardian</li>
                            <li>In case of margin account, margin agreement duly signed (with 2 additional passport size photograph of ALL account holders).</li>
                        </ul>
                    </Accordion>
                    <Accordion title="Downloads">
                        <ul>
                            <li><a rel="noreferrer" target="_blank" href={indv_form}>CUSTOMER ACCOUNT OPENING FORM</a></li>
                        </ul>
                    </Accordion>
                </div>
            </div>
        </section> 
    </>
  )
}

export default Individual
