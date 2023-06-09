import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AppContext } from '../../context/AppContext';
import digital from "../assets/Illustration-Icon-3.png";
import { ContactForm } from '../ContactForm';
import { SkillsCircle } from '../SkillsCircle';
import seo from "../assets/banner-1.png";


export const DigitalMarketing = () => {
    const { APP_NAME, setTitle } = useContext(AppContext);
    setTitle(`${APP_NAME}Digital Marketing`);
    return (
        <motion.div initial={{ transition: { duration: 1 }, opacity: 0 }} animate={{ transition: { duration: 1 }, opacity: 1 }} exit={{ transition: { duration: 1 }, opacity: 0 }}>


            <div className="seo image-banner sec ">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="h-100 my-auto d-flex flex-column align-items-start justify-content-center col-6">
                            <h1 className='mb-3 text-capitalize text-start'>Drive more Leads, <br />more revenue with our <span> digital marketing services</span></h1>
                            <Link to={'/contact'} className="btn btn-dark">
                                GET A QUOTE
                            </Link>
                        </div>
                        <div className="h-100 my-4 d-flex flex-column align-items-center justify-content-center col-6 text-center">
                            <img src={seo} alt="banner" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="sec py-5 aligned-sec">
                <div className="container">
                    <div className="row text-start">
                        <div className="col-md-6 my-md-auto my-3">
                            <h1 className="heading">Digital Marketing</h1>
                            <h1 className="fs-4 heading-sm line-height-sm fw-normal">Elevate Your Brand with Our Digital Marketing Services
                            </h1>
                            <p className="para-sm text-muted my-4">
                                Our digital marketing services include search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, content marketing, email marketing, and more. We will work with you to create a customized digital marketing plan that meets your specific needs and goals. With our help, you can reach your target audience, build brand awareness, and grow your business.

                            </p>
                            <p className="para-sm d-flex gap-2 align-items-center my-2">
                                <i className="fa-regular fa-circle-dot text-danger"></i>Drive traffic
                            </p>
                            <p className="para-sm d-flex gap-2 align-items-center my-2">
                                <i className="fa-regular fa-circle-dot text-danger"></i>Increase conversion rate
                            </p>
                            <p className="para-sm d-flex gap-2 align-items-center my-2">
                                <i className="fa-regular fa-circle-dot text-danger"></i>Boost return on investment (ROI)
                            </p>
                        </div>
                        <div className="col-md-6 my-md-auto my-3">
                            <img src={digital} alt="seo" className="w-100" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="sec py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mx-auto">
                            <h2 className="heading fs-2">
                                Our Digital Marketing Services Cover Everything

                            </h2>
                            <p className="para-sm text-muted">
                                We help startups rise as industry leaders with our innovative digital marketing strategies
                                and flawless execution. Take a look below and find out what exactly you need
                            </p>
                        </div>
                        <div className="col-md-6 my-3 px-md-5">
                            <SkillsCircle value={73} />
                            <h1 className="heading fs-4">
                                Search Engine Optimization (SEO)
                            </h1>
                            <p className="para-sm text-muted">
                                Our top-level SEO specialists are here to help you
                                rank higher on Google and maximize your brand’s
                                visibility in the search results.
                            </p>
                        </div>
                        <div className="col-md-6 my-3 px-md-5">
                            <SkillsCircle value={71} />
                            <h1 className="heading fs-4">
                                Social Media Marketing (SMM)
                            </h1>
                            <p className="para-sm text-muted">
                                At Marketing Chapter, we create social media campaigns that drive organic traffic to your
                                business and grow your brand effectively.
                            </p>
                        </div>
                        <div className="col-md-6 my-3 px-md-5">
                            <SkillsCircle value={78} />
                            <h1 className="heading fs-4">
                                Social Media Marketing (SMM)
                            </h1>
                            <p className="para-sm text-muted">
                                Get potential leads instantly on your website with
                                well-researched and data-driven PPC campaigns
                                created by our first-rated PPC specialists.
                            </p>
                        </div>
                        <div className="col-md-6 my-3 px-md-5">
                            <SkillsCircle value={76} />
                            <h1 className="heading fs-4">
                                Content Writing
                            </h1>
                            <p className="para-sm text-muted">
                                No matter how powerful links you create, you can’t
                                make SEO successful without fresh and engaging
                                content. Connect with our top creative writers
                                and get top-quality content.
                            </p>
                        </div>
                        {/* <div className="col-12 mx-auto">
                            <button className="btn btn-main">
                                see more
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
            <ContactForm />
        </motion.div>
    )
}
