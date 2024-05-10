// Components
import Carousel from '../components/Carousel'
import EventCards from '../components/EventCards'
import ParallaxBanner from '../components/ParallaxBanner'
import Publications from '../components/Publications'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <main id="home-content">
        <ParallaxBanner />
        <Carousel />
        <EventCards />
        <Publications />    
        <Testimonials />
    </main>
  )
}

export default Home