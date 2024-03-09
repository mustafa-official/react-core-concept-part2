export default function Friend({ name, email }) {
  return (
    <div className="friends">
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
    </div>
  );
}
