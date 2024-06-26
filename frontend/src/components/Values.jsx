// Asset Imports
import coreValueImage from '../assets/images/about/values.jpg'

const Values = () => {
  return (
    <section id="values" className="core-values-section">
        <div className="layout-container">
            <h2>College Core Values</h2>
            <div className="content">
                <img src={coreValueImage} alt="core values image" />
                <ul className="value-list">
                    <li className="value-item">
                        <h3>Competence</h3>
                        <p>Skilled and capable, demonstrating proficiency and effectiveness.</p>
                    </li>
                    <li className="value-item">
                        <h3>Excellence</h3>
                        <p>Outstanding quality, surpassing ordinary standards and expectations.</p>
                    </li>
                    <li className="value-item">
                        <h3>Compassion</h3>
                        <p>Deep empathy and kindness, driven to help others in need.</p>
                    </li>
                    <li className="value-item">
                        <h3>Humane</h3>
                        <p>Treating others with respect, care, and compassion, recognizing their dignity.</p>
                    </li>                    
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Values
