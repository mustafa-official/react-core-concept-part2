export default function Post({ allPost }) {
  const { title, userId, id, body } = allPost;
  return (
    <div className="posts">
      <h3>Title: {title}</h3>
      <p>User Id: {userId}</p>
      <p>Post Id: {id}</p>
      <p>Body: {body}</p>
    </div>
  );
}
