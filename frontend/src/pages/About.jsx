// Asset Imports
import collegeGrounds from '../assets/images/library-2.jpg'

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
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Minus perspiciatis possimus adipisci numquam accusantium 
                            distinctio tempore eaque vel! Tempora dolor, vel ratione esse reiciendis quod.
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
