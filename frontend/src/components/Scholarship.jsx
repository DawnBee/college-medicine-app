// Asset Imports
import scholarOverviewImage from '../assets/images/scholar-overview.jfif'

const Scholarship = () => {
  return (
    <section id="scholarship" className="scholarship-section">
        <div class="layout-container">
            <div className="content">
                <div className="header">
                    <h2>Scholarship and Financial Aid</h2>
                </div>
                <div class="intro">
                    <h3>Applying for Aid</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, nemo explicabo.</p>
                </div>
                <div className="req-container">
                    <ul class="req-list">
                        <li class="req-item"><i className="fa-regular fa-clipboard"/>Birth Certificate</li>
                        <li class="req-item"><i className="fa-regular fa-clipboard"/>GWA</li>
                        <li class="req-item"><i className="fa-regular fa-clipboard"/>Good Moral</li>
                        <li class="req-item"><i className="fa-regular fa-clipboard"/>Residency</li>
                    </ul>
                    <ul class="req-list">
                        <li class="req-item"><i className="fa-regular fa-clipboard"/>Certificate from NCIP or OMA</li>
                        <li class="req-item"><i className="fa-regular fa-clipboard"/>Certified True Copy of NMAT Result</li>
                        <li class="req-item"><i className="fa-regular fa-clipboard"/>Income Tax Return of Parents or Guardian</li>
                        <li class="req-item"><i className="fa-regular fa-clipboard"/>Affidavit (COM Office)</li>
                    </ul>                
                </div>
            </div>
            <aside className="overview-sidebar">
                <img src={scholarOverviewImage} alt="overview image" />
                <div className="text-group">
                    <h3>Overview</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Cupiditate laudantium veritatis debitis, iste sapiente fugit, 
                        optio animi possimus, deserunt doloribus provident assumenda 
                        officiis inventore quam molestias error. Vero, velit sed!
                    </p>
                </div>
            </aside>
        </div>
    </section>
  )
}

export default Scholarship
