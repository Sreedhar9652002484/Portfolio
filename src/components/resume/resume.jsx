import './resume.css'

export const Resume = () => {



  return (
    <div className='resume'>
      <div className='resumecontent'>
        <div className='abouttext'><p id="resumetext" style={{ fontSize: '2.3rem', color: 'white', fontWeight: '650' }} >RESUME</p>
          <hr id='hr'></hr>
        </div>
        <div className='work'>
          <p id='work'>Work Experience</p>
          <div>
            <div className='DateTitle'>
              <p id='date'>2023 - Present</p>
              <div className='titlepara' ><p id='titletext'>Dot Net FullStack Developer</p>
                <p id='paratext'>Dynamic and motivated Full Stack Developer with a passion for building innovative web applications. Proficient in both frontend and backend technologies, adept at utilizing modern frameworks like React and Node.js. Currently exploring various aspects of full-stack development to enhance skills and contribute effectively to challenging projects.</p>
              </div>
            </div>
            <div className='DateTitle'>
              <p id='date'>2022 - 2023</p>
              <div className='titlepara' ><p id='titletext'>FullStack Development</p>
                <p id='paratext'>Trained as a Full Stack Developer with hands-on experience in building web applications using React. Proficient in frontend and backend development, including user authentication, CRUD operations, and RESTful API integration. Demonstrated ability to work with modern development tools and methodologies, committed to continuous learning and professional growth.</p>
              </div>
            </div>
            <div className='DateTitle'>
              <p id='date'>2022 - 2022</p>
              <div className='titlepara' ><p id='titletext'>Front End Developer</p>
                <p id='paratext'>Experienced Frontend Engineer proficient in HTML, CSS, and JavaScript, with a focus on building responsive and engaging user interfaces. Demonstrated ability to translate design concepts into functional web applications. Skilled in optimizing performance. Committed to staying updated with the latest web technologies and design trends to deliver exceptional user experiences.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='work'>
          <p id='work'>Education</p>
          <div>
            <div className='DateTitle'>
              <p id='date'>2018 - 2022</p>
              <div className='titlepara' ><p id='titletext'>B-TECH (Computer Science And Engineering)</p>
                <p id='paratext'>From Dr. M.G.R. Educational and Research Institute.
                  Maintained a GPA of 8.2 during the program.
                  Completed coursework in Data Structures, Algorithms, Software Engineering, and Database Management Systems.
                  Participated in coding competitions and held leadership roles in student organizations, fostering teamwork and problem-solving skills.</p>
              </div>
            </div>
            <div className='DateTitle'>
              <p id='date'>2016 - 2018</p>
              <div className='titlepara' ><p id='titletext'>Intermediate - MPC (Science)</p>
                <p id='paratext'>Studied in Narayana Junior College, Achieved a consistent 94% average throughout Intermediate in Science.
                  Excelled in subjects such as Physics, Chemistry, and Mathematics.
                  Demonstrated strong analytical and problem-solving abilities.
                  Applied theoretical knowledge effectively in practical laboratory settings.</p>
              </div>
            </div>
            <div className='DateTitle'>
              <p id='date'>2015 - 2016</p>
              <div className='titlepara' ><p id='titletext'>SSC (X)</p>
                <p id='paratext'>Completed Secondary School Certificate (SSC) from a Government High School with a commendable CGPA of 8.8.
                  Demonstrated academic excellence and dedication to studies.
                  Developed a strong foundation in core subjects such as Mathematics, Science, and English.
                  Actively engaged in extracurricular activities, showcasing well-rounded abilities.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='work'>
          <p id='work'>Skills & Expertise</p>
          <div>
            <div className='DateTitle'>

              <div className='titlepara' >
                <p id='paratext'><ul>
                  <li> Proficient in HTML and CSS for creating visually appealing and responsive web interfaces</li>
                  <li>
                    Skilled in React.js for building dynamic and interactive front-end applications.
                  </li>
                  <li>Experienced in back-end development using ASP.NET Core, with a focus on efficient server-side processing.</li>
                  <li>
                    Proficient in Entity Framework for seamless integration with SQL databases, ensuring robust data management and manipulation.</li>
                  <li>
                    Capable of developing full-stack solutions, combining front-end and back-end technologies to deliver comprehensive web applications.</li></ul></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}