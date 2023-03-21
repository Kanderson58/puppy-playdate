import "./Header.css"

const Header = () => {
  return (
    <nav>
      <h1>PUPPY PLAYDATE <span className="tm">&reg;</span></h1>
      <div className="nav-buttons">
        <button><span className="material-symbols-outlined">location_on</span>Map To Park</button>
        <button><span className="material-symbols-outlined">rule</span>Park Rules</button>
        <button className="last"><span className="material-symbols-outlined">today</span>Event Calendar</button>
      </div>
    </nav>
  )
}

export default Header