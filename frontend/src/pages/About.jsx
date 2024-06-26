// Asset Imports
import collegeGrounds from '../assets/images/general/library-2.jpg'

// Components
import Benefactors from '../components/Benefactors'
import Values from '../components/Values'
import History from '../components/History'
import Curriculum from '../components/Curriculum'

const About = () => {
  return (
    <main id="about-content">
        <section className="hero-section">
            <div className="layout-container">
                <div className="hero-content">
                    <img alt="hero image" className="hero-img" src={collegeGrounds} />
                    <div className="text-group">
                        <h2>Service to the Nation</h2>
                        <p>
                            Welcome to our medical school, dedicated to fostering
                            "Dalubhasang Doktor, Makataong Doktor." Our mission 
                            is to cultivate excellence in medical expertise and 
                            humane values, preparing students to positively impact society.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <Curriculum />
        <Benefactors />
        <Values />
        <History />
    </main>       
  )
}

export default About
