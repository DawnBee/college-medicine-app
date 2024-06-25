// Asset Imports
import scholarOverviewImage from '../assets/images/admission/scholarship.jpg'

const Scholarship = () => {
  return (
    <section id="scholarship" className="scholarship-section">
        <div className="layout-container">
            <div className="content">
                <div className="header">
                    <h2>CHED Medical Scholarship and Return Service Program (MSRS)</h2>
                </div>
                <div className="intro">
                    <h3>Requirements</h3>
                    <p>Please submit the following documents:</p>
                </div>
                <div className="req-container">
                    <ul className="req-list">
                        <li className="req-item"><i className="fa-regular fa-clipboard"/>Birth Certificate</li>
                        <li className="req-item"><i className="fa-regular fa-clipboard"/>GWA</li>
                        <li className="req-item"><i className="fa-regular fa-clipboard"/>Good Moral</li>
                        <li className="req-item"><i className="fa-regular fa-clipboard"/>Residency</li>
                    </ul>
                    <ul className="req-list">
                        <li className="req-item"><i className="fa-regular fa-clipboard"/>Certificate from NCIP or OMA</li>
                        <li className="req-item"><i className="fa-regular fa-clipboard"/>Certified True Copy of NMAT Result</li>
                        <li className="req-item"><i className="fa-regular fa-clipboard"/>Income Tax Return of Parents or Guardian</li>
                        <li className="req-item"><i className="fa-regular fa-clipboard"/>Affidavit (COM Office)</li>
                    </ul>                
                </div>
            </div>
            <aside className="overview-sidebar">
                <img src={scholarOverviewImage} alt="overview image" />
                <div className="text-group">
                    <h3>Overview</h3>
                    <p>
                        The MSRS program aims to provide opportunities to deserving Filipino students 
                        willing to fulfill the mandatory return service, prioritizing applicants
                        residing in areas without government physicians, Geographically isolated and 
                        Disadvantaged Areas (GIDA), or among the top twenty (20%) provinces and/or municipalities 
                        as identified by the PSA. 
                    </p>
                </div>
            </aside>
        </div>
    </section>
  )
}

export default Scholarship
