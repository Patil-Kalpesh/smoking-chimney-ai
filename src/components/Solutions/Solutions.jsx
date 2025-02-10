"use client"
import React from 'react'
import Image from 'next/image'
import { IntegrityCard } from '../CommonSection/IntegrityCard'
import Contact from '../ContactUs/ContactForm'
import { motion } from 'framer-motion'
import WhoweareSection from '../CommonSection/WhoweareSection'
import Otherservices from '../CommonSection/Otherservices'
import CTA from '../CommonSection/CTA'

import { slideUp, parentContainerVariants } from "@/lib/variants";
import HighlightText from '../ui/HighlightText'

const services = [
    {
      title: "AI Consulting and Strategy",
      description: "Unlock the power of artificial intelligence with expert guidance tailored to your business needs.",
      features: [
        {
          title: "AI Needs Assessment",
          description: "Identify the key challenges AI can solve, enhancing efficiency and innovation."
        },
        {
          title: "Strategy Development",
          description: "Create a customized AI implementation roadmap for long-term success."
        },
        {
          title: "Technology Selection",
          description: "Choose the right AI tools and platforms to accelerate your business transformation."
        }
      ]
    },
    {
      title: "AI Development and Integration",
      description: "Empower your business with cutting-edge, AI-powered solutions built to deliver results.",
      features: [
        {
          title: "Custom AI Models",
          description: "Tailored AI solutions designed for your specific business use cases."
        },
        {
          title: "Model Training",
          description: "Train AI models with relevant data for superior accuracy and performance."
        },
        {
          title: "System Integration",
          description: "Seamlessly connect AI technologies with existing applications for smooth operations."
        }
      ]
    },
    {
      title: "Natural Language Processing (NLP)",
      description: "Revolutionize customer interactions with intelligent and insightful language-driven solutions.",
      features: [
        {
          title: "Chatbots & Virtual Assistants",
          description: "Deliver engaging and intuitive customer experiences with AI-driven conversational interfaces."
        },
        {
          title: "Sentiment Analysis",
          description: "Understand customer emotions and feedback to make informed decisions."
        },
        {
          title: "Text Summarization",
          description: "Quickly analyze and condense large text data into concise, actionable insights."
        }
      ]
    },
    {
      title: "Computer Vision",
      description: "Transform your business processes with advanced image and video analysis technologies.",
      features: [
        {
          title: "Image Recognition",
          description: "Identify patterns and objects within images to automate workflows and improve accuracy."
        },
        {
          title: "Object Detection",
          description: "Pinpoint specific objects in images and videos to enhance surveillance, quality control, and more."
        },
        {
          title: "Facial Recognition",
          description: "Authenticate users or detect identities with reliable, real-time face recognition technology."
        }
      ]
    },
    {
      title: "Predictive Analytics",
      description: "Stay ahead of the competition with data-driven insights that forecast trends and outcomes.",
      features: [
        {
          title: "Forecasting",
          description: "Leverage predictive analytics to anticipate market shifts and customer behavior."
        },
        {
          title: "Recommendation Systems",
          description: "Provide personalized suggestions to users, improving engagement and sales."
        },
        {
          title: "Risk Assessment",
          description: "Identify potential risks and vulnerabilities before they become problems."
        }
      ]
    },
    {
      title: "AI-Powered Automation",
      description: "Streamline your business processes and increase efficiency with intelligent automation solutions.",
      features: [
        {
          title: "Process Automation",
          description: "Reduce manual tasks and improve workflow efficiency by automating routine processes."
        },
        {
          title: "Decision Automation",
          description: "Make real-time, data-driven decisions to enhance operational efficiency."
        },
        {
          title: "Robotic Process Automation",
          description: "Automate digital tasks with precision and scalability to save time and resources."
        }
      ]
    },
    {
      title: "Front-end Technology",
      description: "Turn your product into a visually stunning, user-centric experience with our advanced front-end development services.",
      features: [
        {
          title: "Usability and Design",
          description: "Enhance user experience with intuitive navigation and appealing visuals."
        },
        {
          title: "Responsive & Accessibility",
          description: "Build websites that adapt seamlessly to any device, ensuring a flawless experience across platforms."
        }
      ]
    },
    {
      title: "Back-end Technology",
      description: "Power your applications with robust, scalable back-end solutions designed for performance and security.",
      features: [
        {
          title: "Scalability and Security",
          description: "Ensure the highest level of security and reliability with powerful back-end technology."
        },
        {
          title: "Database & API Integration",
          description: "Seamlessly integrate systems for smooth functionality and data management."
        }
      ]
    },
    {
      title: "Performance Optimization",
      description: "Keep your website fast, smooth, and efficient for improved user satisfaction and engagement.",
      features: [
        {
          title: "Load Time Optimization",
          description: "Reduce page loading times and improve overall performance."
        },
        {
          title: "Smooth Navigation",
          description: "Create a seamless browsing experience that keeps users engaged and satisfied."
        }
      ]
    }
  ]
  
