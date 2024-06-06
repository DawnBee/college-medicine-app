// Components
import CommunityActivities from './CommunityActivities'
import News from './News'

const Sidebar = () => {
  return (
    <aside className="sidebar">
        <News />
        <CommunityActivities />
    </aside>
  )
}

export default Sidebar
