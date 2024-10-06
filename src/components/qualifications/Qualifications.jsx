
import React,{useState} from 'react';
import './qualifications.css';
const Qualifications = () => {
    const[toggleState, setToggleState]=useState(1);
  const toggleTab=(index)=>{
    setToggleState(index);
  }
  return (
    <section className='qualification section' id='qualifications'>
        <h2 className='section__title'>Qualification</h2>
        <span className='section__subtitle'>My personal journey</span>
        <div className='qualification__container container'>
            <div className='qualifications__tabs'>
                <div className={toggleState===1? "qualification__button qualification__active button--flex" : "qualification__button button--flex" }                    
                onClick={()=> toggleTab(1)}
                >
                     <i className='uil uil-graduation-cap qualification__icon'>
                    </i>{""}Education
                </div>
                <div className={toggleState===2? "qualification__button qualification__active button--flex" : "qualification__button button--flex" }
                                onClick={()=> toggleTab(2)}
>
 
                    <i className='uil uil-briefcase-alt qualification__icon'>
                    </i>{""}Experience
                </div>
                </div>
                <div className='qualification__sections'>
                    <div className={toggleState===1? "qualification__content qualification__content-active" : "qualification__content"}>

                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>B.Tech</h3>
                                <span className='qualification__subtitle'>Visvesvaraya Technological University</span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calender-alt'> 2021-present</i>
                                </div>
                            </div>
                            <div>
                                <span className='qualification__rounder'>
                                </span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div></div>
                            <div>
                                <span className='qualification__rounder'>
                                </span>
                                <span className='qualification__line'></span>
                            </div>
                            <div>
                                <h3 className='qualification__title'>Senior Secondary (XII)</h3>
                                <span className='qualification__subtitle'>DEPARTMENT OF PRE-UNIVERSITY EDUCATION</span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calender-alt'> 2019-2021</i>
                                </div>
                            </div>
                
                        </div>

                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>Secondary (X)</h3>
                                <span className='qualification__subtitle'>Karnataka Secondary Education Examination Board</span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calender-alt'>2017-2019</i>
                                </div>
                            </div>
                            <div>
                                <span className='qualification__rounder'>
                                </span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>
                        

                
                    </div>
                    <div className={toggleState===2? "qualification__content qualification__content-active" : "qualification__content"}>

                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>IoT<br/>Trainee</h3>
                                <span className='qualification__subtitle'>Samsung Innovation Campus Training, DBIT, Bangalore</span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calender-alt'>Dec 2023 - July 2024</i>
                                </div>
                            </div>
                            <div>
                                <span className='qualification__rounder'>
                                </span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div></div>
                            <div>
                                <span className='qualification__rounder'>
                                </span>
                                <span className='qualification__line'></span>
                            </div>
                            <div>
                                <h3 className='qualification__title'>Full-stack developer<br/>(intern)</h3>
                                <span className='qualification__subtitle'>Varcons Company, Bangalore</span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calender-alt'>Oct 2023 - Dec 2023</i>
                                </div>
                            </div>
                
                        </div>

                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>Artificial Intelligence<br/>With Python (intern)</h3>
                                <span className='qualification__subtitle'>LANGUIFY, Coincent, Bangalore</span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calender-alt'>Aug 2023 - Sep 2023</i>
                                </div>
                            </div>
                            <div>
                                <span className='qualification__rounder'>
                                </span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>
 
                
                    </div>
                </div>
            
        </div>
    </section> 
  )
}

export default Qualifications