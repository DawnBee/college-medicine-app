// Asset Imports
import ecgLine from '../assets/images/admission/ecg-line-white.svg'
import bottomImage from '../assets/images/general/library-2.jpg'
import bottomCrossImage from '../assets/images/admission/white-crosses.svg'
import intramsImage from '../assets/images/admission/intrams.jpg'
import grandIftarImage from '../assets/images/admission/iftar.jpg'
import entranceExamImage from '../assets/images/admission/entrance-exam.jpg'
import panelInterviewImage from '../assets/images/admission/panel-interview.jpg'
import clerkshipImage from '../assets/images/admission/pre-clerkship.png'
import enrollmentImage from '../assets/images/admission/enrollment.jpg'
import assemblyImage from '../assets/images/admission/gen-assembly.jpg'
import medStartImage from '../assets/images/admission/med-start.png'
import simImage from '../assets/images/admission/sim.jpg'
import studenActImage from '../assets/images/admission/student-act.jpg'

const MonthActivities = () => {
  return (
    <section id="month-act" className="year-highlight-section">
        <div className="layout-container">
            <h2 className="section-header">Monthly Activities</h2>
            <div className="intro-group">
                <i aria-hidden="true" className="fa-solid fa-calendar-week"></i>         
                <p>
                    These planned events are integral to our academic calendar, 
                    encompassing a diverse array of activities scheduled monthly 
                    throughout the year. While specific dates are subject to adjustment, 
                    these activities are crucial for fostering a vibrant 
                    and engaged educational environment.
                </p>   
            </div>
            <div className="highlight-event-container">
                <div className="header-group">
                    <div className="image-frame">
                        <img aria-hidden="true" className="ecg-line-style" src={ecgLine} alt="styling image" draggable="false"/>
                    </div>                        
                    <h3 className="month-header">Aug - Dec</h3>
                </div>
                <div className="month-group">
                    <div className="month-events">
                        <h4>August - September</h4>
                        <ul className="event-list">
                            <li className="event-item">
                                <div className="image-box">
                                    <img src={enrollmentImage} alt="acad event image" className="acad-event-img"/>
                                </div>
                                <div className="content">
                                    <h5 className="card-title">Enrollment</h5>
                                    <p>The formal process of officially registering and joining our institution as a student.</p>
                                </div>
                            </li>
                            <li className="event-item">
                                <div className="image-box">
                                    <img src={medStartImage} alt="acad event image" className="acad-event-img"/>
                                </div>
                                <div className="content">
                                    <h5 className="card-title">Med Start</h5>
                                    <p>Orientation at the beginning of the academic year for new medical students.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="month-events">
                        <h4>October - December</h4>
                        <ul className="event-list">
                            <li className="event-item">
                                <div className="image-box">
                                    <img src={intramsImage} alt="acad event image" className="acad-event-img"/>
                                </div>
                                <div className="content">
                                    <h5 className="card-title">Intramurals</h5>
                                    <p>Student-led sports and activities promoting community and friendly competition. </p>
                                </div>
                            </li>
                            <li className="event-item">
                                <div className="image-box">
                                    <img src={simImage} alt="acad event image"  className="acad-event-img"/>
                                </div>
                                <div className="content">
                                    <h5 className="card-title">Simulation Activities</h5>
                                    <p> Hands-on exercises preparing students for real-world medical scenarios through simulations.</p>
                                </div>
                            </li>
                            <li className="event-item">
                                <div className="image-box">
                                    <img src={studenActImage} alt="acad event image" className="acad-event-img"/>
                                </div>
                                <div className="content">
                                    <h5 className="card-title">Student Activities</h5>
                                    <p>Organized events and initiatives throughout the year by the student society.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="header-group">
                    <div className="image-frame">
                        <img aria-hidden="true" className="ecg-line-style" src={ecgLine} alt="styling image" draggable="false"/>
                    </div>                        
                    <h3 className="month-header">Jan - June</h3>
                </div>
                <div className="month-group">
                    <div className="month-events">
                        <h4>January - March</h4>
                        <ul className="event-list">
                            <li className="event-item">
                                <div className="image-box">
                                    <img src={assemblyImage} alt="acad event image" className="acad-event-img"/>
                                </div>
                                <div className="content">
                                    <h5 className="card-title">General Assembly</h5>
                                    <p>
                                        A formal meeting for members of the student organization
                                        to discuss, decide on, and update important matters and initiatives.
                                    </p>
                                </div>
                            </li>
                            <li className="event-item">
                                <div className="image-box">
                                    <img src={grandIftarImage} alt="acad event image" className="acad-event-img"/>
                                </div>
                                <div className="content">
                                    <h5 className="card-title">Grand Iftar</h5>
                                    <p> Large gathering to break fast during Ramadan, fostering community and solidarity.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="month-events">
                        <h4>April - June</h4>
                        <ul className="event-list">
                            <li className="event-item">
                                <div className="image-box">
                                    <img src={entranceExamImage} alt="acad event image" className="acad-event-img"/>
                                </div>
                                <div className="content">
                                    <h5 className="card-title">Entrance Exam</h5>
                                    <p>Standardized test for admission to assess academic aptitude and suitability.</p>
                                </div>
                            </li>
                            <li className="event-item">
                                <div className="image-box">
                                    <img src={panelInterviewImage} alt="acad event image"  className="acad-event-img"/>
                                </div>
                                <div className="content">
                                    <h5 className="card-title">Panel Interview</h5>
                                    <p>
                                        A formal interview conducted by a group of doctors to assess 
                                        a candidate's suitability for admission.
                                    </p>
                                </div>
                            </li>
                            <li className="event-item">
                                <div className="image-box">
                                    <img src={clerkshipImage} alt="acad event image" className="acad-event-img"/>
                                </div>
                                <div className="content">
                                    <h5 className="card-title">Pre-Clerkship</h5>
                                    <p>Introduction to academic and clinical aspects of medical training before clerkship.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <img className="bot-cross-style" src={bottomCrossImage} alt="bottom cross image"/>   
            </div>
        </div>                    
        <img className="bottom-img" aria-hidden="true" src={bottomImage} alt="bottom image"/>
    </section>
  )
}

export default MonthActivities
