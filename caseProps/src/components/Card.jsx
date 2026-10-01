import "./Card.css"
const Card = (props) => {
  console.log(props);
  return (
    <>
        <div className="card">
          <div className="accent-line"></div>
          <div className="top">
            <span className="number">No.01/11</span>
            <span className="status">
              <i className="status-dot"></i>active
            </span>
          </div>
          <div className="profile-area">
            <div className="profile-ring"></div>
            <div className="profile-ring-2"></div>
            <span className="orbit-dot"></span>
            <div className="profile">
              <img
                src="https://api.dicebear.com/9.x/personas/svg?seed=Aria"
                alt="Aria Morgan"
              />
            </div>
          </div>
          <div className="identity">
            <p className="role">Strtagey</p>
            <h1>Aria Morgan</h1>
            <p className="tagline">"Always"</p>
          </div>
          <div className="stats-wrapper">
            <div className="stats">
              <div className="stat">
                <span className="value">25</span>
                <span className="label">Level</span>
              </div>
              <div className="stat">
                <span className="value">25</span>
                <span className="label">Level</span>
              </div>
              <div className="stat">
                <span className="value">25</span>
                <span className="label">Level</span>
              </div>
            </div>
            <div className="tags">
              <span class="tag">Strategist</span>
              <span class="tag">Leader</span>
              <span class="tag">Calm</span>
            </div>
          </div>
          <div className="ghost-number">01</div>
        </div>
    </>
  );
};

export default Card;
