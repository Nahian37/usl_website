import React, { useEffect } from 'react';
import $ from 'jquery';
import { Accordion } from 'react-bootstrap-accordion';
import 'react-bootstrap-accordion/dist/index.css';
import './../../css/accordion-style.css';
import inst_form from './../../downloads/USL_CORPORATE_CLIENT_ACCOUNT_OPENING_FORM.pdf';

const Institution = ({imgObject}) => {
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
                            <h2 className="title text-white">Local Institution</h2>
                            <ol className="breadcrumb text-left text-black mt-10">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Solutions & Services</a></li>
                                <li className="active text-gray-silver">Local Institution</li>
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
                            <h2 className="text-uppercase line-bottom-double-line-centered mt-0"> <span className="text-theme-colored2">Local Institution</span></h2>
                        </div>
                    </div>
                </div>
                <div className="accordion-usl">
                    <Accordion title="Overview">
                        <p style={{"text-align": "justify"}}>United securities with its superior market intelligence provides cutting edge information, processed by the finest professionals in the industry to its clients. USL assist institutional investor to make the right decision through insightful research coverage and a client focused sales and trading team. Our dedicated specialized research team ensures flow of well thought-out and well-researched stock ideas and investment strategies.</p>
                    </Accordion>
                    <Accordion title="Institutional Trading Desk">
                        <p style={{"text-align": "justify"}}>USL believes best execution is intrinsically tied to portfolio decision value. At USL, we believe skillful trade execution can enhance the investment return relative to the competitor, whereas poor trading can lead to excessive transaction costs and lagging performance. Our efficient trader always seeks best execution to add investment value by reducing frictional trading cost, which conventional broker often overlook.</p>
                    </Accordion>
                    <Accordion title="Our Research">
                        <p style={{"text-align": "justify"}}>We have dedicated research team of highly experienced analyst to provide objective, independent and actionable research to our clients to make informed financial decisions. Our research analysts bring you intensive research coverage of macro-economic outlook, Industry Insight and prudent coverage of selected instrument of our investment universe. Depending on what kind of investor you, we bring to you fundamental, technical research reports.</p>
                    </Accordion>
                    <Accordion title="Required documents for opening institutional account">
                        <ul>
                            <li>Copy of valid Trade License</li>
                            <li>Memorandum &amp; Article of Association</li>
                            <li>Copy of Certificate of Incorporation &amp;amp; Commencement of Business</li>
                            <li>Latest Copy of from XII, List of Directors along with address &amp;amp; NID copy</li>
                            <li>List of authorized signatories along with address</li>
                            <li>Copy of Board resolution to open the account &amp;amp; authorization for operation</li>
                            <li>Two copies passport size picture of each authorized signatories with signature</li>
                            <li>Bank Statement or Cheque Leaf Copy</li>
                            <li>In case of margin account, margin agreement duly signed (with 2 additional passport size photograph of ALL account holders).</li>
                        </ul>
                    </Accordion>
                    <Accordion title="Downloads">
                        <ul>
                            <li><a rel="noreferrer" target="_blank" href={inst_form}>CORPORATE CLIENT ACCOUNT OPENING FORM</a></li>
                        </ul>
                    </Accordion>
                </div>
            </div>
        </section> 
    </>
  )
}

export default Institution
