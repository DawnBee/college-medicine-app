// Asset Imports
import collegeGrounds from '../assets/images/library-2.jpg'
import ShowMoreText from "react-show-more-text"

const History = () => {
  return (
    <section id="history" className="history-section">
        <div className="layout-container">
            <div className="content">
                <img src={collegeGrounds} alt="college history image" />
                <div className="text-group">
                    <h2>A Brief history of the College</h2>
                    <ShowMoreText
                        lines={5}
                        more="show more"
                        less="show less"
                        className="text"
                        anchorClass="show-more"                    
                    >                        
                        <p>
                            The Mindanao State University General Santos City opened Region 12's
                            first state-funded medical school in 2021. The MSU General Santos
                            College of Medicine was established by House Bill 9521 of the 18th
                            Congress of the Philippines. The establishment of the MSU Gensan 
                            College of Medicine was realized as early as the administration 
                            of the 5th Chancellor, Atty. Abdulrahman Canacan. The late Chancellor
                            Anshari Ali accomplished this objective in later years.
                        </p>
                        <p>
                            The first medical students were screened and accepted in January 2022. The first group 
                            of 53 medical students began virtual lessons on February 7, 2022, following local IATF 
                            COVID pandemic requirements. The Association of Philippine Medical College Inc. accepted 
                            MSU-GSC College of Medicine membership on September 27,2022.
                        </p>
                        <p>
                            The Library and Infirmary groundbreaking took place on May 20, 2021. The independent 
                            College of Medicine's P20 million and P17 million facility development budgets were sponsored 
                            by Hon. Shirlyn Banas-Nograles' Congressional Office. Chancellor JD Usman D. Aragasi, 
                            DPWH Region 12, Hon. Loreto B. Acharon, and MSU officials inaugurated the two buildings on March 27, 2023.
                        </p>
                    </ShowMoreText>
                </div>
            </div>
        </div>
    </section>
  )
}

export default History
