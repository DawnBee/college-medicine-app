import { useState, useEffect } from 'react'
import styled from 'styled-components'

const ScrollTopButton = styled.button`
  right: 3%;
  color: #fff;
  width: 50px;
  border: none;
  bottom: 10vh;
  z-index: 2000;
  display: grid;
  aspect-ratio: 1;
  position: fixed;
  cursor: pointer;
  font-size: 1.3rem;
  place-items: center;
  background: #0C4F3B;
  border-radius: 100px;
  transition: opacity 0.5s ease;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
`;

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        const toggleVisibility = () => {
            // Observes if the user scrolls atleast 30% of the current page
            if (window.scrollY > document.body.scrollHeight * 0.3) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    return (
        <ScrollTopButton onClick={scrollToTop} className="scroll-top-btn" style={{ opacity: isVisible ? '1': '0'}}>
            <i className="fa fa-chevron-up"></i>
        </ScrollTopButton>
    )
}

export default ScrollToTop