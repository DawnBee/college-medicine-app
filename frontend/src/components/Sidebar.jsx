// Components
import UpcomingEvents from './UpcomingEvents'
import News from './News'

const Sidebar = () => {
  return (
    <aside className="sidebar">
        <News />
        < UpcomingEvents />
    </aside>
  )
}

export default Sidebar
