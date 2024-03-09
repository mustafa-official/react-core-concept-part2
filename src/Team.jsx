import { useState } from "react";
export default function Team() {
  const teamStyle = {
    border: "2px solid hotpink",
    borderRadius: "15px",
    margin: "15px",
    padding: "15px",
  };

  const [team, setTeam] = useState(11);
  const handleAdd = () => {
    const newTeam = team + 1;
    setTeam(newTeam);
  };
  const handleRemove = () => {
    setTeam(team - 1);
  };
  return (
    <div style={teamStyle}>
      <h3>Players: {team}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}
