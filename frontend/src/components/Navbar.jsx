import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

// Asset Imports
import logo from '../assets/images/com-logo.png'
import hamburgerIconWhite from '../assets/images/burger-menu-white.svg'
import hamburgerIconBlack from '../assets/images/burger-menu-black.svg'

const Navbar = () => {
    const [scrollY, setScrollY] = useState(0)

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
            <nav id="navbar">
                <Link to='/'>
                    <div className="logo-group">
                        <img className="logo-img" src={logo} alt="nav logo"/>
                        <div className="logo-text">
                            <span className="primary">College of Medicine</span>
                            <span className="secondary">Mindanao State University</span>
                        </div>
                    </div>                    
                </Link>                
                <ul className="nav-menu" >
                    <li className="nav-item"><Link to="/admission" className="nav-link">Admission</Link></li>
                    <li className="nav-item"><Link to="/simulation" className="nav-link">Simulation</Link></li>
                    <li className="nav-item"><Link to="/faculty" className="nav-link">Faculty</Link></li>
                    <li className="nav-item"><Link to="/alumni" className="nav-link">Alumni</Link></li>
                    <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                    <li className="nav-item"><i className="fa-solid fa-magnifying-glass"></i><Link to="#" className="nav-link">Search</Link></li>
                </ul>
                <img className="hamburger" src={scrollY > 0 ? hamburgerIconBlack : hamburgerIconWhite} alt="hamburger icon"/>
            </nav>
        </header>    
    )
}

export default Navbar