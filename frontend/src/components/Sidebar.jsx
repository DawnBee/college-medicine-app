// Components
import Activities from './Activities'
import News from './News'

const Sidebar = () => {
  return (
    <aside className="sidebar">
        <News />
        <Activities />
    </aside>
  )
}

export default Sidebar
