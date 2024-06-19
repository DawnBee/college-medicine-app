import { Link } from 'react-router-dom'

// Assets
import Icon from '../assets/images/404-icon.png'

// Styles
import '../styles/404_Page.sass'

const NotFound = () => {
  return (
    <main id="not-found-content">
        <div className="container">
            <img src={Icon} alt="404 icon" draggable="false"/>
            <h2>Not Found!</h2>
            <p>
                "Oops! Looks like you took a wrong turn
                and ended up in the medical records room. 
                Time to prescribe a dose of redirection!"
            </p>
            <Link to="/">Go Back</Link>
        </div>
        {/* Multiple roles, untimely salary, impossible timeframes, and a very toxic work environment */}
        {/* They treat u like trash and don't respect you as a developer here! */}
        <a className="easter-egg" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">.</a>
    </main>
  )
}

export default NotFound