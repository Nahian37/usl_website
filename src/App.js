import { useEffect } from 'react';
import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
// import Navbar from './components/Navbar';
import $ from 'jquery';
// import Navbar2 from './components/Navbar2';
import Navbar3 from './components/Navbar3';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Whoweare from './components/about/Whoweare';
// images
import logo from './images/united-logo.png';
import p6 from './images/pattern/p4.png';
import bordofdir from './images/bordofdir.jpg';
import leadership from './images/leadership.jpg';
import people from './images/people.jpg';
import lg1 from './images/services/lg1.jpg';
import lg2 from './images/services/lg2.jpg';
import lg3 from './images/services/lg3.jpg';
import bgImage from './images/bg/slide1.jpg';
import Boardofdirector from './components/about/Boardofdirector';
import Leadership from './components/about/Leadership';
//images
//Bod
import aih from './images/about/bod/Ahmed-ismail-hossain.png';
import hmr from './images/about/bod/Hasan-mahmood-raja.png';
import kma from './images/about/bod/KMA-shamim.png';
import mtib from './images/about/bod/malik-talha-ismail-bari.png';
import mhr from './images/about/bod/Moinuddin-hasan-rashid.png';
import nar from './images/about/bod/nasiruddin-akhter-rashid.png';
import Ourpeople from './components/about/Ourpeople';
import Values from './components/about/Values';
import Whyusl from './components/ourthinking/Whyusl';
import Overview from './components/research/Overview';
import Daily from './components/research/Daily';
import Weekly from './components/research/Weekly';
import Economy from './components/research/Economy';
import Company from './components/research/Company';
import Foreign from './components/service/Foreign';
import Nrb from './components/service/Nrb';
import Individual from './components/service/Individual';
import Institution from './components/service/Institution';
import Downloads from './components/service/Downloads';
import Contactus from './components/contact/Contactus';
import Branch from './components/contact/Branch';
//Bod


function App() {
  const imgObject ={
    logo: logo,
    p6: p6,
    bordofdir: bordofdir,
    leadership: leadership,
    people: people,
    lg1: lg1,
    lg2: lg2,
    lg3: lg3,
    bgImage: bgImage,
    aih:aih,
    hmr:hmr,
    kma:kma,
    mtib:mtib,
    mhr:mhr,
    nar:nar
  };
  useEffect(()=>{
    $('.tab-services').each(function() {
      $(this).children('.content-tab').children().hide();
      $(this).children('.content-tab').children().first().show()
      $(this).find('.tab-list-services').children('.tab-item').on('click', function(){
        var liActive = $(this).index(),
        contentActive = $(this).siblings().removeClass('active').parents('.tab-services').children('.content-tab').children().eq(liActive);
        contentActive.addClass('active').fadeIn("slow");
        contentActive.siblings().removeClass('active');
        $(this).addClass('active').parents('.tab-services').children('.content-tab').children().eq(liActive).siblings().hide();
      });
    });
  },[]);
  return (
    <>
    <div className="body-overlay"></div>
	
    <div id="wrapper" className="clearfix">
    <BrowserRouter>
      <Navbar3 imgObject={imgObject}/>
      <div className="main-content">
        <Routes>
          {/* About */}
          <Route exact path="/" element={<Content/>}/>
          <Route exact path="/about/who-we-are" element={<Whoweare imgObject={imgObject}/>}/>
          <Route exact path="/about/bod" element={<Boardofdirector imgObject={imgObject}/>}/>
          <Route exact path="/about/leadership" element={<Leadership imgObject={imgObject}/>}/>
          <Route exact path="/about/our-people" element={<Ourpeople imgObject={imgObject}/>}/>
          <Route exact path="/about/values" element={<Values imgObject={imgObject}/>}/>
          {/* Our Thinking */}
          <Route exact path="/our-thinking/why-usl" element={<Whyusl imgObject={imgObject}/>}/>
          {/* Research */}
          <Route exact path="/research/overview" element={<Overview imgObject={imgObject}/>}/>
          <Route exact path="/research/daily" element={<Daily imgObject={imgObject}/>}/>
          <Route exact path="/research/weekly" element={<Weekly imgObject={imgObject}/>}/>
          <Route exact path="/research/economy" element={<Economy imgObject={imgObject}/>}/>
          <Route exact path="/research/company" element={<Company imgObject={imgObject}/>}/>
          {/* Services */}
          <Route exact path="/service/foreign" element={<Foreign imgObject={imgObject}/>}/>
          <Route exact path="/service/nrb" element={<Nrb imgObject={imgObject}/>}/>
          <Route exact path="/service/individual" element={<Individual imgObject={imgObject}/>}/>
          <Route exact path="/service/institution" element={<Institution imgObject={imgObject}/>}/>
          <Route exact path="/service/downloads" element={<Downloads imgObject={imgObject}/>}/>
          {/* Contact Us */}
          <Route exact path="/contactus" element={<Contactus imgObject={imgObject}/>}/>
          <Route exact path="/contactus/branch" element={<Branch imgObject={imgObject}/>}/>
        </Routes>
      </div>
      
      
      <Footer imgObject={imgObject}/>
      <a className="scrollToTop" href="#"><i className="fa fa-angle-up"></i></a>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;


// const statuses = { }; // loading, loaded, import calls chain

// const loadScript= (src) => {
//   const status = statuses[src] || (statuses[src] = { });
// if (status.loaded || status.loading) {
//   return status.promise;
// }
// status.loading = true;
// status.promise = new Promise((resolve, reject) => {
//      if (!document.head) {
//           status.loading = false;
//           reject('Load JavaScript file in web site body or after head is ready.');
//           return;
//       }
//       const script = document.createElement('script');
//       script.addEventListener('load', () => {
//           status.loaded = true;
//           status.loading = false;
//           resolve();
//       });
//       script.addEventListener('error', () => {
//           status.loaded = true;
//           status.loading = false;
//           reject('JavaScript file loading error (check script url or network connection).');
//       });
//       script.async = true;
//       script.src = src;
//       document.head.appendChild(script);
//   });
// return status.promise;
// };

  // useEffect(()=>{
  //   loadScript('https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js')
  //     .then(() => {
  //         console.log('Script loading');
  //     })
  //     .catch(console.error);

  //   loadScript('./assets/js/custom.js')
  //     .then(() => console.log('Only waiting for the script'))
  //     .catch(console.error);
  // },[]);
