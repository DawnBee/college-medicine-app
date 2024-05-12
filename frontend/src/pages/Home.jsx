// Components
import Announcements from '../components/Announcements'
import EventCards from '../components/EventCards'
import ParallaxBanner from '../components/ParallaxBanner'
import Publications from '../components/Publications'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <main id="home-content">
        <ParallaxBanner />
        <Announcements />
        <EventCards />
        <Publications />    
        <Testimonials />
    </main>
  )
}

export default Home