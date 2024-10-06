import React from 'react';

// Define a functional component named Data
const Data = () => {
  return (
    // Container for the component's data
    <div className='home__data'>
      {/* Main title */}
      <h1 className='home__title'>
        Shashank B R
      </h1>
      
      {/* Subtitle */}
      <h3 className='home__subtitle'>
        Software Developer
      </h3>
      
      {/* Description paragraph */}
      <p className='home__description'>
      I am a developer with foundational knowledge across a range of fields, including Full Stack Web Development, Machine Learning, Data Science, Artificial Intelligence, and UI/UX Design. I am continually learning and exploring these areas to enhance my skills and grow as a developer.
      </p>
      
      {/* Button with link to contact section */}
      <a href='#contact' className='button button--flex'>
        Say Hello
        
        {/* SVG icon within the button */}
        <svg
          className="button__icon" // Corrected to className (React uses className)
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 122.56 122.88"
          fill="var(--icon-color, White)" /* Fill color for the icon, default to White if variable is not set */
        >
          {/* Path of the SVG icon */}
          <path
            className="cls-1" // Corrected to className (React uses className)
            d="M2.33,44.58,117.33.37a3.63,3.63,0,0,1,5,4.56l-44,115.61h0a3.63,3.63,0,0,1-6.67.28L53.93,84.14,89.12,33.77,38.85,68.86,2.06,51.24a3.63,3.63,0,0,1,.27-6.66Z"
          />
        </svg>
      </a>
    </div>
  )
}

// Export the Data component as the default export
export default Data;
