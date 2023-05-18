import React, { useEffect } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';


const Whoweare = ({imgObject}) => {
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
     {/* <!-- Section: inner-header --> */}
    <section className="inner-header divider parallax layer-overlay overlay-dark-5" data-bg-img={imgObject.bgImage}>
        <div className="container pt-70 pb-20">
            {/* <!-- Section Content --> */}
            <div className="section-content">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="title text-white">Who we are</h2>
                        <ol className="breadcrumb text-left text-black mt-10">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About us</a></li>
                            <li className="active text-gray-silver">Who we are</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </section> 
    {/* <!-- Section: --> */}
    <section className="">
        <div className="container">
            <div className="section-title text-center">
                <div className="row">
                    <div className="col-md-12 ">
                        <h2 className="text-uppercase line-bottom-double-line-centered mt-0"> <span className="text-theme-colored2">Our History</span></h2>
                        <div className="text-content">
                            <p>United Securities Limited (USL) (DSE TREC NO 207), a subsidiary of United Group, one of the biggest business conglomerate in Bangladesh. At USL, unlike the existing conventional brokerage platforms we believe trust of the clients is the main ingredient of success which can only be achieved by putting the client’s interest first and by taking investment decision with adequate basis. We strongly back our clients with best research insights and believe investment in stocks can only bring good when we can help our clients sustainably grow their wealth.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <section className="" data-bg-img="images/pattern/p6.png">
	    <div className="container pt-20 pb-0">
		    <div className="section-title text-center pt-20 mb-20">
			    <div className="row">
				    <div className="col-md-8 col-md-offset-2">
					    <h2 className="title text-uppercase line-bottom-double-line-centered"><span className="text-theme-colored2">Our Management</span></h2>

				    </div>
			    </div>
		    </div>

		    <div className="section-content">

			    <div className="row" data-margin-top="0px">
				    <div className="col-sm-12 col-md-4">
					    <div className="post icon-box iconbox-theme-colored bg-white border-1px text-center">
						    <div className="entry-content">
							    <Link to="/about/bod">
								    <img src={imgObject.bordofdir} alt=""/>
							    </Link>
							    <h3 className="mt-10">Board of Directors</h3>
						    </div>                
					    </div>
				    </div>
				    <div className="col-sm-12 col-md-4">
					    <div className="post icon-box  iconbox-theme-colored bg-white border-1px text-center">
						    <div className="entry-content ">
                                <Link to="/about/leadership">
                                    <img src={imgObject.leadership} alt=""/>
                                </Link>
							    <h3 className="mt-10">Leadership</h3>
						    </div>                
					    </div>
				    </div>
				    <div className="col-sm-12 col-md-4">
					    <div className="post icon-box iconbox-theme-colored bg-white border-1px text-center">
						    <div className="entry-content " >
							    <Link to="/about/our-people">
								    <img src={imgObject.people} alt=""/>
                                </Link>
								<h3 className="mt-10">Our People</h3>
							</div>                
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	{/* <!-- Section:Service--> */}
    </>
  )
}

export default Whoweare
