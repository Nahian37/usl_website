import React, { useEffect } from 'react';
import $ from 'jquery';

const Ourpeople = ({imgObject}) => {
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
                        <h2 className="title text-white">Our People</h2>
                        <ol className="breadcrumb text-left text-black mt-10">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About us</a></li>
                            <li className="active text-gray-silver">Our People</li>
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
                        <h2 className="text-uppercase line-bottom-double-line-centered mt-0"> <span className="text-theme-colored2">Our People</span></h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Ourpeople
