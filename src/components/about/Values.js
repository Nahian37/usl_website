import React, { useEffect } from 'react';
import $ from 'jquery';

const Values = ({imgObject}) => {
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
                            <h2 className="title text-white">Our Values/Culture</h2>
                            <ol className="breadcrumb text-left text-black mt-10">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About us</a></li>
                                <li className="active text-gray-silver">Our Values/Culture</li>
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
                            <h2 className="text-uppercase line-bottom-double-line-centered mt-0"> <span className="text-theme-colored2">OUR VALUES/CULTURE</span></h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-12">
                        <div className="panel-group toggle accordion-stylished-left-border accordion-theme-colored3 accordion-icon-left">
                            
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <div className="panel-title"> 
                                        <a className="active" data-toggle="collapse" href="#" aria-expanded="true"><span className="open-sub"></span>Core Values</a> 
                                    </div>
                                </div>
                                <div id="toggle0" className="panel-collapse collapse in" aria-expanded="true">
                                    <div className="panel-body text-content">
                                        <ul>
                                            <li>Ensuring sustainable growth of wealth for our investors and helping our clients reach their financial goals.</li>
                                            <li>Remaining always transparent with our clients.</li>
                                            <li>Growing with the best people and creating a culture of continuous learning and consistent improvements.</li>
                                            <li>Tying individual rewards to performance meritocratic.</li>
                                            <li>Building a financially sound company.</li>
                                            <li>Seeking four Es in our environment: E = Energy; E = Capacity to energize; E = Edge = Capacity to say &#39;Yes&#39; or &#39;No&#39;; E = Execution.</li>
                                            <li>Inspiring innovation and being adaptive to change.</li>
                                            <li>Upholding the highest standard of ethics and professionalism. Client first, then USL, then me.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Values
