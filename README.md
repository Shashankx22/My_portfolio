# React Portfolio

This is a personal portfolio website built using React.js. It showcases my projects, qualifications, skills, and services. The website is fully responsive and deployed on Netlify. You can view the live version of the portfolio [here](https://shashanks.netlify.app/).

## Directory Structure

```bash
├── public
│   ├── index.html       # Main HTML file for rendering the app
│   └── shash.ico        # Favicon
└── src
    ├── App.css          # Global styles for the app
    ├── App.js           # Main component that renders the entire app
    ├── assets           # Folder containing images and SVGs used in the portfolio
    │   ├── demo1.jpeg
    │   ├── demo2.jpeg
    │   ├── files.svg
    │   ├── my_data      # Contains personal resume and demo images
    │   │   ├── demo00.jpeg
    │   │   └── shash_resume.pdf
    │   ├── scroll.svg
    │   └── spring-boot.svg
    ├── components       # All reusable components categorized by section
    │   ├── about
    │   │   ├── About.jsx        # Component for the About section
    │   │   ├── Info.jsx         # Sub-component for About section
    │   │   └── about.css        # Styles for About section
    │   ├── contact
    │   │   ├── Contact.jsx      # Component for the Contact section
    │   │   └── contact.css      # Styles for Contact section
    │   ├── footer
    │   │   ├── Footer.jsx       # Component for the Footer section
    │   │   └── footer.css       # Styles for Footer section
    │   ├── header
    │   │   ├── Header.jsx       # Component for the Header section
    │   │   └── header.css       # Styles for Header section
    │   ├── home
    │   │   ├── Data.jsx         # Data for the Home section
    │   │   ├── Home.jsx         # Component for the Home section
    │   │   ├── ScrollDown.jsx   # Scroll down effect for Home section
    │   │   ├── Social.jsx       # Social media links in the Home section
    │   │   └── home.css         # Styles for Home section
    │   ├── projects
    │   │   ├── Data.jsx         # Data for the Projects section
    │   │   ├── Projects.jsx     # Component for the Projects section
    │   │   └── projects.css     # Styles for Projects section
    │   ├── qualifications
    │   │   ├── Qualifications.jsx   # Component for Qualifications section
    │   │   └── qualifications.css   # Styles for Qualifications section
    │   ├── services
    │   │   ├── Services.jsx     # Component for the Services section
    │   │   └── services.css     # Styles for Services section
    │   └── skills
    │       ├── Development.jsx  # Component for the Development section
    │       ├── Framework.jsx    # Component listing frameworks
    │       ├── Languages.jsx    # Component listing programming languages
    │       ├── Skills.jsx       # Main component for the Skills section
    │       └── skills.css       # Styles for Skills section
    └── index.js                 # Entry point for the React app
```
## How to Run the Project
#### 1. Prerequisites
Ensure that you have Node.js and npm installed on your system. You can check if you have them installed by running the following commands in your terminal:
```bash
node -v
npm -v
```
If these commands return a version, you're all set. Otherwise, download and install Node.js from [here](https://nodejs.org/en).

#### 2. Installation
Clone the repository: Download the project from GitHub to your local machine.
```bash
git clone https://github.com/shashank/portfolio.git
cd portfolio
```
Install dependencies: Run the following command to install all required dependencies.
```bash
npm install
```
#### 3. Running the Project Locally
Once the dependencies are installed, you can start the development server:

```bash
npm start
```
The app will run on http://localhost:3000/. Open this URL in your browser to view the website.

#### 4. Building the Project for Production
To create an optimized production build of the React app, run:

```bash
npm run build
```
This will generate a build/ folder containing the optimized production-ready files.

#### 5. Deploying to Netlify
To deploy this portfolio on Netlify, follow these steps:

Create a Netlify account: If you don't have one already, sign up at Netlify.

Link the GitHub repository: Once signed in, go to "New site from Git" and select your portfolio's GitHub repository.

Configure settings: In the build settings, set the build command to:

```bash
npm run build
```
And set the publish directory to:

```bash
 build
```
Deploy: After configuration, Netlify will automatically build and deploy your site. Your portfolio will be live and hosted on a Netlify subdomain or custom domain if configured.
You can view the deployed site.

## Features
1. Responsive Design: Works well on all screen sizes (desktop, tablet, mobile).
2. Smooth Scroll and Animations: Elegant scroll animations and smooth transitions between sections.
3. Separate Sections: Well-organized sections like About, Projects, Services, Skills, and Contact.

## Tech Stack
1. React.js: The core framework used to build this portfolio.
2. CSS3: For styling the components.
3. Netlify: For deployment.

