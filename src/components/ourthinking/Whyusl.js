import React, { useEffect } from 'react';
import $ from 'jquery';

const Whyusl = ({imgObject}) => {
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
                            <h2 className="title text-white">Why United Securities Limited</h2>
                            <ol className="breadcrumb text-left text-black mt-10">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Our Thinking</a></li>
                                <li className="active text-gray-silver">Why United Securities Limited</li>
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
                            <h2 className="text-uppercase line-bottom-double-line-centered mt-0"> <span className="text-theme-colored2">Why United Securities Limited</span></h2>
                        </div>
                    </div>
                </div>
                <div className="section-content text-content">
                    <ul>
                        <li style={{"text-align":"justify"}}>A Team of Proven Leaders</li>
                        <li style={{"text-align":"justify"}}>High Touch Trading Platform and Seamless Execution</li>
                        <li style={{"text-align":"justify"}}>Quality Economic &amp; Investment Research</li>
                        <li style={{"text-align":"justify"}}>In-depth Sector and Company Specific Research Reports</li>
                        <li style={{"text-align":"justify"}}>Timely and Relevant Information about Profitable Investment Opportunities</li>
                        <li style={{"text-align":"justify"}}>Expert Advisory on Your Investment Decisions</li>
                    </ul>
                </div>
            </div>
        </section>
    </>
  )
}

export default Whyusl
