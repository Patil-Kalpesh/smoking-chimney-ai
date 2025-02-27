"use client"
import React from 'react'
import Image from 'next/image'
import services from '@/data/services.json'
import { IntegrityCard } from '../IntegrityCard'
import Contact from '../ContactForm/Contact'
// import { motion} from "framer-motion";
// import TextReveal from '../ui/TextReveal'
import TextRevealHighlight from '../ui/TextRevealHighlight'

function Index() {

    //Text Revel Color changing effect  ---shubhamdev
    const text = "We're more than just a leading creative and Interactive Solutions studio";
    const words = text.split(" ");
  

     // Variants for each word
     const wordVariants = {
      hidden: { color: "rgba(0, 0, 0, 0.2)" }, 
      visible: {
        color: [
          "rgba(0, 0, 0, 0.2)", 
          "rgb(237, 86, 40)", 
          "rgba(0, 0, 0, 1)", 
        ],
        transition: {
          duration: 0.6, // Total duration for all word's animation
          
        },
      },
    };
  
    // Container to stagger children animations
    const containerVariants = {
      hidden: { color: "rgba(0, 0, 0, 0.2)" },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.090, // Delay between each word animation
        },
      },
    };
    

    

  return (
    <div className='container mx-auto w-full'>
      {/*----- Section-1 ----- */}
    <div className=' h-[600px] flex items-center justify-center bg-no-repeat bg-contain banner-bg-img'>
      <div className='mx-auto max-w-7xl'>
        <div className='px-[20px]'>
            <h1 className='font-sofia font-medium text-center text-[60px] lg:text-[72px] text-[#212529] leading-[85.21px] lg:pt-[0px] pb-2 tracking-[-1.21px]'>Your imagination, <span className='text-[#ED5729]'>Amplified</span>. Digitally.</h1>
            <div className="singleLine"><p className='font-sofia font-light  text-[#ED5729] text-[26px]  text-center'>We solve real-world problems efficiently</p></div>
            <div className='text-center mt-5 lg:mt-6'>
                <button className='btn-lightup'>Get Amplified!!</button>
            </div>
        </div>
      </div>
    </div>
    {/* ---Value Section-2 ------ */}
    <div className='mx-auto px-8 lg:px-20 py-16 lg:py-20 bg-[#EEF3ED]'>
        <div className='text-center'>
            <p className='text-lg lg:text-xl'>We&apos;re passionate creators of immersive digital content</p>
            {/* <h2 className={`lg:text-[48px] text-[36px] font-medium lg:leading-[64px] transition-colors duration-500`}>We&apos;re more than just a <span className='text-[#ED5729]'>leading creative</span> and <span className='text-[#ED5729]'>Interactive Solutions studio</span> </h2> */}
            {/*- Text Reveal Effect ---*/}
            {/* <motion.h2
                className={`lg:text-[48px] text-[36px] font-medium lg:leading-[64px] transition-colors duration-400 }`}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ margin: "-100px 0px -300px 0px" }}
                onViewportEnter={() => console.log("Entered viewport range")}
                onViewportLeave={() => console.log("Left viewport range")}
                >
                {words.map((word, index) => (
                    <motion.span
                    key={index}
                    variants={wordVariants}
                    style={{ display: "inline-block", margin: "0 5px" }}
                    >
                    {word}
                    </motion.span>
                ))}
            </motion.h2> */}
            <TextRevealHighlight
              text="We're more than just a leading creative and Interactive Solutions studio "
              highlightWords={["Interactive", "Solutions"]} // Words to highlight
              className="text-primary"
              wordAnimationDuration={0.6}
              wordStaggerDelay={0.1}
              viewportMargin="-50px 0px -100px 0px"
            />
        </div>
        <div className='lg:grid lg:grid-cols-5 gap-3 gap-y-3 lg:content-start h-100 lg:pt-[60px] pt-[25px]'>
            <div className='text-center card col-span-2 flex items-center  pb-9 lg:pb-6'>
                <p className='text-xl lg:text-2xl'>Easily shift from ideas to finished product to increase productivity.    </p>
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
    {/* ----Service Section-3 ------ */}
    <section >
        <div className=' mx-auto  px-8 lg:px-10 py-[60px] '>
            <div className='pb-12 lg:pb-12 lg:px-28'>
              <p className='text-center text-lg lg:text-xl pb-3'>Enhance the lives of millions of people</p>
              {/* <h2 className="text-center text-3xl lg:text-[48px] leading-snug  font-medium"> <span className='text-[#ED5729]'> We are eager </span> to contribute in revolutionary projects</h2> */}
              {/* <h2 ref={ref} className={`text-center text-3xl lg:text-5xl font-medium transition-colors duration-500 ${inView ? 'text-[#ED5729]' : 'text-[#212529]' }`} >
              We are eager to contribute in revolutionary projects
              </h2> */}
              <TextRevealHighlight
              text="We are eager to contribute in revolutionary projects"
              highlightWords={["We", "are", "eager"]} // Words to highlight
              className="text-primary text-center"
              wordAnimationDuration={0.6}
              wordStaggerDelay={0.1}
              viewportMargin="-50px 0px -100px 0px"
            />
              
            </div>
            {/* ------------ */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 gap-y-10 lg:gap-y-6 relative">
                {services.map((service, index) => {
                  // Determine if the card is in the center position of the grid
                  const isCenterCard = (index % 3 === 1); // Middle card in a 3-column layout

                  return (
                    <div
                      key={index}
                      className={`card-item lg:p-4   
                                  ${index >= 3 ? '' : ' '} relative`}
                    >
                      {/* Pseudo-elements for borders (left and right borders only for the center card) */}
                      {isCenterCard && (
                        <>
                        {/* Only apply borders on large screens and above */}
                        <div className="absolute inset-0 lg:before:content-[''] lg:after:content-[''] 
                                        lg:before:absolute lg:after:absolute lg:before:w-[2px] lg:after:w-[2px] 
                                        lg:before:bg-gray-300 lg:after:bg-gray-300 
                                        lg:before:left-[-6px] lg:after:right-1 
                                        lg:before:top-14 lg:after:top-14 lg:before:h-48 lg:after:h-48">
                        </div>
                      </>
                      )}
                      <div className="h-[48px] w-[48px]">
                        <Image src={service.icon} width={48} height={48} alt="icon" />
                      </div>
                      <h3 className="text-[26px] py-2 leading-8">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-700">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
            </div>
            {/* ------------ */}
        </div>
    </section>

    {/* ------Whoweare Section-4 ------*/}
    <div className=' mx-auto h-100 w-full  px-8 lg:px-[20px] py-[60px] bg-[#EEF3ED]'>
        <div className='text-center'>
            <p className='lg:text-xl text-lg lg:pb-0 pb-3'>We&apos;re high on innovation, sustainability, and keeping things simple.</p>
            <div className='lg:py-6'>
                <h2 className='lg:text-[48px] text-[36px] font-medium leading-snug  lg:leading-[64px] lg:pb-0 pb-3'>Our solutions aren&apos;t just for today; they&apos;re ready  for whatever the future throws at you.</h2>
            </div>
            <p className='text-[14px]'>Our AI buddies are close friends to <span className='text-[#ED5729]'>creative thinkers</span>, <span className='text-[#ED5729]'>tech experts</span>, and <span className='text-[#ED5729]'>strategists</span> who love to go on</p>
            <p className='text-[14px]'>adventures whatever problem it may take. Whether you&apos;re a underdog or a colossal organization, we&apos;ve</p>
            <p className='text-[14px]'>got you covered. We&apos;re the missing piece that makes everything fit perfectly like your trusty sidekick</p>
        </div>
    </div>
    {/* ------Valuessecond Section-5 ----------- */}
    <div id="scroll-div" className='container mx-auto w-full px-[20px] py-[60px]'>
        <div className='text-center'>
          <p className='lg:text-xl text-lg font-normal '>We see the world through every possible way</p>
          <h2 className='lg:text-[48px] text-[36px] font-medium lg:leading-[64px]'>Unique and badass Projects,</h2>
          <h2 className='lg:text-[48px] text-[36px] font-medium lg:leading-[64px]'>powered by the latest AI tech.</h2>
        </div>
        {/* Flex container for horizontal scroll */}
        <div className='card-container flex gap-6 gap-y-3 w-full h-full lg:pt-[60px] pt-[30px] mb-10 overflow-hidden'>
          {/* Individual Cards */}
          <IntegrityCard/>
        </div>

        <div className='text-center pt-2'>
          <button className='btn-lightup'>Let&apos;s light it up together! </button>
        </div>
    </div>
    {/* -------Otherservices Section-6 --------- */}
    <section >
        <div className='container mx-auto px-8 lg:px-10 py-[60px] '>
            <p className='text-center text-[26px]'>Enhance the lives of millions of people</p>
            <h2 className="text-center lg:text-[48px] lg:py-[10px] leading-normal font-medium"> <span className='text-[#ED5729]'> We are eager </span> to contribute in <br /><span className='text-[#ED5729]'>revolutionary projects</span> </h2>
            {/* <h2 ref={ref} className={`text-center lg:text-[48px] lg:py-[10px] leading-normal font-medium  ${inView ? 'text-[#ED5729]' : 'text-[#212529]' }`}> <span className='text-[#ED5729]'> We are eager </span> to contribute in <br /><span className='text-[#ED5729]'>revolutionary projects</span> </h2> */}
            <div className='pt-[38px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-14'>
                <div className="card-item lg:p-4 ">
                    <div className='h-[48px] w-[48px] '><Image src="/images/Icon-l-1.svg" width={48} height={48} alt="icon2" /></div>
                    <h3 className='text-[26px] py-2 border-b-[1px] border-black'>AI </h3>
                    <ul className='pt-2 text-lg font-normal list-disc list-inside '>
                        <li>AI and Automation</li>
                        <li>Chat Bot Development</li>
                        <li>Fintech</li>
                    </ul>
                </div>
                <div className="card-item lg:p-4 ">
                    <div className='h-[48px] w-[48px] '><Image src="/images/Icon-l-2.svg"  width={48} height={48} alt="icon2" /></div>
                    <h3 className='text-[26px] py-2 border-b-[1px] border-black'>Development </h3>
                    <ul className='pt-2  text-lg font-normal list-disc list-inside '>
                        <li>Mobile App Development</li>
                        <li>Website Development</li>
                        <li>E-commerce Development</li>
                        <li>Game Development</li>
                    </ul>
                </div>
                <div className="card-item lg:p-4 ">
                    <div className='h-[48px] w-[48px] '><Image src="/images/Icon-l-3.svg" width={48} height={48} alt="icon2" /></div>
                    <h3 className='text-[26px] py-2 border-b-[1px] border-black'>Tech </h3>
                    <ul className='pt-2  text-lg font-normal list-disc list-inside '>
                        <li>ERP Software</li>
                        <li>CRM Software</li>
                        <li>XR Development </li>
                        <li>CMS Development</li>
                    </ul>
                </div>
                <div className="card-item lg:p-4 ">
                    <div className='h-[48px] w-[48px] '><Image src="/images/Icon-l-4.svg" width={48} height={48} alt="icon2" /></div>
                    <h3 className='text-[26px] py-2 border-b-[1px] border-black'>IT </h3>
                    <ul className='pt-2  text-lg font-normal list-disc list-inside '>
                        <li>Healthcare IT</li>
                        <li>iOT Development </li>
                        <li>WordPress Website Development </li>
                    </ul>
                </div>
                <div className="card-item lg:p-4 ">
                    <div className='h-[48px] w-[48px] '><Image src="/images/Icon-l-5.svg" width={48} height={48} alt="icon2" /></div>
                    <h3 className='text-[26px] py-2 border-b-[1px] border-black'>Design Solution </h3>
                    <ul className='pt-2  text-lg font-normal list-disc list-inside '>
                        <li>Digital Transformation</li>
                        <li>Software Development</li>
                        <li>User Experience </li>
                        <li>Product Design</li>
                    </ul>
                </div>
                <div className="card-item lg:p-4 ">
                    <div className='h-[48px] w-[48px] '><Image src="/images/Icon-l-6.svg" width={48} height={48} alt="icon2" /></div>
                    <h3 className='text-[26px] py-2 border-b-[1px] border-black'>Testing </h3>
                    <ul className='pt-2  text-lg font-normal list-disc list-inside '>
                        <li>DevOps</li>
                        <li>QA & Testing Services </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
     {/* ------- Technicalstack Section-7 --------*/}
    <section >
      <div className='container mx-auto px-8 lg:px-10 py-[60px] '>
          <p className='text-center text-[26px]'>Build & run modern, AI-powered experiences , Designed to support <br /> you throughout your app development journey.</p>
          <h2 className="text-center lg:text-[48px] lg:py-[10px] leading-normal font-medium"> <span className='text-[#ED5729]'>Get to market quickly </span> and securely with <br />products that can<span className='text-[#ED5729]'>scale globally</span> </h2>
          <div className='pt-[38px] pb-[25px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 gap-y-14'>
              <div className="card-item lg:p-4 ">
                  <div className='flex justify-between border-b-[1px] border-black py-2'>
                    <h3 className='text-lg font-normal'>AI Applications </h3>
                    <span><button className='explore-btn'>Explore More</button></span>
                  </div>
                  <ul className='pt-2 flex gap-5'>
                  <li><div className='h-[40px] w-[40px]'><Image src="./images/t-Icon.svg" width={40} height={40} alt="t-icon" /></div></li>
                      <li><div className='h-[40px] w-[40px]'><Image src="./images/t-Icon.svg" width={40} height={40} alt="t-icon" /></div></li>
                      <li><div className='h-[40px] w-[40px]'><Image src="./images/t-Icon.svg" width={40} height={40} alt="t-icon" /></div></li>
                     
                  </ul>
              </div>
              <div className="card-item lg:p-4 ">
                  <div className='flex justify-between border-b-[1px] border-black py-2'>
                    <h3 className='text-lg font-normal'>Mobile Applications </h3>
                    <span><button className='explore-btn'>Explore More</button></span>
                  </div>
                  <ul className='pt-2 flex gap-5'> 
                  <li><div className='h-[40px] w-[40px]'><Image src="./images/t-Icon.svg" width={40} height={40} alt="t-icon" /></div></li>
                      <li><div className='h-[40px] w-[40px]'><Image src="./images/t-Icon.svg" width={40} height={40} alt="t-icon" /></div></li>
                      <li><div className='h-[40px] w-[40px]'><Image src="./images/t-Icon.svg" width={40} height={40} alt="t-icon" /></div></li>
                  </ul>
              </div>
              <div className="card-item lg:p-4 ">
                  <div className='flex justify-between border-b-[1px] border-black py-2'>
                    <h3 className='text-lg font-normal'>Web Applications </h3>
                    <span><button className='explore-btn'>Explore More</button></span>
                  </div>
                  <ul className='pt-2 flex gap-5'>
                  <li><div className='h-[40px] w-[40px]'><Image src="./images/t-Icon.svg" width={40} height={40} alt="t-icon" /></div></li>
                      <li><div className='h-[40px] w-[40px]'><Image src="./images/t-Icon.svg" width={40} height={40} alt="t-icon" /></div></li>
                      <li><div className='h-[40px] w-[40px]'><Image src="./images/t-Icon.svg" width={40} height={40} alt="t-icon" /></div></li>
                  </ul>
              </div>
              <div className="card-item lg:p-4 ">
                  <div className='flex justify-between border-b-[1px] border-black py-2'>
                    <h3 className='text-lg font-normal'>E-commerce Applications </h3>
                    <span><button className='explore-btn'>Explore More</button></span>
                  </div>
                  <ul className='pt-2 flex gap-5'>
                  <li><div className='h-[40px] w-[40px]'><Image src="./images/t-Icon.svg" width={40} height={40} alt="t-icon" /></div></li>
                      <li><div className='h-[40px] w-[40px]'><Image src="./images/t-Icon.svg" width={40} height={40} alt="t-icon" /></div></li>
                      <li><div className='h-[40px] w-[40px]'><Image src="./images/t-Icon.svg" width={40} height={40} alt="t-icon" /></div></li>
                  </ul>
              </div>
             
          </div>
      </div>
    </section>
    {/* -------- CTA Section-8 --------- */}
    <div className=' mx-auto h-100 w-full bg-[#ED5729] '>
      <div className='banner-bg-img-2'>
            <div className='text-center px-[20px] py-[80px]'>
                <p className='text-xl lg:text-2xl font-normal'>We just see and do what others don&apos;t.</p>
                <div className='lg:py-3'>
                    <h2 className='lg:text-[48px] text-[36px] font-medium lg:leading-[64px] text-white'>We&apos;re dedicated to innovation and   </h2>
                    <h2 className='lg:text-[48px] text-[36px] font-medium lg:leading-[64px] text-white'>exceeding expectations</h2>
                </div>
                <div className='text-center pt-4'>
                    <button className=' white-btn'>Let&apos;s light it up together!</button>
                 </div>
            </div>
        </div>
    </div>
    {/* ------- Ethics Section-9 -------- */}
    <section className='bg-[#EEF3ED]'>
      <div className='container mx-auto px-8 lg:px-[20px] py-[60px] '>
          <p className='text-center text-[26px]'>Positive impact while adhering to ethical standards</p>
          <h2 className="text-center lg:text-[48px] lg:py-[10px] leading-normal font-medium"> Solutions That Matter, <span className='text-[#ED5729]'> Simplified. </span> </h2>
          <div className='pt-[38px] lg:px-[80px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-10'>
              <div className="card-item lg:p-4 ">
                  <div className='h-[48px] w-[48px] '><Image src="/images/Traced-icon-1.svg" width={48} height={48} alt="Traced" /></div>
                  <h3 className='text-lg py-2 border-b-[1px] border-black'>Innovative </h3>
                  <p className='text-[14px] text-[#00000080] pt-2'>We stay ahead of the curve with cutting-edge AI technologies.</p>
              </div>
              <div className="card-item lg:p-4 ">
                  <div className='h-[48px] w-[48px] '><Image src="/images/Traced-icon-2.svg" width={48} height={48} alt="Traced" /></div>
                  <h3 className='text-lg py-2 border-b-[1px] border-black'>Useful </h3>
                  <p className='text-[14px] text-[#00000080] pt-2'>Solutions are designed to solve real-world problem.</p>
              </div>
              <div className="card-item lg:p-4 ">
                  <div className='h-[48px] w-[48px] '><Image src="/images/Traced-icon-3.svg"  width={48} height={48} alt="Traced" /></div>
                  <h3 className='text-lg py-2 border-b-[1px] border-black'>Aesthetic </h3>
                  <p className='text-[14px] text-[#00000080] pt-2'>Stunning Visuals and user-friendly experience.</p>
              </div>
              <div className="card-item lg:p-4 ">
                  <div className='h-[48px] w-[48px] '><Image src="/images/Traced-icon-4.svg" width={48} height={48} alt="Traced" /></div>
                  <h3 className='text-lg py-2 border-b-[1px] border-black'>Honest </h3>
                  <p className='text-[14px] text-[#00000080] pt-2'>Transparent communication and ethical AI practices.</p>
              </div>
              <div className="card-item lg:p-4 ">
                  <div className='h-[48px] w-[48px] '><Image src="/images/Traced-icon-5.svg" width={48} height={48} alt="Traced" /></div>
                  <h3 className='text-lg py-2 border-b-[1px] border-black'>Long-lasting </h3>
                  <p className='text-[14px] text-[#00000080] pt-2'>Built to scale and evolve with your business.</p>
              </div>
              <div className="card-item lg:p-4 ">
                  <div className='h-[48px] w-[48px] '><Image src="/images/Traced-icon-6.svg" width={48} height={48} alt="Traced" /></div>
                  <h3 className='text-[16px] py-2 border-b-[1px] border-black'>Thorough </h3>
                  <p className='text-[14px] text-[#00000080] pt-2'>Assessments and analysis along with best AI strategies.</p>
              </div>
              <div className="card-item lg:p-4 ">
                  <div className='h-[48px] w-[48px] '><Image src="/images/Traced-icon-4.svg" width={48} height={48} alt="Traced" /></div>
                  <h3 className='text-lg py-2 border-b-[1px] border-black'>Understandable </h3>
                  <p className='text-[14px] text-[#00000080] pt-2'>Break down complex AI concepts into simple terms.</p>
              </div>
              <div className="card-item lg:p-4 ">
                  <div className='h-[48px] w-[48px] '><Image src="/images/Traced-icon-8.svg" width={48} height={48} alt="Traced" /></div>
                  <h3 className='text-lg py-2 border-b-[1px] border-black'>Unobtrusive </h3>
                  <p className='text-[14px] text-[#00000080] pt-2'>Integrate seamlessly into your existing systems.</p>
              </div>
              <div className="card-item lg:p-4 ">
                  <div className='h-[48px] w-[48px] '><Image src="/images/Traced-icon-9.svg" width={48} height={48} alt="Traced" /></div>
                  <h3 className='text-lg py-2 border-b-[1px] border-black'>Environmentally friendly </h3>
                  <p className='text-[14px] text-[#00000080] pt-2'>Environment Friendly & sustainable in every AI solutions.</p>
              </div>
              <div className="card-item lg:p-4 ">
                  <div className='h-[48px] w-[48px] '><Image src="/images/Traced-icon-10.svg" width={48} height={48} alt="Traced" /></div>
                  <h3 className='text-lg py-2 border-b-[1px] border-black'>Little design </h3>
                  <p className='text-[14px] text-[#00000080] pt-2'>Functionality and clarity, with minimal distractions.</p>
              </div>
             
          </div>
      </div>
    </section>
    {/* -------- Contact Section-10 ------- */}
    <div className=" mx-auto px-8 lg:px-10 py-[60px]">
          <h2 className=" lg:text-[48px] lg:py-[10px] leading-normal font-medium">Talk with our decision makers</h2>
          <p className="text-[22px]">The team AI-powered wonder elevates mundane tasks into the astounding. </p>
          <p className="text-[22px] pt-[20px]">Whether Hollywood-worthy stories to profound user experiences, we&apos;re the <br />first place to look for unprecedented changes in the digital realm.</p>
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
              <div className="card-item lg:p-4 px-1 ">
                 <Contact/>
              </div>
          </div>
    </div>
    {/* ------------- */}
</div>
  )
}

export default Index