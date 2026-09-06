import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../store/postsSlice.js";

function PostList({ setEditingPost }) {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  return (
    <div className="list-section">
      <h3>Posts</h3>
      {posts.length === 0 && <p className="empty">No posts yet.</p>}
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.id} className="post-item">
            <div className="post-info">
              <h4>{post.title}</h4>
              <p>{post.content}</p>
              <span className="platform-tag">{post.platform}</span>
            </div>
            <div className="post-actions">
              <button className="edit-btn" onClick={() => setEditingPost(post)}>
                Edit
              </button>
              <button
                className="delete-btn"
                onClick={() => dispatch(deletePost(post.id))}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
