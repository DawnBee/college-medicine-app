// Components
import AlumniCards from '../components/AlumniCards'
import Sidebar from '../components/Sidebar'
import Gallery from '../components/Gallery'
import Spotlight from '../components/Spotlight'
import AlumniSearch from '../components/AlumniSearch'

const Alumni = () => {
  return (
    <main id="alumni-content">
        <section className="hero-section">
            <div className="hero-overlay">
                <h1 className="page-header">Alumni Tracker</h1>
                <p>Connect, Engage, Reconnect: Stay Linked with your Alma Mater</p>
            </div>
        </section>
        <AlumniSearch />
        <div className="grid-section-group layout-container">
            <Spotlight />
            <Gallery />
            <AlumniCards />
            <Sidebar />
        </div>
        <span style={{display: 'none'}}>Most toxic working environment I've ever been!</span>
    </main>
  )
}

export default Alumni
