import React, { useEffect } from 'react';
import $ from 'jquery';
import detailImg from './../../images/details.png';
import indv_form from './../../downloads/USL_CUSTOMER_ACCOUNT_OPENING_FORM_Individual.pdf';
import inst_form from './../../downloads/USL_CORPORATE_CLIENT_ACCOUNT_OPENING_FORM.pdf';
import fund_req_form from './../../downloads/Fund_Requisition_Form.pdf';
import trf_form from './../../downloads/Transfer_Request_Form.pdf';
import trm_form from './../../downloads/Transmission_Request_Form.pdf';
import info_cng_form from './../../downloads/Customer_Account_Information_Change.pdf';
import pledge_form from './../../downloads/Pledge_Request_Form.pdf';
import unpledge_form from './../../downloads/Unpledge_Request_Form.pdf';
import demat_form from './../../downloads/Dematerialization_Request_Form.pdf';
import remat_form from './../../downloads/Rematerialization_Request_Form.pdf';
import conf_form from './../../downloads/Confiscate_Request_Form.pdf';
import close_form from './../../downloads/Account_Close_Form.pdf';
// import corp_form from './../../downloads/USL_CORPORATE_CLIENT_ACCOUNT_OPENING_FORM.pdf';


const Downloads = ({imgObject}) => {
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
                            <h2 className="title text-white">Downloads</h2>
                            <ol className="breadcrumb text-left text-black mt-10">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Research</a></li>
                                <li className="active text-gray-silver">Downloads</li>
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
                            <h2 className="text-uppercase line-bottom-double-line-centered mt-0"> <span className="text-theme-colored2">Downloads</span></h2>
                        </div>
                    </div>
                </div>
                <div className="section-content">
			        <div className="row">
                        <div className="col-md-12 text-content">
                            <table className="table table-bordered table-hover table-striped">
                                <thead>
                                    <tr>
                                        <th className="text-center" style={{width:"10%"}}>SL</th>
                                        <th style={{width:"70%"}}>Title</th>
                                        <th className="text-center" style={{width:"20%"}}>Download</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="">
                                        <th className="text-center" scope="row">1</th>
                                        <td>USL CUSTOMER ACCOUNT OPENING FORM (Individual)</td>
                                        <td className="text-center">
                                            <a rel="noreferrer" target="_blank" href={indv_form}><img src={detailImg} border="0"/> <small>Click here</small></a>
                                        </td>
                                    </tr>
                                    <tr className="">
                                        <th className="text-center" scope="row">2</th>
                                        <td>USL CORPORATE CLIENT ACCOUNT OPENING FORM</td>
                                        <td className="text-center">
                                            <a rel="noreferrer" target="_blank" href={inst_form}><img src={detailImg} border="0"/> <small>Click here</small></a>
                                        </td>
                                    </tr>
                                    <tr className="">
                                        <th className="text-center" scope="row">3</th>
                                        <td>Fund Requisition Form</td>
                                        <td className="text-center">
                                            <a rel="noreferrer" target="_blank" href={fund_req_form}><img src={detailImg} border="0"/> <small>Click here</small></a>
                                        </td>
                                    </tr>
                                    <tr className="">
                                        <th className="text-center" scope="row">4</th>
                                        <td>Transfer Request Form</td>
                                        <td className="text-center">
                                            <a rel="noreferrer" target="_blank" href={trf_form}><img src={detailImg} border="0"/> <small>Click here</small></a>
                                        </td>
                                    </tr>
                                    <tr className="">
                                        <th className="text-center" scope="row">5</th>
                                        <td>Transmission Request Form</td>
                                        <td className="text-center">
                                            <a rel="noreferrer" target="_blank" href={trm_form}><img src={detailImg} border="0"/> <small>Click here</small></a>
                                        </td>
                                    </tr>
                                    <tr className="">
                                        <th className="text-center" scope="row">6</th>
                                        <td>Customer Account Information Change</td>
                                        <td className="text-center">
                                            <a rel="noreferrer" target="_blank" href={info_cng_form}><img src={detailImg} border="0"/> <small>Click here</small></a>
                                        </td>
                                    </tr>
                                    <tr className="">
                                        <th className="text-center" scope="row">7</th>
                                        <td>Pledge Request Form</td>
                                        <td className="text-center">
                                            <a rel="noreferrer" target="_blank" href={pledge_form}><img src={detailImg} border="0"/> <small>Click here</small></a>
                                        </td>
                                    </tr>
                                    <tr className="">
                                        <th className="text-center" scope="row">8</th>
                                        <td>Unpledge Request Form</td>
                                        <td className="text-center">
                                            <a rel="noreferrer" target="_blank" href={unpledge_form}><img src={detailImg} border="0"/> <small>Click here</small></a>
                                        </td>
                                    </tr>
                                    <tr className="">
                                        <th className="text-center" scope="row">9</th>
                                        <td>Dematerialization Request Form</td>
                                        <td className="text-center">
                                            <a rel="noreferrer" target="_blank" href={demat_form}><img src={detailImg} border="0"/> <small>Click here</small></a>
                                        </td>
                                    </tr>
                                    <tr className="">
                                        <th className="text-center" scope="row">10</th>
                                        <td>Rematerialization Request Form</td>
                                        <td className="text-center">
                                            <a rel="noreferrer" target="_blank" href={remat_form}><img src={detailImg} border="0"/> <small>Click here</small></a>
                                        </td>
                                    </tr>
                                    <tr className="">
                                        <th className="text-center" scope="row">11</th>
                                        <td>Confiscate Request Form</td>
                                        <td className="text-center">
                                            <a rel="noreferrer" target="_blank" href={conf_form}><img src={detailImg} border="0"/> <small>Click here</small></a>
                                        </td>
                                    </tr>
                                    <tr className="">
                                        <th className="text-center" scope="row">12</th>
                                        <td>Account Close Form</td>
                                        <td className="text-center">
                                            <a rel="noreferrer" target="_blank" href={close_form}><img src={detailImg} border="0"/> <small>Click here</small></a>
                                        </td>
                                    </tr>
                                    <tr className="">
                                        <th className="text-center" scope="row">13</th>
                                        <td>USL Corporate Profile</td>
                                        <td className="text-center">
                                            <a rel="noreferrer" target="_blank" href=""><img src={detailImg} border="0"/> <small>Click here</small></a>
                                        </td>
                                    </tr>                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Downloads
