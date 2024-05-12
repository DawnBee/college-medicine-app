import { Outlet } from 'react-router-dom'

// Components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import StartFromTop from '../components/StartFromTop'

const MainLayout = () => {
  return (
    <>
      <div className="scroll-btn-container" style={{ position: 'relative' }}>
        <StartFromTop />
        <Navbar />
        <Outlet />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  )
}

export default MainLayout
