import React from 'react';
import "./skills.css";
 
import Framework from './Framework';
import Languages from './Languages';
import Development from './Development';
const Skills = () => {
  return (
        <section className='skills section' id='skills'>  
        <h2 className='section__title'>Skills</h2> 
            <span className='section__subtitle'>My Technical Skill</span>  
            <div className='skills__container container grid'>
                <Languages/>
               
                <Framework/> 
                <Development/>
            </div>
        </section>    
  )
}

export default Skills