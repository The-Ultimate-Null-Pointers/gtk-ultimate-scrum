function Members() {
  return (
    
    <div className="members-list">
      <header>
        <h1>Meet Our ULTIMATE Scrum Squad</h1>
      </header>
      {/* Beth's card */}
      <div className="member-card">
        <h2>Bethany Feddes</h2>
        <p>Junior, Computer Science + Data Science major, THE Ultimate Null Pointer</p>
        <a href="https://bethfeddes.github.io/getting-to-know/" target="_blank">Get to Know Beth!</a>
      </div>

    {/* Add your info here guys */}
      <div className="member-card">
        <h2>Name</h2>
        <p>Short bio</p>
        <a href="#" target="_blank">Get to Know Name, put your link here</a>
      </div>

      <div className="member-card">
        <h2>Name</h2>
        <p>Short bio</p>
        <a href="#" target="_blank">Get to Know Name, put your link here</a>
      </div>

      <div className="member-card">
        <h2>Name</h2>
        <p>Short bio</p>
        <a href="#" target="_blank">Get to Know Name, put your link here</a>
      </div>

      
    </div>

    
  );
}

export default Members;