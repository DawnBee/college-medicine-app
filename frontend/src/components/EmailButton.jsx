const EmailButton = () => {
    const handleClick = () => {
        const email = 'college-of-medicine@msugensan.edu.ph'
        const subject = 'College Admission Inquiry'
        
        // Construct the Gmail compose URL
        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}`
        
        // Open the link in a new tab
        window.open(gmailLink, '_blank')
    }
    return (
        <button onClick={handleClick} className="hero-cta">
            Contact Us
        </button>
    )
}

export default EmailButton