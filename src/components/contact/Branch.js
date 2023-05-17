import React, { useEffect } from 'react';
import $ from 'jquery';
import UslMap from './UslMap';

const Branch = ({imgObject}) => {
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
                            <h2 className="title text-white">Our Branch</h2>
                            <ol className="breadcrumb text-left text-black mt-10">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Connect us</a></li>
                                <li className="active text-gray-silver">Our Branch</li>
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
                            <h2 className="text-uppercase line-bottom-double-line-centered mt-0"> <span className="text-theme-colored2">Our Branch</span></h2>
                        </div>
                    </div>
                </div>
                <div className="section-content">
                    <div className="pad-top30px pad-bottom20px ">
                        <div className="flat-row pad-bottom20px">
                            <div className="container">
                                <div className="row margin-bottom-10">
                                    <div className="col-md-8" style={{"padding-left":"0"}}>
                                        <div id="googlemaps" className="google-map hidden-xs" style={{display: "block; height: 350px"}}>
                                            <UslMap/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div class="contact-desc" style={{height: "350px", "overflow-y": "scroll"}}>
                                            <h4 class="desc no-margin-top"><span class="pink_text"><strong> Corporate Office</strong></span></h4>									
									        <p><strong>United Securities Limited </strong></p>									
									        <p>Gulshan Centre Point, Level 8,<br />
                                            House 23-26, Road 90,&nbsp;<br />
                                            Gulshan 2, Dhaka 1212, Bangladesh<br />
                                            <strong>Phone:</strong>&nbsp;+880 2 550 52 000<br />
                                            <strong>Email:</strong>&nbsp;info@unitedsecurities.com.bd</p>									
									        <hr style={{margin:"5px 0"}}/>
                                            <h4 class="desc no-margin-top"><span class="pink_text"><strong> Motijheel Branch</strong></span></h4>									
									        <p><strong>United Securities Limited </strong></p>									
									        <p>11D, L 12, City Center<br />
                                            90/1, Motijheel C/A, Dhaka 1000, Bangladesh</p>
                                            <p>Contact No: +88 01730 322536</p>									
									        <hr style={{margin:"5px 0"}}/>
                                            <h4 class="desc no-margin-top"><span class="pink_text"><strong> Chattogram Branch</strong></span></h4>									
									        <p><strong>United Securities Limited </strong></p>									
									        <p>Atlas Rangs Plaza (13th Floor)<br />
                                            7, Sk. Mujib Road, Agrabad C/A,<br />
                                            Chattogram 4100, Bangladesh.</p>
                                            <p>Contact No: +880 1313 412630</p>									
									        <hr style={{margin:"5px 0"}}/>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                <hr/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    </>
  )
}

export default Branch
