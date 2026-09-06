import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, editPost } from "../store/postsSlice.js";

function PostForm({ editingPost, setEditingPost }) {
  const platforms = useSelector((state) => state.platforms);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [platform, setPlatform] = useState("");

  // When a post is selected for editing, fill the form with its data
  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title);
      setContent(editingPost.content);
      setPlatform(editingPost.platform);
    }
  }, [editingPost]);

  const resetForm = () => {
    setTitle("");
    setContent("");
    setPlatform("");
    setEditingPost(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim() || !platform) return;

    if (editingPost) {
      dispatch(editPost({ id: editingPost.id, title, content, platform }));
    } else {
      dispatch(addPost(title, content, platform));
    }
    resetForm();
  };

  return (
    <form className="card-form" onSubmit={handleSubmit}>
      <h3>{editingPost ? "Edit Post" : "Add Post"}</h3>
      <input
        type="text"
        placeholder="Post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Post content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
        <option value="">Select platform</option>
        {platforms.map((p) => (
          <option key={p.id} value={p.name}>
            {p.name}
          </option>
        ))}
      </select>

      <div className="form-actions">
        <button type="submit">{editingPost ? "Update Post" : "Add Post"}</button>
        {editingPost && (
          <button type="button" className="cancel-btn" onClick={resetForm}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default PostForm;
