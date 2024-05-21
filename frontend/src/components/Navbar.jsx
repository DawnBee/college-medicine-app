import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

// Asset Imports
import logo from '../assets/images/com-logo.png'
import hamburgerIconWhite from '../assets/images/burger-menu-white.svg'
import hamburgerIconBlack from '../assets/images/burger-menu-black.svg'

const Navbar = ({currentPage}) => {
    const [scrollY, setScrollY] = useState(0)
    const pagesWithDifferentStyles = ['detailPage']

    // Custom styles for other pages
    const getPageStyles = () => {
        if (pagesWithDifferentStyles.includes(currentPage)) {
            return {background: '#fff', color: '#000'}
        }
        return {}
    }

    const inlineStyles = getPageStyles()

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
                <ul className="nav-menu">
                    <li className="nav-item"><Link to="/admission" className="nav-link" style={inlineStyles}> Admission </Link></li>
                    <li className="nav-item"><Link to="/simulation" className="nav-link" style={inlineStyles}> Simulation </Link></li>
                    <li className="nav-item"><Link to="/faculty" className="nav-link" style={inlineStyles}> Faculty </Link></li>
                    <li className="nav-item"><Link to="/alumni" className="nav-link" style={inlineStyles}> Alumni </Link></li>
                    <li className="nav-item"><Link to="/about" className="nav-link" style={inlineStyles}> About </Link></li>
                    <li className="nav-item"><i className="fa-solid fa-magnifying-glass"></i><Link to="#" className="nav-link" style={inlineStyles}> Search </Link></li>
                </ul>
                {pagesWithDifferentStyles.includes(currentPage) 
                    ? <img className="hamburger" src={hamburgerIconBlack} alt="hamburger icon" /> 
                    : <img className="hamburger" src={scrollY > 0 ? hamburgerIconBlack : hamburgerIconWhite} alt="hamburger icon" />
                }
            </nav>
        </header>    
    )
}

export default Navbar