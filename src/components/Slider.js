import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import slide1 from './../images/slider/slide1.jpg';
import slide2 from './../images/slider/slide2.jpg';
import slide3 from './../images/slider/slide3.jpg';
import './../css/slider-style.css';
import { Interweave } from 'interweave';
  
const slideImages = [
    {
        url: slide1,
        caption: 'USL provides complete brokerage services',
        details: 'We provides always our best services for our clients and always<br /> try to achieve our client&#39;s trust and satisfaction.'
    },
    {
        url: slide2,
        caption: 'Invest in local market from abroad',
        details: 'USL has a dedicated foreign desk to provide proprietary research and trade<br /> services to international investors. To access research on&nbsp;<strong>Bloomberg: ERH USL&nbsp;</strong> <strong>&lt;Go&gt;</strong>'
    },
    {
        url: slide3,
        caption: 'Advisory services for your portfolio and bulk sharing flow for institutions',
        details: 'USL provides dedicated Relationship Managers to cater<br /> personalized services to individual client&rsquo;s portfolio needs.'
    },
];
const Slider = () => {
  return (
    <>
     <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div className="div-style" style={{'backgroundImage': `url(${slideImage.url})` }}>
                <div className="slide-text-box">
                    <span className="title-style">{slideImage.caption}</span>
                    <br></br>
                    <p className="details-style"><Interweave content={slideImage.details}/></p>
                    <button className="slide-button-style">Read More</button>
                </div>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    </>
  )
}

export default Slider
