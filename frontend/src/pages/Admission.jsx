// Asset Imports
import pulseImage from '../assets/images/pulse-red.svg'
import cashierImage from '../assets/images/cashiers-office.jpg'
import ecgLine from '../assets/images/ecg-line-white.svg'
import yearEventImageOne from '../assets/images/event-1.jpg'
import yearEventImageTwo from '../assets/images/event-2.jfif'
import yearEventImageThree from '../assets/images/event-3.jpg'
import bottomImage from '../assets/images/library-2.jpg'
import bottomCrossImage from '../assets/images/white-crosses.svg'

// Components
import MacroButtons from '../components/MacroButtons'
import Process from '../components/Process'
import Requirements from '../components/Requirements'
import Scholarship from '../components/Scholarship'
import EmailButton from '../components/EmailButton'

const Admission = () => {
  return (
    <main id="admission-content">
        <section className="hero-section">
            <div className="hero-overlay">
                <img className="pulse-icon" src={pulseImage} alt="pulse icon" draggable="false" />
                <h1 className="page-header">Admission</h1>
                <p>
                    Unlock Your Future: Explore Our Admission Pathways Today
                </p>
                <EmailButton />
            </div>
        </section>
        <section id="process" className="process-section">
            <div className="layout-container">
                <MacroButtons />
                <Process />
            </div>
        </section>
        <Requirements />
        <section id="payment" className="payment-fee-section">
            <div className="layout-container">
                <div className="content-container">
                    <h2 className="section-header">Enrollment Payment & Fees</h2>
                    <div className="content">
                        <p>
                            The College of Medicine does not process payments directly. 
                            All payments related to admissions and other fees are managed 
                            by the University's cashier office. This office is located at 
                            the Mindanao State University (MSU) General Santos City's main 
                            campus in Barangay Fatima.
                        </p>
                        <p>
                            During the enrollment period, the cashier office dispatches
                            its personnel to the college grounds to directly collect payments.
                            This is to ensure that students can settle their financial obligations
                            without the need to travel to the main campus.
                        </p>
                        <p>
                            For your convenience, you may visit the cashier's office during their 
                            operating hours to settle any financial obligations. Please ensure to 
                            bring all necessary documents and references related to your payment to 
                            facilitate a smooth transaction.
                        </p>
                    </div>
                </div>
                <div className="image-frame">
                    <i className="fa-solid fa-money-bill"></i>
                    <img src={cashierImage} alt="cashier office image"/>
                </div>
            </div>
        </section>
        <Scholarship />
        <section id="month-act" className="year-highlight-section">
            <div className="layout-container">
                <h2 className="section-header">Monthly Activities</h2>
                <div className="intro-group">
                    <i aria-hidden="true" className="fa-solid fa-calendar-week"></i>         
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Itaque laudantium nostrum sapiente officiis, 
                        quo voluptatem dolorum asperiores aspernatur voluptate minima eius. 
                    </p>   
                </div>
                <div className="highlight-event-container">
                    <div className="header-group">
                        <div className="image-frame">
                            <img aria-hidden="true" className="ecg-line-style" src={ecgLine} alt="styling image" draggable="false"/>
                        </div>                        
                        <h3 className="month-header">Aug - Dec<span>1st Semester</span></h3>
                    </div>
                    <div className="month-group">
                        <div className="month-events">
                            <h4>August</h4>
                            <ul className="event-list">
                                <li className="event-item">
                                    <span className="day">07</span>
                                    <div className="image-box">
                                        <img src={yearEventImageOne} alt="acad event image" className="acad-event-img"/>
                                    </div>
                                    <h5 className="card-title">Entrance Exam</h5>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, blanditiis.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, corrupti?
                                    </p>
                                </li>
                                <li className="event-item">
                                    <span className="day">21</span>
                                    <div className="image-box">
                                        <img src={yearEventImageTwo} alt="acad event image" className="acad-event-img"/>
                                    </div>
                                    <h5 className="card-title">Spring Break</h5>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit itaque nam sint.</p>
                                </li>
                            </ul>
                        </div>
                        <div className="month-events">
                            <h4>September</h4>
                            <ul className="event-list">
                                <li className="event-item">
                                    <span className="day">07</span>
                                    <div className="image-box">
                                        <img src={yearEventImageThree} alt="acad event image" className="acad-event-img"/>
                                    </div>
                                    <h5 className="card-title">Entrance Exam</h5>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, blanditiis.</p>
                                </li>
                                <li className="event-item">
                                    <span className="day">22</span>
                                    <div className="image-box">
                                        <img src={yearEventImageOne} alt="acad event image"  className="acad-event-img"/>
                                    </div>
                                    <h5 className="card-title">Intramurals</h5>
                                    <p>
                                        Lorem ipsum dolor sit, 
                                        amet consectetur adipisicing elit. Sint modi, deleniti quisquam assumenda cumque suscipit!
                                    </p>
                                </li>
                                <li className="event-item">
                                    <span className="day">07</span>
                                    <div className="image-box">
                                        <img src={yearEventImageTwo} alt="acad event image" className="acad-event-img"/>
                                    </div>
                                    <h5 className="card-title">Entrance Exam</h5>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, blanditiis.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="header-group">
                        <div className="image-frame">
                            <img aria-hidden="true" className="ecg-line-style" src={ecgLine} alt="styling image" draggable="false"/>
                        </div>                        
                        <h3 className="month-header">Jan - June<span>2nd Semester</span></h3>
                    </div>
                    <div className="month-group">
                        <div className="month-events">
                            <h4>January</h4>
                            <ul className="event-list">
                                <li className="event-item">
                                    <span className="day">07</span>
                                    <div className="image-box">
                                        <img src={yearEventImageOne} alt="acad event image" className="acad-event-img"/>
                                    </div>
                                    <h5 className="card-title">Entrance Exam</h5>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, blanditiis.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, corrupti?
                                    </p>
                                </li>
                                <li className="event-item">
                                    <span className="day">21</span>
                                    <div className="image-box">
                                        <img src={yearEventImageTwo} alt="acad event image" className="acad-event-img"/>
                                    </div>
                                    <h5 className="card-title">Spring Break</h5>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit itaque nam sint.</p>
                                </li>
                            </ul>
                        </div>
                        <div className="month-events">
                            <h4>June</h4>
                            <ul className="event-list">
                                <li className="event-item">
                                    <span className="day">07</span>
                                    <div className="image-box">
                                        <img src={yearEventImageThree} alt="acad event image" className="acad-event-img"/>
                                    </div>
                                    <h5 className="card-title">Entrance Exam</h5>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, blanditiis.</p>
                                </li>
                                <li className="event-item">
                                    <span className="day">22</span>
                                    <div className="image-box">
                                        <img src={yearEventImageOne} alt="acad event image"  className="acad-event-img"/>
                                    </div>
                                    <h5 className="card-title">Intramurals</h5>
                                    <p>
                                        Lorem ipsum dolor sit, 
                                        amet consectetur adipisicing elit. Sint modi, deleniti quisquam assumenda cumque suscipit!
                                    </p>
                                </li>
                                <li className="event-item">
                                    <span className="day">07</span>
                                    <div className="image-box">
                                        <img src={yearEventImageTwo} alt="acad event image" className="acad-event-img"/>
                                    </div>
                                    <h5 className="card-title">Entrance Exam</h5>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, blanditiis.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img className="bot-cross-style" src={bottomCrossImage} alt="bottom cross image"/>   
                </div>
            </div>                    
            <img className="bottom-img" aria-hidden="true" src={bottomImage} alt="bottom image"/>
        </section>
    </main>
  )
}

export default Admission