import { useState, useEffect } from 'react'
import { Parallax, Background } from 'react-parallax'

// Asset Imports
import heroVideo from '../assets/videos/msu-video.mp4'
import overlayLogo from '../assets/images/overlay-logo.svg'
import bannerImage from '../assets/images/banner-img.png'

const ParallaxBanner = () => {
  const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 920px)').matches)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia('(max-width: 920px)').matches)
    }

    // Captures the screen size and sets the 'isMobile' hook to 'true' if it matches the specified value.
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      {/* Render Parallax effect on larger screens */}
      {!isMobile && (
        <>
          <section className="hero-section">
            <Parallax strength={600}>
              <Background>
                <video className="bg-video" autoPlay muted loop>
                  <source src={heroVideo} type="video/mp4" />
                </video>
                <img className="hero-overlay" src={overlayLogo} alt="hero image" />
              </Background>
              <div className="bg-placeholder" draggable="false" style={{ height: '120vh', background: 'transparent' }}></div>
            </Parallax>
          </section>
          <div className="banner-container">
            <img className="banner-image" src={bannerImage} alt="banner image" draggable="false" />
          </div>
        </>
      )}

      {/* Render hero-section without 'Parallax effect' on smaller screens */}
      {isMobile && (
        <>
          <section className="hero-section">
            <video className="bg-video" autoPlay muted loop>
              <source src={heroVideo} type="video/mp4"/>
            </video>
            <img className="hero-overlay" src={overlayLogo} alt="hero image"/>
          </section>
          <div className="banner-container">
            <img className="banner-image" src={bannerImage} alt="banner image" draggable="false" />
          </div>
        </>
      )}
    </>
  )
}

export default ParallaxBanner;
