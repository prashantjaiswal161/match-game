import './index.css'

const Header = props => {
  const {score, timer} = props
  return (
    <nav>
      <div className="nav-content">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
        <ul className="nav-menu">
          <li>
            <p>Score:{score}</p>
          </li>
          <li>
            <div className="timer-content">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
                className="timer-logo"
              />
              <p>{timer} sec</p>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
