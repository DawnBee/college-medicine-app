// Asset Imports
import pulseImage from '../assets/images/general/pulse-red.svg'
import facilityImg from '../assets/images/simulation/facility.jpg'
import simImageOne from '../assets/images/simulation/sim-1.jpg'
import simImageTwo from '../assets/images/simulation/sim-2.jpg'
import simImageThree from '../assets/images/simulation/sim-3.jpg'
import facultyImage from '../assets/images/simulation/faculty-training.jpg'

// Components
import MannequinCards from '../components/MannequinCards'
import SimTraining from '../components/SimTraining'
import Trainers from '../components/Trainers'

const Simulation = () => {
  return (
    <main id="simulation-content">
        <section className="hero-section">
            <div className="hero-overlay">
                <img className="pulse-icon" src={pulseImage} alt="pulse icon" draggable="false" />
                <h1 className="page-header">Simulation</h1>
                <p>
                    The Mindanao State University, General Santos City Simulation Center is a 
                    cutting-edge healthcare and medicine facility. Equipped with advanced 
                    simulation technology.
                </p>
            </div>
        </section>
        <section id="facility" className="facility-section">
            <div className="layout-container">
                <div className="first">
                    <img alt="facility-img" src={facilityImg} />
                    <h2>Simulation Center</h2>
                    <p>
                        Currently located at the CETD Campus, 2nd Floor of the Library Building, 
                        the center serves as a practical training ground for students and allows them to engage in 
                        hands-on experience and preparedness for real-world healthcare settings.
                    </p>
                </div>
                <div className="second">
                    <ul className="facility-list">
                        <li className="facility-item">
                            <h3>Simulation Lab</h3>
                            <p>
                                A medical simulation lab is a facility where healthcare 
                                professionals practice clinical skills using advanced technology 
                                and lifelike mannequins. It offers a realistic environment for 
                                training in various medical scenarios, from routine procedures 
                                to emergency situations, aiming to improve diagnostic skills, 
                                decision-making, and teamwork among learners.
                            </p>
                        </li>
                        <li className="facility-item">
                            <h3>Clinical Skills Lab</h3>
                            <p>
                                A Clinical Skills Lab is a facility where healthcare professionals 
                                practice medical procedures and patient care using advanced simulators 
                                and equipment. It provides a realistic environment for training in 
                                various clinical scenarios, enhancing skills in diagnosis, treatment, and teamwork.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section id="center" className="sim-lab-section">
            <div className="layout-container">
                <div className="header">
                    <h2>Simulation-Based Education</h2>
                </div>
                <div className="wrapper">
                    <div className="collage-container">
                        <div className="image-wrapper">
                            <img src={simImageOne} />
                            <img src={simImageTwo} />
                            <img src={simImageThree} />
                        </div>
                        <span aria-hidden="true" className="style-block"></span>
                        <span aria-hidden="true" className="style-block"></span>
                        <span aria-hidden="true" className="style-block"></span>
                        <span aria-hidden="true" className="style-block"></span>
                    </div>
                    <div className="text-content">
                        <h3>What is Simulation?</h3>
                        <p>
                            Simulation is the imitation of real-world processes or systems 
                            for training, testing, or research purposes, using models or 
                            virtual environments to replicate conditions and scenarios.
                        </p>
                        <ul className="sim-list">
                            <li className="sim-item">
                                <i className="fa-solid fa-stethoscope"></i>
                                <p>
                                    To provide students with hands-on practice in a safe, 
                                    controlled environment, improving their proficiency in medical procedures and patient care.
                                </p>
                            </li>
                            <li className="sim-item">
                                <i className="fa-solid fa-heart-pulse"></i>
                                <p>
                                    To develop critical thinking and decision-making abilities 
                                    by exposing students to a variety of clinical scenarios and emergencies.
                                </p>
                            </li>
                            <li className="sim-item">
                                <i className="fa-solid fa-user-doctor"></i>
                                <p>
                                    To foster effective teamwork and communication skills among 
                                    healthcare professionals by simulating real-life collaborative situations.
                                </p>
                            </li>
                        </ul>
                    </div>    
                </div>
            </div>
        </section>
        <MannequinCards />
        <Trainers />
        <SimTraining />
        <section id="faculty-involve" className="faculty-involve-section">
            <div className="top">
                <div className="layout-container">
                    <h2>Faculty Training</h2>
                    <img src={facultyImage} alt="top image" />
                </div>
            </div>
            <div className="bot">
                <div className="layout-container">
                    <div className="info-group">
                        <h3>Role of Faculty</h3>
                        <p>
                            The role of faculty in our simulation lab
                            is crucial for guiding and instructing students 
                            throughout their training. Faculty members design
                            realistic simulation scenarios, provide hands-on
                            instruction, and offer immediate feedback to help 
                            students develop their clinical skills, 
                            critical thinking, and professional behavior. Their 
                            expertise and mentorship ensure that students gain 
                            confidence and competence in a supportive learning environment
                        </p>
                    </div>
                    <div className="info-group">
                        <h3>Expertise & Qualifications</h3>
                        <p>
                            Faculty training involves equipping instructors and doctors 
                            with the skills to effectively use various task trainers
                            and simulation tools. This training ensures that faculty 
                            members are proficient in the latest simulation technology 
                            and techniques, enabling them to create realistic scenarios 
                            and provide high-quality instruction and feedback to students.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Simulation