export default function Solutions() {
  return (
    <>
    {/*----- Section-1 ----- */}
    <div className='container mx-auto w-full'>
        <div className=' h-[600px] flex items-center justify-center bg-no-repeat bg-contain banner-bg-img'>
            <div className='mx-auto max-w-7xl'>
                <motion.div className='px-[20px]'
                    variants={slideUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true}}
                >
                    <h1 className='font-sofia font-medium text-center text-[60px] lg:text-[72px]  leading-[85.21px] lg:pt-[0px] pb-2 tracking-[-1.21px]'>Solutions That Matter, <span className='text-[#ED5729]'>Simplified</span>. </h1>
                    <div className="singleLine"><p className='font-sofia font-light  text-[#212529] text-[26px]  text-center'>Positive impact while adhering to ethical standards</p></div>
                    <div className='text-center mt-5 lg:mt-6'>
                        <button className='btn-lightup'>Get Amplified!!</button>
                    </div>
                </motion.div>
            </div>
        </div>
        {/*----- section-2 ----- */}
          <WhoweareSection/>
        {/*----- section-3 ------  */}
          <Otherservices/>
        {/*------ section-4------ */}
         <CTA/>
        {/* -------section-5 new design--- */}
        <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto text-center mb-16">
                <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-lg sm:text-xl text-gray-600 mb-4"
                >
                Enhance the lives of millions of people
                </motion.p>
                {/* <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-medium"
                >
                <span className="text-[#FF4D00]">We are eager</span> to contribute in
                <br className="hidden sm:block" /> revolutionary projects
                </motion.h1> */}

                <HighlightText text="We are eager to contribute in /n revolutionary projects" highlightWords={["We", "are", "eager"]} className="text-3xl sm:text-4xl lg:text-5xl font-medium" />

            </div>

            {/* Services Section */}
            <div className="max-w-7xl mx-auto">
                <div className="space-y-8">
                {services.map((service, index) => (
                    <motion.div
                    key={index}
                    variants={parentContainerVariants}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.3, margin: "-100px" }}
                    className="border-b border-gray-200 pb-8 first:border-t-0 first:pt-0"
                    >
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        <motion.div className="lg:col-span-1"
                            variants={slideUp}
                        >
                        <h2 className="text-2xl font-medium text-gray-900 mb-3">
                            {service.title}
                        </h2>
                        <p className="text-gray-600 text-sm">
                            {service.description}
                        </p>
                        </motion.div>
                        <div className="lg:col-span-3">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {service.features.map((feature, featureIndex) => (
                            <motion.div key={featureIndex} className="space-y-2"
                                variants={slideUp}
                            >
                                <h3 className="font-medium text-gray-900">
                                {feature.title}
                                </h3>
                                <p className="text-sm text-gray-600">
                                {feature.description}
                                </p>
                            </motion.div>
                            ))}
                        </div>
                        </div>
                    </div>
                    </motion.div>
                ))}
                </div>
            </div>
        </div>
        {/* -------section-6------- */}
        <div className='card-container flex gap-6 gap-y-3 w-full h-full lg:pt-[60px] pt-[30px] mb-10 overflow-hidden'>
            {/* Individual Cards */}
            <IntegrityCard/>
        </div>
        {/* ------section-7-------- */}
        <section className='bg-[#EEF3ED]'>
              <div className='container mx-auto px-8 lg:px-[20px] py-[60px] '>
                  <p className='text-center text-[26px]'>Positive impact while adhering to ethical standards</p>
                  {/* <h2 className="text-center lg:text-[48px] lg:py-[10px] leading-normal font-medium"> Solutions That Matter, <span className='text-[#ED5729]'> Simplified. </span> </h2> */}
                  <HighlightText text="Solutions That Matter, Simplified." highlightWords={["Simplified."]} className="text-center lg:text-[48px] lg:py-[10px] leading-normal font-medium" />

                  <motion.div className='pt-[38px] lg:px-[80px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-10'
                    variants={parentContainerVariants}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.3, margin: "-100px" }}
                  >
                      <motion.div className="card-item lg:p-4 "
                        variants={slideUp}
                      >
                          <div className='h-[48px] w-[48px] '><Image src="/images/Traced-icon-1.svg" width={48} height={48} alt="Traced" /></div>
                          <h3 className='text-lg py-2 border-b-[1px] border-black'>Innovative </h3>
                          <p className='text-[14px] text-[#00000080] pt-2'>We stay ahead of the curve with cutting-edge AI technologies.</p>
                      </motion.div>
                      <motion.div className="card-item lg:p-4 "
                        variants={slideUp}
                      >
                          <div className='h-[48px] w-[48px] '><Image src="/images/Traced-icon-2.svg" width={48} height={48} alt="Traced" /></div>
                          <h3 className='text-lg py-2 border-b-[1px] border-black'>Useful </h3>
                          <p className='text-[14px] text-[#00000080] pt-2'>Solutions are designed to solve real-world problem.</p>
                      </motion.div>
                      <motion.div className="card-item lg:p-4 "
                        variants={slideUp}
                      >
                          <div className='h-[48px] w-[48px] '><Image src="/images/Traced-icon-3.svg"  width={48} height={48} alt="Traced" /></div>
                          <h3 className='text-lg py-2 border-b-[1px] border-black'>Aesthetic </h3>
                          <p className='text-[14px] text-[#00000080] pt-2'>Stunning Visuals and user-friendly experience.</p>
                      </motion.div>
                      <motion.div className="card-item lg:p-4 "
                        variants={slideUp}
                      >
                          <div className='h-[48px] w-[48px] '><Image src="/images/Traced-icon-4.svg" width={48} height={48} alt="Traced" /></div>
                          <h3 className='text-lg py-2 border-b-[1px] border-black'>Honest </h3>
                          <p className='text-[14px] text-[#00000080] pt-2'>Transparent communication and ethical AI practices.</p>
                      </motion.div>
                      <motion.div className="card-item lg:p-4 "
                        variants={slideUp}
                      >
                          <div className='h-[48px] w-[48px] '><Image src="/images/Traced-icon-5.svg" width={48} height={48} alt="Traced" /></div>
                          <h3 className='text-lg py-2 border-b-[1px] border-black'>Long-lasting </h3>
                          <p className='text-[14px] text-[#00000080] pt-2'>Built to scale and evolve with your business.</p>
                      </motion.div>
                      <motion.div className="card-item lg:p-4 "
                        variants={slideUp}
                      >
                          <div className='h-[48px] w-[48px] '><Image src="/images/Traced-icon-6.svg" width={48} height={48} alt="Traced" /></div>
                          <h3 className='text-[16px] py-2 border-b-[1px] border-black'>Thorough </h3>
                          <p className='text-[14px] text-[#00000080] pt-2'>Assessments and analysis along with best AI strategies.</p>
                      </motion.div>
                      <motion.div className="card-item lg:p-4 "
                        variants={slideUp}
                      >
                          <div className='h-[48px] w-[48px] '><Image src="/images/Traced-icon-4.svg" width={48} height={48} alt="Traced" /></div>
                          <h3 className='text-lg py-2 border-b-[1px] border-black'>Understandable </h3>
                          <p className='text-[14px] text-[#00000080] pt-2'>Break down complex AI concepts into simple terms.</p>
                      </motion.div>
                      <motion.div className="card-item lg:p-4 "
                        variants={slideUp}
                      >
                          <div className='h-[48px] w-[48px] '><Image src="/images/Traced-icon-8.svg" width={48} height={48} alt="Traced" /></div>
                          <h3 className='text-lg py-2 border-b-[1px] border-black'>Unobtrusive </h3>
                          <p className='text-[14px] text-[#00000080] pt-2'>Integrate seamlessly into your existing systems.</p>
                      </motion.div>
                      <motion.div className="card-item lg:p-4 "
                        variants={slideUp}
                      >
                          <div className='h-[48px] w-[48px] '><Image src="/images/Traced-icon-9.svg" width={48} height={48} alt="Traced" /></div>
                          <h3 className='text-lg py-2 border-b-[1px] border-black'>Environmentally friendly </h3>
                          <p className='text-[14px] text-[#00000080] pt-2'>Environment Friendly & sustainable in every AI solutions.</p>
                      </motion.div>
                      <motion.div className="card-item lg:p-4 "
                        variants={slideUp}
                      >
                          <div className='h-[48px] w-[48px] '><Image src="/images/Traced-icon-10.svg" width={48} height={48} alt="Traced" /></div>
                          <h3 className='text-lg py-2 border-b-[1px] border-black'>Little design </h3>
                          <p className='text-[14px] text-[#00000080] pt-2'>Functionality and clarity, with minimal distractions.</p>
                      </motion.div>
                     
                  </motion.div>
              </div>
        </section>
        {/* ---- section-8------ */}
         <motion.div className=" mx-auto px-8 lg:px-10 py-[60px]"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3, margin: "-100px" }}
         >
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
        </motion.div>
        {/* ------------------------ */}
    </div>
    </>
  )
}
