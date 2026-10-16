import TeamPhoto from "../components/TeamPhoto";


function Home() {
  return (
    <div className="home-card">
      <h2>Home</h2>
      <div className="team-photo-container">
        <TeamPhoto />
      </div>
      

      <p>Welcome to our Scrum team's website.</p>
    </div>
  );
}

export default Home;