import React from 'react'

const Info = () => {
  return (
    <div className='about__info grid'> {/* Container for the info section */}
        {/* Box for Experience */}
        <div className='about__box'>
            <i className='bx bx-award'></i> {/* Icon for Experience */}
            <h3 className='about__title'>Experience</h3> {/* Title for the Experience section */}
            <span className='about__subtitle'>Intern</span> {/* Subtitle for Experience (currently empty) */}
        </div>
        {/* Box for Completed Projects */}
        <div className='about__box'>
            <i className='bx bx-briefcase-alt'></i> {/* Icon for Completed Projects */}
            <h3 className='about__title'>Projects</h3> {/* Title for Completed Projects */}
            <span className='about__subtitle'>10+ Completed</span> {/* Subtitle with the number of completed projects */}
        </div>
        {/* Box for Support */}
        <div className='about__box'>
        <i class="uil uil-graduation-cap"></i>
             <h3 className='about__title'>Education</h3> {/* Title for Support */}
            <span className='about__subtitle'>Undergraduate</span> {/* Subtitle for Support availability */}
        </div>
    </div>
  )
}

export default Info
