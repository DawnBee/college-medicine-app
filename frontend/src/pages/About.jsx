// Asset Imports
import collegeGrounds from '../assets/images/bg-university-grounds.jpg'

// Components
import Benefactors from '../components/Benefactors'
import Values from '../components/Values'

const About = () => {
  return (
    <main id="about-content">
        <section className="hero-section">
            <div className="layout-container">
                <h1>About</h1>
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
        <Benefactors />
        <Values />
        <section id="history" className="history-section">
            <div className="layout-container">
                <div className="content">
                    <img src={collegeGrounds} alt="college history image" />
                    <div className="text-group">
                        <h2>A Brief history of the College</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Numquam eum repudiandae non, maiores quia vero explicabo 
                            tempora aperiam ipsa illo.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Quos voluptates expedita, assumenda, perferendis vel ea at 
                            modi officia ab soluta vero fuga minima nostrum porro aspernatur, 
                            quod est quam dolore!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </main>       
  )
}

export default About
