import React from 'react';
import {NavLink} from 'react-router-dom';
import Sectiontitle from './Sectiontitle';
import Sectioninnertitle from './Sectioninnertitle';
import Aboutdetails from './Aboutdetails';
import Skill from './Skill';
import Languages from './Languages';
import Experience from './Experience';
const Aboutarea = () => {
     return(
          <>
               <section className="about-area section">
                    <div className="container">
                         <div className="row">
                              <div className="col-lg-6">
                                   <div className="about-left">
                                        <Sectiontitle sectiontitle="about me" />
                                        <p className="about-content">Hi, I'm Gobinda Sarkar,  I'm working as a professional Web developer and Designer. I've started my carrier in 2014 as a web designer. I also continued to keep learning and exploring new things for updating myself. I've made myself more efficient. I love to learn new things and working on them. I have 7 years' experience. Here are just a few things about me. I strive to provide excellent service in terms of quality of work, timely delivery, professional behavior, customer service, reliability, and dedication. I am a focused, skilled & efficient person. I specialize in building user and mobile-friendly websites using my wide range of skills in Frontend & Backend.</p>
                                        <Aboutdetails />
                                        <a href="./images/gobinda.sarkar_resume.pdf" download="gobinda.sarkar_resume.pdf" className="primary-btn me-3">Download CV</a>
                                        <NavLink to="/contact" className="primary-btn">Hire me</NavLink>
                                   </div>
                              </div>
                              <div className="col-lg-6">
                                   <div className="skill-area">
                                        <Sectioninnertitle sectiontitle="my skill" />
                                        <Skill />
                                   </div>
                                   <div className="languages-area">
                                        <Sectioninnertitle sectiontitle="languages" />
                                        <Languages />
                                   </div>
                                   <div className="experience-area">
                                        <Sectioninnertitle sectiontitle="experience" />
                                        <Experience />
                                   </div>
                              </div>
                         </div>
                    </div>
                    
               </section>
          </>
     );
}
export default Aboutarea;