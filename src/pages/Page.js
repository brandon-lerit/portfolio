import React from 'react'
import "../styles/Page.css";

function Page() {
  return (
    <div className = "contentpage">
      <div id = "home">
        <p className = "introtext">
          Hi! My Name is <span className = "purpleword">Brandon!</span>
        </p>
        <p className = "majortext">
          I am studying <strong>Information Science</strong> at <span className = "redword">Cornell University, </span>
          with concentrations in Interactive Technologies & Data Science, and a minor in <strong>Computer Science.</strong>
        </p>
      </div>

      <div id = "aboutme">
        <p className = "ab">
          About Me
        </p>

        <p className = "aboutmetext">
          I am from Long Island, New York
        </p>

        <p className = "aboutmetext">
          In addition to my interest in software, I am interested in chess, bowling, puzzle games, and e-sports.
        </p>

        <p>
          My Skills
        </p>

        <p>
          I am most comfortable with these languages and frameworks
        </p>

          Python
          Java
          React.js
          JavaScript
          HTML/CSS

        <p>
          I am also familiar with these languages and frameworks
        </p>
          C++
          Express
          Django
          Pandas
          OCaml
          TypeScript
          Arduino
        
      </div>

      <div id = "experience">
        <p>
          Work Experience

          Software Developer, Hyperloop 
          Collaborated with a team of 7 developers to build and maintain the GUI systems for the Hyperloop pod, ensuring accurate communication of information from sensors to the main computer.
          Developing and Updating Cornell Hyperloop’s project team website.

          Software Developer, Engineers for a Sustainable World

          Collaborated with a team of 6 developers to build and maintain websites and data visualizations to promote sustainability across the Cornell University Campus.

          Web Developer

          Worked with 5+ clients, building website’s for them using React.js and Express
          Data Entry & Medical Assistant, L.I. Urgent Care
          Input extensive patient data from 100-200 cases per day to New York State regarding COVID-19 cases through the use of ECLRS (Electronic Clinical Laboratory Computing System)
          Organized patient information to send 100-150 testing cultures per day to 4 different laboratories
          Introduced the use of text-based macros to numerous employees to improve the quality of care
          Obtained patient vital signs, performed COVID-19/Influenza/Strep testing, prepared electrocardiograms, and conducted glucose finger sticks to ensure timely healthcare delivery
        </p>

        <p>
          Project Experience

          PERSONAL #2 (Java OR C++) - A blackjack simulator written in Java which tracks total revenue.

          PERSONAL #1 (React.js, Express) - ????????????????

          Cornell Chimes (React.js, Python) - A webpage where users try to guess a song playing on Cornell Chimes as the clip length increases.

          Hyperloop Onboarding (Ardiuno?) - ???????????????

          Trends in Web Dev Project (React.js, Express) - ????????????????

          Cornell Capsule (React.js, Django) - A webpage where Cornell Students can store pictures, text, and videos for major Cornell events that will be displayed at the semester's end. 

          Machine Learning Project (Pandas, Python) - Analyzed the ??????????? using a dataset

          Hyperloop GUI Systems (React.js, Python) - ?????????????????????????

          ESW Website (React.js, Django) - Developing a website with targeted use by 25,000 students to promote sustainability and efficiently distribute food leftovers from the dining halls and club events at Cornell University

          Hyperloop Website (React.js) - Website for the Cornell Hyperloop project team.

          INFO 1300 Client Website (JavaScript, HTML/CSS) - Website built for a Cornell Unviersty project team for their developing app.

          Spotify Playlist Creator (JavaScript, HTML/CSS) - Webpage that tracks the users top songs from the past month and stores them in a playlist.

          Pomodoro Maker (JavaScript, HTML/CSS) - Webpage that tracks the times for the pomodoro studying method, sending the user alerts when the timers end.
        </p>
      </div>

      <div id = "contact">
        <p>
          Contact

          Reach out on LinkedIn or Email
          LinkedIn
          bsl77@cornell.edu
        </p>
      </div>
    </div>
  )
}

export default Page

