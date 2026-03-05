import './App.css';
import teamData from './CollegeBasketballTeams.json';

function Welcome() {
  return <h1>March Madness Team Info Page</h1>;
}

function Team({
  school,
  name,
  city,
  state,
}: {
  school: string;
  name: string;
  city: string;
  state: string;
}) {
  return (
    <>
      <img />
      <h2>{school}</h2>
      <h3>Mascot: {name}</h3>
      <h3>
        {city}, {state}
      </h3>
    </>
  );
}

function TeamNames({ name }: { name: string }) {
  return (
    <>
      <span
        style={{
          display: 'inline-block',
          whiteSpace: 'nowrap',
          marginRight: '20px',
          marginBottom: '10px',
        }}
      >
        {name}&nbsp;&nbsp;&nbsp;&nbsp;
      </span>
    </>
  );
}

function TeamList() {
  return (
    <>
      {teamData.teams.map((singleTeam) => (
        <Team {...singleTeam} />
      ))}
      <Team {...teamData.teams[0]} />
    </>
  );
}

function TeamNameList() {
  return (
    <>
      {teamData.teams.map((singleTeam) => (
        <TeamNames {...singleTeam} />
      ))}
      <TeamNames {...teamData.teams[0]} />
    </>
  );
}

function App() {
  return (
    <>
      <Welcome />
      <TeamNameList />
      <TeamList />
    </>
  );
}

export default App;
