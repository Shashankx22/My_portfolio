import React, { useState } from 'react';
import "./services.css";
const Services = () => {
  const[toggleState, setToggleState]=useState(0);
  const toggleTab=(index)=>{
    setToggleState(index);
  }
  return (
    <section className='services section' id='services'>
          <h2 className='section__title'>Services</h2> 
          <span className='section__subtitle'>What i offer</span> 
          <div className='services__container container grid'>
            <div className='services__content'>
                <div>
                  <i className='uil uil-web-grid services__icon'></i>
                  <h3 className='services__title'>Web
                  <br/> Development</h3>
                </div>

                <span onClick={()=>toggleTab(1)}>View More{""}
                  <i className='uil uil-arrow-right services__buttom-icon'></i>
                </span>
                <div className={toggleState===1? "services__modal active-modal" :"services__modal"}>
                  <div className='services__modal-content'>
                    <i onClick={()=> toggleTab(0)} className='uil uil-times services__modal-close'></i>

                    <h3 className='services__modal-title'></h3>
                    <p className='services__modal-description'>
                    I specialize in crafting visually appealing, user-centric websites that deliver seamless user experiences. My approach to web design focuses on understanding user behavior and creating intuitive interfaces that enhance usability, ensuring both aesthetics and functionality are prioritized.                    </p>

                      <ul className='services__modal-services grid'>
                        <li className='services__modal-service'>
                        <i className='uil uil-check-circle services__modal-icon'></i>
                           <p className='services__modal-info'>    
                           Build high-performance, dynamic websites.
                          </p>
                        </li>
                        <li className='services__modal-service'>
                          <i className='uil uil-check-circle services__modal-icon'></i>
                          <p className='services__modal-info'>
                          Focus on speed and user engagement.
                          </p>
                        </li>
                        <li className='services__modal-service'>
                          <i className='uil uil-check-circle services__modal-icon'></i>
                          <p className='services__modal-info'>
                          Ensure mobile-friendly, responsive designs.
                          </p>
                        </li>
                        <li className='services__modal-service'>
                          <i className='uil uil-check-circle services__modal-icon'></i>
                          <p className='services__modal-info'>
                          Use the latest frameworks and technologies.

                          </p>
                        </li>
                        <li className='services__modal-service'>
                          <i className='uil uil-check-circle services__modal-icon'></i>
                          <p className='services__modal-info'>
                          Prioritize security and scalability.
                         </p>
                        </li>
                        <li className='services__modal-service'>
                          <i className='uil uil-check-circle services__modal-icon'></i>
                          <p className='services__modal-info'>
                          Create user-focused, functional interfaces.                         </p>
                        </li>
                      </ul>
                  </div>
                </div>
            </div>
            <div className='services__content'>
                <div>
                <i class="uil uil-robot services__icon"></i>
                  {/* <i className='uil uil-arrow services__icon'></i> */}
                  <h3 className='services__title'>Machine  
                  <br/> Learning</h3>
                </div>

                <span  onClick={()=>toggleTab(2)}>View More{""}
                  <i className='uil uil-arrow-right services__buttom-icon'></i>
                </span>
                <div className={toggleState===2? "services__modal active-modal" :"services__modal"}>
                  <div className='services__modal-content'>
                    <i onClick={()=> toggleTab(0)} className='uil uil-times services__modal-close'></i>

                    <h3 className='services__modal-title'></h3>
                    <p className='services__modal-description'>
                    I specialize in building machine learning models that solve complex problems. My approach focuses on leveraging data and algorithms to automate processes, optimize performance, and drive predictive insights, making solutions smarter and more efficient.

</p>

                      <ul className='services__modal-services grid'>
                        <li className='services__modal-service'>
                          <i className='uil uil-check-circle services__modal-icon'></i>
                          <p className='services__modal-info'>
                          Build models to solve complex problems.
                          </p>
                        </li>
                        <li className='services__modal-service'>
                          <i className='uil uil-check-circle services__modal-icon'></i>
                          <p className='services__modal-info'>
                          Optimize algorithms for performance.

                        </p>
                        </li>
                        <li className='services__modal-service'>
                          <i className='uil uil-check-circle services__modal-icon'></i>
                          <p className='services__modal-info'>
                          Work with structured and unstructured data.
                          </p>
                        </li>
                        <li className='services__modal-service'>
                          <i className='uil uil-check-circle services__modal-icon'></i>
                          <p className='services__modal-info'>
                          Implement predictive analytics.
                          </p>
                        </li>
                         
                        <li className='services__modal-service'>
                          <i className='uil uil-check-circle services__modal-icon'></i>
                          <p className='services__modal-info'>
                          Focus on automation and intelligence.
                          </p>
                        </li>
                        <li className='services__modal-service'>
                          <i className='uil uil-check-circle services__modal-icon'></i>
                          <p className='services__modal-info'>
                          Continuously improve model accuracy.
                          </p>
                        </li>
                      </ul>
                  </div>
                </div>
            </div>
            <div className='services__content'>
                <div>
                <i class="uil uil-database services__icon"></i>
                  {/* <i className='uil uil-edit services__icon'></i> */}
                  <h3 className='services__title'>Data  
                  <br/> Science</h3>
                </div>
                <span  onClick={()=>toggleTab(3)}>View More{""}
                  <i className='uil uil-arrow-right services__buttom-icon'></i>
                </span>
                <div className={toggleState===3? "services__modal active-modal" :"services__modal"}>
                  <div className='services__modal-content'>
                    <i onClick={()=> toggleTab(0)} className='uil uil-times services__modal-close'></i>
                    <h3 className='services__modal-title'></h3>
                    <p className='services__modal-description'>
                    I create data-driven solutions by analyzing and interpreting large datasets. My approach focuses on uncovering actionable insights that inform decision-making, helping businesses harness the power of data for growth and optimization.


</p>
                      <ul className='services__modal-services grid'>
                        <li className='services__modal-service'>
                          <i className='uil uil-check-circle services__modal-icon'></i>
                          <p className='services__modal-info'>
                          Analyze data for actionable insights.
                          </p>
                        </li>
                        <li className='services__modal-service'>
                          <i className='uil uil-check-circle services__modal-icon'></i>
                          <p className='services__modal-info'>
                          Create data-driven business solutions.
                          </p>
                        </li>
                        <li className='services__modal-service'>
                          <i className='uil uil-check-circle services__modal-icon'></i>
                          <p className='services__modal-info'>
                          Use statistical models and algorithms.
                          </p>
                        </li>
                        <li className='services__modal-service'>
                          <i className='uil uil-check-circle services__modal-icon'></i>
                          <p className='services__modal-info'>
                          Perform data cleaning and preparation.
                          </p>
                        </li>
                        <li className='services__modal-service'>
                          <i className='uil uil-check-circle services__modal-icon'></i>
                          <p className='services__modal-info'>
                          Visualize data to enhance understanding.
</p>
                        </li>
                        <li className='services__modal-service'>
                          <i className='uil uil-check-circle services__modal-icon'></i>
                          <p className='services__modal-info'>
                          Build predictive models for decision-making.
                          </p>
                        </li>
                      </ul>
                  </div>
                </div>
            </div>
            <div className='services__content'>
                <div>
                <i class="uil uil-code-branch services__icon "></i>
                  {/* <i className='uil uil-edit services__icon'></i> */}
                  <h3 className='services__title'>Deep  
                  <br/> Learning</h3>
                </div>
                <span  onClick={()=>toggleTab(4)}>View More{""}
                  <i className='uil uil-arrow-right services__buttom-icon'></i>
                </span>
                <div className={toggleState===4? "services__modal active-modal" :"services__modal"}>
                  <div className='services__modal-content'>
                    <i onClick={()=> toggleTab(0)} className='uil uil-times services__modal-close'></i>
                    <h3 className='services__modal-title'></h3>
                    <p className='services__modal-description'>
                    I design advanced deep learning systems that drive innovation in AI. My approach centers on developing neural networks that excel at tasks like image and text recognition, pushing the boundaries of machine intelligence.</p>
                      <ul className='services__modal-services grid'>
                        <li className='services__modal-service'>
                          <i className='uil uil-check-circle services__modal-icon'></i>
                          <p className='services__modal-info'>
                          Design advanced neural networks.

                          </p>
                        </li>
                        <li className='services__modal-service'>
                          <i className='uil uil-check-circle services__modal-icon'></i>
                          <p className='services__modal-info'>
                          Implement CNNs and RNNs for AI tasks.
</p>
                        </li>
                        <li className='services__modal-service'>
                          <i className='uil uil-check-circle services__modal-icon'></i>
                          <p className='services__modal-info'>
                          Work with large-scale datasets.</p>
                        </li>
                        <li className='services__modal-service'>
                          <i className='uil uil-check-circle services__modal-icon'></i>
                          <p className='services__modal-info'>
                          Optimize models for performance.                          </p>
                        </li>
                        <li className='services__modal-service'>
                          <i className='uil uil-check-circle services__modal-icon'></i>
                          <p className='services__modal-info'>
                          Apply to image and text recognition.
                          </p>
                        </li>
                        <li className='services__modal-service'>
                          <i className='uil uil-check-circle services__modal-icon'></i>
                          <p className='services__modal-info'>
                          Continuously refine deep learning models.
                          </p>
                        </li>
                      </ul>
                  </div>
                </div>
            </div>
            <div className='services__content'>
                <div>
                  {/* <i className='uil uil-web-grid services__icon'></i> */}
                  <i class='bx bxs-brain services__icon'></i>
                  <h3 className='services__title'>AI  
                  <br/> Development</h3>
                </div>

                <span onClick={()=>toggleTab(5)}>View More{""}
                  <i className='uil uil-arrow-right services__buttom-icon'></i>
                </span>
                <div className={toggleState===5? "services__modal active-modal" :"services__modal"}>
                  <div className='services__modal-content'>
                    <i onClick={()=> toggleTab(0)} className='uil uil-times services__modal-close'></i>

                    <h3 className='services__modal-title'></h3>
                    <p className='services__modal-description'>
                    I develop AI-powered applications that enhance automation and intelligence. My approach integrates AI into systems to optimize efficiency, enabling smarter, more intuitive operations that evolve with user needs.</p>

                      <ul className='services__modal-services grid'>
                        <li className='services__modal-service'>
                          <i className='uil uil-check-circle services__modal-icon'></i>
                          <p className='services__modal-info'>
                          Build AI-powered automation solutions.
                          </p>
                        </li>
                        <li className='services__modal-service'>
                          <i className='uil uil-check-circle services__modal-icon'></i>
                          <p className='services__modal-info'>
                          Develop intelligent applications.
                          </p>
                        </li>
                        <li className='services__modal-service'>
                          <i className='uil uil-check-circle services__modal-icon'></i>
                          <p className='services__modal-info'>
                          Integrate AI into existing systems.
                          </p>
                        </li>
                        <li className='services__modal-service'>
                          <i className='uil uil-check-circle services__modal-icon'></i>
                          <p className='services__modal-info'>
                          Focus on natural language and computer vision.
                          </p>
                        </li>
                        <li className='services__modal-service'>
                          <i className='uil uil-check-circle services__modal-icon'></i>
                          <p className='services__modal-info'>
                          Create AI to enhance operational efficiency.
                          </p>
                        </li>
                        <li className='services__modal-service'>
                          <i className='uil uil-check-circle services__modal-icon'></i>
                          <p className='services__modal-info'>
                          Continuously innovate AI capabilities.
                          </p>
                        </li>
                      </ul>
                  </div>
                </div>
            </div>
            <div className='services__content'>
                <div>
                  {/* <i className='uil uil-arrow services__icon'></i> */}
                  <i class="uil uil-scenery services__icon"></i>
                  <h3 className='services__title'>UI/UX  
                  <br/> Design</h3>
                </div>

                <span  onClick={()=>toggleTab(6)}>View More{""}
                  <i className='uil uil-arrow-right services__buttom-icon'></i>
                </span>
                <div className={toggleState===6? "services__modal active-modal" :"services__modal"}>
                  <div className='services__modal-content'>
                    <i onClick={()=> toggleTab(0)} className='uil uil-times services__modal-close'></i>

                    <h3 className='services__modal-title'></h3>
                    <p className='services__modal-description'>
                    I design user-friendly and visually appealing interfaces that prioritize a seamless user experience. My approach focuses on intuitive navigation and clean design, ensuring users can engage effortlessly with products and services.

</p>

                      <ul className='services__modal-services grid'>
                        <li className='services__modal-service'>
                          <i className='uil uil-check-circle services__modal-icon'></i>
                          <p className='services__modal-info'>
                          Design intuitive, user-friendly interfaces.
                          </p>
                        </li>
                        <li className='services__modal-service'>
                          <i className='uil uil-check-circle services__modal-icon'></i>
                          <p className='services__modal-info'>
                          Focus on clean, appealing visuals.
                          </p>
                        </li>
                        <li className='services__modal-service'>
                          <i className='uil uil-check-circle services__modal-icon'></i>
                          <p className='services__modal-info'>
                          Prioritize seamless user experiences.
                         </p>
                        </li>
                        <li className='services__modal-service'>
                          <i className='uil uil-check-circle services__modal-icon'></i>
                          <p className='services__modal-info'>
                          Ensure mobile-first and responsive design.

                          </p>
                        </li>
                        <li className='services__modal-service'>
                          <i className='uil uil-check-circle services__modal-icon'></i>
                          <p className='services__modal-info'>
                          Conduct user testing for feedback.
                          </p>
                        </li>
                        <li className='services__modal-service'>
                          <i className='uil uil-check-circle services__modal-icon'></i>
                          <p className='services__modal-info'>
                          Balance form and function for engagement.
                          </p>
                        </li>
                      </ul>
                  </div>
                </div>
            </div>
          </div>
    </section>
  )
}
export default Services