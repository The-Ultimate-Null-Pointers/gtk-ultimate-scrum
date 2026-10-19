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
        <h2>Troy Naill</h2>
        <p>Junior, Computer science major</p>
        <a href="https://troyanaill.github.io/getting-to-know-each-other/" target="_blank">Get to Know Troy!</a>
      </div>

      <div className="member-card">
        <h2>Michael Mihailov</h2>
        <p>Senior, Computer Science major, lives at the following address: 0x00000000</p>
        <a href="https://michael-mihailov.github.io/CPSC44000-get-to-know-me/" target="_blank">Get to Know Michael!</a>
      </div>

      
    </div>

    
  );
}

export default Members;