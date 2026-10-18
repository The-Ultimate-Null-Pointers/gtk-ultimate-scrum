import TeamPhoto from "../components/TeamPhoto"


function Home() {
  return (
    <div className="home-page">
      <div className="home-card">
        <h1>The ULTIMATE Null Pointers</h1>
        <div className="team-photo-container">
          <TeamPhoto />
        </div>
        

        <p>Greetings! We are the greatest Scrum team to grace Lewis University! We made this website in React just so that we could show off our greatness! Above, you can see our our <i>100% unedited*</i> team photo with Professor Pouge himself!</p>
      </div>

      <div className="disclaimer">
        {"* if(funny) { labGrade += 10 }"}
      </div>
    </div>
  )
}

export default Home