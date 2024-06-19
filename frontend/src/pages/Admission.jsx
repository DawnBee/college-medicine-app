// Asset Imports
import pulseImage from '../assets/images/pulse-red.svg'
import cashierImage from '../assets/images/admission/payment-fee.jpg'

// Components
import MacroButtons from '../components/MacroButtons'
import Process from '../components/Process'
import Requirements from '../components/Requirements'
import Scholarship from '../components/Scholarship'
import EmailButton from '../components/EmailButton'
import MonthActivities from '../components/MonthActivities'

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
        <MonthActivities />
    </main>
  )
}

export default Admission