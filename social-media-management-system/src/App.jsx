import { useState } from "react";
import Dashboard from "./components/Dashboard.jsx";
import PostForm from "./components/PostForm.jsx";
import PostList from "./components/PostList.jsx";
import PlatformForm from "./components/PlatformForm.jsx";
import PlatformList from "./components/PlatformList.jsx";
import "./App.css";

function App() {
  // Tracks which post (if any) is currently being edited
  const [editingPost, setEditingPost] = useState(null);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Social Media Management System</h1>
        <p>Manage your posts and platforms with Redux Toolkit</p>
      </header>

      <Dashboard />

      <main className="main-grid">
        <section className="column">
          <PostForm editingPost={editingPost} setEditingPost={setEditingPost} />
          <PostList setEditingPost={setEditingPost} />
        </section>

        <section className="column">
          <PlatformForm />
          <PlatformList />
        </section>
      </main>
    </div>
  );
}

export default App;
