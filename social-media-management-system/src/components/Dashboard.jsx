import { useSelector } from "react-redux";

function Dashboard() {
  // useSelector reads data straight from the Redux store
  const totalPosts = useSelector((state) => state.posts.length);
  const totalPlatforms = useSelector((state) => state.platforms.length);

  return (
    <section className="dashboard">
      <div className="stat-card">
        <h2>{totalPosts}</h2>
        <p>Total Posts</p>
      </div>
      <div className="stat-card">
        <h2>{totalPlatforms}</h2>
        <p>Total Platforms</p>
      </div>
    </section>
  );
}

export default Dashboard;
