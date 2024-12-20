"use client"
import React from 'react'
import Image from 'next/image'


function page() {
  return (
    <div className='container mx-auto w-full'>
    <div className="pt-4 h-[650px] flex items-center justify-center bg-cover bg-center bg-[url('/images/Artboard-1.svg')]">
      <div className='mx-auto max-w-6xl'>
        <div className='px-[20px]'>
            <h1 className='font-sofia font-medium text-center text-[60px] lg:text-[72px] text-[#212529] leading-[75.21px] lg:pt-[0px] pb-2 tracking-[-1.21px]'>Your imagination, <span className='text-[#ED5729]'>Amplified</span>. Digitally.</h1>
            <div className="singleLine"><p className='font-sofia font-light  text-[#ED5729] text-[26px] py-5 text-center'>We solve real-world problems efficiently</p></div>
            <div className='text-center '>
                <button className='btn-lightup'>Get Amplified!!!</button>
            </div>
        </div>
      </div>
    </div>
    {/* ---Value Section-1 ------ */}
    <div className='mx-auto   px-[20px] py-[60px] bg-[#EEF3ED]'>
    <div className='text-center'>
        <p className='lg:text-[26px]'>We’re passionate creators of immersive digital content</p>
        <h2 className='lg:text-[48px] text-[36px] font-medium lg:leading-[64px]'>We’re more than just a <span className='text-[#ED5729]'>leading creative</span> </h2>
        <h2 className='lg:text-[48px] text-[36px] font-medium lg:leading-[64px]'>and <span className='text-[#ED5729]'>Interactive Solutions studio</span></h2>
    </div>
    <div className='lg:grid lg:grid-cols-5 gap-3 gap-y-3 lg:content-start h-100 lg:pt-[60px] pt-[30px]'>
        <div className='card col-span-2 flex items-center px-[30px] pb-[40px]'>
            <p className='text-[26px]'>Easily shift from ideas to finished <br />product to increase productivity.    </p>
        </div>
        <div className="card pb-[20px]">
            <div className='h-[48px] w-[48px] '><Image src="/images/Icon-1.svg" width={48} height={48} alt="icon1" /></div>
            <p className='font-medium lg:py-2 py-1'>Curious</p>
            <p className='text-[#00000080]'>Seeking progress. <br /> Driven by wonder</p>
        </div>
        <div className="card pb-[20px]">
            <div className='h-[48px] w-[48px] '><Image src="/images/Icon-2.svg" width={48} height={48} alt="icon2" /></div>
            <p className='font-medium lg:py-2 py-1'>Value Centric</p>
            <p className='text-[#00000080]'>Invest in an interaction <br />unless it provides value</p>
        </div>
        <div className="card pb-[20px]">
            <div className='h-[48px] w-[48px]'><Image src="/images/Icon-3.svg" width={48} height={48} alt="icon3" /></div>
            <p className='font-medium lg:py-2 py-1'>Aesthetic</p>
            <p className='text-[#00000080]'>Meticulous attention. <br />Endless pursuit of perfection.</p>
        </div>
    </div>
    </div>
    {/* ----Service Section-2 ------ */}
    <section >
        <div className=' mx-auto px-[20px] py-[60px] '>
            <p className='text-center text-[26px]'>Enhance the lives of millions of people</p>
            <h2 className="text-center lg:text-[48px] lg:py-[10px] leading-normal font-medium"> <span className='text-[#ED5729]'> We are eager </span> to contribute in <br /> revolutionary projects</h2>
            <div className='pt-[38px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-14'>
                <div className="card-item lg:p-4 lg:border-e-2">
                    <div className='h-[48px] w-[48px]'><Image src="/images/Icon-o-1.svg" width={48} height={48} alt="icon" /></div>
                    <h3 className='text-[26px] py-2'>AI Consulting and Strategy</h3>
                    <p className='font-normal text-[14px]'>Unlock the power of artificial intelligence with expert guidance tailored to your business needs.</p>
                    <ul className='pt-2 font-medium list-disc list-inside '>
                        <li>Image Recognition</li>
                        <li>Object Detection</li>
                        <li>Facial Recognition</li>
                    </ul>
                </div>
                <div className="card-item lg:p-4 lg:border-e-2">
                    <div className='h-[48px] w-[48px] '><Image src="/images/Icon-o-2.svg" width={48} height={48} alt="icon" /></div>
                    <h3 className='text-[26px] py-2'>AI Development and Integration</h3>
                    <p className='font-normal text-[14px]'>Empower your business with cutting-edge, AI-powered solutions built to deliver results.</p>
                    <ul className='pt-2 font-medium list-disc list-inside '>
                        <li>Custom AI Models</li>
                        <li>Model Training</li>
                        <li>System Integration</li>
                    </ul>
                </div>
                <div className="card-item lg:p-4 ">
                    <div className='h-[48px] w-[48px] '><Image src="/images/Icon-o-3.svg" width={48} height={48} alt="icon" /></div>
                    <h3 className='text-[26px] py-2'>Natural Language Processing</h3>
                    <p className='font-normal text-[14px]'>Unlock the power of artificial intelligence with expert guidance tailored to your business needs.</p>
                    <ul className='pt-2 font-medium list-disc list-inside '>
                        <li>Chatbots & Virtual Assistants</li>
                        <li>Sentiment Analysis</li>
                        <li>Text Summarization</li>
                    </ul>
                </div>
                <div className="card-item lg:p-4 lg:border-e-2">
                    <div className='h-[48px] w-[48px] '><Image src="/images/Icon-o-4.svg" width={48} height={48} alt="icon" /></div>
                    <h3 className='text-[26px] py-2'>Computer Vision</h3>
                    <p className='font-normal text-[14px]'>Transform your business processes with advanced image and video analysis technologies.</p>
                    <ul className='pt-2 font-medium list-disc list-inside '>
                        <li>Image Recognition</li>
                        <li>Object Detection</li>
                        <li>Facial Recognition</li>
                    </ul>
                </div>
                <div className="card-item lg:p-4 lg:border-e-2">
                    <div className='h-[48px] w-[48px] '><Image src="/images/Icon-o-5.svg"width={48} height={48}  alt="icon" /></div>
                    <h3 className='text-[26px] py-2'>Predictive Analytics</h3>
                    <p className='font-normal text-[14px]'>Stay ahead of the competition with data-driven insights that forecast trends and outcomes.</p>
                    <ul className='pt-2 font-medium list-disc list-inside '>
                        <li>Forecasting</li>
                        <li>Recommendation Systems</li>
                        <li>Risk Assessment</li>
                    </ul>
                </div>
                <div className="card-item lg:p-4 ">
                    <div className='h-[48px] w-[48px]'><Image src="/images/Icon-o-6.svg" width={48} height={48} alt="icon" /></div>
                    <h3 className='text-[26px] py-2'>AI-Powered Automation</h3>
                    <p className='font-normal text-[14px]'>Unlock the power of artificial intelligence with expert guidance tailored to your business needs.</p>
                    <ul className='pt-2 font-medium list-disc list-inside '>
                        <li>Process Automation</li>
                        <li>Decision Automation</li>
                        <li>Robotic Process Automation</li>
                    </ul>
                </div>
                <div className="card-item lg:p-4 lg:border-e-2">
                    <div className='h-[48px] w-[48px] '><Image src="/images/Icon-o-7.svg" width={48} height={48} alt="icon" /></div>
                    <h3 className='text-[26px] py-2'>Front-end Technology</h3>
                    <p className='font-normal text-[14px]'>Turn your product into a visually stunning, user-centric experience with our advanced front-end development services.</p>
                    <ul className='pt-2 font-medium list-disc list-inside '>
                        <li>Usability and Design</li>
                        <li>Responsive & Accessibility</li>
                        <li>Code & Creative Optimization</li>
                    </ul>
                </div>
                <div className="card-item lg:p-4 lg:border-e-2">
                    <div className='h-[48px] w-[48px] '><Image src="/images/Icon-o-8.svg" width={48} height={48} alt="icon" /></div>
                    <h3 className='text-[26px] py-2'>Back-end Technology</h3>
                    <p className='font-normal text-[14px]'>Stay ahead of the competition with data-driven insights that forecast trends and outcomes.</p>
                    <ul className='pt-2 font-medium list-disc list-inside '>
                        <li>Scalability and Security</li>
                        <li>Database & API Integration</li>
                        <li>Custom Code</li>
                    </ul>
                </div>
                <div className="card-item lg:p-4 ">
                    <div className='h-[48px] w-[48px] '><Image src="/images/Icon-o-9.svg" width={48} height={48} alt="icon" /></div>
                    <h3 className='text-[26px] py-2'>Performance Optimization</h3>
                    <p className='font-normal text-[14px]'>Keep your website fast, smooth, and efficient for improved user satisfaction and engagement.</p>
                    <ul className='pt-2 font-medium list-disc list-inside '>
                        <li>Load Time Optimization</li>
                        <li>Smooth Navigation</li>
                    </ul>
                </div>
                <div className="card-item lg:p-4 ">
                    <div className='h-[48px] w-[48px] '><Image src="/images/Icon-o-10.svg" width={48} height={48} alt="icon" /></div>
                    <h3 className='text-[26px] py-2'>UI/UX Design Development</h3>
                    <p className='font-normal text-[14px]'>Design experiences that captivate and convert with world-class UI/UX design services.</p>
                    <ul className='pt-2 font-medium list-disc list-inside '>
                        <li>Audit, Strategy & Consultation</li>
                        <li>Research, Testing & Design</li>
                        <li>Design System Development</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    {/* ------Whoweare Section-3 ------*/}
    <div className=' mx-auto h-100 w-full  px-[20px] py-[60px] bg-[#EEF3ED]'>
        <div className='text-center'>
            <p className='lg:text-[26px]'>We&apos;re high on innovation, sustainability, and keeping things simple.</p>
            <div className='lg:py-6'>
                <h2 className='lg:text-[48px] text-[36px] font-medium lg:leading-[64px]'>Our solutions aren&apos;t just for today; they&apos;re ready  </h2>
                <h2 className='lg:text-[48px] text-[36px] font-medium lg:leading-[64px]'>for whatever the future throws at you.</h2>
            </div>
            <p className='text-[14px]'>Our AI buddies are close friends to <span className='text-[#ED5729]'>creative thinkers</span>, <span className='text-[#ED5729]'>tech experts</span>, and <span className='text-[#ED5729]'>strategists</span> who love to go on</p>
            <p className='text-[14px]'>adventures whatever problem it may take. Whether you&apos;re a underdog or a colossal organization, we&apos;ve</p>
            <p className='text-[14px]'>got you covered. We&apos;re the missing piece that makes everything fit perfectly like your trusty sidekick</p>
        </div>
    </div>
    {/* ------Valuessecond Section-4 ----------- */}
    <div id="scroll-div" className='container mx-auto w-full px-[20px] py-[60px]'>
        <div className='text-center'>
          <p className='lg:text-[26px] font-normal '>We see the world through every possible way</p>
          <h2 className='lg:text-[48px] text-[36px] font-medium lg:leading-[64px]'>Unique and badass Projects,</h2>
          <h2 className='lg:text-[48px] text-[36px] font-medium lg:leading-[64px]'>powered by the latest AI tech.</h2>
        </div>

        {/* Flex container for horizontal scroll */}
        <div className='card-container flex gap-6 gap-y-3 w-full h-full lg:pt-[60px] pt-[30px] mb-10 overflow-hidden'>
          {/* Individual Cards */}
          <div className="card p-7 w-[358px] h-[205px] bg-[#ED5729] rounded-lg flex-shrink-0">
            <div className='h-[48px] w-[48px] '>
              <Image src="/images/Icon-1.svg" width={48} height={48} alt="icon" />
            </div>
            <p className='text-[26.72px] font-normal lg:pt-3 pt-1 text-white'>Integrity</p>
            <p className='text-white text-[14px] lg:pt-3 pt-2'>Doing what's right, Always striving!</p>
          </div>

          <div className="card p-7 w-[358px] h-[205px] bg-[#ED57291F] rounded-lg flex-shrink-0">
            <div className='h-[48px] w-[48px] '>
              <Image src="/images/Icon-2.svg" width={48} height={48} alt="icon2" />
            </div>
            <p className='text-[26.72px] font-normal lg:pt-3 pt-1 '>Authenticity </p>
            <p className='text-[14px] lg:pt-3 pt-2'>Truthfulness, honesty, and accuracy.</p>
          </div>

          <div className="card p-7 w-[358px] h-[205px] bg-[#ED57291F] rounded-lg flex-shrink-0">
            <div className='h-[48px] w-[48px] '>
              <Image src="/images/Icon-2.svg" width={48} height={48} alt="icon2" />
            </div>
            <p className='text-[26.72px] font-normal lg:pt-3 pt-1 '>Reliability</p>
            <p className='text-[14px] lg:pt-3 pt-2'>Let us do best for you, Anytime!</p>
          </div>

          <div className="card p-7 w-[358px] h-[205px] bg-[#ED57291F] rounded-lg flex-shrink-0">
            <div className='h-[48px] w-[48px] '>
              <Image src="/images/Icon-2.svg" width={48} height={48} alt="icon2" />
            </div>
            <p className='text-[26.72px] font-normal lg:pt-3 pt-1 '>Integrity</p>
            <p className='text-[14px] lg:pt-3 pt-2'>Doing what's right, Always striving!</p>
          </div>
          <div className="card p-7 w-[358px] h-[205px] bg-[#ED57291F] rounded-lg flex-shrink-0">
            <div className='h-[48px] w-[48px] '>
              <Image src="/images/Icon-2.svg" width={48} height={48} alt="icon2" />
            </div>
            <p className='text-[26.72px] font-normal lg:pt-3 pt-1 '>Integrity</p>
            <p className='text-[14px] lg:pt-3 pt-2'>Doing what's right, Always striving!</p>
          </div>
        </div>

        <div className='text-center pt-5'>
          <button className='btn-lightup'>Let's light it up together! </button>
        </div>
    </div>
    {/* -------Otherservices Section-5 --------- */}
    <section >
        <div className='container mx-auto px-[20px] py-[60px] '>
            <p className='text-center text-[26px]'>Enhance the lives of millions of people</p>
            <h2 className="text-center lg:text-[48px] lg:py-[10px] leading-normal font-medium"> <span className='text-[#ED5729]'> We are eager </span> to contribute in <br /><span className='text-[#ED5729]'>revolutionary projects</span> </h2>
            <div className='pt-[38px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-14'>
                <div className="card-item lg:p-4 ">
                    <div className='h-[48px] w-[48px] '><Image src="/images/Icon-l-1.svg" width={48} height={48} alt="icon2" /></div>
                    <h3 className='text-[26px] py-2 border-b-[1px] border-black'>AI </h3>
                    <ul className='pt-2 font-medium list-disc list-inside '>
                        <li>AI and Automation</li>
                        <li>Chat Bot Development</li>
                        <li>Fintech</li>
                    </ul>
                </div>
                <div className="card-item lg:p-4 ">
                    <div className='h-[48px] w-[48px] '><Image src="/images/Icon-l-2.svg"  width={48} height={48} alt="icon2" /></div>
                    <h3 className='text-[26px] py-2 border-b-[1px] border-black'>Development </h3>
                    <ul className='pt-2 font-medium list-disc list-inside '>
                        <li>Mobile App Development</li>
                        <li>Website Development</li>
                        <li>E-commerce Development</li>
                        <li>Game Development</li>
                    </ul>
                </div>
                <div className="card-item lg:p-4 ">
                    <div className='h-[48px] w-[48px] '><Image src="/images/Icon-l-3.svg" width={48} height={48} alt="icon2" /></div>
                    <h3 className='text-[26px] py-2 border-b-[1px] border-black'>Tech </h3>
                    <ul className='pt-2 font-medium list-disc list-inside '>
                        <li>ERP Software</li>
                        <li>CRM Software</li>
                        <li>XR Development </li>
                        <li>CMS Development</li>
                    </ul>
                </div>
                <div className="card-item lg:p-4 ">
                    <div className='h-[48px] w-[48px] '><Image src="/images/Icon-l-4.svg" width={48} height={48} alt="icon2" /></div>
                    <h3 className='text-[26px] py-2 border-b-[1px] border-black'>IT </h3>
                    <ul className='pt-2 font-medium list-disc list-inside '>
                        <li>Healthcare IT</li>
                        <li>iOT Development </li>
                        <li>WordPress Website Development </li>
                    </ul>
                </div>
                <div className="card-item lg:p-4 ">
                    <div className='h-[48px] w-[48px] '><Image src="/images/Icon-l-5.svg" width={48} height={48} alt="icon2" /></div>
                    <h3 className='text-[26px] py-2 border-b-[1px] border-black'>Design Solution </h3>
                    <ul className='pt-2 font-medium list-disc list-inside '>
                        <li>Digital Transformation</li>
                        <li>Software Development</li>
                        <li>User Experience </li>
                        <li>Product Design</li>
                    </ul>
                </div>
                <div className="card-item lg:p-4 ">
                    <div className='h-[48px] w-[48px] '><Image src="/images/Icon-l-6.svg" width={48} height={48} alt="icon2" /></div>
                    <h3 className='text-[26px] py-2 border-b-[1px] border-black'>Testing </h3>
                    <ul className='pt-2 font-medium list-disc list-inside '>
                        <li>DevOps</li>
                        <li>QA & Testing Services </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
     {/* ------- Technicalstack Section-6 --------*/}
    <section >
      <div className='container mx-auto px-[20px] py-[60px] '>
          <p className='text-center text-[26px]'>Build & run modern, AI-powered experiences , Designed to support <br /> you throughout your app development journey.</p>
          <h2 className="text-center lg:text-[48px] lg:py-[10px] leading-normal font-medium"> <span className='text-[#ED5729]'>Get to market quickly </span> and securely with <br />products that can<span className='text-[#ED5729]'>scale globally</span> </h2>
          <div className='pt-[38px] pb-[25px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 gap-y-14'>
              <div className="card-item lg:p-4 ">
                  <div className='flex justify-between border-b-[1px] border-black py-2'>
                    <h3 className='text-[15px]'>AI Applications </h3>
                    <span><button className='rounded-lg bg-[#FDF3ED] text-[#C9401D] px-8 py-1'>Explore More</button></span>
                  </div>
                  <ul className='pt-2 flex gap-5'>
                      <li><div className='h-[40px] w-[40px] bg-[#FDF3ED]'></div></li>
                      <li><div className='h-[40px] w-[40px] bg-[#FDF3ED]'></div></li>
                      <li><div className='h-[40px] w-[40px] bg-[#FDF3ED]'></div> </li>
                  </ul>
              </div>
              <div className="card-item lg:p-4 ">
                  <div className='flex justify-between border-b-[1px] border-black py-2'>
                    <h3 className='text-[15px]'>Mobile Applications </h3>
                    <span><button className='rounded-lg bg-[#FDF3ED] text-[#C9401D] px-8 py-1'>Explore More</button></span>
                  </div>
                  <ul className='pt-2 flex gap-5'>
                      <li><div className='h-[40px] w-[40px] bg-[#FDF3ED]'></div></li>
                      <li><div className='h-[40px] w-[40px] bg-[#FDF3ED]'></div></li>
                      <li><div className='h-[40px] w-[40px] bg-[#FDF3ED]'></div> </li>
                  </ul>
              </div>
              <div className="card-item lg:p-4 ">
                  <div className='flex justify-between border-b-[1px] border-black py-2'>
                    <h3 className='text-[15px]'>Web Applications </h3>
                    <span><button className='rounded-lg bg-[#FDF3ED] text-[#C9401D] px-8 py-1'>Explore More</button></span>
                  </div>
                  <ul className='pt-2 flex gap-5'>
                      <li><div className='h-[40px] w-[40px] bg-[#FDF3ED]'></div></li>
                      <li><div className='h-[40px] w-[40px] bg-[#FDF3ED]'></div></li>
                      <li><div className='h-[40px] w-[40px] bg-[#FDF3ED]'></div> </li>
                  </ul>
              </div>
              <div className="card-item lg:p-4 ">
                  <div className='flex justify-between border-b-[1px] border-black py-2'>
                    <h3 className='text-[15px]'>E-commerce Applications </h3>
                    <span><button className='rounded-lg bg-[#FDF3ED] text-[#C9401D] px-8 py-1'>Explore More</button></span>
                  </div>
                  <ul className='pt-2 flex gap-5'>
                      <li><div className='h-[40px] w-[40px] bg-[#FDF3ED]'></div></li>
                      <li><div className='h-[40px] w-[40px] bg-[#FDF3ED]'></div></li>
                      <li><div className='h-[40px] w-[40px] bg-[#FDF3ED]'></div> </li>
                  </ul>
              </div>
             
          </div>
      </div>
    </section>
    {/* -------- CTA Section-7 --------- */}
    <div className=' mx-auto h-100 w-full  px-[20px] py-[80px] bg-[#ED5729]'>
            <div className='text-center'>
                <p className='lg:text-[26px] font-light'>We just see and do what others don&apos;t.</p>
                <div className='lg:py-4'>
                    <h2 className='lg:text-[48px] text-[36px] font-medium lg:leading-[64px] text-white'>We&apos;re dedicated to innovation and   </h2>
                    <h2 className='lg:text-[48px] text-[36px] font-medium lg:leading-[64px] text-white'>exceeding expectations</h2>
                </div>
                <div className='text-center pt-4'>
                    <button className=' rounded-lg text-[#ED5729] bg-white px-8 py-1'>Let&apos;s light it up together!</button>
                 </div>
            </div>
    </div>
    {/* ------- Ethics Section-8 -------- */}
    <section className='bg-[#EEF3ED]'>
      <div className='container mx-auto px-[20px] py-[60px] '>
          <p className='text-center text-[26px]'>Positive impact while adhering to ethical standards</p>
          <h2 className="text-center lg:text-[48px] lg:py-[10px] leading-normal font-medium"> Solutions That Matter, <span className='text-[#ED5729]'> Simplified. </span> </h2>
          <div className='pt-[38px] lg:px-[80px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-10'>
              <div className="card-item lg:p-4 ">
                  <div className='h-[48px] w-[48px] '><Image src="/images/Traced-icon-1.svg" width={48} height={48} alt="Traced" /></div>
                  <h3 className='text-[16px] py-2 border-b-[1px] border-black'>Innovative </h3>
                  <p className='text-[14px] text-[#00000080] pt-2'>We stay ahead of the curve with cutting-edge AI technologies.</p>
              </div>
              <div className="card-item lg:p-4 ">
                  <div className='h-[48px] w-[48px] '><Image src="/images/Traced-icon-2.svg" width={48} height={48} alt="Traced" /></div>
                  <h3 className='text-[16px] py-2 border-b-[1px] border-black'>Useful </h3>
                  <p className='text-[14px] text-[#00000080] pt-2'>Solutions are designed to solve real-world problem.</p>
              </div>
              <div className="card-item lg:p-4 ">
                  <div className='h-[48px] w-[48px] '><Image src="/images/Traced-icon-3.svg"  width={48} height={48} alt="Traced" /></div>
                  <h3 className='text-[16px] py-2 border-b-[1px] border-black'>Aesthetic </h3>
                  <p className='text-[14px] text-[#00000080] pt-2'>Stunning Visuals and user-friendly experience.</p>
              </div>
              <div className="card-item lg:p-4 ">
                  <div className='h-[48px] w-[48px] '><Image src="/images/Traced-icon-4.svg" width={48} height={48} alt="Traced" /></div>
                  <h3 className='text-[16px] py-2 border-b-[1px] border-black'>Honest </h3>
                  <p className='text-[14px] text-[#00000080] pt-2'>Transparent communication and ethical AI practices.</p>
              </div>
              <div className="card-item lg:p-4 ">
                  <div className='h-[48px] w-[48px] '><Image src="/images/Traced-icon-5.svg" width={48} height={48} alt="Traced" /></div>
                  <h3 className='text-[16px] py-2 border-b-[1px] border-black'>Long-lasting </h3>
                  <p className='text-[14px] text-[#00000080] pt-2'>Built to scale and evolve with your business.</p>
              </div>
              <div className="card-item lg:p-4 ">
                  <div className='h-[48px] w-[48px] '><Image src="/images/Traced-icon-6.svg" width={48} height={48} alt="Traced" /></div>
                  <h3 className='text-[16px] py-2 border-b-[1px] border-black'>Thorough </h3>
                  <p className='text-[14px] text-[#00000080] pt-2'>Assessments and analysis along with best AI strategies.</p>
              </div>
              <div className="card-item lg:p-4 ">
                  <div className='h-[48px] w-[48px] '><Image src="/images/Traced-icon-4.svg" width={48} height={48} alt="Traced" /></div>
                  <h3 className='text-[16px] py-2 border-b-[1px] border-black'>Understandable </h3>
                  <p className='text-[14px] text-[#00000080] pt-2'>Break down complex AI concepts into simple terms.</p>
              </div>
              <div className="card-item lg:p-4 ">
                  <div className='h-[48px] w-[48px] '><Image src="/images/Traced-icon-8.svg" width={48} height={48} alt="Traced" /></div>
                  <h3 className='text-[16px] py-2 border-b-[1px] border-black'>Unobtrusive </h3>
                  <p className='text-[14px] text-[#00000080] pt-2'>Integrate seamlessly into your existing systems.</p>
              </div>
              <div className="card-item lg:p-4 ">
                  <div className='h-[48px] w-[48px] '><Image src="/images/Traced-icon-9.svg" width={48} height={48} alt="Traced" /></div>
                  <h3 className='text-[16px] py-2 border-b-[1px] border-black'>Environmentally friendly </h3>
                  <p className='text-[14px] text-[#00000080] pt-2'>Environment Friendly & sustainable in every AI solutions.</p>
              </div>
              <div className="card-item lg:p-4 ">
                  <div className='h-[48px] w-[48px] '><Image src="/images/Traced-icon-10.svg" width={48} height={48} alt="Traced" /></div>
                  <h3 className='text-[16px] py-2 border-b-[1px] border-black'>Little design </h3>
                  <p className='text-[14px] text-[#00000080] pt-2'>Functionality and clarity, with minimal distractions.</p>
              </div>
             
          </div>
      </div>
    </section>
    {/* -------- Contact Section-9 ------- */}
    <div className=" mx-auto px-[40px] py-[60px]">
          <h2 className=" lg:text-[48px] lg:py-[10px] leading-normal font-medium">Talk with our decision makers</h2>
          <p className="text-[22px]">The team AI-powered wonder elevates mundane tasks into the astounding. </p>
          <p className="text-[22px] pt-[20px]">Whether Hollywood-worthy stories to profound user experiences, we&apos;re the first place to look for unprecedented changes in the digital realm.</p>
          <div className="pt-[38px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 gap-y-14">
              <div className="card-item lg:p-4 ">
                  <div>
                    <p className="text-[18px] py-2 border-b-[1px] border-black text-[#ED5729]">hi@smokingchimneystudios.com </p>
                    <p className="text-[#00000080]">Professional, accessible, and secure.</p>
                  </div>
                  <div className="pt-[30px]">
                    <p className="text-[18px] py-2 border-b-[1px] border-black text-[#ED5729]">+91 77219 12611 </p>
                    <p className="text-[#00000080]">Dedicated, assist, and quick.</p>
                  </div>
                  <div className="pt-[30px]">
                    <p className="text-[18px] py-2 border-b-[1px] border-black text-[#ED5729]">Punawale, PCMC, Pune - 411033, Maharashtra, India Jablonskistrasse 15, 10405 Berlin San Francisco, U.S.A</p>
                    <p className="text-[#00000080]">As Largest as Life, Conversations and Coffee</p>
                  </div>
              </div>
              <div className="card-item lg:p-4 ">
                  <div>
                  <div className="sm:col-span-4">
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                     Name
                    </label>
                    <div className="mb-2">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">
                     Number
                    </label>
                    <div className="mb-2">
                      <input
                        id="number"
                        name="number"
                        type="number"
                        autoComplete="number"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                      Email address
                    </label>
                    <div className="mb-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label htmlFor="massage" className="block text-sm font-medium leading-6 text-gray-900">
                      Massage
                    </label>
                    <div className="mb-2">
                      <input
                        id="massage"
                        name="massage"
                        type="text"
                        autoComplete="massage"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className=' pt-4'>
                    <button className=' rounded-lg bg-[#ED5729] text-white px-8 py-1'>Let us level up in tandem!</button>
                 </div>
                  </div>
              </div>
          </div>
      </div>
    {/* ------------- */}
</div>
  )
}

export default page