const requirements = [
    {
        title: "Application for Admission",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quae asperiores assumenda qui nobis. Alias."
    },
    {
        title: "Birth Certificate (PSA)",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quae asperiores assumenda qui nobis. Alias."
    },
    {
        title: "Certificate from NCIP or OMA (for IPs and Muslims)",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quae asperiores assumenda qui nobis. Alias."
    },
    {
        title: "Two(2) Certificates of Good Moral Character",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quae asperiores assumenda qui nobis. Alias."
    },
    {
        title: "Certificate of Grade Point Average",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quae asperiores assumenda qui nobis. Alias."
    },
    {
        title: "Official Transcript of Records (TOR)",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quae asperiores assumenda qui nobis. Alias."
    },
    {
        title: "Certified True Copy of Diploma",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quae asperiores assumenda qui nobis. Alias."
    },
    {
        title: "Certified True Copy of NMAT Result",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quae asperiores assumenda qui nobis. Alias."
    },
    {
        title: "Income Tax Return of Parents or Guardian",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quae asperiores assumenda qui nobis. Alias."
    },
    {
        title: "Honorable Dismissal",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quae asperiores assumenda qui nobis. Alias."
    },                      
                          
]

const Requirements = () => {
  return (
    <section id="requirement-section" className="requirement-section">
        <div className="layout-container">
            <h2 className="section-header">Admission Requirements</h2>
            <ul className="require-list">
                {requirements.map(( requirement, index) => (
                    <li key={index} className="require-item">
                        <i className="fa-regular fa-clipboard"></i>
                        <div className="content">
                            <h3 className="require-header">{requirement.title}</h3>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </section>
  )
}

export default Requirements
