
const Footer = () => {
  return (
    <footer id="footer">
        <span className="broad-style" aria-hidden="true"></span>
        <span className="narrow-style" aria-hidden="true"></span>
        <section className="contact-copyright-info">
            <div className="social-media-links">
                <h3>Connect with us</h3>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-viber"></i>
                <i className="fa-brands fa-facebook-messenger"></i>
            </div>
            <div className="bot-left-group">
                <div className="footer-logo">
                    <h3>College of Medicine</h3>
                    <p>Mindanao State University <br/>G.S.C</p>
                </div>
                <ul className="address-group">
                    <li className="address-item">
                        <i className="fa-solid fa-location-dot"></i>
                        <p>Jose P. Laurel St., General Santos City</p>
                    </li>
                    <li className="address-item">
                        <i className="fa-solid fa-phone"></i>
                        <p>0998-576-1336</p>
                    </li>
                </ul>
            </div>
            <p className="copyright-info">&copy; 2024 College of Medicine, Mindanao State University. All rights reserved</p>
        </section>
    </footer>    
  )
}

export default Footer
