// Asset Imports
import trainerSAM from '../assets/images/simulation/sam.png'
import trainerAirway from '../assets/images/simulation/airway-management.png'
import trainerAdultChild from '../assets/images/simulation/adult-child-cpr.png'
import trainerCPR from '../assets/images/simulation/cpr.png'
import trainerIntraosseous from '../assets/images/simulation/intraosseous.png'
import trainerVenipuncture from '../assets/images/simulation/venipuncture.png'


const Trainers = () => {
  return (
    <section id="trainers" className="task-trainers-section">
        <div className="layout-container">
            <div className="header">
                <h2>Advanced Task Trainers</h2>
            </div>
            <ul className="trainer-list">
                <li className="trainer-item sam">
                    <img src={trainerSAM} alt="" className="trainer-img" />
                    <h3>SAM - Auscultation</h3>
                </li>
                <li className="trainer-item airway">
                    <img src={trainerAirway} alt="" className="trainer-img" />
                    <h3>Airway Management</h3>
                </li>
                <li className="trainer-item adult-child">
                    <img src={trainerAdultChild} alt="" className="trainer-img" />
                    <h3>Adult/Child CPR</h3>
                </li>
                <li className="trainer-item venipuncture">
                    <img src={trainerVenipuncture} alt="" className="trainer-img" />
                    <h3>Advanced Venipuncture</h3>
                </li>
                <li className="trainer-item intraosseous">
                    <img src={trainerIntraosseous} alt="" className="trainer-img" />
                    <h3>Intraosseous Insertion</h3>
                </li>
                <li className="trainer-item cpr">
                    <img src={trainerCPR} alt="" className="trainer-img" />
                    <h3>CPR Mannequin</h3>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Trainers
