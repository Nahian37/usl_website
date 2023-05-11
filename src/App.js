import { useEffect } from 'react';
import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
// import Navbar from './components/Navbar';
import logo from './images/united-logo.png';
import $ from 'jquery';
// import Navbar2 from './components/Navbar2';
import Navbar3 from './components/Navbar3';

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

function App() {
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
      {/* {{-- <!-- preloader -->
      <div id="preloader">
        <div id="spinner">
          <div className="preloader-dot-loading">
            <div className="sk-rotating-plane"><img id="sjiblbdloading" src="{{ asset('public/website/images/preloder.png') }}"></div>
          </div>
        </div>
        <div id="disable-preloader" className="btn btn-default btn-sm">Disable Preloader</div>
      </div> --}} */}

      <Navbar3 logo={logo}/>

        {/* <!-- Start main-content --> */}
        <div className="main-content">
          <Content/>
        </div>

        <Footer logo={logo}/>
        <a className="scrollToTop" href="#"><i className="fa fa-angle-up"></i></a>
    </div>
    </>
  );
}

export default App;
