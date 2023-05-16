import React, { useEffect } from 'react';
import $ from 'jquery';

const Overview = ({imgObject}) => {
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
                            <h2 className="title text-white">Research Overview</h2>
                            <ol className="breadcrumb text-left text-black mt-10">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Research</a></li>
                                <li className="active text-gray-silver">Research Overview</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="">
            <div className="container">
                <div className="section-title text-center">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h2 className="text-uppercase line-bottom-double-line-centered mt-0"> <span className="text-theme-colored2">Research Overview</span></h2>
                            <div className="text-content">
                                <h3 style={{"text-align":"justify"}}><strong>Daily Reports</strong></h3>
                                <p style={{"text-align":"justify"}}>On a daily basis, we publish two reports &ndash; one before the market opens for trading and the other after the market closes. The Pre-market report, named &ldquo;USL Bangladesh Morning Market Insights&rdquo;, contains a short summary and statistics of the previous trading day&rsquo;s performance along with important news updates and our outlook for the day. The post-market report, named &ldquo;USL Bangladesh Closing Market Insights&rdquo; provides a detailed review of the market performance for the day. It contains market wide, sectoral, and scrip wise updates and data matrix and also includes the important economic and market related news and company declarations.</p>

                                <h3 style={{"text-align":"justify"}}><strong>Weekly Reports</strong></h3>
                                <p style={{"text-align":"justify"}}>We publish &ldquo;USL Bangladesh Weekly Market Insights&rdquo; after trade closes on the last trading day of every week. This report provides a detailed review of the market performance for the whole week. It contains market and sector wise updates and data matrix and also includes the important economic and market related news and company declarations during the week.</p>

                                <h3 style={{"text-align":"justify"}}><strong>Monthly Reports</strong></h3>
                                <p style={{"text-align":"justify"}}>Our monthly publication &ldquo;USL Bangladesh Monthly Market Insights&rdquo; provides a detailed review of the market&rsquo;s performance for the month along with a comprehensive update about the major and most relevant economic indicators. It also includes our outlook for the market and all the relevant economic indicators.</p>

                                <h3 style={{"text-align":"justify"}}><strong>IPO Review</strong></h3>
                                <p style={{"text-align":"justify"}}>We prepare and publish reviews on all the upcoming IPOs. If a company is listed in fixed price (face value), the IPO review is published before the public subscription starts. For an IPO under the book building method, we prepare and publish the review twice, once before the bidding process for price discovery starts and again before the public subscription starts.</p>

                                <h3 style={{"text-align":"justify"}}><strong>Equity Notes</strong></h3>
                                <p style={{"text-align":"justify"}}>Periodically we publish short equity notes on companies that we think are potentially good investment opportunities for our clients. These reports are prepared with the purpose of supporting our clients in making better and more informed investment decisions. We do not provide direct investment advice to the clients.</p>

                                <h3 style={{"text-align":"justify"}}><strong>Economy and Policy Reviews</strong></h3>
                                <p style={{"text-align":"justify"}}>We publish reports on major economy and policy related updates. Regular reports include Monetary Policy Statement (MPS) Review twice a year and National Budget Review once a year.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </>
  )
}

export default Overview
