import css from '../portfolio/portfolio.css'
import twitter from '../../assests/twitter.png'
import book from '../../assests/book.png'
import notes from '../../assests/notes.png'
export const Portfolio = () => {
    return (
        <div className='portfolio'>
            <div className='abouttext1'><p id="resumetext" style={{ fontSize: '2.3rem', color: 'white', fontWeight: '650' }} >PROJECTS</p>
                <hr id='hr1'></hr>
            </div>
            <div className='projects'>
                <div className='twitterimg'>
                    <p id='twittertext'>Twitter UI</p>
                    <p id='twitterpara'>I developed a frontend UI for a Twitter clone project, showcasing my proficiency in React and frontend development. Implemented features include user authentication, tweet posting, and real-time updates. Employed modern design principles to ensure an engaging and user-friendly interface</p>
                    <a href='https://github.com/Sreedhar9652002484/TwitterUI' target="_blank" rel="noopener noreferrer" id='targetlink'>
                        Visit GitHub Repo for more info
                    </a>                
                    </div>
                <img src={twitter} id='image1'></img>
            </div>
            <div>
            </div>
            <div className='projects'>
                <div className='twitterimg'>
                    <p id='twittertext'>Book Store app</p>
                    <p id='twitterpara'>I spearheaded the development of a full stack bookstore application, demonstrating expertise in both frontend and backend technologies. Leveraged React for dynamic user interfaces. Implemented features such as user authentication, book catalog browsing, showcasing comprehensive skills in web development.</p>
                    <a href='https://github.com/Sreedhar9652002484/BookStore-React' target="_blank" rel="noopener noreferrer" id='targetlink'>
                        Visit GitHub Repo for more info
                    </a>                
                    </div>
                <img src={book} id='image1'></img>
            </div>
            <div>
                
            </div>
            <div className='projects'>
                <div className='twitterimg'>
                    <p id='twittertext'>Note Taking app</p>
                    <p id='twitterpara'>I led the development of a full-stack note-taking application, showcasing proficiency across frontend and backend technologies. Utilized React for interactive user interfaces. Implemented features including user authentication, CRUD operations for notes, and real-time collaboration, highlighting comprehensive expertise in full-stack web development</p>
                    <a href='https://github.com/Sreedhar9652002484/FunDooNote-React' target="_blank" rel="noopener noreferrer" id='targetlink'>
                        Visit GitHub Repo for more info
                    </a>                
                    </div>
                <img src={notes} id='image2'></img>
            </div>
            <div>
                
            </div>
        </div>
    )
}