// Asset Imports
import evaImage from '../assets/images/faculty/eva.svg'
import jocelynImage from '../assets/images/faculty/jocelyn.svg'
import analyzaImage from '../assets/images/faculty/analyza.svg'
import romeoImage from '../assets/images/faculty/romeo.svg'
import edwinImage from '../assets/images/faculty/edwin.svg'
import shilroseImage from '../assets/images/faculty/shilrose.svg'
import vienImage from '../assets/images/faculty/vien.svg'
import darwizaImage from '../assets/images/faculty/darwiza.svg'
import rizaldyImage from '../assets/images/faculty/rizaldy.svg'
import logoOutline from '../assets/images/com-outline.svg'
import bottomImage from '../assets/images/infirm-building.jpg'

// Components
import Message from '../components/Message'
import OrgChart from '../components/OrgChart'
import Highlights from '../components/Highlights'
import Faculties from '../components/Faculties'
import Lecturers from '../components/Lecturers'


const Faculty = () => {
  return (
    <main id="faculty-content">
        <section className="hero-section">
            <h1 className="page-header">Faculty</h1>
            <ul className="faculty-list">
                <li id="romeo" className="faculty-item">
                    <img src={romeoImage} alt="romeo" className="faculty-image" />
                    <span className="faculty-name">Dr. Romeo Teves<br/><em>Section Head, Pathology</em></span>
                </li>
                <li id="eva" className="faculty-item">
                    <img src={evaImage} alt="eva" className="faculty-image" />
                    <span className="faculty-name">Dr. Eva Hormigos<br/><em>Section Head, Family and Community Medicine</em></span>
                </li>
                <li id="jocelyn"  className="faculty-item">
                    <img src={jocelynImage} alt="jocelyn" className="faculty-image" />
                    <span className="faculty-name">Dr. Jocelyn Frial<br/><em>Chairperson, Clinical Sciences</em></span>
                </li>
                <li id="analyza" className="faculty-item">
                    <img src={analyzaImage} alt="analyza" className="faculty-image" />
                    <span className="faculty-name">Dr. Analyza Galia-Gabuay<br/><em>Associate Dean</em></span>
                </li>
                <li id="edwin" className="faculty-item">
                    <img src={edwinImage} alt="edwin" className="faculty-image" />
                    <span style={{display: 'none'}}>This asswipe don't respect his employees</span>
                    <span className="faculty-name">Dr. Edwin Alconcel<br/><em>College Dean</em></span>
                </li>
                <li id="shilrose" className="faculty-item">
                    <img src={shilroseImage} alt="shilrose" className="faculty-image" />
                    <span className="faculty-name">Dr. Shilrose Saldivia<br/><em>Chairperson, Basic Sciences</em></span>
                </li>
                <li id="vien" className="faculty-item">
                    <img src={vienImage} alt="vien" className="faculty-image" />
                    <span className="faculty-name">Dr. Vivien Mina<br/><em>Head, Medical Education Unit</em></span>
                </li>
                <li id="darwiza" className="faculty-item">
                    <img src={darwizaImage} alt="darwiza" className="faculty-image" />
                    <span className="faculty-name">Dr. Darwiza Guiomala<br/><em>Section Head, OB-Gyne</em></span>
                </li>
                <li id="rizaldy" className="faculty-item">
                    <img src={rizaldyImage} alt="rizaldy" className="faculty-image" />
                    <span className="faculty-name">Dr. Rizaldy Nolasco<br/><em>Section Head, Surgery</em></span>
                </li>
            </ul>
        </section>
        <section id="mission-vision" className="mission-vision-section">
            <div className="layout-container">
                <div className="content">
                    <div className="mission">
                        <h2>Mission</h2>
                        <p>
                            MSU General Santos City College of Medicine will become 
                            a globally competitive medical institution promoting peace 
                            and development in Southern Mindanao by improving the health condition of the community.
                        </p>
                    </div>
                    <div className="vision">
                        <h2>Vision</h2>
                        <p>
                            MSU General Santos City College of Medicine will
                            provide competent, excellent, compassionate, humane 
                            physicians engaged in clinical, academic, research, 
                            and primary care dedicated to improving the health status 
                            and promote peace in SOCCSKARGEN area regardless of religion, social status, and ethnicity. 
                        </p>
                    </div>
                </div>
                <div className="logo-group">
                    <img className="logo-img" src={logoOutline} alt="com logo" />
                </div>
            </div>
        </section>
        <Message />
        <OrgChart />
        <Highlights />
        <Faculties />
        <Lecturers />
        <img className="bottom-img" aria-hidden="true" src={bottomImage} alt="bottom image" />
    </main>
  )
}

export default Faculty
