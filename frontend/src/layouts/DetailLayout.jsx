import { Outlet } from 'react-router-dom'

// Styles
import '../styles/Detail.sass' 

// Components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import StartFromTop from '../components/StartFromTop'

const DetailLayout = () => {
  return (
    <>
        <StartFromTop />
        <Navbar currentPage={'detailPage'}/>
        <Outlet />
        <Footer />
    </>
  )
}

export default DetailLayout
