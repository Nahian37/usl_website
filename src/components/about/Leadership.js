import React, { useEffect } from 'react';
import $ from 'jquery';

const Leadership = ({imgObject}) => {
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
                            <h2 className="title text-white">Leadership</h2>
                            <ol className="breadcrumb text-left text-black mt-10">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About us</a></li>
                                <li className="active text-gray-silver">Leadership</li>
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
                            <h2 className="text-uppercase line-bottom-double-line-centered mt-0"> <span className="text-theme-colored2">Board of Directors</span></h2>
                        </div>
                    </div>
                </div>

                <div className="section-content">
                    <div className="pad-top10px pad-bottom20px research_teambios">
                        <div className="general">
                            <div className="row nopading">
                                <div className="graybg">
                                    <div className="col-md-4 col-sm-12 nopading">
                                        <div className="research_teambios-left">
                                            <div className="img-box">
                                                <img src={imgObject.hmr} alt=""/>                                            
                                            </div>
                                        </div> 
                                    </div>                                    
                                    <div className="col-md-8 col-sm-12 nopading">
                                        <div className="research_teambios-right">
                                            <div className="textcontent">
                                                <h5 className="text-uppercase text-left">Mr. Hasan Mohmood Raza</h5>
                                                <p className="text-left">Chairman</p>
                                                <p style={{"text-align":"justify"}}>
                                                Mr. Hasan Mahmood Raja, the Chairman of United Securities Limited is one of the most renowned Business Personalities of the country. Born in 1957, he completed his graduation in commerce and got passionately involved in the business. He is one of the Founding Directors of one of the country’s leading business houses – ‘United Group’.
                                                </p>
                                                <p style={{"text-align":"justify"}}>
                                                Mr. Raja had a keen interest and an innate aptitude for doing business and rendering service to the nation for promoting the economic development of Bangladesh. With a humble beginning in 1978, Mr. Raja displayed his excellence in business entrepreneurship by building his business domain. The biggest milestone of his success is the courage to embark into new business ventures based on sound foresight, ingenuity and skillful execution. Within a span of 37 years of his business career, he successfully managed to establish many diversified business enterprises under the umbrella of United Group. Commitment, integrity, and sincerity are the key values of his various business achievements.
                                                </p>
                                                <p style={{"text-align":"justify"}}>
                                                The dominant position of United Group in the Country’s Power and Real Estate sectors and creating unique establishments like Khulna Power Company Ltd., United Power Generation & Distribution Co. Ltd., United Hospital Ltd., United Nursing College, United International University and United Maritime Academy are a few of his landmark entrepreneurship. United Group has always marked its steady growth under Mr. Raja’s leadership. His charming personality, focus in the flawless implementation of every single business on time, constant stressing on brainstorming for new ideas, efficiency in business management, etc are only a few of his traits that eventually transformed into the core values of his business undertaking and implementation.
                                                <br></br>
                                                At present, Mr. Raja is the Chairman of United Enterprises & Co. Ltd as well the Chairman and Managing Director of more than 20 Concerns of the Group, notably Khulna Power Company Limited, Neptune Land Development Ltd, United City Twin Towers Developers Ltd, United Hospital, United Maritime Academy Ltd, etc. He is also the Chairman, Board of Trustees of United International University.
                                                </p>
                                                <p style={{"text-align":"justify"}}>
                                                Mr. Raja has traveled extensively at home and abroad namely to USA, UK, Australia, Canada, Germany, Japan, Malaysia, Singapore, and many other countries for the purpose of business. He also takes a profound interest in community services and contributes generously to the welfare of the community, particularly to the underprivileged ones. He has established multiple Schools and Madrasas in his village and surrounding areas. He continues to employ his best efforts to provide education, healthcare and infrastructure facilities for the overall development of the people of Jamalpur district.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <hr></hr>
                        <div className="general">
                            <div className="row nopading">
                                <div className="graybg">                                 
                                    <div className="col-md-8 col-sm-12 nopading">
                                        <div className="research_teambios-left">
                                            <div className="textcontent">
                                                <h5 className="text-uppercase text-right">Mr. Moinuddin Hasan Rashid</h5>
                                                <p className="text-right">Managing Director</p>
                                                <p style={{"text-align":"justify"}}>
                                                Mr. Moinuddin Hasan Rashid, the Managing Director of United Securities Limited, was born in 1982 in Dhaka. Upon completion of his B.Sc. in Electrical and Electronics Engineering from University College London, he joined United Group in 2005 as a second generation Director. As a young and energetic entrepreneur, he marked his future through dedication, dynamism, and foresight in shaping the Power Sector, one of the major enterprises of the United Group.  On 12 July 2011, he was appointed as Managing Director of United Enterprises & Co. Ltd, and simultaneously holds the position of the Managing Director for United Power Generation and Distribution Co. Ltd. and many more sister concerns. Mr. Rashid is an Active Trustee of the United Trust, a CSR organization of the Group and United International University Foundation.
                                                </p>
                                                <p style={{"text-align":"justify"}}>
                                                In 2011 he oversaw the commissioning of 208 MW Power Generation under three projects (KPCL II, KJAPCL & UAPL). United Ashuganj Power Ltd. (UAPL) is a quick rental power plant that was constructed and commissioned in a record time of 120 days under the tireless and bold leadership of Mr. Rashid. He also established United Property Solutions Ltd. one of the leading real estate developers of the country and oversaw the development of United Land Port Teknaf Ltd, Bangladesh’s only land port with Myanmar. Along with the responsibilities mentioned above, he looks after Group Investment and Business Development. Mr. Moinuddin Hasan Rashid supervised Power Plant expansion projects of UPGDCL DEPZ and UPGDCL CEPZ by 75 MW, oversaw commissioning of United Energy Ltd., formerly known as Shajahanullah Power Generation Co Ltd, a 28 MW Power Plant, and spearheaded the Joint-Venture of Gunze United Limited in 2013. Mr. Rashid also established United Shipping and Logistics Services Ltd. in 2015.
                                                </p>
                                                <p style={{"text-align":"justify"}}>
                                                Currently, Mr. Rashid is the Managing Director or United Power Generation & Distribution Co. Ltd. (UPGDCL), United Ashuganj Power Ltd. (UAPL), United Ashuganj Energy Ltd. and United Property Solutions Ltd. (UPSL) and is in the Board of Directors of United Hospital Ltd. (UHL), Khulna Power Company Ltd. (KPCL) and United Landport Teknaf Ltd. (ULPTL). He is also an active member of the Board of Trustees of United International University (UIU). Mr. Rashid is also the Joint General Secretary of the Board of Trustees United International University, Trustee of the Social Services & Management Trust, Sir John Wilson School and Joint Convener of DCCI Standing Committee.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-12 nopading">
                                        <div className="research_teambios-right">
                                            <div className="img-box">
                                                <img src={imgObject.mhr} alt=""/>                                            
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <hr></hr>
                        <div className="general">
                            <div className="row nopading">
                                <div className="graybg">
                                    <div className="col-md-4 col-sm-12 nopading">
                                        <div className="research_teambios-left">
                                            <div className="img-box">
                                                <img src="" alt=""/>                                            
                                            </div>
                                        </div> 
                                    </div>                                    
                                    <div className="col-md-8 col-sm-12 nopading">
                                        <div className="research_teambios-right">
                                            <div className="textcontent">
                                                <h5 className="text-uppercase text-left">Mr. Mohammad Khairul Anam Chowdhury (Sohel)</h5>
                                                <p className="text-left">Chief Executive Officer & Director</p>
                                                <p style={{"text-align":"justify"}}>
                                                Md. Khairul Anam Chowdhury is an industry veteran with more than 20 years of experience in the Bangladesh capital market. Majority portion of Mr. Chowdhury’s illustrious career has been dedicated to LankaBangla Securities Ltd. (LBSL), the largest stock brokerage of the country, where he played various important roles in different capacities, mastering each and every aspect of the business. Before joining USL, he was the CEO and Director of LBSL for 4 years and before that he played the role of COO for 5 years. Mr. Chowdhury was a nominated director representing LBSL in the board of Midas Finance Limited. He was an elected board member of Chittagong Stock Exchange (CSE) for two consecutive terms.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <hr></hr>
                        <div className="general">
                            <div className="row nopading">
                                <div className="graybg">                                 
                                    <div className="col-md-8 col-sm-12 nopading">
                                        <div className="research_teambios-left">
                                            <div className="textcontent">
                                                <h5 className="text-uppercase text-right">Mr. Md. Razib Al Mamun</h5>
                                                <p className="text-right">Chief Operating Officer & Director</p>
                                                <p style={{"text-align":"justify"}}>
                                                Mr. Razib is a unique talent and valuable asset in the brokerage industry of Bangladesh. His profound selling skill and ability of being a trusted advisor have made him one of the best of his kind in the industry. He started his career in the FMCG sector and later on moved to the hospitality industry. His experience in these industries and his exceptionally strong interpersonal and networking skills helped him develop very strong industry connections which paved the way to his stellar growth in the capital market. Before joining USL, he was the Head of Premium Brokerage at LankaBangla Securities Limited (LBSL) and before that he was the Head of Corporate Sales at BRAC EPL Stock Brokerage Limited. He joined USL as a Director and Chief Operating Officer, responsible for leading the sales team as well as managing the operations of the company.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-12 nopading">
                                        <div className="research_teambios-right">
                                            <div className="img-box">
                                                <img src="{{ asset($result->image_path.$result->image) }}" alt=""/>                                            
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <hr></hr>
                        <div className="general">
                            <div className="row nopading">
                                <div className="graybg">
                                    <div className="col-md-4 col-sm-12 nopading">
                                        <div className="research_teambios-left">
                                            <div className="img-box">
                                                <img src="" alt=""/>                                            
                                            </div>
                                        </div> 
                                    </div>                                    
                                    <div className="col-md-8 col-sm-12 nopading">
                                        <div className="research_teambios-right">
                                            <div className="textcontent">
                                                <h5 className="text-uppercase text-left">Mr. Md. Ashaduzaman Riadh, CFA, FRM</h5>
                                                <p className="text-left">Chief Investment Officer & Director</p>
                                                <p style={{"text-align":"justify"}}>
                                                Md Ashaduzaman Riadh is the Chief Investment Officer & Director at United Securities Limited. He oversees the proprietary, clients and group equity portfolio investment. He is also volunteering and leading the CFA community as a member of the board of directors at CFA Society Bangladesh.
                                                </p>
                                                <p style={{"text-align":"justify"}}>
                                                Previously, Mr. Riadh was the Strategic Portfolio Manager of LankaBangla Securities Ltd, a leading stock brokerage house in Bangladesh. He was responsible for managing portfolios of negative margin brokerage clients. He was also a member of the management and HR committee of LankaBangla Securities. Apart from these, he advised the institutional/HNI equity portfolios. He is a CFA Charterholder from CFA Institute, USA also he is a Certified FRM (Financial Risk Manager) from GARP (Global Association of the Risk Professionals), USA. Md Ashaduzaman Riadh has graduated in Finance from University of Dhaka.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <hr></hr>
                        
                        <div className="general">
                            <div className="row nopading">
                                <div className="graybg">                                 
                                    <div className="col-md-8 col-sm-12 nopading">
                                        <div className="research_teambios-left">
                                            <div className="textcontent">
                                                <h5 className="text-uppercase text-right">Mr. Md. Mahfuzur Rahman</h5>
                                                <p className="text-right">Chief Business Development Officer & Director</p>
                                                <p style={{"text-align":"justify"}}>
                                                Mr. Rahman joined USL as a Director and Chief Business Development Officer, responsible for developing institutional and foreign trade business. He looks after research, product development, and strategic planning. Prior to joining USL, Mr. Rahman was the Chief Investment Officer of Union Capital Limited. Before that, he played significant role in foreign business development as Head of Research in LankaBangla Securities Limited (LBSL) where he led a large and capable sell-side research team and attained around 40% market share in foreign trade business of the country. He started his career with Mindspring Research, an independent research firm. Mr. Rahman completed his BBA and MBA majoring in Finance from the University of Dhaka.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-12 nopading">
                                        <div className="research_teambios-right">
                                            <div className="img-box">
                                                <img src="{{ asset($result->image_path.$result->image) }}" alt=""/>                                            
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <hr></hr>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Leadership
