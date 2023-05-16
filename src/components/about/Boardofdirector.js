import React, { useEffect } from 'react';
import $ from 'jquery';

const Boardofdirector = ({imgObject}) => {
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
                            <h2 className="title text-white">Board of Directors</h2>
                            <ol className="breadcrumb text-left text-black mt-10">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About us</a></li>
                                <li className="active text-gray-silver">Board of Directors</li>
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
                                    <div class="col-md-4 col-sm-12 nopading">
                                        <div class="research_teambios-right">
                                            <div class="img-box">
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
                                                <h5 className="text-uppercase text-left">Mr. Abul Kalam Azad</h5>
                                                <p className="text-left">Director</p>
                                                <p style={{"text-align":"justify"}}>
                                                Mr. Abul Kalam Azad was born in 1955. After completion of his Bachelor of Science, he joined United Group as one of the Directors. Presently, he is the Vice-Chairman of United Group and one of the Directors of United Securities Limited. Best known for his dynamism, he is a key entrepreneur of the Group especially in real estate sector. His dedication and relentless efforts to the business is playing a pivotal role that has also helped United Group reach new heights.
                                                </p>
                                                <p style={{"text-align":"justify"}}>
                                                Over the years in United Group, Mr. Azad has been overseeing diverse construction projects of the group starting from real-estate to power plant construction. Under his leadership United Group is developing “United City”, the largest mini township in the country – at Satarkul and the largest international standard commercial complex with two international hotels and resorts adjacent to Hazrat Shahjalal International Airport, Dhaka. At present, he is the Managing Director of almost all real estate enterprises of the Group, notably Neptune Land Development Ltd., United City Twin Towers Developers Ltd., Neptune Commercial Ltd. etc. He is also the Managing Director of United Land Port Teknaf Ltd., one of the pioneering ‘Build, Operate and Transfer” (BOT) project of the Government. He is also the Director of Khulna Power Company Limited (KPCL), United Hospital Ltd. and many more concerns of the Group. He is one of the members of the Board of Trustees of United International University.
                                                </p>
                                                <p style={{"text-align":"justify"}}>
                                                He is well known for his benevolence in the Group, he is one of the Trustees of United Trust, an organ of United Group responsible for Corporate Social Responsibility (CSR). He is a widely travelled man and engaged in many social and charitable works at his village home in Bikrampur.
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
                                                <h5 className="text-uppercase text-right">Mr. Ahmed Ismail Hossain</h5>
                                                <p className="text-right">Director</p>
                                                <p style={{"text-align":"justify"}}>
                                                Mr. Ahmed Ismail Hossain, one of the Directors of United Securities Limited, was born in June 1956 and hailed from Kishoreganj district. After schooling from Faujderhat Cadet College, he completed his Honours and Master’s degrees in International Relations from Dhaka University. He is one of the architects of the company we know as United Group today.
                                                </p>
                                                <p style={{"text-align":"justify"}}>
                                                He undertook the responsibility as the Managing Director of United Enterprises & Co. Ltd., the parent Company of United Group for many years, demonstrated his entrepreneurial skills, and used his experience to establish many corporate bodies of the Group notably in textile and pharmaceutical sectors. He is the Vice-Chairman of United Hospital Ltd and Managing Director of Comilla Spinning Mill Ltd., performing diverse responsibilities of the Group as and when required. He is also one of the Directors on the Board of Khulna Power Company Ltd. He is also a member of the Board of Trustees of United International University.
                                                </p>
                                                <p style={{"text-align":"justify"}}>
                                                Being one of the Trustees of the United Trust, the CSR wing of the Group, he enthusiastically undertakes social works in his village in Kishoregonj district. Mr. Ismail is a widely travelled man and has visited many parts of the world for the purpose of business.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-12 nopading">
                                        <div class="research_teambios-right">
                                            <div class="img-box">
                                                <img src={imgObject.aih} alt=""/>                                            
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
                                                <img src={imgObject.kma} alt=""/>                                            
                                            </div>
                                        </div> 
                                    </div>                                    
                                    <div className="col-md-8 col-sm-12 nopading">
                                        <div className="research_teambios-right">
                                            <div className="textcontent">
                                                <h5 className="text-uppercase text-left">Mr. Khondokar Moinul Ashan Shamim</h5>
                                                <p className="text-left">Director</p>
                                                <p style={{"text-align":"justify"}}>
                                                Mr. Khandaker Moinul Ahsan Shamim, is one of the Directors of United Securities Limited. After completion of his Bachelor of Commerce, he joined the business together with a few like-minded friends. With his diligence and exceptional entrepreneurial skills, he played important roles in establishing firm footing and quick expansion of business of the Group. At one time he also undertook the responsibility of United Group in the capacity of the Managing Director, displaying his entrepreneurial skill and business experience, in order to sustain growth of business of United Group.
                                                </p>
                                                <p style={{"text-align":"justify"}}>
                                                At present, he is one of the Directors of all the corporate entities of United Group, notably United Enterprises & Co. Ltd., United Power Generation and Distribution Company Ltd., United Hospital Limited, Khulna Power Company Ltd., etc. He oversees the overall financial management of the Group on behalf of the Board of Directors. Besides this, he is also a member, Board of Trustees of United International University.
                                                </p>
                                                <p style={{"text-align":"justify"}}>
                                                He plays key role in the social development sector of his home district. Being one of the active Trustees of the United Trust, a CSR organization of the Group, he generously patronizes education sector in his home village and surrounding areas.
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
                                                <h5 className="text-uppercase text-right">Mr. Faridur Rahman</h5>
                                                <p className="text-right">Director</p>
                                                <p style={{"text-align":"justify"}}>
                                                Mr. Faridur Rahman Khan, one of the Directors of United Securities Limited, born in 1955 and hails from Louhojang, Munshiganj. After completion of his Bachelor degree in Science, he engaged himself in Business. He is, at the moment, the Managing Director of one of the most vibrant concerns of the Group: United Hospital Ltd. Under his entrepreneurship and foresight, United Hospital developed its Medicare system at par with any international standard hospitals. Now, it has become a health care asset of the country. He is the founding Chairman of United College of Nursing – a wing of United Hospital Ltd and the Vice-Chairman of the Board of Trustees, United International University.
                                                </p>
                                                <p style={{"text-align":"justify"}}>
                                                He is one of the Directors of United Ashuganj Power Ltd (UAPL), United Ashuganj Energy Ltd (UAEL) and also Khulna Power Company Ltd (KPCL). He started his career in shipping and went on to lead one of the most reputed construction companies of the country, Neptune Commercial Limited. Under his dynamic leadership the country saw the implementation of its first Independent Power Plant, Khulna Power Company Limited and the first Commercial IPP, UPGDCL. He was also responsible for the successful completion of several coastal embankment projects, namely Chandpur, Ekhlaspur, Patenga and Anwara to name a few.
                                                </p>
                                                <p style={{"text-align":"justify"}}>
                                                Being one of the honored Trustees of the United Trust, the CSR wing of the Group, he spontaneously patronizes and contributes substantially in social activities in his home village and surrounding areas. Notably, he set up and is currently the Chairman of “Younus Khan – Mahmuda Khanam Memorial Complex” in his village home which provides treatment to the local people including Pathology, Radiology and cataract Eye Surgery with nominal fees.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-12 nopading">
                                        <div class="research_teambios-right">
                                            <div class="img-box">
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
                                                <img src={imgObject.mtib} alt=""/>                                            
                                            </div>
                                        </div> 
                                    </div>                                    
                                    <div className="col-md-8 col-sm-12 nopading">
                                        <div className="research_teambios-right">
                                            <div className="textcontent">
                                                <h5 className="text-uppercase text-left">Mr. Malik Talha Ismail Bari</h5>
                                                <p className="text-left">Director</p>
                                                <p style={{"text-align":"justify"}}>
                                                Mr. Malik Talha Ismail is one of the directors of United Securities Limited. Mr. Malik completed his Bachelors in Business Management from King’s College London, UK in 2005 and Masters in Finance from University of New South Wales, Australia in 2007. Prior to joining United Group he has interned at the South Asia Enterprise Development Facility (a sister concern of IMF) in Dhaka and has also worked as a marketing representative at Bank West, New South Wales, Australia.
                                                </p>
                                                <p style={{"text-align":"justify"}}>
                                                Since his introduction to the Group, he has been avidly involved in developing the Group’s construction sector alongside the first generation directors. He is in charge of supervising all the construction projects of the Group, namely IPCO hotels, United City Condominium Complex, United City IT Park among others.  Mr. Malik’s knack for providing creative solutions led to the birth of Unimart Ltd., a state-of-the-art super market with 40,000 sft continuous floor space, located in the heart of Gulshan 2. From the early stages of its inception in 2013, he has led the noteworthy growth of Unimart in the capacity of its Managing Director.
                                                </p>
                                                <p style={{"text-align":"justify"}}>
                                                Mr. Malik is one of the Directors of all the corporate entities under United Group, notably United Enterprises & Co. Ltd., United Power Generation & Distribution Co. Ltd., United Anwara Power Ltd., IPCO Developments Ltd., United Hospital Ltd., United Property Solution Ltd. etc. In addition to this, he is also a member of the Board of Trustees of United International University and an active member of Trustees of United Trust, a CSR organization of the Group. Throughout his professional career, he has travelled to a number of countries namely USA, UK, Australia, Canada, Singapore, France, Netherlands for business purposes.
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
                                                <h5 className="text-uppercase text-right">Mr. Nasiruddin Akhter Rashid</h5>
                                                <p className="text-right">Director</p>
                                                <p style={{"text-align":"justify"}}>
                                                Mr. Nasiruddin Akhter Rashid, one of the Directors of United Securities Limited, born in 1983, began his professional career at United Group as an Executive at United Hospital Ltd. back in 2006. He completed his basic studies in combination of home and abroad: British Council, Dhaka, Sunway College, Malaysia and a Degree in Commerce from Monash University, Melbourne, Australia.
                                                </p>
                                                <p style={{"text-align":"justify"}}>
                                                He joined the United Enterprises & Co. Ltd. in 2008 as a Management Trainee and was thereafter appointed as its Associate Director in 2009.  As a young entrepreuner, Mr. Nasir was deeply involved with business affairs of the Group and his keen sense of professionalism led to his appointment as the Director of United Group in 2013. He currently oversees the administration unit and the land division of the Group. He is also involved in overseeing the day to day operation of the Singapore Trading arm of the Group, United Energy Trading Pte. Ltd., United Land Port Teknaf Ltd., and United Shipping & Logistics Services Ltd. Mr. Nasir is also heading the construction of the Tank Terminal project at Anwara, Chittagong under Soya Products Bangladesh Ltd.
                                                </p>
                                                <p style={{"text-align":"justify"}}>
                                                Mr. Nasir is one of the Directors of all the corporate entities under United Group, notably United Enterprises & Co. Ltd., United Power Generation & Distribution Co. Ltd., United Anwara Power Ltd., United Hospital Ltd., Neptune Land Developement Ltd., United Shipping & Logistics Services Ltd. etc. In addition to this, he is also a member of the Board of Trustees of United International University and an active member of Trustees of United Trust, a CSR organization of the Group. Throughout his professional career, he has travelled to a number of countries namely USA, Australia, Singapore, India for business purposes.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-12 nopading">
                                        <div class="research_teambios-right">
                                            <div class="img-box">
                                                <img src={imgObject.nar} alt=""/>                                            
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
                                    <div class="col-md-4 col-sm-12 nopading">
                                        <div class="research_teambios-right">
                                            <div class="img-box">
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
                                    <div class="col-md-4 col-sm-12 nopading">
                                        <div class="research_teambios-right">
                                            <div class="img-box">
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

export default Boardofdirector
