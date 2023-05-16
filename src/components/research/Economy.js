import React, { useEffect } from 'react';
import $ from 'jquery';

const Economy = ({imgObject}) => {
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
        <section class="inner-header divider parallax layer-overlay overlay-dark-5" data-bg-img={imgObject.bgImage}>
            <div class="container pt-70 pb-20">
                {/* <!-- Section Content --> */}
                <div class="section-content">
                    <div class="row">
                        <div class="col-md-12">
                            <h2 class="title text-white">Economy Research</h2>
                            <ol class="breadcrumb text-left text-black mt-10">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Research</a></li>
                                <li class="active text-gray-silver">Economy Research</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="mission">
            <div class="container">
                <div class="section-title text-center">
                    <div class="row">
                        <div class="col-md-12 ">
                            <h2 class="text-uppercase line-bottom-double-line-centered mt-0"> <span class="text-theme-colored2">Economy Research</span></h2>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    </>
  )
}

export default Economy
