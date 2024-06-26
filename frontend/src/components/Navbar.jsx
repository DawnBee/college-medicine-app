import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { Link as ALink } from 'react-scroll'

// Asset Imports
import logo from '../assets/images/general/com-logo.png'
import hamburgerIconWhite from '../assets/images/general/burger-menu-white.svg'
import hamburgerIconBlack from '../assets/images/general/burger-menu-black.svg'

const Navbar = ({currentPage}) => {
    const navMenuRef = useRef(null)
    const [scrollY, setScrollY] = useState(0)
    const [menuOpen, setMenuOpen] = useState(false)
    const pagesWithDifferentStyles = ['detailPage']

    // Mobile Nav Toggle
    const toggleMenu = () => {
        setMenuOpen(prevMenuOpen => !prevMenuOpen)
    }

    // Custom styles for other pages
    const getPageStyles = () => {
        if (pagesWithDifferentStyles.includes(currentPage)) {
            return {background: '#fff', color: '#000'}
        }
        return {}
    }

    // Custom styles for dropdown arrow
    const getArrowStyles = () => {
        if (pagesWithDifferentStyles.includes(currentPage)) {
            return {borderTop: '6px solid #000'}
        }
        return {}
    }

    // Higher-Order Component to add common props
    const withCommonLinkProps = (Component) => (props) => {
        return <Component {...props} spy={true} smooth={true} duration={500} />
    }

    // Custom Inline Attributes
    const CustomALink = withCommonLinkProps(ALink)
    const inlineArrowStyles = getArrowStyles()
    const inlineStyles = getPageStyles()

    // Close the menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navMenuRef.current && !navMenuRef.current.contains(event.target)) {
                setMenuOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [navMenuRef])

    // Changes styles when user scrolls
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }
        window.addEventListener('scroll', handleScroll)

        // Clean-up event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header className={scrollY > 0 ? 'scrolled' : ''}>
            <nav id="navbar" style={inlineStyles}>
                <Link to='/'>
                    <div className="logo-group" style={inlineStyles}>
                        <img className="logo-img" src={logo} alt="nav logo"/>
                        <div className="logo-text">
                            <span className="primary">College of Medicine</span>
                            <span className="secondary">Mindanao State University</span>
                        </div>
                    </div>                    
                </Link>                
                <ul ref={navMenuRef} className={`nav-menu ${menuOpen ? 'open' : ''}`}>
                    {/* Admission */}
                    <li className="nav-item">
                        <Link to="/admission" className="nav-link" style={inlineStyles}> Admission </Link>
                        <span className="drop-arrow" style={inlineArrowStyles}>
                            <div className="dropdown-menu">
                                <CustomALink to="process">Admission Process</CustomALink>
                                <CustomALink to="payment">Enrollment Fees</CustomALink>
                            </div>
                        </span>
                    </li>
                    {/* Simulation */}
                    <li className="nav-item">
                        <Link to="/simulation" className="nav-link" style={inlineStyles}> Simulation </Link>
                        <span className="drop-arrow" style={inlineArrowStyles}>
                            <div className="dropdown-menu">
                                <CustomALink to="facility">Facilities</CustomALink>
                                <CustomALink to="center">SimBased Education</CustomALink>
                                <CustomALink to="mannequins">Mannequins</CustomALink>
                                <CustomALink to="trainers">Trainers</CustomALink>
                                <CustomALink to="sim-training">SBE Trainings</CustomALink>
                                <CustomALink to="faculty-involve">Faculty Training</CustomALink>                                         
                            </div>
                        </span>                    
                    </li>
                    {/* Faculty */}
                    <li className="nav-item">
                        <Link to="/faculty" className="nav-link" style={inlineStyles}> Faculty </Link>
                        <span className="drop-arrow" style={inlineArrowStyles}>
                            <div className="dropdown-menu">
                                <CustomALink to="mission-vision">Mission/Vision</CustomALink>
                                <CustomALink to="message">Message</CustomALink>
                                <CustomALink to="org-chart">Org-Chart</CustomALink>
                                <CustomALink to="highlights">Highlights</CustomALink>
                                <CustomALink to="faculties">Faculties</CustomALink>
                                <CustomALink to="lecturers">Lecturers</CustomALink>                                       
                            </div>
                        </span>                           
                    </li>
                    {/* About */}
                    <li className="nav-item">
                        <Link to="/about" className="nav-link" style={inlineStyles}> About </Link>
                        <span className="drop-arrow" style={inlineArrowStyles}>
                            <div className="dropdown-menu">
                                <CustomALink to="benefactors">Benefactors</CustomALink>
                                <CustomALink to="values">Values</CustomALink>
                                <CustomALink to="history">History</CustomALink>                                    
                            </div>
                        </span>                          
                    </li>                    
                    {/* Others */}
                    <li className="nav-item">
                        <Link to="/others" className="nav-link" style={inlineStyles}> Others </Link>
                    </li>
                </ul>
                {/* Hamburger Icon */}
                {pagesWithDifferentStyles.includes(currentPage) 
                    ? <img className="hamburger" src={hamburgerIconBlack} alt="hamburger icon" onClick={toggleMenu}/> 
                    : <img className="hamburger" src={scrollY > 0 ? hamburgerIconBlack : hamburgerIconWhite} alt="hamburger icon" onClick={toggleMenu}/>
                }
            </nav>
        </header>    
    )
}

export default Navbar