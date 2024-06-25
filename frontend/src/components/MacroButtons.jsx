import { Link } from 'react-scroll';

const MacroButtons = () => {
  return (
    <div className="macro-btn-container">
        <ul className="admission-menu">
            <Link to="requirements" spy={true} smooth={true} duration={500} className="anchor-link">
                <li className="macro-btn req">
                    <i className="fa-regular fa-clipboard"></i>
                    <span className="anchor-tag">Requirements</span>
                    <p>Explore and Fulfill Admission Requirements Here</p>
                </li>
            </Link>
            <Link to="month-act" spy={true} smooth={true} duration={800} className="anchor-link">
                <li className="macro-btn req">
                    <i className="fa-regular fa-calendar"></i>
                    <span className="anchor-tag">Monthly Activities</span>
                    <p>Check Out Our Monthly Activities Right Here</p>
                </li>
            </Link>
            <Link to="scholarship" spy={true} smooth={true} duration={650} className="anchor-link">
                <li className="macro-btn req">
                    <i className="fa-solid fa-graduation-cap"></i>
                    <span className="anchor-tag">Scholarships</span>
                    <p>Explore Scholarships and Learn How to Apply</p>
                </li>
            </Link>
        </ul>
    </div>
  )
}

export default MacroButtons
