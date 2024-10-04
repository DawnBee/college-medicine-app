// Components
import OfficerCards from '../components/OfficerCards'
import Sidebar from '../components/Sidebar'
import Gallery from '../components/Gallery'
import Spotlight from '../components/Spotlight'
import OfficerSearch from '../components/OfficerSearch'

const Others = () => {
  return (
    <main id="other-content">
        <section className="hero-section">
            <div className="hero-overlay">
                <h1 className="page-header">Community Extension</h1>
                <p>Bridging Education and Community for Lasting Impact</p>
            </div>
        </section>
        <OfficerSearch />
        <div className="grid-section-group layout-container">
            <Spotlight />
            <Gallery />
            <OfficerCards />
            <Sidebar />
        </div>
    </main>
  )
}

export default Others
