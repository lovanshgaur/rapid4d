import "./Card.css";
const Card = ({ character }) => {
  return (
    <>
      <div className="card" style={{ "--accent": character.color }}>
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
            <img src={character.avatar} alt={character.name} />
          </div>
        </div>
        <div className="identity">
          <p className="role">{character.role}</p>
          <h1>{character.name}</h1>
          <p className="tagline">{character.tagline}</p>
        </div>
        <div className="stats-wrapper">
          <div className="stats">
            <div className="stat">
              <span className="value">{character.stats.level}</span>
              <span className="label">Level</span>
            </div>
            <div className="stat">
              <span className="value">{character.stats.stories}</span>
              <span className="label">Stories</span>
            </div>
            <div className="stat">
              <span className="value">{character.stats.followers}</span>
              <span className="label">Followers</span>
            </div>
          </div>
          <div className="tags">
            {character.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="ghost-number">01</div>
      </div>
    </>
  );
};

export default Card;
