// Asset Imports
import pulseImage from '../assets/images/pulse-red.svg'
import facilityVideo from '../assets/videos/final-cut.mp4'
import simImageOne from '../assets/images/sim-1.jpg'
import simImageTwo from '../assets/images/sim-2.jpg'
import simImageThree from '../assets/images/sim-3.jpg'
import simImageFour from '../assets/images/sim-4.jpg'
import trainerSAM from '../assets/images/SAM-sim.jpg'
import trainerBirthing from '../assets/images/birthing.jpg'
import trainerAdultChild from '../assets/images/adult-child.jpg'
import trainerCPR from '../assets/images/cpr.jpg'
import trainerBreast from '../assets/images/breast.jpg'
import trainerMATT from '../assets/images/matt.jpg'
import bgImage from '../assets/images/bg-img.jpg'

// Components
import MannequinCards from '../components/MannequinCards'


const Simulation = () => {
  return (
    <main id="simulation-content">
        <section className="hero-section">
            <div className="hero-overlay">
                <img className="pulse-icon" src={pulseImage} alt="pulse icon" draggable="false" />
                <h1 className="page-header">Simulation</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
                    purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                </p>
            </div>
        </section>
        <section className="facility-section">
            <div className="layout-container">
                <div className="first">
                    <video className="bg-video" autoPlay muted loop>
                        <source src={facilityVideo} type="video/mp4" />
                    </video>
                    <h2>Simulation Facilities</h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Dolorem dicta doloribus inventore dolores fugiat praesentium, 
                        quibusdam deserunt porro debitis eveniet!
                    </p>
                </div>
                <div className="second">
                    <ul className="facility-list">
                        <li className="facility-item">
                            <h3>Clinical Skills Lab</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Magnam ut tempora natus animi quam voluptate quibusdam labore
                                odio rem obcaecati!
                            </p>
                        </li>
                        <li className="facility-item">
                            <h3>Simulation Center</h3>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Architecto, autem necessitatibus!
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section className="sim-lab-section">
            <div className="layout-container">
                <div className="header">
                    <h2>Simulation Lab</h2>
                </div>
                <div className="wrapper">
                    <div className="collage-container">
                        <div className="image-wrapper">
                            <img src={simImageFour} />
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
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Officia deserunt non temporibus blanditiis, 
                            ullam accusantium ab maxime voluptates totam praesentium?
                        </p>
                        <ul className="sim-list">
                            <li className="sim-item">
                                <i className="fa-solid fa-stethoscope"></i>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Repudiandae, culpa.
                                </p>
                            </li>
                            <li className="sim-item">
                                <i className="fa-solid fa-heart-pulse"></i>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Perferendis fugiat voluptate facere assumenda.
                                </p>
                            </li>
                            <li className="sim-item">
                                <i className="fa-solid fa-user-doctor"></i>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Placeat quos doloribus, sit inventore atque perferendis.
                                </p>
                            </li>
                        </ul>
                    </div>    
                </div>
            </div>
        </section>
        <MannequinCards />
        <section className="task-trainers-section">
            <div className="layout-container">
                <div className="header">
                    <h2>Task Trainers</h2>
                </div>
                <ul className="trainer-list">
                    <li className="trainer-item sam">
                        <img src={trainerSAM} alt="" className="trainer-img" />
                        <h3>SAM - Auscultation</h3>
                    </li>
                    <li className="trainer-item birth">
                        <img src={trainerBirthing} alt="" className="trainer-img" />
                        <h3>Birthing Simulator</h3>
                    </li>
                    <li className="trainer-item adult-child">
                        <img src={trainerAdultChild} alt="" className="trainer-img" />
                        <h3>Adult/Child CPR</h3>
                    </li>
                    <li className="trainer-item cpr">
                        <img src={trainerCPR} alt="" className="trainer-img" />
                        <h3>CPR Trainer</h3>
                    </li>
                    <li className="trainer-item breast">
                        <img src={trainerBreast} alt="" className="trainer-img" />
                        <h3>Breast Exam</h3>
                    </li>
                    <li className="trainer-item matt">
                        <img src={trainerMATT} alt="" className="trainer-img" />
                        <h3>MATT - Auscultation</h3>
                    </li>


                </ul>
            </div>
        </section>
        <section className="team-based-section layout-container">
            <div className="top">
                <h2>Team Based Simulation</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Vitae cupiditate dolore accusantium, 
                    mollitia aut temporibus expedita fuga aliquam dignissimos similique eum dolorem.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Id distinctio quibusdam laborum iste nulla corporis at? Odio deleniti illum itaque.
                </p>
            </div>
            <img src={simImageFour} alt="team sim image" />
            <div className="bot">
                <ul className="team-based-list">
                    <li className="team-item">
                        <i className="fa-solid fa-hand-holding-heart"></i>
                        <div className="content">
                            <h3>Challenge 1</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, eaque.
                            </p>                                    
                        </div>
                    </li>
                    <li className="team-item">
                        <i className="fa-regular fa-face-kiss-wink-heart"></i>
                        <div className="content">
                            <h3>Challenge 2</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, eaque.
                            </p>                                    
                        </div>
                    </li>
                    <li className="team-item">
                        <i className="fa-solid fa-face-grin-hearts"></i>
                        <div className="content">
                            <h3>Challenge 3</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, eaque.
                            </p>                                    
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        <section className="educ-outcome-section">
            <div className="layout-container">
                <div className="image-frame">
                    <i className="fa-solid fa-trophy"></i>
                    <img src={bgImage} alt="educ outcome image"/>
                </div>
                <div className="content">
                    <h2>Educational Outcomes</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Cum repellat rem enim eius. Vel vero commodi ullam rem, doloremque animi.
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Doloremque, vitae consectetur molestias dolores numquam iusto 
                        dolore ullam qui deserunt magnam nostrum fuga nesciunt. Exercitationem, sequi?
                    </p>
                </div>
            </div>
        </section>
        <section className="faculty-involve-section">
            <div className="top">
                <div className="layout-container">
                    <h2>Faculty Involvement</h2>
                    <img src={simImageOne} alt="top image" />
                </div>
            </div>
            <div className="bot">
                <div className="layout-container">
                    <div className="info-group">
                        <h3>Role of Faculty</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Expedita, libero atque. Necessitatibus ducimus itaque ratione!
                            Earum saepe deleniti quibusdam officiis?
                        </p>
                    </div>
                    <div className="info-group">
                        <h3>Expertise & Qualifications</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Expedita, libero atque. Necessitatibus ducimus itaque ratione!
                            Earum saepe deleniti quibusdam officiis?
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Simulation
