import { useEffect, useState } from "react";
import "./Friends.css";
import Friend from "./Friend";
export default function Friends() {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);
  return (
    <div className="friends">
      <h3>Friends {friends.length}</h3>
      {friends.map((f) => (
        <Friend name={f.name} email={f.email}></Friend>
      ))}
    </div>
  );
}
